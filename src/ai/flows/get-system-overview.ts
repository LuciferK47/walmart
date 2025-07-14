
'use server';

/**
 * @fileOverview Generates a dynamic system overview.
 *
 * - getSystemOverview - A function that returns current system statistics.
 * - GetSystemOverviewOutput - The return type for the getSystemOverview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

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
    // Retry the prompt a few times in case the Google Generative AI endpoint is temporarily overloaded (e.g., returns 503).
    const maxRetries = 3;
    const baseDelayMs = 500; // initial back-off delay

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const {output} = await prompt();
        return output!;
      } catch (err) {
        const isLastAttempt = attempt === maxRetries;

        // Re-throw immediately if we've exhausted retries or if it's not a 5xx error.
        const message = (err as Error).message ?? '';
        const isServerOverload = message.includes('503');

        if (isLastAttempt || !isServerOverload) {
          throw err;
        }

        // Exponential back-off before retrying.
        const delay = baseDelayMs * 2 ** (attempt - 1);
        await new Promise((res) => setTimeout(res, delay));
      }
    }

    // Fallback (should never reach here because we either returned or threw).
    throw new Error('Unable to fetch system overview after retries');
  }
);
