export const themes = {
    default: {
        light: {
            '--color-bg': '#ffffff',
            '--color-text': '#000000',
            '--color-primary': '#007bff',
            '--color-border': '#e0e0e0',
            '--color-shadow': 'rgba(0, 0, 0, 0.1)',
        },
        dark: {
            '--color-bg': '#000000',
            '--color-text': '#ffffff',
            '--color-primary': '#0056b3',
            '--color-border': '#333333',
            '--color-shadow': 'rgba(255, 255, 255, 0.1)',
        },
    },
    modern_neon: {
        '--color-bg': '#1e1e2f', // Slightly muted dark background (deep indigo)
        '--color-text': '#00e0ff', // Vibrant cyan for text
        '--color-primary': '#ff6eff', // Bright magenta as primary color
        '--color-border': '#444466', // Soft border with a bluish tint
        '--color-shadow': 'rgba(0, 224, 255, 0.3)', // Cyan glow for shadows
    },
    coffee: {
        light: {
            '--color-bg': '#f9f5f1',
            '--color-text': '#744e36',
            '--color-primary': '#d2691e',
            '--color-border': '#c8b6a6',
            '--color-shadow': 'rgba(116, 78, 54, 0.2)',
        },
        dark: {
            '--color-bg': '#3b302b',
            '--color-text': '#d7bea8',
            '--color-primary': '#8b4513',
            '--color-border': '#4e453e',
            '--color-shadow': 'rgba(215, 190, 168, 0.2)',
        },
    },
}