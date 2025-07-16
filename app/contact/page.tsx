import { Metadata } from 'next'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactPageClient from '../../components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | EzyHelpers Customer Support',
  description: 'Get in touch with EzyHelpers for all your home service needs. 24/7 customer support available. Call +91 9972571005 or chat with us online.',
  keywords: 'contact EzyHelpers, customer support, home services help, domestic help support, helper booking support',
  openGraph: {
    title: 'Contact EzyHelpers - 24/7 Customer Support',
    description: 'Need help with domestic services? Contact EzyHelpers anytime. Our team is ready to assist you with all your home service requirements.',
    images: [{
      url: '/ezyhelper_logo_new.png',
      width: 1200,
      height: 630,
      alt: 'EzyHelpers Contact Support'
    }]
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactPageClient />
      <Footer />
    </div>
  );
} 