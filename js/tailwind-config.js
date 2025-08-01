const tailwindConfig = {
    theme: {
        extend: {
            colors: {
                primary: '#583424',
                secondary: '#8C5E3D',
                accent: '#D9A577',
                light: '#F2E2D0',
                dark: '#261712'
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-reverse': 'float-reverse 5s ease-in-out infinite',
                'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'float-reverse': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(20px)' },
                }
            }
        }
    }
};

export default tailwindConfig;