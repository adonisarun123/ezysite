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

export const careersRoleApplicationSchema = z.object({
  jobSlug: z
    .string()
    .min(2)
    .max(120)
    .regex(/^[a-z0-9-]+$/, 'Invalid role'),
  jobTitle: z.string().min(2).max(300),
  fullName: z.string().min(2, 'Name is required').max(200),
  email: z.string().email('Valid email required'),
  phone: z.string().min(8, 'Phone is required').max(24),
  linkedinUrl: optionalHttpUrl('LinkedIn'),
  relevantExperience: z
    .string()
    .min(80, 'Please share more detail about your relevant experience (80+ characters)')
    .max(8000),
  whyThisRole: z
    .string()
    .min(60, 'A short note on why this role at EzyHelpers helps (60+ characters)')
    .max(4000),
  noticePeriod: optionalTrimmed(120),
  additionalNotes: optionalTrimmed(6000),
  sourceUrl: z.string().max(2000).optional(),
})

export type CareersRoleApplicationInput = z.infer<typeof careersRoleApplicationSchema>
