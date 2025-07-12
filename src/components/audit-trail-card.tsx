"use client"

import * as React from "react"
import { BookLock, FileUp } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const initialEvents = [
  { event: "Policy Update", description: "Admin role granted 'decrypt' access", timestamp: "2m ago", tx: "f4a1b2", status: "Verified" },
  { event: "Vendor API Call", description: "Payment Gateway 'Stripe' accessed", timestamp: "5m ago", tx: "e3c9d8", status: "Verified" },
  { event: "AI Threat Detected", description: "Novel phishing pattern detected", timestamp: "12m ago", tx: "b2d7e6", status: "Flagged" },
  { event: "User Authentication", description: "User 'analyst@qs.io' logged in", timestamp: "28m ago", tx: "a1f5c4", status: "Verified" },
  { event: "Data Access", description: "File 'Q4_report.pdf' decrypted by Admin", timestamp: "45m ago", tx: "c9g3h2", status: "Verified" },
];

const newEvents = [
    { event: "Vendor API Call", description: "Shipping API 'FedEx' accessed", tx: "d8h4k1", status: "Verified" },
    { event: "Policy Update", description: "Analyst role access tightened for DB", tx: "j6m2n9", status: "Verified" },
    { event: "System Health Check", description: "Node 'fabric-peer0' responded OK", tx: "p3q7r5", status: "Verified" },
];

export function AuditTrailCard() {
    const [events, setEvents] = React.useState(initialEvents);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const newEvent = { ...newEvents[Math.floor(Math.random() * newEvents.length)], timestamp: 'Just now' };
            setEvents(prevEvents => [newEvent, ...prevEvents].slice(0, 10));
        }, 5000);

        return () => clearInterval(interval);
    }, []);


  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <BookLock /> Decentralized Audit Trail
        </CardTitle>
        <CardDescription>
          Immutable log of all transactions and vendor interactions on Hyperledger Fabric.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Timestamp</TableHead>
              <TableHead className="text-right">TX Hash</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((e, index) => (
                <TableRow key={index} className={index === 0 ? "bg-muted/60" : ""}>
                    <TableCell>
                        <div className="font-medium">{e.event}</div>
                    </TableCell>
                    <TableCell>
                        {e.description}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant={e.status === 'Verified' ? "secondary" : "destructive"}>
                            {e.status}
                        </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{e.timestamp}</TableCell>
                    <TableCell className="text-right font-mono text-xs">{e.tx}...</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
       <CardFooter className="flex justify-end">
        <Button size="sm" variant="outline">
          <FileUp className="mr-2 h-4 w-4" />
          Export to Sheets
        </Button>
      </CardFooter>
    </Card>
  )
}
