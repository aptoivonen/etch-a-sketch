export function getRandomColor() {
  const COLOR_VALUES = 256;
  const r = getRandomUpUntil(COLOR_VALUES);
  const g = getRandomUpUntil(COLOR_VALUES);
  const b = getRandomUpUntil(COLOR_VALUES);
  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomUpUntil(max) {
  return Math.floor(Math.random() * max);
}
