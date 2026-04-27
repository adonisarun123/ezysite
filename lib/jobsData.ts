export type JobCategory =
  | 'Housekeeping'
  | 'Cooking'
  | 'Baby Care'
  | 'Elderly Care'
  | 'Live-in Helper'
  | 'Driver'

export type JobType = 'Part-time' | 'Full-time' | 'Live-in'

export type JobLocation =
  | 'HSR Layout'
  | 'Sarjapur Road'
  | 'Whitefield'
  | 'Koramangala'
  | 'Indiranagar'
  | 'Electronic City'
  | 'Marathahalli'

export interface Job {
  id: number
  title: string
  category: JobCategory
  company: 'EzyHelpers'
  location: string
  area: JobLocation
  salary: string
  jobType: JobType
  requirement: string
}

export const JOB_CATEGORIES: JobCategory[] = [
  'Housekeeping',
  'Cooking',
  'Baby Care',
  'Elderly Care',
  'Live-in Helper',
  'Driver',
]

export const JOB_LOCATIONS: JobLocation[] = [
  'HSR Layout',
  'Sarjapur Road',
  'Whitefield',
  'Koramangala',
  'Indiranagar',
  'Electronic City',
  'Marathahalli',
]

export const JOB_TYPES: JobType[] = ['Part-time', 'Full-time', 'Live-in']

export const WHATSAPP_NUMBER = '919187456971'

export function buildWhatsAppMessage(job: Job): string {
  return `Hello EzyHelpers Team, I am interested in applying for the ${job.title} job in ${job.location}. The salary mentioned is ${job.salary} and job type is ${job.jobType}. Please share more details.`
}

