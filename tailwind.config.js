/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./components/**/*.{js,vue,ts}",
	"./layouts/**/*.vue",
	"./pages/**/*.vue",
	"./plugins/**/*.{js,ts}",
	"./app.vue",
	"./error.vue",
  ],
  theme: {
	extend: {
	  colors: {
		background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
		'popover': 'hsl(var(--popover))',
		'popover-foreground': 'hsl(var(--popover-foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--secondary))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        info: 'hsl(var(--info))',
        'info-foreground': 'hsl(var(--info-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        radius: 'hsl(var(--radius))',
        'disabled': 'hsl(var(--disabled))',
        'disabled-foreground': 'hsl(var(--disabled-foreground))',
        'disabled-border': 'hsl(var(--border-disabled))'
	  },
	},
  },
  plugins: [],
}

