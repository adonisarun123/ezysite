# EzyHelpers - Modern House Help Services Website

> A production-ready, secure, and performant Next.js application for India's trusted house help service provider.

[![CI/CD](https://github.com/adonisarun123/ezysite/actions/workflows/ci.yml/badge.svg)](https://github.com/adonisarun123/ezysite/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)

## 🚀 Features

### Core Features
- **Modern Design**: Clean, conversion-focused UI with mobile-first approach
- **Type Safe**: Full TypeScript support with strict type checking
- **SEO Optimized**: Structured data, meta tags, and dynamic sitemaps
- **Performance**: Lighthouse score 90+ with optimized bundles
- **Accessibility**: WCAG compliant components

### Security Features 🔒
- **API Authentication**: JWT-based authentication for sensitive endpoints
- **Rate Limiting**: Configurable rate limits to prevent abuse
- **Input Sanitization**: XSS prevention in all user inputs
- **Data Masking**: Sensitive data (IDs, bank accounts) masked in emails
- **Environment Validation**: Runtime validation of all environment variables
- **Secure Debug Endpoints**: Production-protected debugging tools

### Backend Features
- **Supabase Integration**: PostgreSQL database with Row Level Security
- **Email Service**: Retry logic, structured templates, and delivery tracking
- **File Uploads**: Parallel uploads to Supabase storage
- **Structured Logging**: Production-ready logging with external service support
- **Database Indexes**: Optimized queries for common patterns

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: TailwindCSS 3.3
- **UI Components**: Radix UI + Headless UI
- **Icons**: Heroicons + Lucide React
- **Animations**: Framer Motion 10
- **Forms**: React Hook Form 7.48

### Backend
- **Database**: Supabase (PostgreSQL)
- **Email**: Nodemailer 6.10
- **Validation**: Zod 4.1 + libphonenumber-js
- **File Storage**: Supabase Storage
- **Authentication**: Custom JWT middleware

### Development
- **Build Tool**: Next.js with SWC
- **Linting**: ESLint 8.55
- **Testing**: Playwright 1.53 (E2E ready)
- **CI/CD**: GitHub Actions

## 📦 Installation

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm
- Supabase account (free tier available)
- SMTP email service (Gmail, SendGrid, etc.)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/adonisarun123/ezysite.git
cd ezysite

# Install dependencies (skip Puppeteer download)
PUPPETEER_SKIP_DOWNLOAD=true npm install

# Copy environment template
cp .env.example .env.local

# Configure your environment variables (see below)

# Run development server
npm run dev

# Open http://localhost:3000
```

### Environment Variables

Create a `.env.local` file with the following:

```env
# ===================
# Required Variables
# ===================

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# SMTP Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Recipients (comma-separated)
EMAIL_RECIPIENTS=contact@ezyhelpers.com,admin@ezyhelpers.com
ADMIN_EMAIL=admin@ezyhelpers.com

# API Security
API_SECRET_KEY=generate-a-secure-random-32-char-key-here

# Node Environment
NODE_ENV=development

# ===================
# Optional Variables
# ===================

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
NEXT_PUBLIC_FB_PIXEL_ID=xxxxxxxxxx
```

### Generate API Secret Key

```bash
# Generate a secure 32-character key
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 🗄️ Database Setup

### 1. Create Supabase Tables

Run these SQL commands in your Supabase SQL editor:

```sql
-- Helpers table
CREATE TABLE helpers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  helper_type VARCHAR(50) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  gender VARCHAR(20),
  date_of_birth DATE,
  age INTEGER,
  native_state VARCHAR(100),
  current_locality VARCHAR(200),
  languages_known TEXT[],
  education_level VARCHAR(50),
  marital_status VARCHAR(20),
  spouse_occupation VARCHAR(100),
  kids_count INTEGER DEFAULT 0,
  smartphone_available BOOLEAN DEFAULT false,
  whatsapp_active BOOLEAN DEFAULT false,
  vaccination_status VARCHAR(50),
  experience_months INTEGER DEFAULT 0,
  specialities TEXT[],
  working_hours_preference VARCHAR(100),
  preferred_localities TEXT,
  max_placements_per_month INTEGER DEFAULT 1,
  expected_salary_min INTEGER,
  expected_salary_max INTEGER,
  id_proof_type VARCHAR(50),
  id_proof_number VARCHAR(100),
  id_proof_file_url TEXT,
  bank_name VARCHAR(100),
  bank_ifsc VARCHAR(11),
  account_holder_name VARCHAR(100),
  account_number VARCHAR(50),
  helper_photo_url TEXT,
  primary_phone VARCHAR(15),
  alternate_phone VARCHAR(15),
  emergency_contact_name VARCHAR(100),
  emergency_contact_phone VARCHAR(15),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  listed_by VARCHAR(100),
  internal_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agents table
CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  agency_name VARCHAR(200) NOT NULL,
  registration_number VARCHAR(100),
  year_founded INTEGER,
  services_offered TEXT[],
  max_helpers_supply INTEGER,
  owner_name VARCHAR(100),
  owner_dob DATE,
  owner_id_type VARCHAR(50),
  owner_id_number VARCHAR(100),
  primary_phone VARCHAR(15),
  secondary_phone VARCHAR(15),
  email VARCHAR(255),
  office_address_line1 VARCHAR(255),
  office_address_line2 VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  pincode VARCHAR(6),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  listed_by VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. Create Storage Buckets

In Supabase Storage, create these buckets:
- `helper-documents` (private)
- `agent-documents` (private)

### 3. Run Database Migrations

```bash
# Apply database indexes for performance
# Copy SQL from supabase/migrations/create_indexes.sql
# and run in Supabase SQL editor
```

## 🔒 Security Best Practices

### API Authentication

Protected endpoints require an API key in the Authorization header:

```bash
curl -H "Authorization: Bearer YOUR_API_SECRET_KEY" \
  https://your-domain.com/api/helpers
```

### Rate Limiting

Default limits (configurable in `lib/constants.ts`):
- API requests: 50 per minute per key
- Form submissions: 10 per hour per IP
- Email sends: 100 per hour

### Row Level Security (RLS)

Enable RLS in Supabase for all tables:

```sql
ALTER TABLE helpers ENABLE ROW LEVEL SECURITY;
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;

-- Add policies as needed
```

## 📧 Email Configuration

### Supported Providers

- **Gmail**: Use App Passwords
- **SendGrid**: Recommended for production
- **AWS SES**: Best for high volume
- **Mailgun**: Alternative option

### Gmail Setup

1. Enable 2-factor authentication
2. Generate App Password
3. Use in `SMTP_PASS`

### Email Features

- **Retry Logic**: 3 attempts with exponential backoff
- **Masked Data**: Sensitive information protected
- **Structured Logging**: All sends tracked
- **Template System**: HTML + text versions

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### Environment Variables in Vercel

Add all variables from `.env.local` in:
Settings → Environment Variables

### Build Configuration

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "PUPPETEER_SKIP_DOWNLOAD=true npm install"
}
```

## 🧪 Testing

### Run Linting

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

### Build Test

```bash
npm run build
```

### E2E Tests (Coming Soon)

```bash
npm run test:e2e
```

## 📊 Monitoring & Logging

### Structured Logging

```typescript
import { logger } from '@/lib/logger';

logger.info('User registered', { userId: '123', email: 'user@example.com' });
logger.error('Payment failed', error, { orderId: '456' });
```

### Log Levels

- `DEBUG`: Development only
- `INFO`: General information
- `WARN`: Warning messages
- `ERROR`: Error messages (sent to error tracking)

### Production Monitoring

Integrate with:
- **Sentry**: Error tracking
- **Datadog**: Application monitoring
- **LogRocket**: Session replay

## 🔧 Scripts

```bash
npm run dev              # Start development server
npm run build            # Production build
npm start                # Start production server
npm run lint             # Run ESLint
npm run analyze-bundle   # Analyze bundle size
npm run generate-sitemap # Generate XML sitemap
npm run build:optimized  # Build with optimizations
```

## 📁 Project Structure

```
ezysite/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── helpers/          # Helper CRUD
│   │   ├── agents/           # Agent CRUD
│   │   ├── send-lead-email/  # Email sending
│   │   └── debug-env/        # Debug endpoint
│   ├── cities/               # City pages
│   ├── services/             # Service pages
│   └── layout.tsx            # Root layout
├── components/               # React components
│   ├── sections/             # Page sections
│   ├── ui/                   # UI components
│   └── schema/               # JSON-LD schemas
├── lib/                      # Core utilities
│   ├── auth.ts               # Authentication
│   ├── constants.ts          # App constants
│   ├── emailService.ts       # Email service
│   ├── env.ts                # Environment validation
│   ├── logger.ts             # Structured logging
│   ├── sanitize.ts           # Input sanitization
│   └── supabaseClient.ts     # Database client
├── types/                    # TypeScript types
│   ├── api.ts                # API types
│   └── email.ts              # Email types
├── supabase/                 # Database
│   └── migrations/           # SQL migrations
├── .github/                  # GitHub Actions
│   └── workflows/            # CI/CD pipelines
└── public/                   # Static assets
```

## 🎯 Performance

### Optimization Features

- **Bundle Size**: < 250KB first load JS
- **Image Optimization**: WebP/AVIF with Next.js Image
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Aggressive unused code elimination
- **CSS Optimization**: Critical inline CSS
- **Modern Browsers**: ES2022+ targeting

### Lighthouse Scores

- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

## 🤝 Contributing

This is a private project for EzyHelpers. For bug reports or feature requests, please contact the development team.

## 📄 License

Proprietary - All rights reserved by EzyHelpers

## 📞 Support

- **Technical Issues**: tech@ezyhelpers.com
- **Business Inquiries**: contact@ezyhelpers.com
- **Phone**: +91 9972571005

---

**Built with ❤️ for EzyHelpers** - Making home management effortless across India
