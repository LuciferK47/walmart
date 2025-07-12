import { OverviewStatsCard } from "@/components/overview-stats-card"
import { QuantumStatusCard } from "@/components/quantum-status-card"
import { ThreatSimulationCard } from "@/components/threat-simulation-card"
import { NetworkActivityCard } from "@/components/network-activity-card"
import { AuditTrailCard } from "@/components/audit-trail-card"
import { AccessControlCard } from "@/components/access-control-card"
import { getSystemOverview } from "@/ai/flows/get-system-overview"

export default async function DashboardPage() {
  const overview = await getSystemOverview();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <OverviewStatsCard overview={overview} />
        <QuantumStatusCard />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
              <ThreatSimulationCard />
              <NetworkActivityCard />
          </div>
          <AuditTrailCard />
        </div>
        <AccessControlCard />
      </div>
    </main>
  )
}
