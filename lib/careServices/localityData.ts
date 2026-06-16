import type { LocalityCareData } from '@/components/care-services/subpages/LocalityCareView'

// Per-locality elderly-care content. Each carries genuine local detail (real
// sub-areas, real hospitals, locality-specific context and testimonials) so
// the pages are distinct, not thin duplicates. Price ranges match Bangalore-wide
// rates; no locality premium.

const sharedCareOptions = [
  {
    title: 'Day shift companion',
    hours: '8 hours · 9am to 5pm',
    fit: 'Working couples whose parents need company and supervision while they are at the office.',
    price: '₹14,000 to ₹18,000 / mo',
  },
  {
    title: '12-hour caretaker',
    hours: '12 hours · day or night',
    fit: 'Families needing more substantial coverage: bath assistance, medication, meal prep, evening companionship.',
    price: '₹18,000 to ₹24,000 / mo',
    highlight: true,
  },
  {
    title: 'Live-in caregiver',
    hours: '24x7 · one weekly off',
    fit: 'Older parents living alone while children are at work or abroad. Full-time presence with overnight cover.',
    price: '₹22,000 to ₹30,000 / mo',
  },
  {
    title: 'Trained attendant (live-in)',
    hours: '24x7 · skilled handling',
    fit: 'Bedridden, post-stroke, advanced dementia, or any high-dependency situation.',
    price: '₹26,000 to ₹34,000 / mo',
  },
]

function baseFaqs(name: string, hospitalLine: string): { question: string; answer: string }[] {
  return [
    {
      question: `How quickly can you place a caregiver in ${name}?`,
      answer: `${name} is well within our core Bangalore coverage. For most situations we attempt same-day placement, and for complex matches such as dementia, post-stroke or specific language needs we typically place within 24 to 48 hours.`,
    },
    {
      question: 'Do you have caregivers who speak English, Hindi, Tamil or Kannada?',
      answer: `Yes. Language match is a primary criterion in our shortlisting, and we routinely match in English, Hindi, Kannada, Tamil, Telugu and Malayalam for families in ${name}.`,
    },
    {
      question: `Can the caregiver accompany my parent to hospitals near ${name}?`,
      answer: `Yes. ${hospitalLine} Hospital escort is part of the standard arrangement: appointment days, scheduled tests and pharmacy collections. We brief the caregiver on your preferred hospital and consultant.`,
    },
    {
      question: 'My parent lives in a gated apartment. Will the caregiver be allowed in?',
      answer: 'We register the caregiver with your apartment security and provide ID and Aadhaar copies in advance. For most complexes this is a routine same-day process.',
    },
    {
      question: 'Are caregivers comfortable with NRI families and remote coordination?',
      answer: 'Yes. Daily WhatsApp updates, weekly video calls, written care logs and time-zone-aware emergency communication are part of how we work with families abroad.',
    },
    {
      question: 'Can we hire someone for just a few hours a day?',
      answer: 'Yes. Day-shift companions from 6 to 8 hours a day are common, especially for working couples. Below 6 hours, an on-demand visit model is usually more cost-effective.',
    },
    {
      question: `What does live-in elderly care in ${name} typically cost?`,
      answer: 'Live-in placements run ₹22,000 to ₹30,000 a month for general elderly care, and ₹26,000 to ₹34,000 a month for trained attendants handling bedridden, advanced-dementia or post-stroke care. These match Bangalore-wide rates; we do not add a locality premium.',
    },
  ]
}

