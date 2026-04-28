"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import { cn } from "@/lib/utils";

export type FAQItem = {
  question: string;
  answer: string;
};

type FaqTone = "default" | "care";

export default function FAQAccordion({
  faqs,
  tone = "default",
}: {
  faqs: FAQItem[];
  tone?: FaqTone;
}) {
  if (!faqs || faqs.length === 0) return null;

  const itemShell = cn(
    "overflow-hidden rounded-xl shadow-sm transition-shadow",
    tone === "care" &&
      "rounded-2xl border border-emerald-100/90 bg-white/95 shadow-md shadow-emerald-900/[0.06] backdrop-blur-[2px]",
    tone === "default" && "bg-white"
  );

  return (
    <div className={cn("space-y-3 sm:space-y-4", tone === "care" && "space-y-3 sm:space-y-3.5")}>
      {faqs.map((faq, index) => (
        <Disclosure key={index} as="div">
          {({ open }) => (
            <div className={itemShell}>
              <DisclosureButton className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6 sm:py-5">
                <span
                  className={cn(
                    "pr-4 font-semibold text-gray-900 sm:font-bold",
                    tone === "care" ? "text-[15px] font-semibold leading-snug sm:text-base" : "text-lg font-bold"
                  )}
                >
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={cn(
                    "h-5 w-5 shrink-0 transition-transform",
                    tone === "care" ? "text-emerald-700/70" : "text-gray-500",
                    open && "rotate-180"
                  )}
                />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="origin-top px-5 pb-5 text-gray-600 transition duration-200 ease-out data-[closed]:scale-y-95 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 sm:px-6 sm:pb-6"
                >
                  <p className="text-[15px] leading-relaxed text-gray-600 whitespace-pre-line sm:text-base">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </div>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
