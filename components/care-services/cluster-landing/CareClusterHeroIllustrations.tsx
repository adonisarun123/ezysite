/** Inline hero tile art — peg-doll / flat style per elderly-care spec (no external assets). */

export function HeroTileCompanionship({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="160" cy="50" r="35" fill="rgba(255,255,255,0.35)" />
      <circle cx="160" cy="50" r="22" fill="rgba(255,255,255,0.55)" />
      <ellipse cx="75" cy="180" rx="55" ry="12" fill="rgba(0,0,0,0.08)" />
      <circle cx="75" cy="95" r="14" fill="#5C3527" />
      <path
        d="M62 110 Q62 105 68 105 L82 105 Q88 105 88 110 L88 165 Q88 170 83 170 L67 170 Q62 170 62 165 Z"
        fill="#7E4332"
      />
      <line x1="92" y1="115" x2="105" y2="180" stroke="#3F2418" strokeWidth="3" strokeLinecap="round" />
      <circle cx="115" cy="105" r="13" fill="#3D2419" />
      <path
        d="M103 118 Q103 114 108 114 L122 114 Q127 114 127 118 L127 168 Q127 172 122 172 L108 172 Q103 172 103 168 Z"
        fill="#A8634C"
      />
      <path
        d="M88 130 Q98 125 105 130"
        stroke="#A8634C"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function HeroTileDailyRoutines({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="100" cy="170" rx="55" ry="8" fill="rgba(0,0,0,0.08)" />
      <path
        d="M55 90 Q55 80 65 80 L130 80 Q140 80 140 90 L135 145 Q133 165 115 165 L80 165 Q62 165 60 145 Z"
        fill="#FFFFFF"
      />
      <path
        d="M140 100 Q160 100 160 120 Q160 140 140 140"
        stroke="white"
        strokeWidth="6"
        fill="none"
      />
      <ellipse cx="98" cy="92" rx="35" ry="6" fill="#A37F4D" />
      <path
        d="M85 70 Q88 60 85 50 Q82 40 85 30"
        stroke="rgba(255,255,255,0.75)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M105 70 Q108 60 105 50 Q102 40 105 30"
        stroke="rgba(255,255,255,0.75)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M115 70 Q118 60 115 50"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HeroTileCalmHome({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="100" cy="180" rx="50" ry="6" fill="rgba(0,0,0,0.1)" />
      <path d="M75 140 L125 140 L120 175 L80 175 Z" fill="#8B4513" />
      <path d="M77 140 L123 140 L122 148 L78 148 Z" fill="#A0522D" />
      <ellipse cx="100" cy="100" rx="6" ry="35" fill="#4A7C3F" />
      <ellipse cx="85" cy="110" rx="20" ry="8" fill="#5C8C4F" transform="rotate(-30 85 110)" />
      <ellipse cx="115" cy="110" rx="20" ry="8" fill="#5C8C4F" transform="rotate(30 115 110)" />
      <ellipse cx="80" cy="130" rx="18" ry="7" fill="#6FA855" transform="rotate(-45 80 130)" />
      <ellipse cx="120" cy="130" rx="18" ry="7" fill="#6FA855" transform="rotate(45 120 130)" />
      <ellipse cx="100" cy="80" rx="14" ry="6" fill="#4A7C3F" />
    </svg>
  )
}