export const LOCALITY_CARE: Record<string, LocalityCareData> = {
  indiranagar: {
    path: '/care-services/elderly-care-indiranagar-bangalore',
    localityName: 'Indiranagar',
    heroSpan: 'from CMH Road and 100 Feet Road to Domlur and the HAL side',
    oneParagraph:
      'Elderly care in Indiranagar means caregivers placed within 30 minutes of your home, briefed on your preferred hospital such as Manipal on Old Airport Road or Chinmaya Mission, and matched to the language and routine your parent is used to. Many Indiranagar seniors have lived in the same independent house or older apartment for decades, and care here is built to fit a home and a life they do not want to leave.',
    reality: [
      {
        kind: 'home',
        title: 'Long-settled households',
        body: 'Indiranagar has many seniors in independent houses and older buildings they have lived in for thirty years or more. Care is built around keeping them in that familiar home, not relocating them.',
      },
      {
        kind: 'nri',
        title: 'Children who moved out',
        body: 'A common pattern here is parents who stayed while their children moved to other cities or abroad. We coordinate daily so distant families stay closely informed.',
      },
      {
        kind: 'hospital',
        title: 'Central hospital access',
        body: 'Indiranagar sits minutes from Manipal Old Airport Road and the central Bangalore hospital network, so acute care is close. Caregivers are briefed on your preferred hospital.',
      },
      {
        kind: 'office',
        title: 'Mixed independent and apartment living',
        body: 'From independent homes on the cross roads to gated apartments near Domlur, access and daily routine vary. We adapt the caregiver arrangement to your specific building.',
      },
    ],
    careOptions: sharedCareOptions,
    subAreas: [
      'CMH Road', '100 Feet Road', 'Domlur', 'HAL 2nd Stage', 'HAL 3rd Stage',
      'Jeevan Bima Nagar', 'Binnamangala', 'Old Madras Road side', 'Kodihalli', 'Ulsoor side',
      '12th Main', 'Defence Colony',
    ],
    hospitals: [
      'Manipal Hospital, Old Airport Road', 'Chinmaya Mission Hospital', 'CMI Hospital',
      'Sakra World Hospital (Marathahalli)', 'Apollo Clinic, Indiranagar', 'Cloudnine, Old Airport Road',
    ],
    testimonials: [
      {
        quote:
          'My mother has lived in the same house off 12th Main for 35 years and refused to move. EzyHelpers placed a caregiver who fits into that house and her routine. She is safe and still home.',
        name: 'Deepa N.',
        place: 'Off 12th Main, Indiranagar',
      },
      {
        quote:
          'I am in London and my father is alone near Domlur. The daily updates and the weekly video call with the caregiver present are what keep me sane across the time difference.',
        name: 'Rohan K.',
        place: 'Father near Domlur, Indiranagar',
      },
      {
        quote:
          'After my father was discharged from Manipal Old Airport Road, the caregiver started the next morning and handled his medications and dressing. The recovery has been smooth.',
        name: 'Sunitha R.',
        place: 'HAL 2nd Stage, Indiranagar',
      },
    ],
    faqs: baseFaqs('Indiranagar', 'Indiranagar is minutes from Manipal Old Airport Road and central hospitals.'),
  },

  jayanagar: {
    path: '/care-services/elderly-care-jayanagar-bangalore',
    localityName: 'Jayanagar',
    heroSpan: 'across all the blocks, from 4th Block to 9th Block and into J P Nagar',
    oneParagraph:
      'Elderly care in Jayanagar means caregivers placed within 30 minutes of your home, briefed on your preferred hospital such as Apollo Jayanagar or Sagar Hospital, and matched to the language, food and temple routine your parent is used to. Jayanagar has one of the largest settled senior populations in Bangalore, and care here respects that traditional South Bangalore rhythm rather than imposing a generic template.',
    reality: [
      {
        kind: 'home',
        title: 'A large, settled senior population',
        body: 'Jayanagar is one of the oldest planned areas of Bangalore with a high proportion of long-resident seniors. Caregivers here are used to traditional households and daily routines.',
      },
      {
        kind: 'hospital',
        title: 'Strong local hospital cluster',
        body: 'Apollo Jayanagar, Sagar Hospital and Fortis are all close, so most appointments and emergencies are handled within the neighbourhood. Caregivers are briefed accordingly.',
      },
      {
        kind: 'home',
        title: 'Routine, food and temple',
        body: 'Many Jayanagar seniors keep a fixed routine around meals, prayer and a daily temple visit. We match caregivers who respect and support that rhythm, including dietary preferences.',
      },
      {
        kind: 'nri',
        title: 'Children settled elsewhere',
        body: 'A common situation here is parents in the family home while children have moved to other cities or abroad. We keep distant families closely updated.',
      },
    ],
    careOptions: sharedCareOptions,
    subAreas: [
      '3rd Block', '4th Block', '5th Block', '7th Block', '9th Block',
      'J P Nagar side', 'Tilak Nagar', 'Banashankari side', 'South End', 'Kanakapura Road side',
      'Yediyur', 'BTM side',
    ],
    hospitals: [
      'Apollo Hospital, Jayanagar', 'Sagar Hospital', 'Fortis Hospital, Bannerghatta Road',
      'Jayadeva Institute of Cardiology', 'BGS Gleneagles Global', 'Apollo Clinic, Jayanagar',
    ],
    testimonials: [
      {
        quote:
          'My mother is particular about her food and her morning prayers. The caregiver EzyHelpers sent respects all of it and has become part of her routine. That mattered more to us than anything.',
        name: 'Lakshmi V.',
        place: '4th Block, Jayanagar',
      },
      {
        quote:
          'My father has a heart condition and Jayadeva is close by. The caregiver takes him to every appointment and keeps detailed notes. We feel in control again.',
        name: 'Suresh B.',
        place: '7th Block, Jayanagar',
      },
      {
        quote:
          'We are in the US and my parents are in the Jayanagar family home. The daily updates let us be present even from far away. The caregiver has been with them eight months now.',
        name: 'Anita G.',
        place: 'Parents in 9th Block, Jayanagar',
      },
    ],
    faqs: baseFaqs('Jayanagar', 'Jayanagar has a strong hospital cluster including Apollo, Sagar and Jayadeva nearby.'),
  },

  marathahalli: {
    path: '/care-services/elderly-care-marathahalli-bangalore',
    localityName: 'Marathahalli',
    heroSpan: 'from Outer Ring Road and Kundalahalli to Munnekolala and HAL',
    oneParagraph:
      'Elderly care in Marathahalli means caregivers placed within 30 minutes of your apartment, briefed on your preferred hospital such as Sakra World or Manipal Whitefield, and matched to the language and routine your parent is used to. Marathahalli is an IT-corridor neighbourhood of young working families and rented apartments, where parents often arrive to help with grandchildren and then need care themselves.',
    reality: [
      {
        kind: 'office',
        title: 'IT-corridor working families',
        body: 'Most Marathahalli households are dual-income tech families near the Outer Ring Road offices. Parents often need a caregiver during work hours and on travel weeks.',
      },
      {
        kind: 'home',
        title: 'Parents who came to help',
        body: 'A common pattern is parents who moved in to help with grandchildren and now need support themselves. Care here often runs alongside a young family and a busy household.',
      },
      {
        kind: 'hospital',
        title: 'Close to the Whitefield hospital cluster',
        body: 'Sakra World, Manipal Whitefield and Vydehi are a short drive away, so acute care is well covered. Caregivers are briefed on the family preferred hospital.',
      },
      {
        kind: 'office',
        title: 'Apartment and rental living',
        body: 'Most seniors here live in apartments and gated complexes near the Outer Ring Road. Lift access and security desks shape how caregivers come and go, and we handle the registration.',
      },
    ],
    careOptions: sharedCareOptions,
    subAreas: [
      'Outer Ring Road', 'Kundalahalli', 'Munnekolala', 'AECS Layout', 'Doddanekkundi',
      'Brookefield side', 'HAL side', 'Marathahalli Bridge', 'Spice Garden', 'Chinnapanahalli',
      'Varthur Road side', 'Whitefield side',
    ],
    hospitals: [
      'Sakra World Hospital', 'Manipal Hospital, Whitefield', 'Vydehi Institute of Medical Sciences',
      'Columbia Asia, Whitefield', 'Cloudnine, Bellandur', 'Aster CMI (north) for referrals',
    ],
    testimonials: [
      {
        quote:
          'My parents came to help with our newborn and then my father had a fall. EzyHelpers placed a caregiver the same day so we could keep working. It held our whole household together.',
        name: 'Vikram S.',
        place: 'Kundalahalli, Marathahalli',
      },
      {
        quote:
          'We both work near the Outer Ring Road and travel often. Knowing a trusted caregiver is with my mother during the day, with daily updates, is what makes our jobs possible.',
        name: 'Meera P.',
        place: 'Munnekolala, Marathahalli',
      },
      {
        quote:
          'After my mother was discharged from Sakra, the caregiver started immediately and handled the recovery at home. Six months on she is steady and independent again.',
        name: 'Arjun T.',
        place: 'AECS Layout, Marathahalli',
      },
    ],
    faqs: baseFaqs('Marathahalli', 'Marathahalli is close to Sakra World, Manipal Whitefield and Vydehi.'),
  },


  'sarjapur-road': {
    path: '/care-services/elderly-care-sarjapur-road-bangalore',
    localityName: 'Sarjapur Road',
    heroSpan: 'from Bellandur and the Outer Ring Road junction out to Dommasandra',
    oneParagraph:
      'Elderly care on Sarjapur Road means caregivers placed within 30 minutes of your apartment, briefed on your preferred hospital such as Sakra World or Manipal Sarjapur, and matched to the language and routine your parent is used to. Sarjapur Road is a fast-growing IT-corridor stretch of large gated townships, where young families bring parents to live with them and then need daytime or live-in support.',
    reality: [
      {
        kind: 'office',
        title: 'IT-corridor townships',
        body: 'Sarjapur Road is lined with large gated communities near the tech parks. Most senior residents live in these townships, and we handle the security registration and access for caregivers.',
      },
      {
        kind: 'home',
        title: 'Parents living with working children',
        body: 'A common situation here is parents who moved in with a working couple and now need care during office hours or overnight. Care often runs alongside a busy young household.',
      },
      {
        kind: 'hospital',
        title: 'Sakra and Manipal close by',
        body: 'Sakra World, Manipal Sarjapur and the Bellandur cluster are a short drive away, so acute care is well covered. Caregivers are briefed on the family preferred hospital.',
      },
      {
        kind: 'nri',
        title: 'Families spread across cities',
        body: 'Many Sarjapur Road families have relatives in other cities or abroad. Daily updates and clear escalation keep everyone informed wherever they are.',
      },
    ],
    careOptions: sharedCareOptions,
    subAreas: [
      'Bellandur', 'Kaikondrahalli', 'Kasavanahalli', 'Haralur Road', 'Doddakannelli',
      'Carmelaram', 'Dommasandra', 'Ambalipura', 'Iblur', 'Panathur side', 'Green Glen Layout', 'Halanayakanahalli',
    ],
    hospitals: [
      'Sakra World Hospital', 'Manipal Hospital, Sarjapur Road', 'Columbia Asia, Sarjapur Road',
      'Cloudnine, Bellandur', 'Motherhood Hospital, Sarjapur', 'Apollo Clinic, Sarjapur Road',
    ],
    testimonials: [
      {
        quote:
          'We brought my mother to our township on Sarjapur Road and then both of us got busier at work. The day-shift caregiver EzyHelpers placed gave us back our peace of mind.',
        name: 'Pooja R.',
        place: 'Kasavanahalli, Sarjapur Road',
      },
      {
        quote:
          'After my fathers surgery at Sakra, the caregiver managed his dressing and medication at home. The handover from the hospital was smooth and the recovery steady.',
        name: 'Aditya V.',
        place: 'Haralur Road, Sarjapur Road',
      },
      {
        quote:
          'I am in Singapore and my parents are in their Sarjapur apartment. The daily updates and a single person I can call make the distance manageable.',
        name: 'Kavya S.',
        place: 'Parents in Bellandur, Sarjapur Road',
      },
    ],
    faqs: baseFaqs('Sarjapur Road', 'Sarjapur Road is close to Sakra World, Manipal Sarjapur and Columbia Asia.'),
  },

  'electronic-city': {
    path: '/care-services/elderly-care-electronic-city-bangalore',
    localityName: 'Electronic City',
    heroSpan: 'across Phase 1 and Phase 2 and the Neeladri Road side',
    oneParagraph:
      'Elderly care in Electronic City means caregivers placed within 30 minutes of your home, briefed on your preferred hospital such as Narayana Health City or Sparsh, and matched to the language and routine your parent is used to. Electronic City is a self-contained tech township at the southern edge of Bangalore, where IT-employee families often have parents living with them, and care is built around the long commutes and shift work of the area.',
    reality: [
      {
        kind: 'office',
        title: 'A self-contained tech township',
        body: 'Electronic City is its own world at the south of the city. Most residents are IT employees, and care here is built around long working hours and the occasional night shift.',
      },
      {
        kind: 'hospital',
        title: 'Narayana Health City close by',
        body: 'Narayana Health City and Sparsh Hospital are nearby, with strong cardiac and specialty care. Caregivers are briefed on the consultant and the appointment cadence.',
      },
      {
        kind: 'home',
        title: 'Parents who moved in to help',
        body: 'A frequent pattern is parents who came to support a young family and now need care of their own. We arrange daytime or live-in cover that fits the household.',
      },
      {
        kind: 'nri',
        title: 'Distance and long commutes',
        body: 'Between long commutes to other parts of the city and relatives in other cities, families here value daily updates and a single point of contact. We provide both.',
      },
    ],
    careOptions: sharedCareOptions,
    subAreas: [
      'Phase 1', 'Phase 2', 'Neeladri Road', 'Doddathoguru', 'Konappana Agrahara',
      'Hosa Road side', 'Begur side', 'Anekal Road side', 'Chandapura side', 'Bommasandra side', 'Hebbagodi', 'Veerasandra',
    ],
    hospitals: [
      'Narayana Health City', 'Sparsh Hospital, Electronic City', 'MVJ Medical College (Hoskote referrals)',
      'Apollo Clinic, Electronic City', 'Motherhood Hospital, Electronic City', 'Vimes Hospital',
    ],
    testimonials: [
      {
        quote:
          'My father has a heart condition and Narayana is right here. The caregiver takes him to every appointment and keeps notes the cardiologist actually finds useful.',
        name: 'Manoj D.',
        place: 'Phase 1, Electronic City',
      },
      {
        quote:
          'Both of us work in the tech park and commute long hours. The live-in caregiver means my mother is never alone, and the daily updates reach us even on the busiest days.',
        name: 'Swathi N.',
        place: 'Neeladri Road, Electronic City',
      },
      {
        quote:
          'After my mothers discharge from Sparsh, the caregiver handled the home recovery completely. Four months on she is independent again and we never had to take long leave.',
        name: 'Praveen R.',
        place: 'Phase 2, Electronic City',
      },
    ],
    faqs: baseFaqs('Electronic City', 'Electronic City is close to Narayana Health City and Sparsh Hospital.'),
  },

  'bannerghatta-road': {
    path: '/care-services/elderly-care-bannerghatta-road-bangalore',
    localityName: 'Bannerghatta Road',
    heroSpan: 'from Jayadeva and BTM down to Hulimavu and Gottigere',
    oneParagraph:
      'Elderly care on Bannerghatta Road means caregivers placed within 30 minutes of your home, briefed on your preferred hospital such as Fortis or Apollo Bannerghatta, and matched to the language and routine your parent is used to. This stretch has one of the strongest hospital clusters in Bangalore, so it suits families managing a parent with ongoing medical needs alongside daily care.',
    reality: [
      {
        kind: 'hospital',
        title: 'A major hospital corridor',
        body: 'Bannerghatta Road has Fortis, Apollo and Jayadeva along its length, so families managing chronic or cardiac conditions are well served. Caregivers coordinate closely with these hospitals.',
      },
      {
        kind: 'home',
        title: 'A mix of old and new neighbourhoods',
        body: 'From settled areas near BTM and Jayadeva to newer apartments toward Hulimavu and Gottigere, households vary. We adapt the caregiver arrangement to your specific home.',
      },
      {
        kind: 'office',
        title: 'Working families nearby',
        body: 'Many adult children here work in the tech parks off Bannerghatta Road and Hosur Road. A dependable daytime caregiver keeps both work and a parents care on track.',
      },
      {
        kind: 'nri',
        title: 'Ongoing medical needs',
        body: 'Because the hospital cluster draws families managing serious conditions, care here often pairs daily support with regular clinical visits. We brief caregivers on both.',
      },
    ],
    careOptions: sharedCareOptions,
    subAreas: [
      'BTM Layout side', 'Jayadeva', 'Bilekahalli', 'Arekere', 'Hulimavu',
      'Gottigere', 'Bannerghatta', 'IIM side', 'Begur Road side', 'JP Nagar side', 'Hosa Road side', 'Kalena Agrahara',
    ],
    hospitals: [
      'Fortis Hospital, Bannerghatta Road', 'Apollo Hospital, Bannerghatta Road', 'Jayadeva Institute of Cardiology',
      'Sagar Hospital', 'BGS Gleneagles Global', 'Apollo Clinic, Bannerghatta Road',
    ],
    testimonials: [
      {
        quote:
          'My mother is under treatment at Fortis and the caregiver coordinates every visit and follows the doctors instructions at home. Having both in step has made a real difference.',
        name: 'Geetha S.',
        place: 'Arekere, Bannerghatta Road',
      },
      {
        quote:
          'My father has a cardiac condition and Jayadeva is close. The caregiver manages his medication and appointments, and keeps records we can show the consultant.',
        name: 'Harish N.',
        place: 'Bilekahalli, Bannerghatta Road',
      },
      {
        quote:
          'We are in Australia and my parents are near Hulimavu. The daily updates and one reliable contact in Bangalore let us be present from far away.',
        name: 'Divya R.',
        place: 'Parents in Hulimavu, Bannerghatta Road',
      },
    ],
    faqs: baseFaqs('Bannerghatta Road', 'Bannerghatta Road has a strong hospital cluster including Fortis, Apollo and Jayadeva.'),
  },
}
