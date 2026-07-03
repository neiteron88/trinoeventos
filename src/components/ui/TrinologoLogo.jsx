import React from 'react';

// TrinologoIsotipo: solo el ícono "i" con punto flotante
// (se mantiene igual, no se modificó)
export const TrinologoIcon = ({ size = 32, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="100" height="100" rx="22" fill="#0B0B08"/>
    <rect x="42" y="46" width="16" height="36" rx="8" fill="#00E56A"/>
    <circle cx="50" cy="30" r="10" fill="#00E56A"/>
  </svg>
);

// TrinologoWordmark: el logo real (imagen), con la misma API que antes
// (mismos props: color, height, className) para no romper nada donde ya se usaba.
// color: 'white' | 'green' | 'black'
const LOGO_SOURCES = {
  white: '/trino_logo_white.png',
  green: '/trino_logo_green.png',
  black: '/trino_logo_black.png',
};

// Proporción real del archivo: 1118x466 (ancho/alto ≈ 2.4)
const ASPECT_RATIO = 1118 / 466;

export const TrinologoWordmark = ({ color = 'white', height = 28, className = '' }) => {
  const src = LOGO_SOURCES[color] || LOGO_SOURCES.white;
  return (
    <img
      src={src}
      alt="Trino"
      height={height}
      width={height * ASPECT_RATIO}
      className={className}
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
};

export default TrinologoWordmark;
