import {
  FileUp,
  Fingerprint,
  PlusCircle,
  Search,
  Users,
} from "lucide-react";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const users = [
  {
    name: "Alice Johnson",
    email: "alice@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=AJ",
    role: "Admin",
    attributes: `Dept: "Sales", Region: "NA"`,
    lastSeen: "2 hours ago",
    status: "Active",
  },
  {
    name: "Bob Williams",
    email: "bob@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=BW",
    role: "Analyst",
    attributes: `Dept: "Security"`,
    lastSeen: "1 day ago",
    status: "Active",
  },
  {
    name: "Charlie Brown",
    email: "charlie@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=CB",
    role: "Vendor",
    attributes: `Company: "Stripe"`,
    lastSeen: "3 days ago",
    status: "Restricted",
  },
  {
    name: "Diana Miller",
    email: "diana@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=DM",
    role: "Analyst",
    attributes: `Dept: "Finance"`,
    lastSeen: "5 hours ago",
    status: "Active",
  },
  {
    name: "Ethan Davis",
    email: "ethan@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=ED",
    role: "Analyst",
    attributes: `Dept: "Engineering"`,
    lastSeen: "15 minutes ago",
    status: "Active",
  },
    {
    name: "Fiona Garcia",
    email: "fiona@qs.io",
    avatar: "https://placehold.co/40x40/E9EEF7/7F9CF5.png?text=FG",
    role: "Admin",
    attributes: `Dept: "IT"`,
    lastSeen: "8 hours ago",
    status: "Active",
  },
];

export default function AccessControlPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="font-headline flex items-center gap-2">
              <Fingerprint /> Zero-Trust Access Control
            </CardTitle>
            <CardDescription>
              Manage user roles, attributes, and permissions across the system.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
            </div>
            <Button size="sm" variant="outline" className="h-9 gap-1">
              <FileUp className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
            <Button size="sm" className="h-9 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add User
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="hidden lg:table-cell">
                  Access Attributes
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Last Seen
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={user.avatar} alt="Avatar" data-ai-hint="person avatar" />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          {user.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.role === "Admin"
                          ? "default"
                          : user.role === "Analyst"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell font-mono text-xs">
                    {user.attributes}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {user.lastSeen}
                  </TableCell>
                   <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <Users className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Logs</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Revoke Access</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
