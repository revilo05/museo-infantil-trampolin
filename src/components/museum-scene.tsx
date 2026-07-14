export function MuseumScene() {
  return (
    <svg
      className="museum-scene"
      viewBox="0 0 640 520"
      role="img"
      aria-labelledby="scene-title scene-description"
    >
      <title id="scene-title">Un mundo de descubrimientos</title>
      <desc id="scene-description">
        Ilustración abstracta con un museo, órbitas, hojas y formas de colores
        que representan ciencia, naturaleza, cultura y creatividad.
      </desc>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dff4ff" />
          <stop offset="1" stopColor="#fff1c7" />
        </linearGradient>
        <linearGradient id="building" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf8" />
          <stop offset="1" stopColor="#f3e5d2" />
        </linearGradient>
      </defs>
      <rect width="640" height="520" rx="42" fill="url(#sky)" />
      <circle cx="518" cy="90" r="48" fill="#f7c948" />
      <path
        d="M466 121c-57-75-158-89-235-32-61 45-87 125-66 197"
        fill="none"
        stroke="#1c6eaa"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="11 17"
      />
      <circle cx="216" cy="96" r="14" fill="#e44f2b" />
      <circle cx="157" cy="213" r="9" fill="#0b806f" />
      <path
        d="M102 355C83 291 104 244 165 213c16 57 3 108-63 142Z"
        fill="#78c96b"
      />
      <path
        d="M538 351c22-71 4-121-55-151-22 63-4 115 55 151Z"
        fill="#3bb69f"
      />
      <path
        d="m158 275 163-93 165 93v164H158V275Z"
        fill="url(#building)"
        stroke="#133b55"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M145 276h354L322 170 145 276Z" fill="#e94f2d" />
      <circle cx="322" cy="236" r="30" fill="#f7c948" stroke="#133b55" strokeWidth="5" />
      <path d="M322 217v38M303 236h38" stroke="#133b55" strokeWidth="5" strokeLinecap="round" />
      <path d="M201 311h66v128h-66zM289 311h66v128h-66zM377 311h66v128h-66z" fill="#d9f0f4" stroke="#133b55" strokeWidth="5" />
      <path d="M303 439v-66c0-21 38-21 38 0v66" fill="#f7c948" stroke="#133b55" strokeWidth="5" />
      <path d="M87 443h466" stroke="#133b55" strokeWidth="7" strokeLinecap="round" />
      <g fill="#fff" stroke="#133b55" strokeWidth="4">
        <circle cx="94" cy="98" r="12" />
        <circle cx="573" cy="210" r="12" />
        <circle cx="514" cy="421" r="12" />
      </g>
    </svg>
  );
}
