"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BrainCircuit, Loader2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { runThreatSimulation } from "@/lib/actions";
import { AttackPatternDisplay, type AttackPattern } from "@/components/attack-pattern-display";

const formSchema = z.object({
  attackType: z.string().min(1, "Please select an attack type."),
  datasetDescription: z.string().min(1, "Please select a dataset."),
});

type FormValues = z.infer<typeof formSchema>;

export function ThreatSimulationCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [simulationResult, setSimulationResult] = useState<AttackPattern | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      attackType: "Magecart",
      datasetDescription: "Zero-Day Attack Detection in Airport Logistics Networks",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setSimulationResult(null);

    const result = await runThreatSimulation(values);
    
    if (result.error) {
        toast({
            variant: "destructive",
            title: "Simulation Failed",
            description: result.error,
        });
    } else if (result.simulatedAttackPattern) {
        try {
            const parsedResult = JSON.parse(result.simulatedAttackPattern);
            setSimulationResult(parsedResult);
        } catch (e) {
            toast({
                variant: "destructive",
                title: "Parsing Failed",
                description: "The AI returned an invalid format for the attack pattern.",
            });
            console.error("Failed to parse simulation result:", result.simulatedAttackPattern, e);
        }
    }
    
    setIsLoading(false);
  };

  return (
    <Card className="sm:col-span-2 xl:col-span-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <BrainCircuit /> AI Threat Simulation
            </CardTitle>
            <CardDescription>
              Use a GAN to simulate cyber attack patterns based on public
              datasets.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="attackType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Attack Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an attack type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Magecart">Magecart</SelectItem>
                        <SelectItem value="Grinch Bots">Grinch Bots</SelectItem>
                        <SelectItem value="Ransomware">Ransomware</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="datasetDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Training Dataset</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a dataset" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Zero-Day Attack Detection in Airport Logistics Networks">Airport Logistics Network</SelectItem>
                        <SelectItem value="Attack Simulation Lab">Attack Simulation Lab (PCAP)</SelectItem>
                        <SelectItem value="CYBERSECURITY DATASETS (Arash Habibi Lashkari)">Lashkari Cybersecurity Datasets</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {simulationResult && (
              <AttackPatternDisplay pattern={simulationResult} />
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Simulating...
                </>
              ) : (
                "Run Simulation"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
