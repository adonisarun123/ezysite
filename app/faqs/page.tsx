import { Metadata } from 'next'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FAQPageClient from '../../components/FAQPageClient';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | EzyHelpers Help Center',
  description: 'Find answers to common questions about EzyHelpers services, booking process, helper verification, pricing, and more. Get help with domestic services.',
  keywords: 'EzyHelpers FAQs, domestic help questions, maid service FAQ, helper booking help, home services questions',
  openGraph: {
    title: 'EzyHelpers FAQ - Get Answers to Your Questions',
    description: 'Find comprehensive answers about our domestic help services, booking process, helper verification, pricing, and safety measures.',
    images: [{
      url: '/ezyhelper_logo_new.png',
      width: 1200,
      height: 630,
      alt: 'EzyHelpers FAQ Help Center'
    }]
  }
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FAQPageClient />
      <Footer />
    </div>
  );
}
