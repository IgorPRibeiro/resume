
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			// A calçada: nunca menor que 20px, nunca maior que 96px.
			padding: 'clamp(20px, 5vw, 96px)',
			screens: {
				'2xl': '1440px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// `highlight` é o token legado do scaffold. Alias para o acento
				// canônico (Signal Red) até a última referência sair do código.
				highlight: 'hsl(var(--primary))',
			},
			boxShadow: {
				'pane-edge': 'inset 0 1px 0 rgb(255 255 255 / 0.06)',
				'surface-lift': '0 16px 40px -12px rgb(0 0 0 / 0.7)',
				'accent-bloom': '0 8px 28px -6px hsl(0 90% 58% / 0.30)',
				'overlay-drop': '0 24px 64px -12px rgb(0 0 0 / 0.85)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
				// A vitrine acendendo: o painel emerge do escuro fora de foco.
				'pane-rise': {
					from: {
						opacity: '0',
						transform: 'translateY(14px)',
						filter: 'blur(8px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)',
						filter: 'blur(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'pane-rise': 'pane-rise 900ms cubic-bezier(0.16, 1, 0.3, 1) both'
			},
			fontFamily: {
				sans: ["Archivo", "Helvetica Neue", "Arial", "sans-serif"],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
