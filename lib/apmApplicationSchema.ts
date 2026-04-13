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

export const apmApplicationSchema = z.object({
  fullName: z.string().min(2, 'Name is required').max(200),
  email: z.string().email('Valid email required'),
  phone: z.string().min(8, 'Phone is required').max(24),
  linkedinUrl: optionalHttpUrl('LinkedIn'),
  portfolioUrl: optionalHttpUrl('Portfolio'),
  relevantExperience: z
    .string()
    .min(50, 'Please share a short background (50+ characters)')
    .max(8000),
  automationOperations: z
    .string()
    .min(80, 'Please answer in depth (80+ characters)')
    .max(16_000),
  taskPipelineApproach: z
    .string()
    .min(50, 'A few sentences help us understand how you work (50+ characters)')
    .max(8000),
  additionalNotes: z
    .string()
    .max(6000)
    .default('')
    .transform((s) => {
      const t = s.trim()
      return t === '' ? undefined : t
    }),
  sourceUrl: z.string().max(2000).optional(),
})

export type ApmApplicationInput = z.infer<typeof apmApplicationSchema>
