import { Users, FileUp } from "lucide-react"

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const users = [
  {
    name: "Alice Johnson",
    email: "alice@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=AJ",
    role: "Admin",
    attributes: `Dept: "Sales", Region: "NA"`,
    status: "Active",
  },
  {
    name: "Bob Williams",
    email: "bob@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=BW",
    role: "Analyst",
    attributes: `Dept: "Security"`,
    status: "Active",
  },
  {
    name: "Charlie Brown",
    email: "charlie@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=CB",
    role: "Vendor",
    attributes: `Company: "Stripe"`,
    status: "Restricted",
  },
    {
    name: "Diana Miller",
    email: "diana@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=DM",
    role: "Analyst",
    attributes: `Dept: "Finance"`,
    status: "Active",
  },
]

export function AccessControlCard() {
  return (
    <Card className="xl:col-span-1">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Users /> Zero-Trust Access Control
        </CardTitle>
        <CardDescription>
          Role-based access enforced by Attribute-Based Encryption (ABE).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="hidden lg:table-cell">Attributes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                       <AvatarImage src={user.avatar} alt="Avatar" data-ai-hint="person avatar" />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={user.role === 'Admin' ? 'default' : user.role === 'Analyst' ? 'secondary' : 'outline'}>{user.role}</Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell font-mono text-xs">{user.attributes}</TableCell>
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
