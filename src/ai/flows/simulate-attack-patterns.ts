'use server';

/**
 * @fileOverview Generates simulated cyberattack patterns using a GAN.
 *
 * - simulateAttackPatterns - A function that simulates cyberattack patterns.
 * - SimulateAttackPatternsInput - The input type for the simulateAttackPatterns function.
 * - SimulateAttackPatternsOutput - The return type for the simulateAttackPatterns function.
 */

import {ai} from '@/ai/genkit';
import {withRetry} from '@/ai/utils';
import {z} from 'zod';

const SimulateAttackPatternsInputSchema = z.object({
  attackType: z
    .string()
    .describe('The type of cyberattack pattern to simulate (e.g., Magecart, Grinch Bots).'),
  datasetDescription: z
    .string()
    .describe(
      'A description of the dataset to use for training the GAN, including its source and relevant features.'
    ),
});
export type SimulateAttackPatternsInput = z.infer<typeof SimulateAttackPatternsInputSchema>;

const SimulateAttackPatternsOutputSchema = z.object({
  simulatedAttackPattern: z
    .string()
    .describe('A JSON object representing the simulated cyberattack pattern.'),
});
export type SimulateAttackPatternsOutput = z.infer<typeof SimulateAttackPatternsOutputSchema>;

export async function simulateAttackPatterns(input: SimulateAttackPatternsInput): Promise<SimulateAttackPatternsOutput> {
  return simulateAttackPatternsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'simulateAttackPatternsPrompt',
  input: {schema: SimulateAttackPatternsInputSchema},
  output: {schema: SimulateAttackPatternsOutputSchema},
  prompt: `You are a cybersecurity expert specializing in generative AI for threat simulation.

Your task is to generate a realistic, simulated cyberattack pattern as a JSON object. This object should detail the characteristics and potential actions of the specified attack type.

Attack Type: {{{attackType}}}
Dataset Description: {{{datasetDescription}}}

Based on this information, generate a JSON object with the following structure:
{
  "attack_type": "The specified attack type",
  "threat_level": "A severity rating from 1 to 10",
  "target_systems": ["An array of potential system targets, e.g., 'e-commerce-checkout', 'api-gateway'"],
  "indicators_of_compromise": [
    "An array of IOCs, e.g., 'Unusual outbound traffic to IP 123.45.67.89'",
    "POST requests with large, obfuscated JavaScript payloads"
  ],
  "payload_description": {
    "type": "e.g., 'JavaScript Skimmer'",
    "obfuscation_layers": "A random number between 2 and 5",
    "persistence_method": "e.g., 'LocalStorage injection'"
  }
}

Return ONLY the raw JSON object.
`, 
});

const simulateAttackPatternsFlow = ai.defineFlow(
  {
    name: 'simulateAttackPatternsFlow',
    inputSchema: SimulateAttackPatternsInputSchema,
    outputSchema: SimulateAttackPatternsOutputSchema,
  },
  async input => {
    const {output} = await withRetry(async () => {
      return await prompt(input);
    });
    return output!;
  }
);
