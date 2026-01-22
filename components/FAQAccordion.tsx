"use client";

import { Disclosure, Transition } from "@headlessui/react";
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
        <Disclosure key={index}>
          {({ open }) => (
            <div className="bg-white rounded-xl shadow-sm">
              <Disclosure.Button className="w-full flex items-center justify-between text-left px-6 py-4">
                <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-y-95 opacity-0"
                enterTo="transform scale-y-100 opacity-100"
                leave="transition duration-150 ease-in"
                leaveFrom="transform scale-y-100 opacity-100"
                leaveTo="transform scale-y-95 opacity-0"
              >
                <Disclosure.Panel className="px-6 pb-6 text-gray-600">
                  <p className="leading-relaxed whitespace-pre-line">{faq.answer}</p>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
