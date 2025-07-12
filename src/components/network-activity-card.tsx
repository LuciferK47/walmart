
"use client"

import * as React from "react"
import { Activity, Bot, Loader2, RefreshCw } from "lucide-react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { runNetworkDataGeneration } from "@/lib/actions"
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const initialData = Array.from({ length: 12 }, (_, i) => ({
    time: `${i * 5}s`,
    in: Math.floor(Math.random() * 200 + 50),
    out: Math.floor(Math.random() * 150 + 50),
}))

const chartConfig = {
    in: {
        label: "Incoming",
        color: "hsl(var(--primary))",
    },
    out: {
        label: "Outgoing",
        color: "hsl(var(--muted-foreground))",
    },
} satisfies ChartConfig

export function NetworkActivityCard() {
    const [data, setData] = React.useState(initialData)
    const [isLoading, setIsLoading] = React.useState(false)
    const [isSimulating, setIsSimulating] = React.useState(false)
    const { toast } = useToast()

    const handleSimulation = async () => {
        setIsLoading(true);
        const result = await runNetworkDataGeneration({
            attackType: "DDoS",
            baseTraffic: data.map(d => d.in)
        });
        setIsLoading(false);

        if (result.error) {
            toast({
                variant: "destructive",
                title: "Simulation Failed",
                description: result.error,
            });
        } else if (result.anomalousData) {
            setIsSimulating(true);
            const anomalyData = result.anomalousData;
            setData(prevData => {
                const newData = [...prevData];
                for(let i = 0; i < Math.min(newData.length, anomalyData.length); i++) {
                    newData[i] = { ...newData[i], in: anomalyData[i] };
                }
                return newData;
            })
        }
    };
    
    const resetSimulation = () => {
        setIsSimulating(false);
        setData(initialData);
    }

    React.useEffect(() => {
        if(isSimulating) return;

        const interval = setInterval(() => {
            setData(prevData => {
                const newData = [...prevData.slice(1), {
                    time: `${parseInt(prevData[prevData.length - 1].time) + 5}s`,
                    in: Math.floor(Math.random() * 200 + 50),
                    out: Math.floor(Math.random() * 150 + 50),
                }]
                return newData;
            })
        }, 5000);
        return () => clearInterval(interval);
    }, [isSimulating]);

  return (
    <Card className="sm:col-span-1">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Activity /> Real-Time Network Activity
        </CardTitle>
        <CardDescription>
          Live traffic monitoring. Simulate an attack to see anomalies.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-in)" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="var(--color-in)" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-out)" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="var(--color-out)" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="time" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} unit="MB/s" />
                    <Tooltip 
                        cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '3 3' }}
                        content={<ChartTooltipContent indicator="dot" />} 
                    />
                    <Area type="monotone" dataKey="in" strokeWidth={2} stroke="var(--color-in)" fill="url(#colorIn)" name="Incoming" />
                    <Area type="monotone" dataKey="out" strokeWidth={2} stroke="var(--color-out)" fill="url(#colorOut)" name="Outgoing" />
                </AreaChart>
            </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
       <CardFooter className="flex justify-end gap-2">
        {isSimulating ? (
            <Button onClick={resetSimulation} variant="outline">
                <RefreshCw /> Reset
            </Button>
        ) : (
            <Button onClick={handleSimulation} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" /> Preparing...
                </>
              ) : (
                <>
                  <Bot /> Simulate Attack
                </>
              )}
            </Button>
        )}
      </CardFooter>
    </Card>
  )
}
