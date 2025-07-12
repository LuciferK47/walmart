import { FileUp, Search, Shield, ShieldAlert, ShieldCheck, ShieldQuestion } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const vendors = [
  {
    name: "Stripe",
    service: "Payment Gateway",
    status: "Verified",
    riskScore: 8,
    lastAudit: "2023-11-15",
  },
  {
    name: "Twilio",
    service: "Communications API",
    status: "Verified",
    riskScore: 12,
    lastAudit: "2023-10-20",
  },
    {
    name: "AWS S3",
    service: "Cloud Storage",
    status: "Verified",
    riskScore: 5,
    lastAudit: "2023-12-01",
  },
  {
    name: "Mapbox",
    service: "Geolocation API",
    status: "Monitoring",
    riskScore: 45,
    lastAudit: "2023-09-05",
  },
  {
    name: "OpenAI",
    service: "AI Services",
    status: "Restricted",
    riskScore: 78,
    lastAudit: "2023-11-28",
  },
  {
    name: "Sentry",
    service: "Error Tracking",
    status: "Verified",
    riskScore: 15,
    lastAudit: "2023-11-22",
  },
];

const StatusIcon = ({ status }: { status: string }) => {
    switch(status) {
        case "Verified": return <ShieldCheck className="h-4 w-4 text-emerald-500" />;
        case "Monitoring": return <ShieldAlert className="h-4 w-4 text-amber-500" />;
        case "Restricted": return <ShieldAlert className="h-4 w-4 text-red-500" />;
        default: return <ShieldQuestion className="h-4 w-4 text-muted-foreground" />;
    }
}

export default function SupplyChainPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="font-headline flex items-center gap-2">
              <Shield /> Supply Chain Security
            </CardTitle>
            <CardDescription>
              Monitor and manage security posture of third-party vendors.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
             <div className="relative flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search vendors..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
            </div>
            <Button size="sm" variant="outline" className="h-9 gap-1">
              <FileUp className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vendor</TableHead>
                <TableHead className="hidden sm:table-cell">Service</TableHead>
                <TableHead className="hidden md:table-cell">Status</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead className="text-right hidden sm:table-cell">Last Audit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendors.map((vendor) => (
                <TableRow key={vendor.name}>
                  <TableCell>
                    <div className="font-medium">{vendor.name}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{vendor.service}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant={vendor.status === 'Verified' ? "secondary" : vendor.status === 'Monitoring' ? 'default' : 'destructive'} className="gap-1 pl-2">
                        <StatusIcon status={vendor.status} />
                        {vendor.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={vendor.riskScore} className="h-2 w-24" />
                      <span>{vendor.riskScore}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right hidden sm:table-cell">{vendor.lastAudit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
