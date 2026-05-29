/**
 * Inline service-card illustrations — peg-doll / flat style mirroring the
 * elderly-care inspiration HTML. No external assets, no external fonts.
 *
 * Each component renders a 200×200 viewBox SVG that fills its parent.
 * The parent provides a coloured gradient background; these illustrations sit
 * centred on top using solid, calm fills tuned for warm tones.
 */
import type { ComponentType, SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const baseProps = {
  viewBox: '0 0 200 200',
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'xMidYMid meet',
  'aria-hidden': true,
} as const

/** Companionship: caretaker holding senior's hand. */
function Companionship(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="60" ry="9" fill="rgba(0,0,0,0.08)" />
      <circle cx="80" cy="78" r="16" fill="#5C3527" />
      <circle cx="80" cy="76" r="5" fill="#3D2419" />
      <path d="M65 95 Q65 88 73 88 L87 88 Q95 88 95 95 L95 165 Q95 170 90 170 L70 170 Q65 170 65 165 Z" fill="#FFFFFF" />
      <line x1="100" y1="105" x2="110" y2="170" stroke="#3F2418" strokeWidth="3" strokeLinecap="round" />
      <circle cx="130" cy="90" r="14" fill="#3D2419" />
      <circle cx="130" cy="88" r="4" fill="#1F1208" />
      <path d="M117 105 Q117 100 124 100 L136 100 Q143 100 143 105 L143 165 Q143 170 138 170 L122 170 Q117 170 117 165 Z" fill="#FF7D5C" />
      <path d="M95 125 Q113 118 120 125" stroke="#FF385C" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="160" cy="48" r="22" fill="rgba(255,255,255,0.45)" />
    </svg>
  )
}

/** Memory-aware: gentle face on a soft circle. */
function MemoryAware(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <circle cx="100" cy="100" r="58" fill="rgba(255,255,255,0.55)" />
      <circle cx="100" cy="100" r="46" fill="#FFFFFF" />
      <circle cx="86" cy="92" r="3.5" fill="#3D5C45" />
      <circle cx="114" cy="92" r="3.5" fill="#3D5C45" />
      <path d="M84 110 Q100 122 116 110" stroke="#3D5C45" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M70 80 Q78 65 90 70 M110 70 Q122 65 130 80" stroke="#3D5C45" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Medication & mobility: weekly pill organiser. */
function Medication(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="165" rx="58" ry="6" fill="rgba(0,0,0,0.08)" />
      <rect x="55" y="80" width="90" height="65" rx="10" fill="#FFFFFF" />
      <rect x="62" y="92" width="76" height="6" rx="3" fill="#A0522D" />
      <circle cx="76" cy="115" r="6.5" fill="#FFB39A" />
      <circle cx="100" cy="115" r="6.5" fill="#9BC9A6" />
      <circle cx="124" cy="115" r="6.5" fill="#FFB39A" />
      <circle cx="76" cy="132" r="6.5" fill="#9BC9A6" />
      <circle cx="100" cy="132" r="6.5" fill="#FFB39A" />
      <circle cx="124" cy="132" r="6.5" fill="#9BC9A6" />
      <path d="M50 80 L50 65 Q50 55 60 55 L140 55 Q150 55 150 65 L150 80" stroke="#A0522D" strokeWidth="3" fill="none" />
    </svg>
  )
}

/** Live-in supervision: cosy home + moon. */
function LiveIn(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="60" ry="8" fill="rgba(0,0,0,0.08)" />
      <path d="M50 130 L50 100 Q50 90 60 90 L140 90 Q150 90 150 100 L150 130 L160 130 L160 145 L40 145 L40 130 Z" fill="#FFFFFF" />
      <rect x="70" y="105" width="60" height="20" rx="4" fill="#FFE5E5" />
      <path d="M40 100 L100 60 L160 100" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="160" cy="60" r="20" fill="#FFFFFF" />
      <circle cx="170" cy="55" r="15" fill="#B5A3DD" />
    </svg>
  )
}

/** Meals & hydration: warm dish with cutlery. */
function Meals(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="155" rx="60" ry="9" fill="rgba(0,0,0,0.08)" />
      <ellipse cx="100" cy="135" rx="50" ry="10" fill="#F19BAB" />
      <path d="M60 110 Q60 90 80 90 L120 90 Q140 90 140 110 L140 130 Q140 140 130 140 L70 140 Q60 140 60 130 Z" fill="#FFFFFF" />
      <circle cx="100" cy="115" r="20" fill="#FFB39A" />
      <path d="M80 70 Q83 60 80 50 M100 70 Q103 60 100 50 M120 70 Q123 60 120 50" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Family bridge: house with heart for NRI/outstation updates. */
function FamilyBridge(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="58" ry="8" fill="rgba(0,0,0,0.08)" />
      <circle cx="100" cy="100" r="55" fill="rgba(255,255,255,0.6)" />
      <path d="M70 90 L100 70 L130 90 L130 130 Q130 140 120 140 L80 140 Q70 140 70 130 Z" fill="#FFFFFF" />
      <path d="M70 90 L100 70 L130 90" stroke="#3D5C75" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M100 105 C100 100 95 96 90 96 C85 96 80 100 80 105 C80 115 100 130 100 130 C100 130 120 115 120 105 C120 100 115 96 110 96 C105 96 100 100 100 105" fill="#FF385C" />
    </svg>
  )
}

