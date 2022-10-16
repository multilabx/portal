export default defineNuxtConfig({
  meta: {
    title: "MultiLabX",
    meta: [
      { hid: 'description', name: 'description', content: 'software house' },
      { name: 'keywords', content: 'MultiLabX, รับทำเว็บไซต์สุดเจ๋ง' },
      { name: 'author', content: 'MultiLabX' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'Thailand' },
      { name: 'theme-color', content: '#cc0000' },
      { name: 'og:title', content: 'MultiLabX' },
      { name: 'og:description', content: 'software house' },
      { name: 'og:image', content: '/_nuxt/assets/images/logoNewGen.png' }
    ],
    link: [
      {
        href: "https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap&family=Silkscreen:wght@400;700&family=Chakra+Petch:wght@100;200;300;400;500;600;700;800;900&display=swap",
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
