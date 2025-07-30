interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
  aboutPage?: string
}

export default function FAQSchema({ faqs, aboutPage }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "name": "EzyHelpers"
        },
        "dateCreated": "2024-01-01",
        "upvoteCount": 0,
        "url": aboutPage || "https://ezyhelpers.com"
      },
      "author": {
        "@type": "Organization", 
        "name": "EzyHelpers"
      },
      "dateCreated": "2024-01-01",
      "upvoteCount": 0
    })),
    "about": {
      "@type": "Thing",
      "name": "Domestic Help Services",
      "description": "Professional domestic help and home care services"
    },
    "author": {
      "@type": "Organization",
      "name": "EzyHelpers",
      "url": "https://ezyhelpers.com"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "EzyHelpers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ezyhelpers.com/ezyhelper_logo_new.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "inLanguage": "en-IN"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

// Common FAQ sets for different pages
export const generalFAQs: FAQItem[] = [
  {
    question: "How does EzyHelpers verify its domestic helpers?",
    answer: "All our helpers undergo thorough background verification including police checks, identity verification, skill assessment, and reference checks. We also provide ongoing training to ensure quality service."
  },
  {
    question: "What is the pricing structure for EzyHelpers services?",
    answer: "We charge a one-time commission fee, after which you pay directly to your helper. This transparent model ensures fair pricing for both families and helpers with no hidden charges or recurring fees."
  },
  {
    question: "Can I replace a helper if I'm not satisfied?",
    answer: "Yes, we offer a replacement guarantee. If you're not satisfied with your assigned helper, we'll provide a replacement within 24-72 hours at no additional cost."
  },
  {
    question: "Which cities does EzyHelpers serve?",
    answer: "We currently serve major cities including Bangalore, Mumbai, Delhi, Noida, Nagpur, Kanpur, Lucknow, Meerut, and Bareilly. We're continuously expanding to new locations."
  },
  {
    question: "Is customer support available 24/6?",
    answer: "Yes, we provide 24/7 customer support to address any concerns, emergencies, or requirements. You can reach us via phone at +91-9972571005 or through our website."
  },
  {
    question: "What types of domestic help services do you offer?",
    answer: "We offer comprehensive services including live-in maids, full-time maids, part-time maids, on-demand helpers, nannies/babysitters, elderly care, cook services, and driver services."
  }
]

export const serviceFAQs: FAQItem[] = [
  {
    question: "How quickly can I get a helper?",
    answer: "For regular services, we can arrange a helper within 24-48 hours. For on-demand emergency services, we provide same-day assistance based on availability in your area."
  },
  {
    question: "Do helpers bring their own cleaning supplies?",
    answer: "Helpers can work with your existing supplies or bring their own if requested. We recommend discussing supply arrangements during the initial consultation."
  },
  {
    question: "Are helpers trained for specific tasks?",
    answer: "Yes, all helpers receive comprehensive training based on their service category. They're trained in best practices, safety protocols, and customer service standards."
  }
] 