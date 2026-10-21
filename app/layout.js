import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const BASE_URL = "https://tunmise-ayeni-portfolio.vercel.app"; // 🔁 update if you add a custom domain later

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Oluwatunmise Ayeni | Backend Developer",
    template: "%s | Oluwatunmise Ayeni",
  },
  description:
    "Backend Developer based in Nigeria. I build REST APIs, authentication, databases and services with Node.js, TypeScript and PostgreSQL — and ship full-stack web and mobile when a product needs it end-to-end. Available for full-time and freelance opportunities.",

  keywords: [
    "Backend developer",
    "Backend engineer",
    "Node.js developer",
    "TypeScript",
    "Express",
    "PostgreSQL",
    "REST API",
    "Software engineer Nigeria",
    "Full-stack developer",
    "Oluwatunmise Ayeni",
  ],

  authors: [{ name: "Oluwatunmise Ayeni", url: BASE_URL }],
  creator: "Oluwatunmise Ayeni",

  // ── Open Graph — controls how your site looks when shared on LinkedIn, WhatsApp, Slack, etc. ──
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Oluwatunmise Ayeni",
    title: "Oluwatunmise Ayeni | Backend Developer",
    description:
      "Backend Developer building REST APIs and services with Node.js, TypeScript and PostgreSQL — plus full-stack web and mobile.",
    images: [
      {
        url: "/og-image.png", // 🔁 Create a 1200×630px image and place it in /public/og-image.png
        width: 1200,
        height: 630,
        alt: "Oluwatunmise Ayeni — Backend Developer",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "Oluwatunmise Ayeni | Backend Developer",
    description:
      "Backend Developer building REST APIs and services with Node.js, TypeScript and PostgreSQL.",
    images: ["/og-image.png"],
    creator: "@TunmiseAyeni", // 🔁 Replace with your actual Twitter/X handle if you have one
  },

  // ── Search engine indexing ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Favicon / app icons ──
  // favicon.svg   → Safari, Firefox (modern)
  // favicon.ico   → Chrome, Edge, older browsers (place a real .ico in /public/)
  // To generate favicon.ico from favicon.svg, use: https://favicon.io or https://realfavicongenerator.net
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }, // Safari, Firefox
      { url: "/favicon.ico" }, // Chrome, Edge — add this file!
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }, // fallback
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // ── Canonical URL (prevents duplicate content issues) ──
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data — helps Google understand who you are */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Oluwatunmise Ayeni",
              url: BASE_URL,
              jobTitle: "Backend Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Babcock University",
              },
              knowsAbout: [
                "Node.js",
                "TypeScript",
                "Express",
                "PostgreSQL",
                "MongoDB",
                "REST APIs",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              email: "tunmiseayeni13@gmail.com",
              telephone: "+2348101788909",
              sameAs: [
                "https://github.com/TunmiseAyeni",
                "https://www.linkedin.com/in/oluwatunmise-ayeni/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${bricolage.variable} ${instrumentSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
