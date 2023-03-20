/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        main: "#6a4029",
        secondary: "#ffba33",
        accent: "#f8f8f8",
        fonta: "#9f9f9f",
        fontb: "#4f5665",
        fontc: "#0b132a",
        fontd: "#895537",
        bgfooter: "#f8f8f8",
        footertext: "#4f5665",
        trademarks: "#afb5c0",
      },
      backgroundImage: {
        profile: "url(../assets/images/profile-picture.webp)",
        // bghistory: "url(./images/history-bg.webp)",
        veggieTomatoMix: "url(../assets/images/vegie-tomato-mix.webp)",
        homeBg: "url(../assets/images/coffee-bg.webp)",
        searchIcon: "url(../assets/images/search-black.svg)",
        greenTickRound: "url(../assets/images/green-check.svg)",
        beefSpaghetti: "url(../assets/images/promo-product.webp)",
        hazelnutLatte: "url(../assets/images/hazelnut-latte.webp)",
        pinkyPromise: "url(../assets/images/pinky-promis.webp)",
        chickenWings: "url(../assets/images/chicken-wings.webp)",
        summerFriedRice: "url(../assets/images/summer-fried-rice.webp)",
        drumSticks: "url(../assets/images/drum-sticks.webp)",
        saltyRice: "url(../assets/images/salty-rice.webp)",
        coldBrew: "url(../assets/images/coldbrew.webp)",

        greenTick: "url(../assets/images/green-tick.svg)",
        netflix: "url(../assets/images/netflix.webp)",
        reddit: "url(../assets/images/reddit.webp)",
        amazon: "url(../assets/images/amazon.webp)",
        discord: "url(../assets/images/discord.webp)",
        spotify: "url(../assets/images/spotify.webp)",
        forgotPwdBg: "url(../assets/images/BGimg.jpg)",
      },
      fontSize: {
        "2,5": "2.5rem",
      },
      dropShadow: {
        title: "0px 4px 4px rgba(0, 0, 0, 0.8)",
        yellowBtn: "0px 6px 20px rgba(255, 186, 51, 0.4);",
        cardShadow: "0px 6px 20px rgba(196, 196, 196, 0.67)",
      },
      boxShadow: {
        yellowBtn: "0px 6px 20px rgba(255, 186, 51, 0.4);",
        cardShadow: "0px 6px 20px rgba(196, 196, 196, 0.67)",
        resendBtn: "0px 6px 20px rgba(106, 64, 41, 0.46)",
        productCard: "0px 30px 60px rgba(57, 57, 57, 0.1)",
        deliveryButton: "0px 6px 20px rgba(137, 85, 55, 0.4)",
      },
      backgroundPosition: {
        searchIconPos: "32px, 50%",
      },
      screens: {
        mobileXl: "425px",
        //  => @media (min-width: 425px) { ... }
        tabXl: "900px",
        //  => @media (min-width: 900px) { ... }
      },
    },
  },
  plugins: [],
};
