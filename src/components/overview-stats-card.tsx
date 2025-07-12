import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Activity, ShieldCheck } from "lucide-react"
import { GetSystemOverviewOutput } from "@/ai/flows/get-system-overview";

interface OverviewStatsCardProps {
  overview: GetSystemOverviewOutput;
}

export function OverviewStatsCard({ overview }: OverviewStatsCardProps) {
  const { simulatedThreats, systemIntegrity } = overview;
  const integrityValue = parseFloat(systemIntegrity);
  const integrityColor = integrityValue > 99.5 ? "text-emerald-500" : integrityValue > 98.5 ? "text-amber-500" : "text-red-500";

  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle className="font-headline">System Overview</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          High-level metrics of the entire security posture.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-center space-x-4 rounded-md border p-4">
            <Activity className="h-6 w-6 text-primary" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Simulated Threats</p>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{simulatedThreats}</span> active scenarios
              </p>
            </div>
        </div>
        <div className="flex items-center space-x-4 rounded-md border p-4">
            <ShieldCheck className={`h-6 w-6 ${integrityColor}`} />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">System Integrity</p>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{systemIntegrity}</span> uptime
              </p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
