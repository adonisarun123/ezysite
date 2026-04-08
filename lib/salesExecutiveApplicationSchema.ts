import { z } from 'zod'

function optionalHttpUrl(label: string) {
  return z
    .string()
    .max(500)
    .default('')
    .refine((s) => s.trim() === '' || /^https?:\/\/.+/i.test(s.trim()), {
      message: `${label} must be empty or a valid http(s) URL`,
    })
    .transform((s) => {
      const t = s.trim()
      return t === '' ? undefined : t
    })
}

function optionalTrimmed(max: number) {
  return z
    .string()
    .max(max)
    .default('')
    .transform((s) => {
      const t = s.trim()
      return t === '' ? undefined : t
    })
}

export const salesExecutiveApplicationSchema = z.object({
  fullName: z.string().min(2, 'Name is required').max(200),
  email: z.string().email('Valid email required'),
  phone: z.string().min(8, 'Phone is required').max(24),
  linkedinUrl: optionalHttpUrl('LinkedIn'),
  languagesProficiency: z
    .string()
    .min(
      25,
      'Please confirm your comfort with English, Hindi, and Kannada for customer calls'
    )
    .max(2000),
  salesExperienceSummary: z
    .string()
    .min(60, 'Share a bit more about your sales or customer-facing experience')
    .max(8000),
  dealOrFollowUpStory: z
    .string()
    .min(
      60,
      'Tell us about a win or a follow-up sequence you are proud of (60+ characters)'
    )
    .max(8000),
  targetDiscipline: z
    .string()
    .min(40, 'A few sentences on how you work with targets helps')
    .max(4000),
  noticePeriod: optionalTrimmed(120),
  additionalNotes: optionalTrimmed(6000),
  sourceUrl: z.string().max(2000).optional(),
})

export type SalesExecutiveApplicationInput = z.infer<typeof salesExecutiveApplicationSchema>
