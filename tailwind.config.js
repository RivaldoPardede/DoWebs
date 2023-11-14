/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ["index.html"],
    content: {
        relative: true,
        transform: (content) => content.replace(/taos:/g, ''),
        files: ['index.html','./src/**/*.{html,js}'],
      },
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            shadows: {
                white: "0 1px 2px 0 rgba(255, 255, 255, 0.05)",
            },
            colors: {
                dark: "#0f172a",
                primary: {
                    50: "#f8fafc",
                    100: "#f1f5f9",
                    200: "#e2e8f0",
                    300: "#cbd5e1",
                    400: "#94a3b8",
                    500: "#64748b",
                    600: "#475569",
                    700: "#334155",
                    800: "#1e293b",
                    900: "#0f172a",
                    950: "#020617",
                },
            },
            fontFamily: {
                poppins: ["Poppins"],
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "system-ui",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
            },
        },
        animation: {
            typewriter: "typewriter 3s steps(17) forwards",
            caret: "typewriter 3s steps(17) forwards, blink 1s steps(17) infinite 3s",
        },
        keyframes: {
            typewriter: {
                to: {
                    left: "100%",
                },
            },
            blink: {
                "0%": {
                    opacity: "0",
                },
                "0.1%": {
                    opacity: "1",
                },
                "50%": {
                    opacity: "1",
                },
                "50.1%": {
                    opacity: "0",
                },
                "100%": {
                    opacity: "0",
                },
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("taos/plugin")],
    safelist: [
        "!duration-[0ms]",
        "!delay-[0ms]",
        'html.js :where([class*="taos:"]:not(.taos-init))',
    ],
};
