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

export const chiefOfStaffApplicationSchema = z.object({
  fullName: z.string().min(2, 'Name is required').max(200),
  email: z.string().email('Valid email required'),
  phone: z.string().min(8, 'Phone is required').max(24),
  linkedinUrl: optionalHttpUrl('LinkedIn'),
  portfolioUrl: optionalHttpUrl('Portfolio'),
  problemSolved: z
    .string()
    .min(50, 'Please share at least a few sentences (50+ characters)')
    .max(12_000),
  improveThirtyDays: z
    .string()
    .min(50, 'Please share at least a few sentences (50+ characters)')
    .max(12_000),
  builtSomething: z
    .string()
    .min(30, 'A short paragraph helps us understand you')
    .max(12_000),
  whyNotHireYou: z
    .string()
    .min(20, 'Honest answers matter — even a few lines')
    .max(8000),
  sourceUrl: z.string().max(2000).optional(),
})

export type ChiefOfStaffApplicationInput = z.infer<typeof chiefOfStaffApplicationSchema>