export function createWhatsAppLink(job: Job): string {
  const message = buildWhatsAppMessage(job)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Housekeeping Helper',
    category: 'Housekeeping',
    company: 'EzyHelpers',
    location: 'HSR Layout, Bangalore',
    area: 'HSR Layout',
    salary: '₹18,000 - ₹31,680',
    jobType: 'Full-time',
    requirement: 'Experience in cleaning, mopping, dusting and home maintenance',
  },
  {
    id: 2,
    title: 'Cook for Family',
    category: 'Cooking',
    company: 'EzyHelpers',
    location: 'Sarjapur Road, Bangalore',
    area: 'Sarjapur Road',
    salary: '₹16,000 - ₹34,560',
    jobType: 'Full-time',
    requirement: 'Should know North Indian and South Indian cooking',
  },
  {
    id: 3,
    title: 'Baby Care Helper',
    category: 'Baby Care',
    company: 'EzyHelpers',
    location: 'Whitefield, Bangalore',
    area: 'Whitefield',
    salary: '₹22,000 - ₹40,320',
    jobType: 'Full-time',
    requirement: 'Experience in baby care, feeding, hygiene and child safety',
  },
  {
    id: 4,
    title: 'Elderly Care Helper',
    category: 'Elderly Care',
    company: 'EzyHelpers',
    location: 'Indiranagar, Bangalore',
    area: 'Indiranagar',
    salary: '₹22,000 - ₹43,200',
    jobType: 'Full-time',
    requirement: 'Should support elderly person with daily care and companionship',
  },
  {
    id: 5,
    title: 'Live-in Domestic Helper',
    category: 'Live-in Helper',
    company: 'EzyHelpers',
    location: 'Koramangala, Bangalore',
    area: 'Koramangala',
    salary: '₹20,000 - ₹40,320',
    jobType: 'Live-in',
    requirement: 'Stay-in helper required for household work and basic cooking',
  },
  {
    id: 6,
    title: 'Part-time Maid',
    category: 'Housekeeping',
    company: 'EzyHelpers',
    location: 'Marathahalli, Bangalore',
    area: 'Marathahalli',
    salary: '₹6,000 - ₹17,280',
    jobType: 'Part-time',
    requirement: 'Morning or evening work for cleaning and utensils',
  },
  {
    id: 7,
    title: 'Personal Driver',
    category: 'Driver',
    company: 'EzyHelpers',
    location: 'Electronic City, Bangalore',
    area: 'Electronic City',
    salary: '₹20,000 - ₹37,440',
    jobType: 'Full-time',
    requirement: 'Valid licence with 3+ years city driving experience',
  },
  {
    id: 8,
    title: 'Vegetarian Cook',
    category: 'Cooking',
    company: 'EzyHelpers',
    location: 'Koramangala, Bangalore',
    area: 'Koramangala',
    salary: '₹18,000 - ₹36,000',
    jobType: 'Full-time',
    requirement: 'Pure vegetarian cook with experience in Jain or Gujarati cuisine',
  },
  {
    id: 9,
    title: 'Live-in Nanny',
    category: 'Baby Care',
    company: 'EzyHelpers',
    location: 'Whitefield, Bangalore',
    area: 'Whitefield',
    salary: '₹25,000 - ₹46,080',
    jobType: 'Live-in',
    requirement: 'Stay-in nanny for infant care, comfortable with newborns',
  },
  {
    id: 10,
    title: 'Part-time Cook',
    category: 'Cooking',
    company: 'EzyHelpers',
    location: 'HSR Layout, Bangalore',
    area: 'HSR Layout',
    salary: '₹8,000 - ₹20,160',
    jobType: 'Part-time',
    requirement: 'Morning cook for breakfast and lunch, 2-3 hours daily',
  },
  {
    id: 11,
    title: 'Housekeeping Maid',
    category: 'Housekeeping',
    company: 'EzyHelpers',
    location: 'Indiranagar, Bangalore',
    area: 'Indiranagar',
    salary: '₹17,000 - ₹30,240',
    jobType: 'Full-time',
    requirement: 'Daily housekeeping including utensils, laundry and dusting',
  },
  {
    id: 12,
    title: 'Elderly Caretaker (Live-in)',
    category: 'Elderly Care',
    company: 'EzyHelpers',
    location: 'Sarjapur Road, Bangalore',
    area: 'Sarjapur Road',
    salary: '₹24,000 - ₹46,080',
    jobType: 'Live-in',
    requirement: 'Patient caretaker with elderly mobility and medication support',
  },
  {
    id: 13,
    title: 'Family Driver',
    category: 'Driver',
    company: 'EzyHelpers',
    location: 'Whitefield, Bangalore',
    area: 'Whitefield',
    salary: '₹22,000 - ₹40,320',
    jobType: 'Full-time',
    requirement: 'School pickup, errands and weekend trips. Clean record required',
  },
  {
    id: 14,
    title: 'Live-in Maid',
    category: 'Live-in Helper',
    company: 'EzyHelpers',
    location: 'HSR Layout, Bangalore',
    area: 'HSR Layout',
    salary: '₹22,000 - ₹40,320',
    jobType: 'Live-in',
    requirement: 'All-rounder helper for cleaning, cooking and childcare support',
  },
  {
    id: 15,
    title: 'Baby Sitter (Day)',
    category: 'Baby Care',
    company: 'EzyHelpers',
    location: 'Marathahalli, Bangalore',
    area: 'Marathahalli',
    salary: '₹15,000 - ₹28,800',
    jobType: 'Part-time',
    requirement: 'Daytime sitter for toddler aged 2, gentle and active',
  },
  {
    id: 16,
    title: 'North Indian Cook',
    category: 'Cooking',
    company: 'EzyHelpers',
    location: 'Indiranagar, Bangalore',
    area: 'Indiranagar',
    salary: '₹20,000 - ₹37,440',
    jobType: 'Full-time',
    requirement: 'Skilled in roti, dal, sabzi and Punjabi cuisine for daily meals',
  },
  {
    id: 17,
    title: 'Patient Care Helper',
    category: 'Elderly Care',
    company: 'EzyHelpers',
    location: 'Electronic City, Bangalore',
    area: 'Electronic City',
    salary: '₹20,000 - ₹37,440',
    jobType: 'Full-time',
    requirement: 'Bedridden patient care, basic nursing knowledge preferred',
  },
  {
    id: 18,
    title: 'Deep Cleaning Helper',
    category: 'Housekeeping',
    company: 'EzyHelpers',
    location: 'Koramangala, Bangalore',
    area: 'Koramangala',
    salary: '₹16,000 - ₹28,800',
    jobType: 'Full-time',
    requirement: 'Experienced in bathroom, kitchen and floor deep cleaning',
  },
  {
    id: 19,
    title: 'School Driver',
    category: 'Driver',
    company: 'EzyHelpers',
    location: 'HSR Layout, Bangalore',
    area: 'HSR Layout',
    salary: '₹18,000 - ₹31,680',
    jobType: 'Part-time',
    requirement: 'Morning and evening school runs, polite and punctual',
  },
  {
    id: 20,
    title: 'All-rounder Live-in Helper',
    category: 'Live-in Helper',
    company: 'EzyHelpers',
    location: 'Sarjapur Road, Bangalore',
    area: 'Sarjapur Road',
    salary: '₹22,000 - ₹43,200',
    jobType: 'Live-in',
    requirement: 'Cleaning, cooking, laundry and basic care for joint family',
  },
  {
    id: 21,
    title: 'Newborn Care Helper (Japa)',
    category: 'Baby Care',
    company: 'EzyHelpers',
    location: 'Indiranagar, Bangalore',
    area: 'Indiranagar',
    salary: '₹26,000 - ₹50,400',
    jobType: 'Live-in',
    requirement: 'Japa maid for new mother and newborn baby, 3-month assignment',
  },
  {
    id: 22,
    title: 'Part-time Housekeeper',
    category: 'Housekeeping',
    company: 'EzyHelpers',
    location: 'Whitefield, Bangalore',
    area: 'Whitefield',
    salary: '₹7,000 - ₹18,720',
    jobType: 'Part-time',
    requirement: 'Daily 2-hour cleaning and utensils for working couple',
  },
  {
    id: 23,
    title: 'South Indian Cook',
    category: 'Cooking',
    company: 'EzyHelpers',
    location: 'Electronic City, Bangalore',
    area: 'Electronic City',
    salary: '₹17,000 - ₹33,120',
    jobType: 'Full-time',
    requirement: 'Specialist in idli, dosa, sambar, rasam and traditional meals',
  },
  {
    id: 24,
    title: 'Senior Citizen Companion',
    category: 'Elderly Care',
    company: 'EzyHelpers',
    location: 'Marathahalli, Bangalore',
    area: 'Marathahalli',
    salary: '₹15,000 - ₹28,800',
    jobType: 'Part-time',
    requirement: 'Day companion for senior citizen, conversation and light walks',
  },
]
