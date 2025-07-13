
'use server';

/**
 * @fileOverview Generates a dynamic system overview.
 *
 * - getSystemOverview - A function that returns current system statistics.
 * - GetSystemOverviewOutput - The return type for the getSystemOverview function.
 */

// Mock implementation for build compatibility
import {z} from 'zod';

const GetSystemOverviewOutputSchema = z.object({
  simulatedThreats: z
    .number()
    .min(5)
    .max(25)
    .describe('The number of simulated threats currently running.'),
  currentUptime: z
    .string()
    .describe('The system uptime or integrity as a percentage string (e.g., "99.9%").'),
});
export type GetSystemOverviewOutput = z.infer<typeof GetSystemOverviewOutputSchema>;

export async function getSystemOverview(): Promise<GetSystemOverviewOutput> {
  // Mock implementation for build purposes
  return {
    simulatedThreats: Math.floor(Math.random() * 20) + 5,
    currentUptime: `${(Math.random() * 2 + 98).toFixed(1)}%`
  };
}
