const config = {
	darkMode: ["class"],
	content: [
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  pastel: {
			blue: '#a2d2ff',
			pink: '#ffc8dd',
			purple: '#cdb4db',
			mint: '#caffbf'
		  },
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  }
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
  
		// ✅ FIXED: Move typography here
		typography: {
			DEFAULT: {
			  css: {
				color: "#000", // Ensures body text is dark
						a: { color: "#1e40af" },
						h1: { color: "#111" },
						h2: { color: "#111" },
						h3: { color: "#111" },
						strong: { color: "#111" },
				code: { backgroundColor: "#f3f4f6", padding: "0.2rem 0.4rem", borderRadius: "0.25rem" },
				pre: {
				  backgroundColor: "#1e293b",
				  color: "#f1f5f9",
				  padding: "1rem",
				  borderRadius: "0.5rem",
				  overflowX: "auto",
				},
				blockquote: {
				  borderLeftColor: "#a1a1aa",
				  fontStyle: "italic",
				  paddingLeft: "1rem",
				  color: "#4b5563",
				},
			  },
			},
		  },
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  require("@tailwindcss/typography"),
	],
  };
  
  export default config;
  