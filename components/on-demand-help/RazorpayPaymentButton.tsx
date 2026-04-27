'use client'

import { useEffect, useRef } from 'react'

/**
 * Razorpay Payment Button embed — injects script per official snippet so `data-payment_button_id` is honored.
 */
export default function RazorpayPaymentButton({
  paymentButtonId,
  className = '',
}: {
  paymentButtonId: string
  className?: string
}) {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    form.replaceChildren()
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js'
    script.async = true
    script.setAttribute('data-payment_button_id', paymentButtonId)
    form.appendChild(script)

    return () => {
      form.replaceChildren()
    }
  }, [paymentButtonId])

  return (
    <form ref={formRef} method="POST" className={`razorpay-payment-form ${className}`}>
      {/* Button injected by Razorpay script */}
    </form>
  )
}
