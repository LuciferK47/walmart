
'use server';

/**
 * @fileOverview Generates a dynamic system overview.
 *
 * - getSystemOverview - A function that returns current system statistics.
 * - GetSystemOverviewOutput - The return type for the getSystemOverview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetSystemOverviewOutputSchema = z.object({
  simulatedThreats: z
    .number()
    .describe('The number of currently active simulated threat scenarios.'),
  systemIntegrity: z
    .string()
    .describe('The system uptime or integrity as a percentage string (e.g., "99.9%").'),
});
export type GetSystemOverviewOutput = z.infer<typeof GetSystemOverviewOutputSchema>;

export async function getSystemOverview(): Promise<GetSystemOverviewOutput> {
  return getSystemOverviewFlow();
}

const prompt = ai.definePrompt({
  name: 'getSystemOverviewPrompt',
  output: {schema: GetSystemOverviewOutputSchema},
  prompt: `You are a monitoring agent for a high-tech cybersecurity platform called Quantum Sentinel.

Generate a realistic, but randomized, system overview.

- The number of simulated threats should be between 5 and 25.
- The system integrity should be very high, typically between 99.80% and 99.99%. Occasionally, it can dip slightly lower to 98.50% to indicate a minor issue.
- Format the system integrity as a string with two decimal places, like "99.98%".

Provide the current statistics.
`,
});

const getSystemOverviewFlow = ai.defineFlow(
  {
    name: 'getSystemOverviewFlow',
    outputSchema: GetSystemOverviewOutputSchema,
  },
  async () => {
    const {output} = await prompt();
    return output!;
  }
);
