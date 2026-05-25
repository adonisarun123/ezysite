/**
 * Per-cluster hero "scenes" for the care-services pages.
 *
 * Each cluster gets a distinct visual identity — different left-panel
 * gradient, decorative blob colour, and a 3-tile illustration mosaic
 * on the right. Captions on individual tiles can still be overridden
 * per cluster via `config.heroCaptions`.
 *
 * Style is deliberately consistent with the existing peg-doll / flat
 * SVGs in `CareClusterHeroIllustrations.tsx` — soft drop-shadow
 * ellipses, calm fills, no external assets, no external fonts.
 */
import type { ComponentType, SVGProps } from 'react'
import {
  HeroTileCalmHome,
  HeroTileCompanionship,
  HeroTileDailyRoutines,
} from './CareClusterHeroIllustrations'
import type { HeroSceneId } from '@/lib/careServices/clusterLanding/types'

export type { HeroSceneId }

type IllustrationProps = { className?: string }
type SvgIllustration = ComponentType<IllustrationProps>

const baseSvgProps = {
  viewBox: '0 0 200 200',
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'xMidYMid meet',
  'aria-hidden': true,
} as const satisfies Partial<SVGProps<SVGSVGElement>>

/** Heart cradled in two open hands — the parent / pillar warm welcome. */
function HeroTileHeartHands({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="172" rx="58" ry="9" fill="rgba(0,0,0,0.08)" />
      <path
        d="M100 78 C 92 60, 60 60, 60 90 C 60 118, 100 140, 100 140 C 100 140, 140 118, 140 90 C 140 60, 108 60, 100 78 Z"
        fill="#FF7D5C"
      />
      <path
        d="M76 70 C 78 60, 88 56, 96 64"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M30 142 C 30 132, 40 128, 50 134 L 100 158 L 95 168 L 38 168 C 32 168, 30 162, 30 156 Z"
        fill="#3F2418"
      />
      <path
        d="M170 142 C 170 132, 160 128, 150 134 L 100 158 L 105 168 L 162 168 C 168 168, 170 162, 170 156 Z"
        fill="#3F2418"
      />
      <circle cx="160" cy="48" r="22" fill="rgba(255,255,255,0.5)" />
    </svg>
  )
}

