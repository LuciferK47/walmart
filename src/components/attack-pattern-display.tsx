import { AlertTriangle, Target, Code, Bot, ListChecks } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface AttackPattern {
  attack_type: string;
  threat_level: string;
  target_systems: string[];
  indicators_of_compromise: string[];
  payload_description: {
    type: string;
    obfuscation_layers: string;
    persistence_method: string;
  };
}

interface AttackPatternDisplayProps {
  pattern: AttackPattern;
}

const DetailItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: React.ReactNode }) => (
  <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
    <div className="text-primary">{icon}</div>
    <div className="flex-1">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
    <span className="text-sm">{children}</span>
  </li>
)

export function AttackPatternDisplay({ pattern }: AttackPatternDisplayProps) {
  const getThreatLevelColor = (level: string) => {
    const numericLevel = parseInt(level, 10);
    if (numericLevel >= 8) return "hsl(var(--destructive))";
    if (numericLevel >= 5) return "hsl(var(--primary))";
    return "hsl(var(--secondary-foreground))";
  };
  
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold font-headline">Generated Attack Pattern</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DetailItem 
            icon={<Bot size={20} />} 
            label="Attack Type" 
            value={<Badge>{pattern.attack_type}</Badge>} 
          />
          <DetailItem 
            icon={<AlertTriangle size={20} />} 
            label="Threat Level" 
            value={<span style={{ color: getThreatLevelColor(pattern.threat_level) }} className="font-bold text-lg">{pattern.threat_level} / 10</span>} 
          />
        </div>
        
        <div className="rounded-lg bg-muted/50 p-3">
          <h4 className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2"><Target size={16} /> Target Systems</h4>
          <ul className="space-y-1">
            {pattern.target_systems.map((system, i) => <ListItem key={i}>{system}</ListItem>)}
          </ul>
        </div>
        
         <div className="rounded-lg bg-muted/50 p-3">
          <h4 className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2"><ListChecks size={16} /> Indicators of Compromise (IOCs)</h4>
          <ul className="space-y-1">
            {pattern.indicators_of_compromise.map((ioc, i) => <ListItem key={i}>{ioc}</ListItem>)}
          </ul>
        </div>

        <div className="rounded-lg bg-muted/50 p-4">
            <h4 className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3"><Code size={16} /> Payload Description</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="rounded-md bg-background p-2">
                    <p className="text-xs text-muted-foreground">Type</p>
                    <p className="text-sm font-semibold">{pattern.payload_description.type}</p>
                </div>
                <div className="rounded-md bg-background p-2">
                    <p className="text-xs text-muted-foreground">Obfuscation Layers</p>
                    <p className="text-sm font-semibold">{pattern.payload_description.obfuscation_layers}</p>
                </div>
                 <div className="rounded-md bg-background p-2">
                    <p className="text-xs text-muted-foreground">Persistence Method</p>
                    <p className="text-sm font-semibold">{pattern.payload_description.persistence_method}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