/** Wound dressing — gentle bandage cross. */
function WoundCare(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="165" rx="58" ry="7" fill="rgba(0,0,0,0.08)" />
      <circle cx="100" cy="100" r="55" fill="rgba(255,255,255,0.55)" />
      <rect x="55" y="90" width="90" height="22" rx="11" fill="#FFFFFF" transform="rotate(-30 100 100)" />
      <rect x="55" y="90" width="90" height="22" rx="11" fill="#FFFFFF" transform="rotate(60 100 100)" />
      <circle cx="80" cy="80" r="2.5" fill="#A8634C" />
      <circle cx="120" cy="80" r="2.5" fill="#A8634C" />
      <circle cx="80" cy="120" r="2.5" fill="#A8634C" />
      <circle cx="120" cy="120" r="2.5" fill="#A8634C" />
    </svg>
  )
}

/** IV therapy — drip line. */
function IvTherapy(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="50" ry="7" fill="rgba(0,0,0,0.08)" />
      <rect x="60" y="40" width="36" height="20" rx="4" fill="#5C3527" />
      <path d="M62 60 L94 60 L94 110 Q94 122 80 122 Q66 122 66 110 Z" fill="#FFFFFF" />
      <path d="M70 80 L88 80 L88 110 Q88 116 80 116 Q72 116 72 110 Z" fill="#9BC9A6" opacity="0.85" />
      <line x1="80" y1="122" x2="80" y2="155" stroke="#5C3527" strokeWidth="2" />
      <circle cx="80" cy="160" r="6" fill="#FF385C" />
      <line x1="80" y1="55" x2="80" y2="35" stroke="#5C3527" strokeWidth="3" />
      <path d="M75 35 L85 35" stroke="#5C3527" strokeWidth="3" strokeLinecap="round" />
      <path d="M115 130 Q145 120 145 95" stroke="#5C3527" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Vitals monitoring — heartbeat ring. */
function Monitoring(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <circle cx="100" cy="100" r="58" fill="rgba(255,255,255,0.55)" />
      <circle cx="100" cy="100" r="48" fill="#FFFFFF" />
      <path d="M55 100 L78 100 L86 80 L98 122 L110 88 L118 100 L145 100" stroke="#FF385C" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Mobility / cane support. */
function Mobility(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <circle cx="95" cy="65" r="14" fill="#5C3527" />
      <path d="M82 80 Q82 75 88 75 L102 75 Q108 75 108 80 L108 145 Q108 150 103 150 L87 150 Q82 150 82 145 Z" fill="#FFFFFF" />
      <line x1="115" y1="95" x2="130" y2="170" stroke="#3F2418" strokeWidth="4" strokeLinecap="round" />
      <path d="M125 95 L135 95" stroke="#3F2418" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="95" cy="160" rx="10" ry="6" fill="#3F2418" />
    </svg>
  )
}

/** Bed care — patient in bed. */
function BedCare(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="65" ry="7" fill="rgba(0,0,0,0.08)" />
      <rect x="35" y="105" width="130" height="48" rx="8" fill="#FFFFFF" />
      <rect x="35" y="78" width="14" height="75" rx="4" fill="#A0522D" />
      <rect x="151" y="92" width="14" height="61" rx="4" fill="#A0522D" />
      <rect x="55" y="115" width="90" height="22" rx="6" fill="#FFE0D9" />
      <circle cx="68" cy="118" r="9" fill="#5C3527" />
      <rect x="55" y="135" width="90" height="6" rx="3" fill="#FFB39A" />
    </svg>
  )
}

/** Night supervision — moon + stars. */
function NightShift(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="58" ry="8" fill="rgba(0,0,0,0.08)" />
      <path d="M125 60 A45 45 0 1 0 125 140 A35 35 0 1 1 125 60 Z" fill="#FFFFFF" />
      <circle cx="60" cy="60" r="3" fill="rgba(255,255,255,0.85)" />
      <circle cx="80" cy="40" r="2" fill="rgba(255,255,255,0.85)" />
      <circle cx="50" cy="100" r="2.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="160" cy="150" r="2.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="40" cy="140" r="2" fill="rgba(255,255,255,0.65)" />
    </svg>
  )
}

