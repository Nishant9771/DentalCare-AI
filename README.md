# 🦷 DentalCare AI - Smart Dental Platform

<div align="center">

![DentalCare AI Banner](https://via.placeholder.com/1200x400/0D9488/FFFFFF?text=DentalCare+AI+-+Smart+Dental+Platform)

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**AI-Powered Dental Care Platform | 24/7 Assistant | Smart Appointments | Expert Guidance**

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [✨ Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🎯 About

**DentalCare AI** is a revolutionary dental health platform that combines artificial intelligence with professional dental services. Our platform provides instant dental guidance, smart appointment booking, and personalized care recommendations—all available 24/7.

### Why DentalCare AI?

- 🤖 **AI-Powered Assistant**: Get instant answers to dental questions using advanced AI (Google Gemini + Offline fallback)
- 💬 **Dual Interface**: Choose between voice assistant or text chat
- 📅 **Smart Booking**: Easy appointment scheduling with verified dentists
- 🎯 **Personalized Care**: Tailored recommendations based on your dental history
- 🌙 **24/7 Availability**: Help whenever you need it
- 📱 **Mobile Responsive**: Works perfectly on all devices
- 🔐 **Secure & Private**: Protected by industry-standard authentication

---

## ✨ Features

### Core Features

#### 🤖 AI Dental Assistant
- **Text Chat**: Type your questions and get instant expert responses
- **Voice Assistant**: Speak naturally with our AI using Vapi integration
- **Hybrid Mode**: Online AI (Gemini) + Offline fallback for 100% uptime
- **Smart Responses**: Covers pricing, pain management, hygiene tips, emergencies, and more

#### 📅 Appointment Management
- **Easy Booking**: Select doctor, time slot, and service
- **Secure Payments**: Integrated payment processing
- **Email Confirmation**: Automatic confirmation emails via Resend
- **History Tracking**: View past and upcoming appointments

#### 👨‍⚕️ Doctor Management
- **Verified Dentists**: Browse qualified dental professionals
- **Detailed Profiles**: Experience, specialization, and ratings
- **Availability Calendar**: Real-time availability updates

#### 🎨 Premium UI/UX
- **Teal/Emerald Theme**: Professional medical aesthetic
- **Smooth Animations**: Premium transitions and hover effects
- **Dark Mode**: Full dark mode support
- **Responsive Design**: Mobile-first, works on all screen sizes

#### 🔐 Authentication & Security
- **Clerk Integration**: Secure user authentication
- **Role-Based Access**: Admin, user, and pro plans
- **Protected Routes**: Secure dashboard and admin panels
- **Session Management**: Persistent login sessions

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.5.0](https://nextjs.org/) with App Router & Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Tailwind CSS animations + Custom effects

### Backend & Database
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via Prisma ORM)
- **ORM**: [Prisma](https://www.prisma.io/)
- **API Routes**: Next.js API Routes

### AI & Communication
- **AI Provider**: [Google Gemini 1.5 Flash](https://ai.google.dev/) (FREE tier)
- **Voice AI**: [Vapi](https://vapi.ai/) for voice conversations
- **Fallback**: Built-in offline responses for 50+ topics
- **Email**: [Resend](https://resend.com/) for transactional emails

### Authentication & Payments
- **Auth**: [Clerk](https://clerk.com/)
- **Payments**: Integrated payment processing

### DevOps
- **Hosting**: [Vercel](https://vercel.com/) (recommended)
- **Database**: [Neon](https://neon.tech/) or [Supabase](https://supabase.com/)
- **Version Control**: Git + GitHub

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **PostgreSQL** database
- **Clerk** account (free tier available)
- **Google Gemini API** key (FREE - get from [ai.google.dev](https://aistudio.google.com/app/apikey))
- **Vapi** account (optional, for voice)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dentalcare-ai.git
   cd dentalcare-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your keys (see [Environment Variables](#-environment-variables))

4. **Set up database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Add initial data** (Optional)
   ```bash
   npx prisma studio
   ```
   Add doctors, services, etc.

6. **Run development server**
   ```bash
   npm run dev
   ```

7. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_xxxxx"
CLERK_SECRET_KEY="sk_test_xxxxx"

# Google Gemini AI (FREE)
NEXT_PUBLIC_GEMINI_API_KEY="AIzaSyXXXXXXXXXXXXXXXXXXXXXX"

# Vapi Voice AI (Optional)
NEXT_PUBLIC_VAPI_API_KEY="your_vapi_api_key"
NEXT_PUBLIC_VAPI_ASSISTANT_ID="your_vapi_assistant_id"

# Resend Email
RESEND_API_KEY="re_xxxxx"

# Admin
ADMIN_EMAIL="admin@yourdomain.com"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Getting API Keys

#### Clerk (Authentication)
1. Sign up at [clerk.com](https://clerk.com)
2. Create new application
3. Copy API keys from dashboard

#### Google Gemini (AI - FREE!)
1. Visit [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the key (starts with `AIzaSy...`)
4. **FREE tier**: 1,500 requests/day, 1M tokens/month

#### Vapi (Voice - Optional)
1. Sign up at [vapi.ai](https://vapi.ai)
2. Create assistant
3. Copy API key and Assistant ID

#### Resend (Email)
1. Sign up at [resend.com](https://resend.com)
2. Verify domain or use test mode
3. Copy API key

#### Database
1. **Neon**: [neon.tech](https://neon.tech) - Get connection string
2. **Supabase**: [supabase.com](https://supabase.com) - Get PostgreSQL URL

---

## 📁 Project Structure

```
dentalcare-ai/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── dashboard/         # User dashboard
│   │   ├── voice/             # AI Assistant pages
│   │   ├── appointments/      # Appointment management
│   │   └── admin/             # Admin panel
│   ├── components/
│   │   ├── landing/           # Landing page components
│   │   │   ├── Header.tsx     # Navigation (Teal theme)
│   │   │   ├── Hero.tsx       # Hero section
│   │   │   ├── HowItWorks.tsx # Process steps
│   │   │   ├── PricingSection.tsx
│   │   │   ├── Footer.tsx     # Footer
│   │   │   └── CTA.tsx
│   │   ├── voice/             # AI Assistant components
│   │   │   ├── AIMessageAssistant.tsx  # Hybrid AI chat
│   │   │   └── VapiWidget.tsx          # Voice assistant
│   │   └── ui/                # shadcn/ui components
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client
│   │   ├── vapi.ts            # Vapi client
│   │   └── actions/           # Server actions
│   └── styles/
│       └── globals.css        # Global styles
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
│   ├── logo.png
│   ├── hero.png
│   └── ...
├── .env                       # Environment variables
├── .env.example              # Environment template
├── package.json
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json
└── README.md
```

---

## 📸 Screenshots

### Landing Page
![Landing Page](https://via.placeholder.com/1200x600/0D9488/FFFFFF?text=Landing+Page+-+Teal+Theme)
*Clean, professional landing page with teal/emerald theme*

### AI Message Assistant
![AI Chat](https://via.placeholder.com/1200x600/059669/FFFFFF?text=AI+Message+Assistant)
*Text-based chat with hybrid AI (Online + Offline)*

### Voice Assistant
![Voice Assistant](https://via.placeholder.com/1200x600/0891B2/FFFFFF?text=Voice+Assistant+-+Vapi)
*Voice-powered conversations with Riley*

### Dashboard
![Dashboard](https://via.placeholder.com/1200x600/0D9488/FFFFFF?text=User+Dashboard)
*Personalized dashboard with appointments and history*

### Appointment Booking
![Booking](https://via.placeholder.com/1200x600/059669/FFFFFF?text=Appointment+Booking)
*Easy appointment scheduling with verified dentists*

### Dark Mode
![Dark Mode](https://via.placeholder.com/1200x600/111827/0D9488?text=Dark+Mode+Support)
*Full dark mode support across all pages*

---

## 🤖 API Integration

### Google Gemini AI

**Why Gemini?**
- ✅ 100% FREE tier (1,500 req/day)
- ✅ Fast responses (1-2 seconds)
- ✅ High quality (same as paid AIs)
- ✅ Easy integration
- ✅ No credit card required

**Usage in Project:**
```typescript
// AIMessageAssistant.tsx
const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
  {
    method: "POST",
    body: JSON.stringify({
      contents: conversationHistory,
      systemInstruction: dentalSystemPrompt,
    }),
  }
);
```

### Offline Fallback

**Smart Hybrid System:**
```
User Question
    ↓
Try Gemini AI
    ↓
Success? → Use AI Response ✅
Fail? → Use Offline Response 📴
    ↓
User Always Gets Help! 🎉
```

**Coverage:**
- Service pricing
- Pain management
- Medications
- Hygiene tips
- Emergency guidance
- 50+ topics covered

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import GitHub repository
   - Add environment variables
   - Deploy!

3. **Configure Domain** (Optional)
   - Add custom domain in Vercel settings
   - Update `NEXT_PUBLIC_APP_URL` in environment

### Manual Deployment

```bash
# Build
npm run build

# Start production server
npm start
```

---

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  // Current: Teal/Emerald
  primary: colors.teal,
  secondary: colors.emerald,
  accent: colors.cyan,
  
  // Change to your colors:
  // primary: colors.blue,
  // secondary: colors.indigo,
}
```

### Brand Name

Search and replace in all files:
- "DentalCare AI" → "Your Brand Name"
- Update logo: `public/logo.png`
- Update favicon: `public/favicon.ico`

### Service Pricing

Update in AI system prompt and pricing page:
```typescript
// Current pricing:
Regular Checkup: $120
Teeth Cleaning: $90
Emergency Visit: $150
Consultation: $60
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Coding Standards

- Use TypeScript
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Test before committing

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

### Get Help

- 📧 Email: support@dentalcare-ai.com
- 💬 Discord: [Join our community](#)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/dentalcare-ai/issues)
- 📖 Docs: [Documentation](#)

### FAQ

**Q: Is Gemini AI really free?**
A: Yes! Google Gemini offers 1,500 requests/day FREE forever.

**Q: Do I need Vapi for voice?**
A: No! Voice is optional. Text chat works without it.

**Q: Can I use my own database?**
A: Yes! Any PostgreSQL database works (Neon, Supabase, Railway, etc.)

**Q: Is it mobile responsive?**
A: Yes! Works perfectly on all devices.

**Q: Can I customize the theme?**
A: Absolutely! Easy to change colors in Tailwind config.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Clerk](https://clerk.com/) - Authentication
- [Prisma](https://www.prisma.io/) - Database ORM
- [Google Gemini](https://ai.google.dev/) - AI model
- [Vapi](https://vapi.ai/) - Voice AI
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide](https://lucide.dev/) - Icons

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/dentalcare-ai?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/dentalcare-ai?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/dentalcare-ai?style=social)

---

<div align="center">

**Made with ❤️ for better dental care**

**⭐ Star this repo if you like it!**

[🚀 Get Started](#-getting-started) • [📖 Docs](#-documentation) • [💬 Discord](#)

</div>
