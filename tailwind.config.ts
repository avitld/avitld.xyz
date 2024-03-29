import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'Tea-Green/tea-green-50': '#fafffa',
        'Tea-Green/tea-green-100': '#effff0',
        'Tea-Green/tea-green-200': '#e7ffe9',
        'Tea-Green/tea-green-300': '#dbffe0',
        'Tea-Green/tea-green-400': '#d5ffd9',
        'Tea-Green/tea-green-500': '#caffd0',
        'Tea-Green/tea-green-600': '#b8e8bd',
        'Tea-Green/tea-green-700': '#8fb594',
        'Tea-Green/tea-green-800': '#6f8c72',
        'Tea-Green/tea-green-900': '#556b57',
        'Light-Cyan/light-cyan-50': '#fafcfd',
        'Light-Cyan/light-cyan-100': '#eef7f8',
        'Light-Cyan/light-cyan-200': '#e6f3f4',
        'Light-Cyan/light-cyan-300': '#dbedef',
        'Light-Cyan/light-cyan-400': '#d4e9ec',
        'Light-Cyan/light-cyan-500': '#c9e4e7',
        'Light-Cyan/light-cyan-600': '#b7cfd2',
        'Light-Cyan/light-cyan-700': '#8fa2a4',
        'Light-Cyan/light-cyan-800': '#6f7d7f',
        'Light-Cyan/light-cyan-900': '#546061',
        'Wisteria/wisteria-50': '#f8f6fc',
        'Wisteria/wisteria-100': '#e8e2f7',
        'Wisteria/wisteria-200': '#ddd3f3',
        'Wisteria/wisteria-300': '#cdbfee',
        'Wisteria/wisteria-400': '#c3b3ea',
        'Wisteria/wisteria-500': '#b4a0e5',
        'Wisteria/wisteria-600': '#a492d0',
        'Wisteria/wisteria-700': '#8072a3',
        'Wisteria/wisteria-800': '#63587e',
        'Wisteria/wisteria-900': '#4c4360',
        'Phlox/phlox-50': '#faecff',
        'Phlox/phlox-100': '#efc3ff',
        'Phlox/phlox-200': '#e7a5ff',
        'Phlox/phlox-300': '#db7cff',
        'Phlox/phlox-400': '#d563ff',
        'Phlox/phlox-500': '#ca3cff',
        'Phlox/phlox-600': '#b837e8',
        'Phlox/phlox-700': '#8f2bb5',
        'Phlox/phlox-800': '#6f218c',
        'Phlox/phlox-900': '#55196b',
        'Neutrals/neutrals-1': '#ffffff',
        'Foundation /Neutrals/neutrals-2': '#fdfdfd',
        'Neutrals/neutrals-3': '#f6f5f6',
        'Neutrals/neutrals-4': '#f2f1f1',
        'Neutrals/neutrals-5': '#dddbdc',
        'Neutrals/neutrals-6': '#c7c3c4',
        'Neutrals/neutrals-7': '#9a9395',
        'Neutrals/neutrals-8': '#6d6466',
        'Neutrals/neutrals-9': '#5b5153',
        'Neutrals/neutrals-10': '#403437',
        'Neutrals/neutrals-11': '#392d30',
        'Neutrals/neutrals-12': '#302327',
        'Neutrals/neutrals-13': '#1e1014'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
} satisfies Config

export default config