'use server';

/**
 * @fileOverview Generates simulated network traffic data for visualization.
 *
 * - generateNetworkData - A function that returns a series of network traffic data points.
 * - GenerateNetworkDataInput - The input type for the generateNetworkData function.
 * - GenerateNetworkDataOutput - The return type for the generateNetworkData function.
 */

import {ai} from '@/ai/genkit';
import {withRetry} from '@/ai/utils';
import {z} from 'zod';

const GenerateNetworkDataInputSchema = z.object({
  attackType: z.string().describe('The type of attack to simulate (e.g., "DDoS", "Data Exfiltration").'),
  baseTraffic: z.array(z.number()).describe('An array of recent incoming traffic data points to use as a baseline.'),
});
export type GenerateNetworkDataInput = z.infer<typeof GenerateNetworkDataInputSchema>;

const GenerateNetworkDataOutputSchema = z.object({
  anomalousData: z.array(z.number()).describe('An array of 12 data points representing anomalous incoming traffic.'),
});
export type GenerateNetworkDataOutput = z.infer<typeof GenerateNetworkDataOutputSchema>;

export async function generateNetworkData(input: GenerateNetworkDataInput): Promise<GenerateNetworkDataOutput> {
  return generateNetworkDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateNetworkDataPrompt',
  input: {schema: GenerateNetworkDataInputSchema},
  output: {schema: GenerateNetworkDataOutputSchema},
  prompt: `You are a network traffic simulator. Your task is to generate a series of 12 data points representing incoming network traffic (in MB/s) that simulates a cyberattack.

You will be given a baseline of recent traffic to understand normal patterns. Generate a new series of 12 data points that shows an anomaly based on the specified attack type.

- For a "DDoS" attack, create a dramatic, sustained spike in traffic.
- For "Data Exfiltration", create a smaller, but unusual and sharp, spike in traffic.

Baseline Traffic (last 12 points): {{{jsonStringify baseTraffic}}}
Attack Type: {{{attackType}}}

Generate the 12 new data points for 'anomalousData'. Return ONLY the JSON object.
`,
});

const generateNetworkDataFlow = ai.defineFlow(
  {
    name: 'generateNetworkDataFlow',
    inputSchema: GenerateNetworkDataInputSchema,
    outputSchema: GenerateNetworkDataOutputSchema,
  },
  async input => {
    const {output} = await withRetry(async () => {
      return await prompt(input);
    });
    return output!;
  }
);
