import { Activity, ShieldCheck, AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Pie, PieChart, Cell } from "recharts";

const networkTrafficData = Array.from({ length: 30 }, (_, i) => ({
  date: `2023-11-${String(i + 1).padStart(2, '0')}`,
  in: Math.floor(Math.random() * 2000 + 1000),
  out: Math.floor(Math.random() * 1500 + 800),
}));

const trafficChartConfig = {
  in: {
    label: "Incoming",
    color: "hsl(var(--primary))",
  },
  out: {
    label: "Outgoing",
    color: "hsl(var(--muted-foreground))",
  },
} satisfies ChartConfig;

const alertData = [
    { name: 'Low Severity', value: 400, fill: 'hsl(var(--chart-2))' },
    { name: 'Medium Severity', value: 300, fill: 'hsl(var(--chart-3))' },
    { name: 'High Severity', value: 150, fill: 'hsl(var(--chart-5))' },
    { name: 'Critical', value: 50, fill: 'hsl(var(--destructive))' },
];

export default function AnalyticsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">900</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Uptime</CardTitle>
                <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">99.92%</div>
                <p className="text-xs text-muted-foreground">+0.02% from last month</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mean Time to Detect</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">12.5 min</div>
                <p className="text-xs text-muted-foreground">-5% from last month</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Simulations</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">Running across all systems</p>
            </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Network Traffic (Last 30 Days)</CardTitle>
            <CardDescription>
              Overview of incoming and outgoing network traffic.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={trafficChartConfig} className="h-72 w-full">
              <ResponsiveContainer>
                <BarChart data={networkTrafficData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(5)}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    unit="GB"
                    tickFormatter={(value) => `${Number(value) / 1000}`}
                  />
                  <Tooltip
                    cursor={{ fill: 'hsl(var(--muted))' }}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Legend />
                  <Bar
                    dataKey="in"
                    fill="var(--color-in)"
                    radius={4}
                    name="Incoming"
                  />
                  <Bar
                    dataKey="out"
                    fill="var(--color-out)"
                    radius={4}
                    name="Outgoing"
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Alerts by Severity</CardTitle>
            <CardDescription>
              Breakdown of all security alerts generated this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={{}} className="h-72 w-full">
                <ResponsiveContainer>
                    <PieChart>
                        <Tooltip
                            cursor={{ fill: 'hsl(var(--muted))' }}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={alertData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            labelLine={false}
                            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                const RADIAN = Math.PI / 180;
                                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                return (
                                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                                    {`${(percent * 100).toFixed(0)}%`}
                                </text>
                                );
                            }}
                        >
                            {alertData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                         <Legend />
                    </PieChart>
                </ResponsiveContainer>
             </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
