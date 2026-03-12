/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                emerald: {
                    500: '#2ECC71',
                },
                metallic: {
                    grey: '#4A5568',
                },
            },
        },
    },
    plugins: [],
}
