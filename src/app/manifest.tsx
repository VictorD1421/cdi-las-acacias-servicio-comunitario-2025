export default function manifest() {
  return {
    name: "CDI Asiq Las Acacias",
    short_name: "CDI Web",
    description: "Pagina web de CDI Asiq Las Acacias",
    start_url: "/",
    display: "standalone",
    background_color: "rgb(0,89,99)",
    theme_color: "rgb(0,172,177)",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
