export default defineNuxtConfig({
  meta: {
    title: "MultiLabX",
    link: [
      {
        href: "https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap&family=Silkscreen:wght@400;700&display=swap",
        rel: "stylesheet",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "favico.png",
      },
    ],
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
});
