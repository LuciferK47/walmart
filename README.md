# Quantum Sentinel: Hybrid Cybersecurity Framework

Quantum Sentinel is a sophisticated proof-of-concept application built with Next.js that demonstrates a hybrid cybersecurity framework. It showcases how Generative AI can be used to preempt and defend against modern cyber threats like zero-day exploits and supply chain attacks.

The application provides a dashboard for security analysts to monitor threats, simulate attacks, and dynamically update security policies in response to AI-driven intelligence.

## Core Features

- **AI Threat Summary**: A dashboard widget that uses Generative AI to summarize the most pressing threat based on recent system anomalies.
- **Threat Simulation**: Allows analysts to input a scenario (e.g., "a Grinch Bot attack on a product launch") and uses AI to generate a detailed simulation of the attack, identify potential vulnerabilities, and suggest mitigation strategies.
- **Dynamic Access Policy Generation**: Takes an AI-generated threat intelligence report and your current access policies (as JSON) and uses AI to recommend and generate hardened, updated policies to mitigate the new threats.
- **Decentralized Audit Trail**: A conceptual, immutable log of all important system and vendor interactions, providing a transparent and tamper-proof record of events.
- **Light/Dark Mode**: A user-friendly theme toggle for visual comfort.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **AI Integration**: [Google's Genkit](https://firebase.google.com/docs/genkit)
- **UI**: [React](https://react.dev/), [ShadCN UI](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Charts**: [Recharts](https://recharts.org/)

---

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### 1. Obtain a Google AI API Key

The AI features in this application are powered by the Gemini family of models via Genkit. You will need a free API key from Google AI Studio.

1.  Visit **[Google AI Studio](https://aistudio.google.com/app/apikey)**.
2.  Click **"Create API key"**.
3.  Copy the generated key.

### 2. Set Up Environment Variables

The project uses an environment file to manage the API key.

1.  Create a new file named `.env` in the root of the project directory.
2.  Add the following line to the `.env` file, replacing `YOUR_API_KEY` with the key you obtained from Google AI Studio:

    ```
    GOOGLE_API_KEY=YOUR_API_KEY
    ```

### 3. Install Dependencies

Open your terminal, navigate to the project directory, and run the following command to install the necessary packages:

```bash
npm install
```

### 4. Run the Development Server

This project requires two separate development servers to run concurrently: one for the Next.js frontend and one for the Genkit AI flows.

1.  **Start the Next.js App:**
    Open a terminal and run:
    ```bash
    npm run dev
    ```
    This will start the frontend application, typically available at `http://localhost:9002`.

2.  **Start the Genkit Server:**
    Open a **second terminal** and run:
    ```bash
    npm run genkit:watch
    ```
    This starts the Genkit server, which listens for requests from the frontend to execute the AI flows. It will also automatically restart when you make changes to the flow files in `src/ai/flows/`.

You can now access the application in your browser at `http://localhost:9002`.