/** Day shift — sun rising over rooftop. */
function DayShift(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="60" ry="8" fill="rgba(0,0,0,0.08)" />
      <circle cx="100" cy="92" r="32" fill="rgba(255,255,255,0.6)" />
      <circle cx="100" cy="92" r="22" fill="#FFFFFF" />
      <path d="M100 50 L100 38 M100 146 L100 134 M58 92 L46 92 M154 92 L142 92 M70 62 L62 54 M138 62 L146 54" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 145 L100 110 L160 145 L160 160 L40 160 Z" fill="#FFFFFF" />
      <rect x="84" y="130" width="14" height="30" fill="#FFE5E5" />
    </svg>
  )
}

/** Recovery — heart with arc (post-op rehab). */
function Recovery(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <circle cx="100" cy="100" r="55" fill="rgba(255,255,255,0.55)" />
      <path d="M100 88 C100 78 90 70 80 70 C68 70 60 80 60 92 C60 112 100 138 100 138 C100 138 140 112 140 92 C140 80 132 70 120 70 C110 70 100 78 100 88" fill="#FFFFFF" />
      <path d="M64 110 L78 110 L86 90 L98 130 L110 96 L118 110 L132 110" stroke="#FF385C" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Companionship & social — chat bubbles. */
function Conversation(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <path d="M50 70 Q50 56 64 56 L120 56 Q134 56 134 70 L134 100 Q134 114 120 114 L88 114 L72 130 L72 114 L64 114 Q50 114 50 100 Z" fill="#FFFFFF" />
      <circle cx="78" cy="85" r="3" fill="#3D5C75" />
      <circle cx="92" cy="85" r="3" fill="#3D5C75" />
      <circle cx="106" cy="85" r="3" fill="#3D5C75" />
      <path d="M150 95 Q150 86 158 86 L180 86 Q188 86 188 95 L188 115 Q188 124 180 124 L170 124 L162 134 L162 124 L158 124 Q150 124 150 115 Z" fill="#FF385C" />
    </svg>
  )
}

/** Trained / heavy handling — hoist arm. */
function Transfer(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <rect x="40" y="50" width="120" height="10" rx="3" fill="#FFFFFF" />
      <line x1="100" y1="60" x2="100" y2="100" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="108" r="8" fill="#FFFFFF" />
      <path d="M65 130 Q65 120 75 120 L125 120 Q135 120 135 130 L135 150 Q135 158 127 158 L73 158 Q65 158 65 150 Z" fill="#FFFFFF" />
      <circle cx="100" cy="135" r="9" fill="#FFB39A" />
    </svg>
  )
}

/** Verified / shield — trust. */
function Shield(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <path d="M100 40 L150 60 L150 110 Q150 145 100 162 Q50 145 50 110 L50 60 Z" fill="#FFFFFF" />
      <path d="M78 100 L94 116 L124 80" stroke="#FF385C" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Generic care / heart — fallback / palliative. */
function Heart(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <ellipse cx="100" cy="170" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <path d="M100 152 C100 152 50 122 50 88 C50 70 64 56 82 56 C92 56 99 62 100 70 C101 62 108 56 118 56 C136 56 150 70 150 88 C150 122 100 152 100 152 Z" fill="#FFFFFF" />
      <path d="M75 92 L88 92 L94 78 L102 108 L110 84 L116 92 L130 92" stroke="#FF385C" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const SERVICE_ILLUSTRATIONS = {
  companionship: Companionship,
  memory: MemoryAware,
  medication: Medication,
  liveIn: LiveIn,
  meals: Meals,
  familyBridge: FamilyBridge,
  wound: WoundCare,
  iv: IvTherapy,
  monitoring: Monitoring,
  mobility: Mobility,
  bedCare: BedCare,
  night: NightShift,
  day: DayShift,
  recovery: Recovery,
  conversation: Conversation,
  transfer: Transfer,
  shield: Shield,
  heart: Heart,
} as const

export type ServiceIllustrationKey = keyof typeof SERVICE_ILLUSTRATIONS

/** Default fallback by tone — keeps unmapped cards visually distinct. */
export const ILLUSTRATION_BY_TONE: Record<string, ServiceIllustrationKey> = {
  c1: 'companionship',
  c2: 'memory',
  c3: 'medication',
  c4: 'liveIn',
  c5: 'meals',
  c6: 'familyBridge',
}

export function pickIllustration(
  key: ServiceIllustrationKey | undefined,
  tone: string,
): ComponentType<Props> {
  if (key && SERVICE_ILLUSTRATIONS[key]) return SERVICE_ILLUSTRATIONS[key]
  const fallback = ILLUSTRATION_BY_TONE[tone] ?? 'heart'
  return SERVICE_ILLUSTRATIONS[fallback]
}
