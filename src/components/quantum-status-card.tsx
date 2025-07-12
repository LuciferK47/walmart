import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShieldCheck } from "lucide-react"


export function QuantumStatusCard() {
  return (
    <Card className="relative overflow-hidden bg-emerald-600/10 dark:bg-emerald-800/20 border-emerald-500/50">
      <div className="absolute top-0 right-0 -mr-8 mt-4 h-24 w-24 text-emerald-500/10">
        <ShieldCheck className="h-full w-full" />
      </div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-emerald-800 dark:text-emerald-300">PQC Status</CardTitle>
        <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Active</div>
        <p className="text-xs text-emerald-700/80 dark:text-emerald-400/70">
          Comms secured with CRYSTALS-Kyber
        </p>
      </CardContent>
    </Card>
  )
}