/** Pitched-roof home with a heart in the window — pillar / cluster overview. */
function HeroTileHomeWithHeart({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="178" rx="56" ry="7" fill="rgba(0,0,0,0.08)" />
      <path d="M100 50 L 156 100 L 144 100 L 144 168 L 56 168 L 56 100 L 44 100 Z" fill="#FFFFFF" />
      <rect x="68" y="116" width="64" height="52" rx="4" fill="#FFE0D9" />
      <path
        d="M100 132 C 96 124, 82 124, 82 138 C 82 150, 100 158, 100 158 C 100 158, 118 150, 118 138 C 118 124, 104 124, 100 132 Z"
        fill="#FF385C"
      />
      <rect x="90" y="56" width="20" height="22" fill="#FFB58C" />
      <path d="M100 50 L 156 100 L 44 100 Z" fill="none" stroke="#FF7D5C" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

/** Stethoscope coiled around a small heart — clinical, doctor-aligned. */
function HeroTileStethoscope({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="174" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <path
        d="M64 60 C 56 80, 60 110, 86 124"
        stroke="#3F2418"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M136 60 C 144 80, 140 110, 114 124"
        stroke="#3F2418"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="64" cy="56" r="8" fill="#3F2418" />
      <circle cx="136" cy="56" r="8" fill="#3F2418" />
      <circle cx="100" cy="138" r="20" fill="#FFFFFF" stroke="#3F2418" strokeWidth="4" />
      <path
        d="M100 130 C 96 124, 86 124, 86 134 C 86 144, 100 152, 100 152 C 100 152, 114 144, 114 134 C 114 124, 104 124, 100 130 Z"
        fill="#FF385C"
      />
      <circle cx="158" cy="50" r="20" fill="rgba(255,255,255,0.45)" />
    </svg>
  )
}

/** IV stand and drip bag — nursing procedures at home. */
function HeroTileIvStand({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="174" rx="50" ry="7" fill="rgba(0,0,0,0.08)" />
      <line x1="100" y1="40" x2="100" y2="166" stroke="#9AA3B0" strokeWidth="3" />
      <path d="M76 166 L 124 166 L 116 174 L 84 174 Z" fill="#9AA3B0" />
      <path
        d="M84 50 L 116 50 C 122 50, 124 56, 124 60 L 124 96 C 124 102, 120 106, 114 106 L 86 106 C 80 106, 76 102, 76 96 L 76 60 C 76 56, 78 50, 84 50 Z"
        fill="#FFFFFF"
        stroke="#9AA3B0"
        strokeWidth="2"
      />
      <rect x="86" y="62" width="28" height="34" rx="4" fill="#9BC9A6" opacity="0.85" />
      <line x1="86" y1="74" x2="114" y2="74" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="86" y1="84" x2="114" y2="84" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="100" cy="118" r="3" fill="#9BC9A6" />
      <circle cx="100" cy="128" r="2" fill="#9BC9A6" />
      <circle cx="100" cy="138" r="2" fill="#9BC9A6" />
      <circle cx="100" cy="148" r="2" fill="#9BC9A6" />
      <circle cx="158" cy="46" r="20" fill="rgba(255,255,255,0.5)" />
    </svg>
  )
}

/** Gloved hand giving care — bandage / nurse focus. */
function HeroTileNurseGloves({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="174" rx="50" ry="7" fill="rgba(0,0,0,0.08)" />
      <path
        d="M70 160 L 70 84 C 70 76, 78 70, 86 72 L 86 100 L 96 100 L 96 60 C 96 52, 104 46, 112 48 C 120 50, 124 56, 124 64 L 124 102 L 134 102 L 134 76 C 134 68, 142 64, 148 68 C 154 72, 156 78, 156 86 L 156 144 C 156 156, 146 168, 132 168 L 92 168 C 80 168, 70 158, 70 160 Z"
        fill="#9BC9A6"
      />
      <path
        d="M70 130 C 86 120, 110 122, 138 130"
        stroke="#FFFFFF"
        strokeWidth="2"
        fill="none"
        opacity="0.55"
      />
      <rect x="62" y="156" width="80" height="14" rx="6" fill="#3F2418" />
      <circle cx="36" cy="62" r="20" fill="rgba(255,255,255,0.5)" />
    </svg>
  )
}

/** Clipboard with check-marks — nurse log / structured care plan. */
function HeroTileClipboard({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="176" rx="48" ry="6" fill="rgba(0,0,0,0.08)" />
      <rect x="56" y="46" width="88" height="120" rx="8" fill="#FFFFFF" stroke="#3F2418" strokeWidth="2.5" />
      <rect x="84" y="38" width="32" height="14" rx="4" fill="#3F2418" />
      <path d="M70 78 l 10 10 l 16 -18" stroke="#00A699" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="104" y1="82" x2="132" y2="82" stroke="#3F2418" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M70 108 l 10 10 l 16 -18" stroke="#00A699" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="104" y1="112" x2="132" y2="112" stroke="#3F2418" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M70 138 l 10 10 l 16 -18" stroke="#00A699" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="104" y1="142" x2="132" y2="142" stroke="#3F2418" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

/** Breakfast tray with bowl + glass — caretaker daily living. */
function HeroTileBreakfastTray({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="178" rx="60" ry="8" fill="rgba(0,0,0,0.1)" />
      <path d="M40 138 L 160 138 L 152 168 L 48 168 Z" fill="#A37F4D" />
      <ellipse cx="100" cy="138" rx="60" ry="6" fill="#C29A60" />
      <ellipse cx="80" cy="120" rx="22" ry="8" fill="#FFFFFF" />
      <path d="M58 120 C 58 128, 102 128, 102 120 L 100 132 C 100 138, 60 138, 60 132 Z" fill="#FFFFFF" />
      <path d="M68 110 C 70 100, 76 96, 80 96 M86 110 C 88 100, 94 96, 96 96" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <rect x="120" y="92" width="22" height="40" rx="3" fill="rgba(255,255,255,0.85)" stroke="#3F2418" strokeWidth="1.5" />
      <rect x="122" y="106" width="18" height="24" fill="#FFB39A" />
      <circle cx="40" cy="56" r="20" fill="rgba(255,255,255,0.45)" />
    </svg>
  )
}

/** Walker / mobility frame — patient recovery focus. */
function HeroTileWalker({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="178" rx="60" ry="8" fill="rgba(0,0,0,0.1)" />
      <line x1="56" y1="74" x2="56" y2="170" stroke="#9AA3B0" strokeWidth="6" strokeLinecap="round" />
      <line x1="144" y1="74" x2="144" y2="170" stroke="#9AA3B0" strokeWidth="6" strokeLinecap="round" />
      <line x1="56" y1="74" x2="144" y2="74" stroke="#9AA3B0" strokeWidth="6" strokeLinecap="round" />
      <line x1="56" y1="120" x2="144" y2="120" stroke="#9AA3B0" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
      <line x1="50" y1="68" x2="62" y2="80" stroke="#3F2418" strokeWidth="6" strokeLinecap="round" />
      <line x1="138" y1="68" x2="150" y2="80" stroke="#3F2418" strokeWidth="6" strokeLinecap="round" />
      <circle cx="50" cy="170" r="6" fill="#3F2418" />
      <circle cx="150" cy="170" r="6" fill="#3F2418" />
      <circle cx="160" cy="46" r="20" fill="rgba(255,255,255,0.5)" />
    </svg>
  )
}

/** Healing potted plant — patient care recovery / hope. */
function HeroTileHealingPlant({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="178" rx="48" ry="6" fill="rgba(0,0,0,0.1)" />
      <path d="M70 130 L 130 130 L 124 170 L 76 170 Z" fill="#B5A3DD" />
      <path d="M72 130 L 128 130 L 127 138 L 73 138 Z" fill="#9C87CB" />
      <ellipse cx="100" cy="98" rx="6" ry="32" fill="#5C8C4F" />
      <ellipse cx="84" cy="106" rx="22" ry="9" fill="#6FA855" transform="rotate(-30 84 106)" />
      <ellipse cx="116" cy="106" rx="22" ry="9" fill="#6FA855" transform="rotate(30 116 106)" />
      <ellipse cx="78" cy="124" rx="18" ry="7" fill="#7DB867" transform="rotate(-45 78 124)" />
      <ellipse cx="122" cy="124" rx="18" ry="7" fill="#7DB867" transform="rotate(45 122 124)" />
      <path d="M100 80 C 96 70, 88 68, 88 76 C 88 84, 100 92, 100 92 C 100 92, 112 84, 112 76 C 112 68, 104 70, 100 80 Z" fill="#FF7D5C" />
    </svg>
  )
}

/** Sun + moon held together — day/night attendant rhythm. */
function HeroTileSunMoon({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="170" rx="58" ry="8" fill="rgba(0,0,0,0.08)" />
      <circle cx="68" cy="92" r="32" fill="#F4C68C" />
      <g stroke="#F4A05F" strokeWidth="3" strokeLinecap="round">
        <line x1="68" y1="48" x2="68" y2="56" />
        <line x1="68" y1="128" x2="68" y2="136" />
        <line x1="24" y1="92" x2="32" y2="92" />
        <line x1="38" y1="62" x2="44" y2="68" />
        <line x1="38" y1="122" x2="44" y2="116" />
      </g>
      <circle cx="68" cy="92" r="22" fill="#FFE9C7" />
      <path
        d="M148 62 C 122 62, 110 86, 122 110 C 134 134, 162 134, 174 110 C 158 116, 142 100, 148 62 Z"
        fill="#3F2418"
      />
      <circle cx="160" cy="80" r="2" fill="#FFFFFF" opacity="0.85" />
      <circle cx="170" cy="98" r="1.5" fill="#FFFFFF" opacity="0.7" />
      <circle cx="152" cy="100" r="1" fill="#FFFFFF" opacity="0.6" />
    </svg>
  )
}

/** Bed-care attendant — trained / high-dependency. */
function HeroTileBedCarePro({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="172" rx="62" ry="9" fill="rgba(0,0,0,0.1)" />
      <rect x="32" y="118" width="124" height="44" rx="6" fill="#FFFFFF" />
      <rect x="32" y="158" width="124" height="6" fill="#9AA3B0" />
      <rect x="32" y="100" width="22" height="62" rx="4" fill="#9AA3B0" />
      <rect x="40" y="106" width="48" height="22" rx="6" fill="#FFE9C7" />
      <circle cx="56" cy="116" r="6" fill="#5C3527" />
      <circle cx="56" cy="115" r="2" fill="#3D2419" />
      <path
        d="M120 92 C 120 80, 140 80, 140 92 L 140 110 L 132 158 L 116 158 L 124 110 Z"
        fill="#FF7D5C"
      />
      <circle cx="130" cy="76" r="11" fill="#3D2419" />
      <path
        d="M118 124 C 110 116, 96 118, 90 122"
        stroke="#FF7D5C"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="40" cy="58" r="20" fill="rgba(255,255,255,0.5)" />
    </svg>
  )
}

/** Shield with heart — trained attendant safety. */
function HeroTileShieldHeart({ className }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvgProps}>
      <ellipse cx="100" cy="174" rx="48" ry="6" fill="rgba(0,0,0,0.08)" />
      <path
        d="M100 36 L 156 56 L 156 110 C 156 142, 130 162, 100 168 C 70 162, 44 142, 44 110 L 44 56 Z"
        fill="#3D5C45"
      />
      <path
        d="M100 50 L 144 66 L 144 110 C 144 134, 124 152, 100 156 C 76 152, 56 134, 56 110 L 56 66 Z"
        fill="#9BC9A6"
      />
      <path
        d="M100 96 C 94 86, 78 86, 78 100 C 78 116, 100 128, 100 128 C 100 128, 122 116, 122 100 C 122 86, 106 86, 100 96 Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

type HeroSceneTile = {
  illustration: SvgIllustration
  /** Tailwind classes for the tile background gradient (`from-[#…] to-[#…]`). */
  tileGradient: string
  /** Default caption — overridden by `config.heroCaptions[idx]` if provided. */
  caption: string
  /** Visual scale of the illustration inside its tile. */
  scale?: 'lg' | 'md'
}

export type HeroScene = {
  /** Tailwind classes for the left text-panel gradient (`from-[#…] to-[#…]`). */
  leftPanelGradient: string
  /** Tailwind classes for the soft decorative blob behind the headline. */
  blobAccentClass: string
  /** [bigLeftTile, topRightTile, bottomRightTile] */
  tiles: [HeroSceneTile, HeroSceneTile, HeroSceneTile]
}

/**
 * Eight presets — one per cluster + the parent pillar. Adding a new
 * cluster? Add a new entry here and reference it from the cluster
 * config's `heroSceneId`.
 */
export const HERO_SCENES: Record<HeroSceneId, HeroScene> = {
  pillar: {
    leftPanelGradient: 'from-[#FFE7E7] to-[#FFF8E8]',
    blobAccentClass: 'bg-[#FF385C]/12',
    tiles: [
      {
        illustration: HeroTileHeartHands,
        tileGradient: 'from-[#FF9AAE] to-[#FF6A85]',
        caption: 'Care, in human hands',
        scale: 'lg',
      },
      {
        illustration: HeroTileHomeWithHeart,
        tileGradient: 'from-[#FFD7A5] to-[#F4A05F]',
        caption: 'Home as the place of care',
      },
      {
        illustration: HeroTileCompanionship,
        tileGradient: 'from-[#C8E4D3] to-[#6FB58F]',
        caption: 'Verified, matched, supported',
      },
    ],
  },

  healthcare: {
    leftPanelGradient: 'from-[#E5F0FF] to-[#FFF0E5]',
    blobAccentClass: 'bg-[#3D81C8]/15',
    tiles: [
      {
        illustration: HeroTileStethoscope,
        tileGradient: 'from-[#A6CCE9] to-[#5891C2]',
        caption: 'Doctor-aligned at home',
        scale: 'lg',
      },
      {
        illustration: HeroTileIvStand,
        tileGradient: 'from-[#FFD9CC] to-[#FF9A82]',
        caption: 'Hospital-grade routines',
      },
      {
        illustration: HeroTileClipboard,
        tileGradient: 'from-[#D4EDD9] to-[#9BC9A6]',
        caption: 'Updates families can read',
      },
    ],
  },

  nursing: {
    leftPanelGradient: 'from-[#E5F2EB] to-[#F2F8EC]',
    blobAccentClass: 'bg-[#00A699]/15',
    tiles: [
      {
        illustration: HeroTileNurseGloves,
        tileGradient: 'from-[#9BC9A6] to-[#5C9C72]',
        caption: 'Sterile technique',
        scale: 'lg',
      },
      {
        illustration: HeroTileIvStand,
        tileGradient: 'from-[#C9E2EE] to-[#7FB3D4]',
        caption: 'IV · catheter · vitals',
      },
      {
        illustration: HeroTileClipboard,
        tileGradient: 'from-[#FFE9C7] to-[#F4C68C]',
        caption: 'Daily nursing log',
      },
    ],
  },

  elderly: {
    leftPanelGradient: 'from-[#FFE5E5] to-[#FFF1D6]',
    blobAccentClass: 'bg-[#FF385C]/12',
    tiles: [
      {
        illustration: HeroTileCompanionship,
        tileGradient: 'from-[#FFB58C] to-[#FF7D5C]',
        caption: 'Companionship',
        scale: 'lg',
      },
      {
        illustration: HeroTileDailyRoutines,
        tileGradient: 'from-[#C8E4D3] to-[#6FB58F]',
        caption: 'Daily routines',
      },
      {
        illustration: HeroTileCalmHome,
        tileGradient: 'from-[#FFD7A5] to-[#F4A05F]',
        caption: 'A calm home',
      },
    ],
  },

  caretaker: {
    leftPanelGradient: 'from-[#FFF1D6] to-[#FFE9D6]',
    blobAccentClass: 'bg-[#F4A05F]/20',
    tiles: [
      {
        illustration: HeroTileBreakfastTray,
        tileGradient: 'from-[#FFD7A5] to-[#F4A05F]',
        caption: 'Daily living, handled',
        scale: 'lg',
      },
      {
        illustration: HeroTileWalker,
        tileGradient: 'from-[#FFD9CC] to-[#FF9A82]',
        caption: 'Mobility & meals',
      },
      {
        illustration: HeroTileCompanionship,
        tileGradient: 'from-[#FFE9C7] to-[#F4C68C]',
        caption: 'Steady companionship',
      },
    ],
  },

  patient: {
    leftPanelGradient: 'from-[#EDE7F8] to-[#E9F5EE]',
    blobAccentClass: 'bg-[#7E61C7]/15',
    tiles: [
      {
        illustration: HeroTileWalker,
        tileGradient: 'from-[#C7BCE6] to-[#9C87CB]',
        caption: 'Recovery, supervised',
        scale: 'lg',
      },
      {
        illustration: HeroTileHealingPlant,
        tileGradient: 'from-[#D4EDD9] to-[#9BC9A6]',
        caption: 'Hope, day by day',
      },
      {
        illustration: HeroTileClipboard,
        tileGradient: 'from-[#FFE0DB] to-[#FFB8B8]',
        caption: 'Doctor-aware routines',
      },
    ],
  },

  attendant: {
    leftPanelGradient: 'from-[#E6F1FA] to-[#FFF1D6]',
    blobAccentClass: 'bg-[#5891C2]/15',
    tiles: [
      {
        illustration: HeroTileSunMoon,
        tileGradient: 'from-[#FFE9C7] to-[#F4C68C]',
        caption: 'Day & night cover',
        scale: 'lg',
      },
      {
        illustration: HeroTileBreakfastTray,
        tileGradient: 'from-[#A6CCE9] to-[#5891C2]',
        caption: 'Reliable shifts',
      },
      {
        illustration: HeroTileCalmHome,
        tileGradient: 'from-[#D4EDD9] to-[#9BC9A6]',
        caption: 'Hours that fit',
      },
    ],
  },

  trained: {
    leftPanelGradient: 'from-[#E6EFEA] to-[#EFEAE0]',
    blobAccentClass: 'bg-[#3D5C45]/18',
    tiles: [
      {
        illustration: HeroTileBedCarePro,
        tileGradient: 'from-[#9BC9A6] to-[#5C8C4F]',
        caption: 'Skilled bedside handling',
        scale: 'lg',
      },
      {
        illustration: HeroTileShieldHeart,
        tileGradient: 'from-[#D9E4DC] to-[#A8B8AB]',
        caption: 'Safety-first transfers',
      },
      {
        illustration: HeroTileNurseGloves,
        tileGradient: 'from-[#FFE0D9] to-[#F8B19A]',
        caption: 'Pressure-area care',
      },
    ],
  },
}

/** Resolve scene with a graceful fallback to the elderly preset. */
export function resolveHeroScene(id: HeroSceneId | undefined): HeroScene {
  if (id && HERO_SCENES[id]) return HERO_SCENES[id]
  return HERO_SCENES.elderly
}
