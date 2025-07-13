# 🛡️ Quantum Sentinel: Advanced Cybersecurity Framework

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC)](https://tailwindcss.com/)
[![Google Genkit](https://img.shields.io/badge/Google_Genkit-AI-4285F4)](https://firebase.google.com/docs/genkit)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Quantum Sentinel is a sophisticated proof-of-concept application that demonstrates a next-generation hybrid cybersecurity framework. Built with Next.js and powered by Generative AI, it showcases how modern AI can be used to preemptively defend against cyber threats like zero-day exploits, supply chain attacks, and advanced persistent threats.

The application provides a comprehensive dashboard for security analysts to monitor threats, simulate attacks, implement zero-trust access controls, and dynamically update security policies using AI-driven intelligence and post-quantum cryptography.

## 🚀 Live Demo

Experience the full functionality with our interactive demo:
- **Zero-Trust Access Control**: `demo/zero-trust-access-control.html`
- **Post-Quantum Cryptography**: CRYSTALS-Kyber & Dilithium implementations
- **GAN-Based Threat Simulation**: AI-powered attack pattern generation

## 📋 Table of Contents

- [🎯 Core Features](#-core-features)
- [🏗️ Architecture Overview](#️-architecture-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📱 System Requirements](#-system-requirements)
- [🔧 Installation & Setup](#-installation--setup)
  - [Windows Setup](#windows-setup)
  - [Linux Setup](#linux-setup)
  - [macOS Setup](#macos-setup)
- [💻 VS Code Development](#-vs-code-development)
- [🏃‍♂️ Running the Application](#️-running-the-application)
- [📁 Project Structure](#-project-structure)
- [🔐 Security Features](#-security-features)
- [🤖 AI Integration](#-ai-integration)
- [🧪 Testing](#-testing)
- [📚 API Documentation](#-api-documentation)
- [🚀 Deployment](#-deployment)
- [🔧 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Core Features

### 🔒 Zero-Trust Access Control
- **Attribute-Based Encryption (ABE)**: Resources encrypted under specific policies
- **Real-time Access Evaluation**: Dynamic attribute verification
- **Interactive Demo**: Live demonstration of zero-trust principles
- **Policy Engine**: AI-powered access policy generation

### 🔮 Post-Quantum Cryptography
- **CRYSTALS-Kyber**: Quantum-resistant key encapsulation mechanism
- **CRYSTALS-Dilithium**: Post-quantum digital signatures
- **Interactive Testing**: Live cryptographic operation demonstrations
- **Future-Proof Security**: Protection against quantum computing threats

### 🤖 GAN-Based Threat Simulation
- **Adversarial Attack Generation**: Create synthetic attack patterns
- **Threat Discrimination**: Distinguish real vs. AI-generated threats
- **Proactive Defense**: Test security measures before real attacks
- **Multiple Attack Types**: Magecart, Grinch Bots, Supply Chain, Zero-Day

### 📊 AI-Powered Intelligence
- **Threat Summary Dashboard**: AI-generated threat intelligence
- **Dynamic Policy Updates**: Adaptive security policies based on threat landscape
- **Anomaly Detection**: ML-powered system behavior analysis
- **Predictive Security**: Anticipate and prevent future attack vectors

### 🔍 Comprehensive Monitoring
- **Real-time Network Activity**: Live network traffic analysis
- **Decentralized Audit Trail**: Immutable security event logging
- **Supply Chain Monitoring**: Vendor and dependency risk assessment
- **Threat Intelligence Feed**: Continuous threat landscape updates

### 🎨 Modern UI/UX
- **Responsive Design**: Optimized for all screen sizes
- **Dark/Light Mode**: User preference-based theming
- **Interactive Dashboards**: Real-time data visualization
- **Accessibility**: WCAG 2.1 compliant interface

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │   Dashboard │  │ Zero-Trust  │  │ Post-Quantum│          │
│  │   Components│  │   Access    │  │   Crypto    │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│                   AI Layer (Genkit)                        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │ GAN Threat  │  │ Policy Gen  │  │ Anomaly Det │          │
│  │ Simulation  │  │    Engine   │  │    System   │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
├─────────────────────────────────────────────────────────────┤
│                Security Infrastructure                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │ PQC Crypto  │  │ Audit Trail │  │ Access Ctrl │          │
│  │   Engine    │  │   Logger    │  │   Manager   │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)**: React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)**: Modern React component library
- **[Recharts](https://recharts.org/)**: Data visualization library
- **[Lucide React](https://lucide.dev/)**: Beautiful icon library

### AI & ML
- **[Google Genkit](https://firebase.google.com/docs/genkit)**: AI application framework
- **[Gemini AI](https://ai.google.dev/)**: Large language model integration
- **Custom GAN Implementation**: Threat simulation neural networks
- **TensorFlow.js**: Client-side machine learning

### Security
- **Post-Quantum Cryptography**: CRYSTALS-Kyber & Dilithium
- **Zero-Trust Architecture**: Attribute-based access control
- **Audit Logging**: Immutable security event tracking
- **Threat Intelligence**: Real-time security feeds

### Development Tools
- **[ESLint](https://eslint.org/)**: Code linting and formatting
- **[Prettier](https://prettier.io/)**: Code formatting
- **[Husky](https://typicode.github.io/husky/)**: Git hooks
- **[Zod](https://zod.dev/)**: Schema validation

## 📱 System Requirements

### Minimum Requirements
- **Node.js**: 18.17.0 or higher
- **npm**: 9.0.0 or higher
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 2GB free space
- **Internet**: Required for AI API calls

### Recommended Development Environment
- **VS Code**: Latest version with recommended extensions
- **Git**: Version control system
- **Chrome/Firefox**: For testing and development
- **Terminal**: Command line interface

## 🔧 Installation & Setup

### Prerequisites

Before starting, ensure you have the following installed:

1. **Node.js and npm**: Download from [nodejs.org](https://nodejs.org/)
2. **Git**: Download from [git-scm.com](https://git-scm.com/)
3. **VS Code**: Download from [code.visualstudio.com](https://code.visualstudio.com/)

### Windows Setup

#### Step 1: Install Node.js
```powershell
# Download and install Node.js from nodejs.org
# Or use Chocolatey (if installed)
choco install nodejs

# Verify installation
node --version
npm --version
```

#### Step 2: Install Git
```powershell
# Download from git-scm.com
# Or use Chocolatey
choco install git

# Verify installation
git --version
```

#### Step 3: Clone Repository
```powershell
# Open PowerShell or Command Prompt
git clone https://github.com/your-username/quantum-sentinel.git
cd quantum-sentinel
```

#### Step 4: Install Dependencies
```powershell
npm install
```

#### Step 5: Set Up Environment Variables
```powershell
# Copy environment template
copy .env.example .env

# Edit .env file and add your Google AI API key
notepad .env
```

#### Step 6: Run the Application
```powershell
# Start development server
npm run dev

# The application will be available at http://localhost:3000
```

### Linux Setup

#### Step 1: Install Node.js (Ubuntu/Debian)
```bash
# Update package index
sudo apt update

# Install Node.js and npm (latest LTS version)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation (should be Node 18+ and npm 9+)
node --version
npm --version
```

#### Step 2: Install Git
```bash
# Ubuntu/Debian
sudo apt install git

# CentOS/RHEL/Fedora
sudo dnf install git  # or sudo yum install git

# Verify installation
git --version
```

#### Step 3: Clone Repository
```bash
git clone https://github.com/your-username/quantum-sentinel.git
cd quantum-sentinel
```

#### Step 4: Install Dependencies
```bash
npm install
```

#### Step 5: Set Up Environment Variables
```bash
# Copy environment template
cp .env.example .env

# Edit .env file and add your Google AI API key
nano .env
# or
vim .env
```

#### Step 6: Run the Application
```bash
# Start development server
npm run dev

# The application will be available at http://localhost:3000
```

### macOS Setup

#### Step 1: Install Homebrew (if not installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Step 2: Install Node.js and Git
```bash
# Install Node.js (latest LTS version)
brew install node

# Install Git (usually pre-installed)
brew install git

# Verify installations (should be Node 18+ and npm 9+)
node --version
npm --version
git --version
```

#### Step 3: Clone Repository
```bash
git clone https://github.com/your-username/quantum-sentinel.git
cd quantum-sentinel
```

#### Step 4: Install Dependencies
```bash
npm install
```

#### Step 5: Set Up Environment Variables
```bash
# Copy environment template
cp .env.example .env

# Edit .env file and add your Google AI API key
nano .env
# or
vim .env
```

#### Step 6: Run the Application
```bash
# Start development server
npm run dev

# The application will be available at http://localhost:3000
```

### Environment Configuration

1. **Required Environment Variables**:
   ```env
   # Google AI API Key (required for AI features)
   GOOGLE_API_KEY=your_google_ai_api_key_here
   
   # Next.js Environment
   NEXT_PUBLIC_APP_ENV=development
   
   # Optional: Custom API endpoints
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

2. **Get Google AI API Key**:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Click "Create API key"
   - Copy the generated key to your `.env` file

3. **Environment File Setup**:
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit with your preferred editor
   nano .env  # Linux/macOS
   notepad .env  # Windows
   ```

## 💻 VS Code Development

### Recommended Extensions

Install these VS Code extensions for optimal development experience:

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "ms-vscode.vscode-css-peek",
    "formulahendry.auto-close-tag",
    "ms-vscode.vscode-typescript-tslint-plugin"
  ]
}
```

### VS Code Settings

Create `.vscode/settings.json`:
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    "cn\\(([^)]*)\\)"
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### VS Code Tasks

Create `.vscode/tasks.json`:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Development Server",
      "type": "shell",
      "command": "npm run dev",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      }
    },
    {
      "label": "Build for Production",
      "type": "shell",
      "command": "npm run build",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      }
    },
    {
      "label": "Type Check",
      "type": "shell",
      "command": "npm run type-check",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      }
    },
    {
      "label": "Lint Code",
      "type": "shell",
      "command": "npm run lint",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      }
    }
  ]
}
```

### Opening in VS Code

#### Windows
```powershell
# Navigate to project directory
cd quantum-sentinel

# Open in VS Code
code .

# Or from VS Code: File > Open Folder
```

#### Linux
```bash
# Navigate to project directory
cd quantum-sentinel

# Open in VS Code
code .

# If 'code' command not available, install VS Code properly
# sudo snap install code --classic
```

#### macOS
```bash
# Navigate to project directory
cd quantum-sentinel

# Open in VS Code
code .

# Or drag the folder to VS Code dock icon
```

## 🏃‍♂️ Running the Application

### Quick Start (All OS)

After completing the installation steps for your operating system:

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Access the application**:
   - **Main Application**: http://localhost:3000
   - **Zero-Trust Demo**: Open `demo/zero-trust-access-control.html` in your browser

### Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start production server (run `npm run build` first)
- `npm run lint` - Run ESLint to check code quality
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

### Development Methods

#### Method 1: Terminal (Recommended)
```bash
# Navigate to project directory
cd quantum-sentinel

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

#### Method 2: VS Code Integrated Terminal
1. **Open VS Code**: `code .` in project directory
2. **Open Terminal**: `Ctrl+`` (Windows/Linux) or `Cmd+`` (macOS)
3. **Run**: `npm run dev`

#### Method 3: VS Code Tasks
1. **Open Command Palette**: `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
2. **Type**: "Tasks: Run Task"
3. **Select**: "Start Development Server"

### Accessing Different Features

- **Main Dashboard**: http://localhost:3000
- **Zero-Trust Demo**: Open `demo/zero-trust-access-control.html` in browser
- **API Routes**: http://localhost:3000/api/*

### Stopping the Application

- **In Terminal**: Press `Ctrl+C` (Windows/Linux) or `Cmd+C` (macOS)
- **In VS Code**: Click the trash icon in the terminal or press `Ctrl+C`

## � Troubleshooting

### Common Issues and Solutions

#### 1. npm Error: Could not read package.json
**Error**: `npm error code ENOENT... Could not read package.json`
**Solution**: Ensure you're in the project root directory where `package.json` exists.
```bash
cd quantum-sentinel
ls -la  # Should show package.json
npm install
```

#### 2. Node.js Version Issues
**Error**: `Error: Node.js version not supported`
**Solution**: Update to Node.js 18 or higher:
```bash
# Check current version
node --version

# Update using nvm (recommended)
nvm install --lts
nvm use --lts

# Or download from nodejs.org
```

#### 3. Permission Errors (Linux/macOS)
**Error**: `EACCES: permission denied`
**Solution**: 
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm

# Or use npm with --unsafe-perm
npm install --unsafe-perm
```

#### 4. Port Already in Use
**Error**: `Port 3000 is already in use`
**Solution**:
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9  # Linux/macOS
netstat -ano | findstr :3000  # Windows (then kill process)

# Or use different port
npm run dev -- --port 3001
```

#### 5. Google AI API Key Issues
**Error**: `Google AI API key not found`
**Solution**:
1. Check if `.env` file exists in project root
2. Ensure `GOOGLE_API_KEY` is set in `.env`
3. Restart the development server after adding the key

#### 6. TypeScript Errors
**Error**: Various TypeScript compilation errors
**Solution**:
```bash
# Check TypeScript configuration
npm run type-check

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 7. ESLint/Prettier Conflicts
**Error**: Code formatting issues
**Solution**:
```bash
# Fix ESLint issues
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check
```

### Getting Help

If you encounter issues not covered here:

1. **Check the logs**: Look for detailed error messages in the terminal
2. **Clear cache**: Delete `node_modules`, `.next`, and `package-lock.json`, then reinstall
3. **Check Node.js version**: Ensure you're using Node.js 18.17.0 or higher
4. **Verify environment**: Make sure all required environment variables are set

## �📁 Project Structure

```
quantum-sentinel/
├── 📁 demo/
│   └── zero-trust-access-control.html    # Standalone demo
├── 📁 src/
│   ├── 📁 ai/
│   │   ├── 📁 flows/                     # AI flow definitions
│   │   │   ├── simulate-attack-patterns.ts
│   │   │   ├── generate-network-data.ts
│   │   │   └── get-system-overview.ts
│   │   ├── genkit.ts                     # Genkit configuration
│   │   └── dev.ts                        # Development server
│   ├── 📁 app/
│   │   ├── 📁 (dashboard)/               # Dashboard routes
│   │   │   ├── 📁 access-control/
│   │   │   ├── 📁 analytics/
│   │   │   ├── 📁 supply-chain/
│   │   │   ├── 📁 threat-intelligence/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── 📁 components/
│   │   ├── 📁 ui/                        # Base UI components
│   │   ├── access-control-card.tsx
│   │   ├── attack-pattern-display.tsx
│   │   ├── audit-trail-card.tsx
│   │   ├── network-activity-card.tsx
│   │   ├── quantum-status-card.tsx       # Enhanced with PQC
│   │   ├── threat-simulation-card.tsx
│   │   └── ...
│   ├── 📁 hooks/
│   │   └── use-toast.ts
│   ├── 📁 lib/
│   │   ├── actions.ts                    # Server actions
│   │   └── utils.ts
│   └── tailwind.config.ts
├── 📁 .vscode/
│   ├── settings.json
│   └── tasks.json
├── 📄 .env                               # Environment variables
├── 📄 .gitignore
├── 📄 README.md
├── 📄 IMPLEMENTATION_SUMMARY.md
├── 📄 package.json
└── 📄 tsconfig.json
```

## 🔐 Security Features

### Zero-Trust Architecture
- **Attribute-Based Access Control**: Fine-grained permissions
- **Continuous Verification**: Real-time access validation
- **Least Privilege Principle**: Minimal access rights
- **Policy-Based Encryption**: Data protection through ABE

### Post-Quantum Cryptography
- **CRYSTALS-Kyber**: Quantum-resistant key exchange
- **CRYSTALS-Dilithium**: Quantum-safe digital signatures
- **Future-Proof Security**: Protection against quantum attacks
- **NIST-Approved Algorithms**: Standardized implementations

### AI-Powered Threat Detection
- **GAN-Based Simulation**: Synthetic attack generation
- **Behavioral Analysis**: Anomaly detection algorithms
- **Predictive Security**: Proactive threat identification
- **Adaptive Policies**: Dynamic security adjustments

## 🤖 AI Integration

### Genkit Framework
The application uses Google's Genkit framework for AI integration:

```typescript
// Example AI flow for threat simulation
export const simulateAttackPatternsFlow = ai.defineFlow(
  {
    name: 'simulateAttackPatternsFlow',
    inputSchema: SimulateAttackPatternsInputSchema,
    outputSchema: SimulateAttackPatternsOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
```

### Available AI Flows
- **Threat Simulation**: Generate attack patterns
- **Network Analysis**: Analyze network traffic
- **System Overview**: Generate security summaries
- **Policy Generation**: Create access control policies

## 🧪 Testing

### Interactive Testing
1. **Zero-Trust Demo**: Open `demo/zero-trust-access-control.html`
2. **PQC Testing**: Use the enhanced quantum status card
3. **GAN Simulation**: Test threat generation in the dashboard

### Unit Testing
```bash
# Run tests (when implemented)
npm test

# Run tests in watch mode
npm run test:watch
```

### E2E Testing
```bash
# Run end-to-end tests (when implemented)
npm run test:e2e
```

## 📚 API Documentation

### AI Flow Endpoints
- `POST /api/simulate-attack-patterns` - Generate threat simulations
- `POST /api/generate-network-data` - Create network activity data
- `POST /api/get-system-overview` - Get AI-powered security summary

### WebSocket Endpoints
- `ws://localhost:9002/api/websocket` - Real-time updates

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**: Link your GitHub repository
2. **Environment Variables**: Add `GOOGLE_API_KEY`
3. **Deploy**: Automatic deployment on push

### Docker
```dockerfile
# Build and run with Docker
docker build -t quantum-sentinel .
docker run -p 9002:9002 quantum-sentinel
```

### Self-Hosted
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Troubleshooting

### Common Issues

#### 1. Module Not Found Errors

**Common Issues with Missing Dependencies:**

If you encounter module resolution errors for missing packages:

```bash
# For next-themes error
npm install next-themes

# For react-hook-form related errors
npm install react-hook-form @hookform/resolvers

# For missing Radix UI components
npm install @radix-ui/react-avatar @radix-ui/react-progress

# For Genkit AI framework errors
npm install @genkit-ai/core @genkit-ai/ai @genkit-ai/googleai

# Install all missing dependencies at once
npm install next-themes react-hook-form @hookform/resolvers @radix-ui/react-avatar @radix-ui/react-progress @genkit-ai/core @genkit-ai/ai @genkit-ai/googleai

# Or if general module issues persist:
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 2. Genkit Server Not Starting
```bash
# Check if port 4000 is available
lsof -i :4000  # Linux/macOS
netstat -ano | findstr :4000  # Windows

# Kill conflicting processes
kill -9 <PID>  # Linux/macOS
taskkill /PID <PID> /F  # Windows
```

#### 3. Google AI API Issues
- Verify API key in `.env` file
- Check API quotas in Google AI Studio
- Ensure internet connection is stable

#### 4. TypeScript Errors
```bash
# Clear TypeScript cache
npx tsc --build --clean

# Restart TypeScript server in VS Code
# Command Palette > "TypeScript: Restart TS Server"
```

#### 5. Tailwind CSS Not Working
```bash
# Rebuild Tailwind CSS
npm run build:css

# Check tailwind.config.ts for proper paths
```

### Performance Optimization
- Use `npm run build` for production builds
- Enable compression in your deployment
- Optimize images and assets
- Use CDN for static resources

### Memory Issues
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=8192"
npm run dev
```

## 🤝 Contributing

We welcome contributions to Quantum Sentinel! Please follow these guidelines:

### Development Setup
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Code Style
- Follow existing TypeScript and React patterns
- Use Prettier for code formatting
- Write meaningful commit messages
- Add JSDoc comments for functions

### Security Considerations
- Never commit API keys or sensitive data
- Follow security best practices
- Test security features thoroughly
- Document security-related changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Genkit Team** for the AI framework
- **NIST** for post-quantum cryptography standards
- **Next.js Team** for the excellent React framework
- **ShadCN** for the beautiful UI components
- **Tailwind CSS** for the utility-first styling approach

## 📞 Support

For support, please:
1. Check the [troubleshooting section](#-troubleshooting)
2. Search existing [GitHub issues](https://github.com/your-username/quantum-sentinel/issues)
3. Create a new issue with detailed information
4. Join our [Discord community](https://discord.gg/your-server)

---

<div align="center">
  <p>Built with ❤️ for the cybersecurity community</p>
  <p>🛡️ Quantum Sentinel - Securing the Future with AI</p>
</div>
