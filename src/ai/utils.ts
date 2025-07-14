/**
 * @fileOverview AI utility functions for handling retries and error recovery.
 */

/**
 * Configuration for retry behavior
 */
interface RetryConfig {
  maxAttempts?: number;
  baseDelayMs?: number;
  maxDelayMs?: number;
  backoffMultiplier?: number;
}

/**
 * Default retry configuration for AI calls
 */
const DEFAULT_RETRY_CONFIG: Required<RetryConfig> = {
  maxAttempts: 5,
  baseDelayMs: 1000,
  maxDelayMs: 30000,
  backoffMultiplier: 2,
};

/**
 * Sleep for a specified number of milliseconds
 */
const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Check if an error is retryable (503, 429, network errors, etc.)
 */
const isRetryableError = (error: unknown): boolean => {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const errorCode = (error as any)?.code;
  
  // Handle GoogleGenerativeAI specific errors
  if (errorMessage.includes('[503 Service Unavailable]') || 
      errorMessage.includes('overloaded') ||
      errorMessage.includes('[429')) {
    return true;
  }
  
  // Handle general network errors
  if (errorCode === 'ECONNRESET' || 
      errorCode === 'ENOTFOUND' || 
      errorCode === 'ECONNREFUSED' ||
      errorCode === 'ETIMEDOUT') {
    return true;
  }
  
  return false;
};

/**
 * Retry wrapper for AI operations with exponential backoff
 */
export async function withRetry<T>(
  operation: () => Promise<T>,
  config: RetryConfig = {}
): Promise<T> {
  const finalConfig = { ...DEFAULT_RETRY_CONFIG, ...config };
  let lastError: any;

  for (let attempt = 1; attempt <= finalConfig.maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      
      // If this is the last attempt or error is not retryable, throw immediately
      if (attempt === finalConfig.maxAttempts || !isRetryableError(error)) {
        throw error;
      }

      // Calculate delay with exponential backoff
      const baseDelay = finalConfig.baseDelayMs * Math.pow(finalConfig.backoffMultiplier, attempt - 1);
      const jitter = Math.random() * 0.1 * baseDelay; // Add 10% jitter
      const delay = Math.min(baseDelay + jitter, finalConfig.maxDelayMs);

      const errorMessage = error instanceof Error ? error.message : String(error);
      console.warn(`AI operation failed (attempt ${attempt}/${finalConfig.maxAttempts}): ${errorMessage}. Retrying in ${Math.round(delay)}ms...`);
      
      await sleep(delay);
    }
  }

  // This should never be reached, but just in case
  throw lastError;
}