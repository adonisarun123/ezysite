# EzyHelpers - Modern House Help Services Website

A modern, conversion-focused website built with Next.js 14 and TailwindCSS for EzyHelpers, India's trusted house help service provider.

## 🚀 Features

- **Modern Design**: Clean, minimalist design inspired by leading service platforms
- **Mobile-First**: Fully responsive design optimized for all devices
- **SEO Optimized**: Built with SEO best practices and structured data
- **Conversion Focused**: Strategic placement of CTAs and lead capture forms
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **Type Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **TypeScript**: Full type safety
- **Deployment**: Optimized for Vercel/Netlify

## 📱 Pages & Features

### Homepage
- Hero section with strong CTAs
- Services overview
- 3-step process explanation
- Cities served
- Customer testimonials
- Lead capture form

### Services
- Live-in Maids
- Full-time Maids
- Part-time Maids
- On-demand Helpers
- Babysitter/Nanny Services
- Elderly Care
- Cooks
- Drivers

### Additional Pages
- Hire a Helper (Lead generation)
- For Helpers (Helper registration)
- About Us
- Contact Us
- Blog/Resources

## 🎨 Design Features

- **Brand Colors**: Warm orange primary (#f1750a) with blue secondary
- **Typography**: Poppins for headings, Inter for body text
- **Components**: Reusable, accessible UI components
- **Animations**: Subtle micro-interactions for better UX
- **Forms**: Validated contact and booking forms

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adonisarun123/ezysite.git
   cd ezyhelpers-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ezyhelpers-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── sections/         # Page sections
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── ProcessSection.tsx
│       ├── CitiesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── WhyChooseUsSection.tsx
│       └── CTASection.tsx
├── public/               # Static assets
├── tailwind.config.js    # TailwindCSS configuration
├── next.config.js        # Next.js configuration
└── package.json         # Dependencies
```

## 🎯 SEO & Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Meta Tags**: Comprehensive SEO meta tags
- **Schema Markup**: Structured data for services
- **Core Web Vitals**: Optimized loading performance
- **Accessibility**: WCAG compliant components

## 📞 Contact Information

- **Phone**: +91 9972571005
- **Email**: contact@ezyhelpers.com
- **WhatsApp**: [Chat with us](https://wa.me/919972571005)

## 🏙️ Service Areas

Currently serving:
- Bangalore
- Mumbai  
- Delhi
- Noida
- Nagpur
- Lucknow
- Kanpur
- Meerut
- Bareilly

## 🤝 Business Credentials

- Registered with DWSSC (Domestic Workers Sector Skill Council)
- Skill India certified
- Startup India registered
- 10,000+ satisfied families
- 4.8/5 customer rating

## 📝 License

This project is created for EzyHelpers house help services.

## 🚀 Deployment

The site is optimized for deployment on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_PHONE=+919972571005
NEXT_PUBLIC_EMAIL=contact@ezyhelpers.com

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# SMTP Email Configuration (for lead notifications)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
ADMIN_EMAIL=admin@ezyhelpers.com
```

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  }
}
```

### Content
- Update service information in component files
- Modify testimonials in `TestimonialsSection.tsx`
- Update city list in `CitiesSection.tsx`
- Change contact information in `Footer.tsx` and `Navbar.tsx`

## 🔗 Supabase Integration

- The project uses Supabase for storing leads from the Hero Section form.
- Configure your Supabase credentials in `.env.local`:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
- The Supabase client is initialized in `lib/supabaseClient.ts`.

## 📧 Email Notifications

The project includes automatic email notifications for lead submissions:

### Features
- **SMTP Integration**: Uses nodemailer for reliable email delivery
- **Lead Types**: Supports contact forms, hire helper forms, and general leads
- **Professional Templates**: HTML and text email templates with lead details
- **Error Handling**: Graceful fallback if email sending fails
- **Admin Notifications**: All leads are sent to the configured admin email

### Email Templates
- **Contact Form**: Includes name, email, phone, subject, and message
- **Hire Helper Form**: Comprehensive service requirements and preferences
- **General Leads**: Basic lead information from hero section and CTAs

### Configuration
Configure SMTP settings in `.env.local`:
```env
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
ADMIN_EMAIL=admin@ezyhelpers.com
```

### Testing
Test your email configuration by visiting `/api/test-email` in your browser.

### Files
- `lib/emailService.ts` - Email service utilities and templates
- `app/api/send-lead-email/route.ts` - API endpoint for sending emails
- `app/api/test-email/route.ts` - Email configuration test endpoint

---

Built with ❤️ for EzyHelpers - Making home management effortless across India. 