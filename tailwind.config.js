/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bColor: "#befa00",
                bgColor: "#f8f8f7",
                rgb: "#d9d9d9",
                cF: "#454545",
                colorF: "#808080",
                colorP: "#befa00"
            },
            padding: {
                Pad: "15px 0",
                padF: "10px 0",
                padP:"3px 5px",
                padDetail:"10px 20px",
                padHatch: "10px 15px",
            },
            margin: {
                marH: "10px auto",
                mDetail: "5px 0",
                mP: " 20px 0 5px",
                marginH:" 40px 0 20px",
                mDetails:" 15px 0",
                mBye:"50px 0",
                mCategories:"50px auto",
            },
            boxShadow: {
                boxCard: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                boxDetail:"rgba(149, 157, 165, 0.2) 0px 8px 24px",
            },
            screens:{
                'laptop': '900px',
            }
        },
    },
    plugins: [],
}

