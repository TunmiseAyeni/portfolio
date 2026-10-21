// app/robots.js
// Place this file in your /app directory.
// Next.js will auto-generate /robots.txt from it.

const BASE_URL = "https://tunmise-ayeni-portfolio.vercel.app"; // 🔁 update if you add a custom domain later

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
