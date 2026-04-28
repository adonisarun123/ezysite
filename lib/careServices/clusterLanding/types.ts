/** Horizontal scroll cards */
export type ClusterTone = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6'

export type ServiceScrollCard = {
  tag: string
  title: string
  body: string
  tone: ClusterTone
}

export type CompareAltCard = {
  tag: string
  title: string
  description: string
  href: string
  linkLabel?: string
}

export type PillarGridItem = {
  num: string
  title: string
  description: string
  /** md:col-span */
  span?: 2 | 3
  /** Second wide card with ECG decoration */
  heartbeat?: boolean
}

export type ProcessStep = {
  mark: string
  title: string
  body: string
}

export type HeroChipIcon = 'check' | 'heart' | 'clock' | 'shield' | 'user' | 'spark'

export type HeroChip = {
  icon: HeroChipIcon
  title: string
  sub: string
  grad: string
}

export type CareStory = {
  quote: string
  emphasisPhrase?: string
  name: string
  location: string
  initials: string
}

export type CareClusterLandingConfig = {
  /** Third breadcrumb label */
  breadcrumbCurrent: string
  eyebrow: string
  hero: {
    line1: string
    line2Before: string
    line2Accent: string
    line2After?: string
  }
  heroChips: HeroChip[]
  difference: {
    eyebrow: string
    titleLine1: string
    /** Optional dark segment before the muted segment on the second heading line */
    titleLine2Lead?: string
    titleLine2Muted: string
    lede: string
    featured: {
      tag: string
      title: string
      description: string
      bullets: string[]
      ctaLabel: string
    }
    altLeft: CompareAltCard
    altRight: CompareAltCard
  }
  why: {
    eyebrow: string
    titleLine1: string
    titleLine2Muted: string
    pillars: PillarGridItem[]
  }
  servicesIntro: {
    eyebrow: string
    titleLine1: string
    titleLine2Muted: string
    lede: string
    scrollHint?: string
  }
  serviceCards: ServiceScrollCard[]
  conditionsIntro: {
    eyebrow: string
    titleLine1: string
    titleLine2Muted: string
    lede: string
  }
  conditions: string[]
  stories: CareStory[]
  processIntro: {
    eyebrow: string
    title: string
    lede: string
  }
  processSteps: ProcessStep[]
  finalCta: {
    titleBefore: string
    titleGradient: string
    lede: string
    /** Show link back to care pillar */
    showPillarLink?: boolean
    pillarLinkLabel?: string
  }
}
