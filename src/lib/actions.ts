"use server";

import { simulateAttackPatterns, SimulateAttackPatternsInput } from "@/ai/flows/simulate-attack-patterns";
import { generateNetworkData, GenerateNetworkDataInput } from "@/ai/flows/generate-network-data";

export async function runThreatSimulation(input: SimulateAttackPatternsInput) {
  try {
    const result = await simulateAttackPatterns(input);
    return result;
  } catch (error) {
    console.error("Error simulating threat:", error);
    return { error: "Failed to simulate threat. The AI model may be unavailable or the request was invalid." };
  }
}

export async function runNetworkDataGeneration(input: GenerateNetworkDataInput) {
  try {
    const result = await generateNetworkData(input);
    return result;
  } catch (error) {
    console.error("Error generating network data:", error);
    return { error: "Failed to generate network data. Please try again." };
  }
}
