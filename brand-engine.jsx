// Style engine: vibe -> palette + font pairing
// All palettes are curated to be high-contrast and tasteful.

const VIBE_PRESETS = {
  "Luxo Minimalista": {
    palettes: [
      {
        primary: "#0E0E0E",
        secondary: "#F4EFE6",
        accent: "#B8985A",
        surface: "#FBF8F2",
        ink: "#0E0E0E",
        muted: "#7A7468",
      },
      {
        primary: "#1C1C1C",
        secondary: "#EDE7DA",
        accent: "#8B6F3E",
        surface: "#F7F2E8",
        ink: "#1C1C1C",
        muted: "#6E6657",
      },
      {
        primary: "#111110",
        secondary: "#E8E2D1",
        accent: "#C9A961",
        surface: "#F8F4EA",
        ink: "#111110",
        muted: "#827B6B",
      },
    ],
    fonts: [
      {
        heading: "Cormorant Garamond",
        body: "Inter",
        headingWeight: 500,
        bodyWeight: 400,
      },
      {
        heading: "Playfair Display",
        body: "Inter",
        headingWeight: 500,
        bodyWeight: 400,
      },
      {
        heading: "Fraunces",
        body: "Manrope",
        headingWeight: 400,
        bodyWeight: 400,
      },
    ],
    descriptor: "Refined · Editorial · Quiet luxury",
    materialHint: "frosted-glass",
  },
  "Tech Futurista": {
    palettes: [
      {
        primary: "#0B0F1A",
        secondary: "#E8ECFF",
        accent: "#5B8DEF",
        surface: "#F5F7FF",
        ink: "#0B0F1A",
        muted: "#5C6584",
      },
      {
        primary: "#0A0A14",
        secondary: "#DDE3FF",
        accent: "#7C5CFF",
        surface: "#F4F3FF",
        ink: "#0A0A14",
        muted: "#5A5E7A",
      },
      {
        primary: "#08111F",
        secondary: "#D6F0FF",
        accent: "#22D3EE",
        surface: "#F0FAFF",
        ink: "#08111F",
        muted: "#4F6580",
      },
    ],
    fonts: [
      {
        heading: "Space Grotesk",
        body: "Inter",
        headingWeight: 500,
        bodyWeight: 400,
      },
      {
        heading: "JetBrains Mono",
        body: "Inter",
        headingWeight: 600,
        bodyWeight: 400,
      },
      {
        heading: "Manrope",
        body: "IBM Plex Sans",
        headingWeight: 700,
        bodyWeight: 400,
      },
    ],
    descriptor: "Sharp · Engineered · Forward-leaning",
    materialHint: "matte-tech",
  },
  Orgânico: {
    palettes: [
      {
        primary: "#2F3A2A",
        secondary: "#E9E3D2",
        accent: "#A8794D",
        surface: "#F4EFE2",
        ink: "#2F3A2A",
        muted: "#76755F",
      },
      {
        primary: "#3A4A2E",
        secondary: "#E5E0CD",
        accent: "#C28A5B",
        surface: "#F1ECDC",
        ink: "#3A4A2E",
        muted: "#6F6E59",
      },
      {
        primary: "#2B3326",
        secondary: "#EFE8D2",
        accent: "#7C9A5C",
        surface: "#F5F0DD",
        ink: "#2B3326",
        muted: "#74755C",
      },
    ],
    fonts: [
      {
        heading: "DM Serif Display",
        body: "Inter",
        headingWeight: 400,
        bodyWeight: 400,
      },
      { heading: "Lora", body: "Manrope", headingWeight: 500, bodyWeight: 400 },
      {
        heading: "Newsreader",
        body: "Inter",
        headingWeight: 500,
        bodyWeight: 400,
      },
    ],
    descriptor: "Earthy · Handmade · Honest",
    materialHint: "kraft-paper",
  },
  "High-Performance": {
    palettes: [
      {
        primary: "#0A0A0A",
        secondary: "#F5F5F5",
        accent: "#F23A3A",
        surface: "#FAFAFA",
        ink: "#0A0A0A",
        muted: "#6B6B6B",
      },
      {
        primary: "#0F0F12",
        secondary: "#EFEFF1",
        accent: "#FF6A1A",
        surface: "#F8F8F9",
        ink: "#0F0F12",
        muted: "#666770",
      },
      {
        primary: "#111111",
        secondary: "#EAEAEA",
        accent: "#FFD400",
        surface: "#F6F6F6",
        ink: "#111111",
        muted: "#5E5E5E",
      },
    ],
    fonts: [
      {
        heading: "Archivo Black",
        body: "Inter",
        headingWeight: 900,
        bodyWeight: 400,
      },
      { heading: "Anton", body: "Inter", headingWeight: 400, bodyWeight: 400 },
      {
        heading: "Bebas Neue",
        body: "Manrope",
        headingWeight: 400,
        bodyWeight: 400,
      },
    ],
    descriptor: "Bold · Athletic · Uncompromising",
    materialHint: "matte-aluminum",
  },
  "Pastel Sereno": {
    palettes: [
      {
        primary: "#3A2E4F",
        secondary: "#F6E8F1",
        accent: "#E5A3C2",
        surface: "#FBF4F8",
        ink: "#3A2E4F",
        muted: "#8B7BA0",
      },
      {
        primary: "#2C3D4F",
        secondary: "#E6F1F6",
        accent: "#9EC9DD",
        surface: "#F4FAFC",
        ink: "#2C3D4F",
        muted: "#7B8C9C",
      },
      {
        primary: "#3F4A2E",
        secondary: "#EFF3DC",
        accent: "#BCD18C",
        surface: "#F8FBEC",
        ink: "#3F4A2E",
        muted: "#7C8966",
      },
    ],
    fonts: [
      {
        heading: "Fraunces",
        body: "Inter",
        headingWeight: 400,
        bodyWeight: 400,
      },
      {
        heading: "Cormorant Garamond",
        body: "Manrope",
        headingWeight: 500,
        bodyWeight: 400,
      },
      {
        heading: "Newsreader",
        body: "Inter",
        headingWeight: 400,
        bodyWeight: 400,
      },
    ],
    descriptor: "Soft · Calm · Considered",
    materialHint: "frosted-glass",
  },
  "Editorial Mono": {
    palettes: [
      {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#FF3B30",
        surface: "#FAFAFA",
        ink: "#000000",
        muted: "#7A7A7A",
      },
      {
        primary: "#101010",
        secondary: "#F0F0F0",
        accent: "#1E40FF",
        surface: "#FBFBFB",
        ink: "#101010",
        muted: "#6F6F6F",
      },
      {
        primary: "#0A0A0A",
        secondary: "#EDEDED",
        accent: "#16A34A",
        surface: "#F7F7F7",
        ink: "#0A0A0A",
        muted: "#717171",
      },
    ],
    fonts: [
      { heading: "Inter", body: "Inter", headingWeight: 800, bodyWeight: 400 },
      {
        heading: "Helvetica Neue",
        body: "Inter",
        headingWeight: 700,
        bodyWeight: 400,
      },
      {
        heading: "Manrope",
        body: "Inter",
        headingWeight: 800,
        bodyWeight: 400,
      },
    ],
    descriptor: "Neutral · High-contrast · Print-grade",
    materialHint: "matte-paper",
  },
};

const VIBE_LIST = Object.keys(VIBE_PRESETS);

// Pseudo-random pick using seed so 'Generate' produces variation
function pickFromArray(arr, seed) {
  return arr[Math.abs(seed) % arr.length];
}

function generateIdentity(vibe, seed) {
  const preset = VIBE_PRESETS[vibe] || VIBE_PRESETS["Luxo Minimalista"];
  const palette = pickFromArray(preset.palettes, seed);
  const fonts = pickFromArray(preset.fonts, seed * 7 + 3);
  return {
    vibe,
    palette,
    fonts,
    descriptor: preset.descriptor,
    materialHint: preset.materialHint,
  };
}

window.BrandEngine = { VIBE_PRESETS, VIBE_LIST, generateIdentity };
