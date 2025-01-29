"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How do I order prescription glasses online?",
    answer:
      "Ordering prescription glasses is easy! Simply upload your prescription during checkout, select your frames, and customize your lenses. Our optical experts will review your order before processing.",
  },
  {
    question: "What's your return policy?",
    answer:
      "We offer a 30-day return policy for all frames. If you're not completely satisfied, you can return them for a full refund or exchange.",
  },
  {
    question: "How can I try on glasses virtually?",
    answer:
      "Our virtual try-on feature lets you see how frames look on your face using your device's camera. Look for the 'Virtual Try-On' button on any product page.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major vision insurance providers. You can submit your claim directly through our website after purchase.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for faster delivery.",
  },
  {
    question: "How do I know if my frames fit?",
    answer:
      "Each frame listing includes detailed measurements. You can also use our size guide or chat with our fit specialists for personalized recommendations.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FFB6A3] to-[#7CCCBF] text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">Our customer support team is here to help you 24/7</p>
          <button className="bg-[#7CCCBF] text-white px-8 py-3 rounded-lg hover:bg-[#6BB1A5] transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

