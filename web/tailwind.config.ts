import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
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
  			},
  			main: '#FD6E65',
  			second: '#FB887A',
  			black: '#292833',
  			brightGray: '#d0cfd2'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			tt_hoves: ["var(--font-TT-Hoves-Pro-Trial)", "sans-serif"]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			'infinite-scroll-left': {
				from: {
					transform: "translateX(0px)",
				},
				to: {
					transform: "translateX(-100%)",
				}
			},
			'infinite-scroll-right': {
				from: {
					transform: "translateX(0px)",
				},
				to: {
					transform: "translateX(100%)",
				}
			},
			'blur-left': {
				"0%": {
					transform: "translate(0px, 0px) scale(0.9)",
				},
				"50%": {
					transform: "translate(-30px, 50px) scale(1.2)",
				},
				"100%": {
					transform: "translate(0px, 0px) scale(0.9)",
				},
			},
			'blur-center-xl': {
				"0%": {
					transform: "scale(1.3)",
				},
				"50%": {
					transform: "scale(1.7)",
				},
				"100%": {
					transform: "scale(1.3)",
				},
			},
			'blur-center': {
				"0%": {
					transform: "translate(-50%, 0) scale(1.3)",
				},
				"50%": {
					transform: "translate(-50%, 0) scale(1.7)",
				},
				"100%": {
					transform: "translate(-50%, 0) scale(1.3)",
				},
			},
			'blur-right': {
				"0%": {
					transform: "translate(0px, 0px) scale(0.9)",
				},
				"50%": {
					transform: "translate(30px, -30px) scale(1.2)",
				},
				"100%": {
					transform: "translate(0px, 0px) scale(0.9)",
				},
			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'infinite-scroll-left': "infinite-scroll-left 15s linear infinite",
			'infinite-scroll-right': "infinite-scroll-right 15s linear infinite",
			'blur-left': "blur-left 7s infinite",
			'blur-center': "blur-center 8s infinite",
			'blur-center-xl': "blur-center-xl 8s infinite",
			'blur-right': "blur-right 6s infinite",
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
