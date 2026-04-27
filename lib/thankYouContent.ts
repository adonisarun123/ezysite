export interface ThankYouCopy {
  headline: string
  body: string
  refLabel?: string
}

/** Query param ?type=… from forms → page copy */
export function getThankYouCopy(type: string | undefined, ref?: string): ThankYouCopy {
  const t = (type || '').toLowerCase().trim()
  const refNote =
    ref && ref.length > 0
      ? ' Save this reference for follow-up with our team.'
      : ''

  switch (t) {
    case 'agent':
      return {
        headline: 'Agent registration received',
        body:
          'Thank you for registering as an agency partner with EzyHelpers. Our team will review your application and contact you within two business days.',
        refLabel: ref || undefined,
      }
    case 'helper':
      return {
        headline: 'Helper registration received',
        body:
          `Thank you for registering with EzyHelpers. Our verification team will review your profile and reach out shortly.${refNote}`,
        refLabel: ref || undefined,
      }
    case 'hire':
      return {
        headline: 'Thanks for your enquiry',
        body:
          'We have received your hiring request. Our placement team will contact you shortly to discuss verified helpers.',
        refLabel: ref || undefined,
      }
    case 'requirement':
      return {
        headline: 'Requirement submitted',
        body:
          'Thank you — we have logged your requirement. Our team will reach out with matching options.',
        refLabel: ref || undefined,
      }
    case 'nest':
      return {
        headline: 'Nest booking request received',
        body:
          'Thank you for your Nest stay enquiry. Our team will call you shortly to confirm details.',
        refLabel: ref || undefined,
      }
    case 'contact':
      return {
        headline: 'Message sent',
        body:
          'Thank you for contacting EzyHelpers. We will get back to you as soon as possible.',
        refLabel: ref || undefined,
      }
    case 'on_demand':
      return {
        headline: 'Request received',
        body:
          'Your on-demand helper request has been submitted. Our team will contact you shortly.',
        refLabel: ref || undefined,
      }
    case 'comprehensive':
      return {
        headline: 'Service request received',
        body:
          'Your detailed service request has been submitted. We will contact you within two hours during working hours.',
        refLabel: undefined,
      }
    case 'ad':
      return {
        headline: 'Request received',
        body:
          'Thank you for your interest. Our team will call you shortly to discuss verified profiles.',
        refLabel: ref || undefined,
      }
    case 'helper_lead':
      return {
        headline: 'Details saved',
        body:
          'Thank you — we have recorded your job preferences. Our team may reach out with suitable opportunities.',
        refLabel: undefined,
      }
    case 'career':
      return {
        headline: 'Application received',
        body:
          'Thank you for applying. If your profile matches an open role, our hiring team will contact you.',
        refLabel: undefined,
      }
    default:
      return {
        headline: 'Thank you',
        body:
          'Your submission was received successfully. Our team will be in touch if needed.',
        refLabel: ref || undefined,
      }
  }
}
