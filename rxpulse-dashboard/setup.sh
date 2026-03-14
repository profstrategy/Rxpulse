#!/bin/bash

# RxPulse Dashboard - Automated Setup Script
# This script installs dependencies and starts the development server

echo "🚀 RxPulse Dashboard Setup"
echo "=========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher"
    echo "Current version: $(node -v)"
    echo "Please upgrade from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# RxPulse Dashboard Environment Variables
# Add your environment variables here

# Example:
# NEXT_PUBLIC_API_URL=https://your-api.com
# NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
EOF
    echo "✅ .env.local created"
    echo ""
fi

# Display success message
echo "============================================"
echo "✅ Setup Complete!"
echo "============================================"
echo ""
echo "🎯 Next Steps:"
echo ""
echo "1. Start the development server:"
echo "   npm run dev"
echo ""
echo "2. Open your browser:"
echo "   http://localhost:3000"
echo ""
echo "3. Toggle 'Demo Mode' to see live updates!"
echo ""
echo "📚 Documentation:"
echo "   - README.md (full docs)"
echo "   - QUICKSTART.md (5-min guide)"
echo "   - PROJECT_SUMMARY.md (overview)"
echo ""
echo "Happy coding! 🚀"
