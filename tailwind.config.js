/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage:{
                mobile: "url(../images/bg-curvy-mobile.svg)"
            },
        },
        colors: {
            blue: {
                "main-background": "hsl(218, 28%, 13%)",
                "footer-background": "hsl(216, 53%, 9%)",
                "testimonials-background": "hsl(219, 30%, 18%)",
                "intro-background": "hsl(217, 28%, 15%)",
                "gradient":"hsl(198, 60%, 50%)"
            },
            white: "hsl(0, 0%, 100%)",
            cyan:"hsl(176, 68%, 64%)",
            lightRed:"hsl(0, 100%, 63%)"
        },
        fontFamily: {
            "open-sans": ["Open Sans", "sans-serif"],
            "raleway": ["Raleway", "sans-serif"]
        },
    },
    plugins: [],
}