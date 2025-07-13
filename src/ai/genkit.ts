// Mock implementation for build compatibility
// TODO: Fix Genkit version compatibility issues

export const ai = {
  generate: async (prompt: any) => {
    // Mock implementation for build purposes
    console.warn('Using mock AI implementation. Configure Genkit properly for production.');
    return {
      text: () => 'Mock AI response',
      output: 'Mock AI response'
    };
  }
};
