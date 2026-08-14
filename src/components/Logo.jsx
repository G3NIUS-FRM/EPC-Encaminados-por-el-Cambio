export default function Logo({ className = "w-32 h-32", showText = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label="Logo Encaminados por el Cambio"
    >
      <defs>
        <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="70%" stopColor="#FFC72C" />
          <stop offset="100%" stopColor="#F5B700" />
        </radialGradient>
        <linearGradient id="darkBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0A1A3D" />
        </linearGradient>
        <path
          id="topArc"
          d="M 110,300 A 190,190 0 0,1 490,300"
          fill="none"
        />
        <path
          id="bottomArc"
          d="M 200,460 A 170,170 0 0,0 400,460"
          fill="none"
        />
      </defs>

      {/* Outer dark blue ring */}
      <circle cx="300" cy="300" r="290" fill="#0A1A3D" />
      <circle
        cx="300"
        cy="300"
        r="288"
        fill="none"
        stroke="#000"
        strokeWidth="3"
      />
      <circle
        cx="300"
        cy="300"
        r="245"
        fill="none"
        stroke="#F5B700"
        strokeWidth="2"
      />

      {/* Yellow text on top arc */}
      <text
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="28"
        fontWeight="800"
        fill="#F5B700"
        letterSpacing="5"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          ENCAMINADOS POR EL CAMBIO
        </textPath>
      </text>

      {/* 2026 text on bottom arc */}
      <text
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="34"
        fontWeight="800"
        fill="#F5B700"
        letterSpacing="8"
      >
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          2026
        </textPath>
      </text>

      {/* Inner dark blue circle */}
      <circle cx="300" cy="300" r="225" fill="url(#darkBlue)" />
      <circle
        cx="300"
        cy="300"
        r="225"
        fill="none"
        stroke="#000"
        strokeWidth="2"
      />

      {/* Sun rays */}
      <g fill="#F5B700" stroke="#000" strokeWidth="1.5">
        <polygon points="300,80 318,170 282,170" />
        <polygon points="300,520 318,430 282,430" />
        <polygon points="80,300 170,318 170,282" />
        <polygon points="520,300 430,318 430,282" />
        <polygon points="140,140 215,210 200,225 205,210" />
        <polygon points="460,140 385,210 400,225 395,210" />
        <polygon points="140,460 215,390 200,375 205,390" />
        <polygon points="460,460 385,390 400,375 395,390" />
        <polygon points="200,95 245,180 225,195" />
        <polygon points="400,95 355,180 375,195" />
        <polygon points="200,505 245,420 225,405" />
        <polygon points="400,505 355,420 375,405" />
      </g>

      {/* Sun center */}
      <circle cx="300" cy="300" r="138" fill="url(#sunGradient)" />
      <circle
        cx="300"
        cy="300"
        r="138"
        fill="none"
        stroke="#000"
        strokeWidth="2.5"
      />

      {/* Sun inner ring */}
      <circle
        cx="300"
        cy="300"
        r="120"
        fill="none"
        stroke="#1E3A8A"
        strokeWidth="9"
      />

      {/* EPC text */}
      <text
        x="300"
        y="338"
        fontFamily="Montserrat, Arial Black, sans-serif"
        fontSize="135"
        fontWeight="900"
        fill="#0A1A3D"
        textAnchor="middle"
        stroke="#000"
        strokeWidth="1.5"
      >
        EPC
      </text>
    </svg>
  );
}