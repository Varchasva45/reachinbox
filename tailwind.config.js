/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
        navbackground: "hsl(var(--navbar-background))",
        navBorder: "hsl(var(--navbar-border))",
        navText: "hsl(var(--navbar-text))",
        navIcon: "hsl(var(--navicon-color))",
        foreground: "hsl(var(--foreground))",
        verNavBackground: "hsl(var(--verNav-color))",
        searchBackground: "hsl(var(--search-color))",
        inboxText: "hsl(var(--inbox-text))",
        emailTitle: "hsl(var(--email-title))",
        tagBackground: "hsl(var(--tag-background))",
        tagText: "hsl(var(--tag-text))",
        timeLineBackground: "hsl(var(--timeline-background))",
        activityText: "hsl(var(--activity-text))",
        activityBackground: "hsl(var(--activity-background))",
        activitySubtext: "hsl(var(--activity-subtext))", 
        dropdownBackground: 'var(--dropdownBackground)',
        dropdownText: 'var(--dropdownText)',
        dropdownHoverBackground: 'var(--dropdownHoverBackground)',
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
        }
      },
      fontWeight: {
        'custom-light': 400,
        'custom-semibold': 600,
      },
      fontSize: {
        'small': 14,
        'extrasmall': 12
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
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        sf: ['SF Pro', 'sans-serif']
      },
      letterSpacing: {
        '-0.02em': '-0.02em'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}