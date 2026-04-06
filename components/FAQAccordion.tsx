"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Disclosure key={index} as="div">
          {({ open }) => (
            <div className="bg-white rounded-xl shadow-sm">
              <DisclosureButton className="w-full flex items-center justify-between text-left px-6 py-4">
                <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
                />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="px-6 pb-6 text-gray-600 origin-top transition duration-200 ease-out data-[closed]:scale-y-95 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150"
                >
                  <p className="leading-relaxed whitespace-pre-line">{faq.answer}</p>
                </DisclosurePanel>
              </div>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
