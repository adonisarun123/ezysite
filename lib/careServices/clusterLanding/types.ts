/** Service-card tone palette (matches Airbnb-inspired warm gradients). */
export type ClusterTone = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6'

/** Identifier for the inline SVG illustration shown inside the card image area. */
export type ServiceIllustration =
  | 'companionship'
  | 'memory'
  | 'medication'
  | 'liveIn'
  | 'meals'
  | 'familyBridge'
  | 'wound'
  | 'iv'
  | 'monitoring'
  | 'mobility'
  | 'bedCare'
  | 'night'
  | 'day'
  | 'recovery'
  | 'conversation'
  | 'transfer'
  | 'shield'
  | 'heart'

export type ServiceScrollCard = {
  /** Small label on image (legacy); omit when using `badge` only */
  tag?: string
  /** Optional pill on image (e.g. “Most requested”, “24×7”) */
  badge?: string
  title: string
  /** Primary descriptive line (tagline) */
  body: string
  tone: ClusterTone
  rating?: string
  detail?: string
  priceBold?: string
  priceRest?: string
  /** Inline SVG illustration shown inside the card's tinted image area. */
  illustration?: ServiceIllustration
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
  /** Dark featured card (e.g. final “why us” tile) */
  spotlight?: boolean
}

export type ProcessStep = {
  mark: string
  title: string
  body: string
}

export type HeroChipIcon = 'check' | 'heart' | 'clock' | 'shield' | 'user' | 'spark' | 'chat'

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
  /** Hero paragraph under H1; overrides page meta description in the hero band when set */
  heroLead?: string
  /** Captions for hero image tiles: tall left, top-right, bottom-right */
  heroCaptions?: [string, string, string]
  /** Primary hero CTA label */
  primaryCtaLabel?: string
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
