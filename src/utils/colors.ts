const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

const calculateLuminance = ({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}) => {
  const normalize = (x: number) => x / 255;
  r = normalize(r);
  g = normalize(g);
  b = normalize(b);

  const a = (x: number) =>
    x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);

  return 0.2126 * a(r) + 0.7152 * a(g) + 0.0722 * a(b);
};

export const generateRandomColor = (): string => {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

  const rgb = hexToRgb(randomColor);
  const luminance = calculateLuminance(rgb);

  if (luminance > 0.5) {
    return generateRandomColor();
  }

  return randomColor;
};
