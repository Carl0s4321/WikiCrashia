// Got these svgs from flowbite and svgrepo
export function HomeIcon({ size = 24, isActive = false}) {
  const style = isActive ? {
    fill: 'rgb(214, 240, 255)',
    stroke: 'rgb(77, 166, 255)'
  } : {
    fill: 'transparent',
    stroke: 'black'
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={size} height={size}>
      <path
        d="M2 20L20 5L38 20V38H2V20Z M15 38V25H25V38"
        fill={style.fill}
        stroke={style.stroke}
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  );
}


export function ProfileIcon({ size = 24, isActive = false }) {
  const style = isActive ? {
    fill: 'rgb(246, 217, 255)',
    stroke: 'rgb(185, 77, 221)'
  } : {
    fill: 'transparent',
    stroke: 'black'
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={size} height={size}>
      <circle
        cx="20"
        cy="12"
        r="8"
        fill={style.fill}
        stroke={style.stroke}
        stroke-width="2"
      />
      <path
        d="M5 38C5 28 35 28 35 38"
        fill={style.fill}
        stroke={style.stroke}
        stroke-width="2"
      />
    </svg>
  );
}

export function FeedsIcon({ size = 24, isActive = false}) {
  const style = isActive ? {
    fill: 'rgb(255, 236, 214)',
    stroke: 'rgb(255, 145, 77)'
  } : {
    fill: 'transparent',
    stroke: 'black'
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={size} height={size}>
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="2"
        fill={style.fill}
        stroke={style.stroke}
        stroke-width="2"
      />
      <line
        x1="8"
        y1="10"
        x2="32"
        y2="10"
        stroke={style.stroke}
        stroke-width="2"
      />
      <line
        x1="8"
        y1="20"
        x2="32"
        y2="20"
        stroke={style.stroke}
        stroke-width="2"
      />
      <line
        x1="8"
        y1="30"
        x2="32"
        y2="30"
        stroke={style.stroke}
        stroke-width="2"
      />
    </svg>
  );
}

