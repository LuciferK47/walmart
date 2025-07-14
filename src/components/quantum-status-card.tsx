"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Key, FileSignature } from "lucide-react"

// Simulated Post-Quantum Cryptography Functions
function simulateKyberKEM() {
  const publicKey = Array.from({ length: 32 }, () => 
    Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  ).join('');
  
  const sharedSecret = Array.from({ length: 16 }, () => 
    Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  ).join('');
  
  return { publicKey, sharedSecret, success: true };
}

function simulateDilithiumSig() {
  const signature = Array.from({ length: 30 }, () => 
    Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  ).join('');
  
  return { signature, verified: Math.random() > 0.1 };
}

interface KyberResult {
  publicKey: string;
  sharedSecret: string;
  success: boolean;
}

interface DilithiumResult {
  signature: string;
  verified: boolean;
}

export function QuantumStatusCard() {
  const [kyberResult, setKyberResult] = useState<KyberResult | null>(null);
  const [dilithiumResult, setDilithiumResult] = useState<DilithiumResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  
  const runCryptoTest = async () => {
    setIsRunning(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const kyber = simulateKyberKEM();
    const dilithium = simulateDilithiumSig();
    
    setKyberResult(kyber);
    setDilithiumResult(dilithium);
    setIsRunning(false);
  };
  
  return (
    <Card className="relative overflow-hidden bg-emerald-600/10 dark:bg-emerald-800/20 border-emerald-500/50">
      <div className="absolute top-0 right-0 -mr-8 mt-4 h-24 w-24 text-emerald-500/10">
        <ShieldCheck className="h-full w-full" />
      </div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-emerald-800 dark:text-emerald-300">PQC Status</CardTitle>
        <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Active</div>
        <p className="text-xs text-emerald-700/80 dark:text-emerald-400/70">
          Comms secured with CRYSTALS-Kyber & Dilithium
        </p>
        
        <Button 
          onClick={runCryptoTest} 
          disabled={isRunning}
          size="sm"
          variant="outline"
          className="w-full"
        >
          {isRunning ? "Testing..." : "Test PQC"}
        </Button>
        
        {kyberResult && (
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-1">
              <Key className="h-3 w-3" />
              <span className="font-semibold">Kyber KEM:</span>
              <span className={kyberResult.success ? 'text-green-600' : 'text-red-600'}>
                {kyberResult.success ? 'SUCCESS' : 'FAILED'}
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <FileSignature className="h-3 w-3" />
              <span className="font-semibold">Dilithium Sig:</span>
              <span className={dilithiumResult.verified ? 'text-green-600' : 'text-red-600'}>
                {dilithiumResult.verified ? 'VERIFIED' : 'FAILED'}
              </span>
            </div>
            
            <div className="text-xs text-muted-foreground">
              Secret: {kyberResult.sharedSecret.substring(0, 16)}...
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
