// ─── lib/data.js ─────────────────────────────────────────────────────────────
// All static portfolio data lives here.
// Edit this file to update your projects, experience, education, tech stack, etc.
// ─────────────────────────────────────────────────────────────────────────────

/*
  PROJECT SHAPE
  {
    title, type, role, description,
    tags: [],
    icon: "emoji",
    accent: "#hex",                         // drives the preview colour
    links: [{ label, href }],               // [] => shows `status` label instead
    status: "Internal · RECTEM",            // only shown when links is empty
    preview: {
      kind: "api" | "mobile" | "web",
      endpoints: [{ m: "POST", p: "/api/...", s: 201 }],  // api only
      note: "● deployed on Render",
    },
  }
*/

export const PROJECTS = [
  {
    title: "Eventful — Event Ticketing API",
    type: "Backend · REST API",
    role: "Backend Engineer",
    accent: "#3178c6",
    description:
      "A production-grade event ticketing platform where creators list and sell tickets and attendees buy them. It handles JWT auth with refresh-token rotation, Paystack payments over webhooks, QR-coded tickets, and background jobs for email and analytics.",
    tags: [
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Paystack",
    ],
    icon: "🎟️",
    links: [
      { label: "GitHub", href: "https://github.com/TunmiseAyeni/eventful" },
    ],
    status: null,
    preview: {
      kind: "api",
      note: "● deployed on Render",
      endpoints: [
        { m: "POST", p: "/api/auth/login", s: 200 },
        { m: "POST", p: "/api/events", s: 201 },
        { m: "GET", p: "/api/events", s: 200 },
        { m: "POST", p: "/api/tickets/:id/pay", s: 200 },
        { m: "HOOK", p: "/webhooks/paystack", s: 200 },
      ],
    },
  },
  {
    title: "RECTEM AI Chatbot",
    type: "AI Assistant · Backend",
    role: "Backend Developer · NYSC",
    accent: "#8b5cf6",
    description:
      "An automated FAQ assistant for Redeemer's College of Technology & Management, running on the college website and its social channels. It keeps session-based chat history, offers quick-reply FAQ chips, and answers from a knowledge base covering programmes, fees, admissions and hostels. A TypeScript and Express backend sits in front of an LLM.",
    tags: ["TypeScript", "Express", "LLM (Groq / Claude)"],
    icon: "💬",
    links: [],
    status: "Internal · RECTEM",
    preview: {
      kind: "api",
      note: "● live at RECTEM",
      endpoints: [
        { m: "POST", p: "/api/session", s: 201 },
        { m: "POST", p: "/api/chat", s: 200 },
        { m: "GET", p: "/api/faqs", s: 200 },
      ],
    },
  },
  {
    title: "Social App API (Sprout)",
    type: "Backend · REST API",
    role: "Full-Stack Developer",
    accent: "#10b981",
    description:
      "A social media REST API covering authentication, posts, follows and feeds, with a lightweight companion UI called “Sprout”. It's backed by unit and integration tests and documented so others can pick it up.",
    tags: ["TypeScript", "Express", "MongoDB", "Mongoose", "JWT", "Jest"],
    icon: "🌱",
    links: [
      { label: "API", href: "https://github.com/TunmiseAyeni/social-app-api" },
      { label: "UI", href: "https://github.com/TunmiseAyeni/social-app-ui" },
    ],
    status: null,
    preview: {
      kind: "api",
      note: "● deployed on Render",
      endpoints: [
        { m: "POST", p: "/api/auth/register", s: 201 },
        { m: "POST", p: "/api/posts", s: 201 },
        { m: "GET", p: "/api/feed", s: 200 },
        { m: "POST", p: "/api/users/:id/follow", s: 200 },
      ],
    },
  },
  {
    title: "BU Books — Online Bookstore",
    type: "Full-Stack · Commerce",
    role: "Full-Stack Developer",
    accent: "#14b8a6",
    description:
      "A full-stack bookstore with a Flutter storefront and a Node.js and MongoDB API behind it, with JWT auth and a stock-aware checkout. The app and the server live in separate repositories.",
    tags: ["Flutter", "Node.js", "MongoDB", "JWT"],
    icon: "📚",
    links: [
      {
        label: "Server",
        href: "https://github.com/TunmiseAyeni/bu-books-server",
      },
      {
        label: "App",
        href: "https://github.com/TunmiseAyeni/bu-books-frontend",
      },
    ],
    status: null,
    preview: { kind: "mobile", note: "Flutter · Node.js" },
  },
  {
    title: "Barcode Scanner App",
    type: "Mobile · Enterprise",
    role: "Mobile Developer · Vendy Ltd",
    accent: "#06b6d4",
    description:
      "An enterprise Flutter app I built during my internship at Vendy Ltd. It covers barcode-driven staff workflows, biometric login, and realtime Firestore sync.",
    tags: ["Flutter", "Firebase", "Firestore", "Biometrics"],
    icon: "📷",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/TunmiseAyeni/Barcode-Scanner-App",
      },
    ],
    status: null,
    preview: { kind: "mobile", note: "Flutter · Firebase" },
  },
];

export const EXPERIENCE = [
  {
    period: "Jan 2026 – Oct 2026",
    role: "Backend Developer (NYSC)",
    company: "RECTEM · Ogun State, Nigeria",
    points: [
      "Built and deployed an automated FAQ chatbot (TypeScript / Express over an LLM) for the college website and social channels, with session history and quick-reply chips.",
      "Managed the backend of the admin dashboard used to publish and manage student results.",
      "Supported students by troubleshooting and resolving issues on the student portal.",
    ],
  },
  {
    period: "Oct 2022 – Present",
    role: "Freelance Software Developer",
    company: "Remote · Lagos, Nigeria",
    points: [
      "Designed and shipped REST APIs and backend services with Node.js, TypeScript, Express and PostgreSQL / MongoDB.",
      "Delivered full products end to end, covering the backend, mobile (Flutter) and web (Next.js), to client requirements.",
      "Handled deployment, environment config and documentation across Render, Railway and Vercel.",
    ],
  },
  {
    period: "Jan 2024 – Jul 2024",
    role: "Software Development Intern",
    company: "Vendy Ltd. · Lagos, Nigeria",
    points: [
      "Developed barcode scanner and biometric authentication features in Flutter.",
      "Implemented secure realtime synchronisation with Firestore.",
      "Contributed to team delivery through code reviews and agile sprints.",
    ],
  },
  {
    period: "Dec 2018 – Apr 2019",
    role: "Co-Founder & CEO",
    company: "R.E.T Innovate · Orlando, Florida",
    points: [
      "Co-created the product direction and pitch for an anti-vaping awareness app for teens.",
      "Placed 2nd at the Conrad Challenge national finals in Orlando, Florida.",
    ],
  },
];

// ── Education & Certifications ───────────────────────────────────────────────
// Add a verifiable credential URL to `link` to render a "View credential ↗" button.
export const EDUCATION = [
  {
    credential: "B.Sc. Computer Science",
    detail: "First Class Honours",
    org: "Babcock University",
    period: "2021 – 2025",
    icon: "🎓",
    link: null,
  },
  {
    credential: "Backend Engineering (Node.js)",
    detail: "Certified Backend Engineer",
    org: "ALTSchool Africa",
    period: "2025 – 2026",
    icon: "📜",
    credentialId: "REF-TCMt0DedKQWMl6yQM0",
    link: "/altschool-certificate.pdf", // save your ALTSchool PDF to /public/altschool-certificate.pdf (exact name, lowercase)
  },
];

export const TECH_STACK = [
  {
    name: "Node.js",
    color: "#68A063",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L16.228 30.334C13.553 31.866 12 34.64 12 37.667v51.208c0 3.116 1.553 5.889 4.228 7.422l10.22 5.997c4.937 2.491 6.796 2.491 9.086 2.491 7.264 0 11.42-4.677 11.42-12.833V45.217c0-.713-.371-1.774-1.659-1.774h-5.053c-1.291 0-1.66 1.061-1.66 1.774v46.754c0 3.896-3.853 7.554-10.124 4.229L19.194 90.23c-.285-.154-.498-.652-.498-1.013V37.667c0-.285.173-.775.498-.956l44.055-25.605c.366-.196.879-.196 1.245 0l44.055 25.605c.285.181.498.671.498.956v51.208c0 .361-.213.859-.498 1.013L65.016 115.94c-.285.154-.775.154-1.06 0l-10.275-6.115c-.285-.154-.773-.24-1.058-.036-2.905 1.715-3.507 1.984-6.268 2.985-.705.24-1.783.617.438 1.82l13.36 7.937c1.375.804 2.926 1.206 4.52 1.206 1.573 0 3.146-.402 4.52-1.206l44.097-25.606c2.675-1.533 4.228-4.306 4.228-7.422V37.667c0-3.114-1.553-5.889-4.228-7.333z"/><path fill="#83CD29" d="M71.973 77.047c-11.42 0-13.827-3.244-14.644-9.839-.131-1.061-.872-1.709-1.879-1.709h-5.164c-1.137 0-1.878.77-1.878 1.904 0 8.518 4.664 18.643 23.565 18.643 14.116 0 22.206-5.84 22.206-16.084 0-10.231-6.836-13.086-21.476-15.058-14.726-1.978-16.279-2.913-16.279-6.399 0-2.84 1.202-6.617 11.547-6.617 9.225 0 12.633 1.977 14.052 8.172.219.918.928 1.587 1.879 1.587h5.199c.57 0 1.127-.24 1.547-.697.417-.436.633-1.032.567-1.656-.897-10.916-8.214-16.015-23.244-16.015-13.283 0-21.19 5.716-21.19 15.25 0 10.326 7.977 13.213 21.19 14.864 15.665 1.954 16.565 3.669 16.565 6.835-.001 5.227-4.1 7.819-13.763 7.819z"/></svg>`,
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="14" fill="#3178C6"/><text x="68" y="94" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="700" fill="#fff" text-anchor="middle">TS</text></svg>`,
  },
  {
    name: "Express",
    color: "#aaaaaa",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#ccc" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 73.51 82.81 80.53 76.87 87.66c-2.56 3.03-5.36 5.87-7.67 9.08-3.36 4.83-7.1 6.14-12.9 4.86l28.2-38.09-26.2-35.97c4.37-.86 7.5-.41 10.04 3.45 5.38 8.11 11.27 15.88 17.42 24.4 6.17-8.3 12.17-16.11 17.76-24.16 2.52-3.63 5.12-5.2 9.94-4.06l-10.37 14.06-16.2 21.59c-.78 1.04-.79 1.74 0 2.78l27.55 37.28zM1.33 61.74c.72-3.41 1.2-6.89 2.21-10.22 6.5-21.26 30.47-33.48 51.64-26.64 18.2 5.87 29.76 20.23 30.73 39.84.39 7.9.09 15.83.09 24.07H9.81c-1.14 16.27 11.37 28.33 26.64 28.7 10.47.25 18.67-4.05 24.7-12.49 1.48-2.06 2.93-4.14 5.45-5.43 3.87 5.8 3.87 9.23-.29 13.2a41.077 41.077 0 01-44.63 7.23C8.41 114.87 1.58 103.75 1.6 88.99l.09-18.75c0-2.83-.26-5.67-.36-8.5zm8.81-2.15h62.89c-.88-16.59-12.15-27.88-30.06-28.26-18.37-.39-31.3 11.06-32.83 28.26z"/></svg>`,
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#336791" d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287C100.666-.937 74.2 9.945 73.755 10.17l-.16.029c-3.285-.686-6.979-1.103-11.099-1.171-7.529-.129-13.249 1.976-17.599 5.27 0 0-53.455-22.036-50.943 27.814.528 10.502 15.032 79.454 32.355 58.648 6.319-7.608 12.441-14.02 12.441-14.02 3.034 2.019 6.673 3.043 10.48 2.671l.295-.252c-.092.927-.05 1.836.122 2.913-4.653 5.2-3.286 6.109-12.596 8.03-9.422 1.942-3.889 5.394-.272 6.302 4.942 1.23 16.348 2.976 24.076-7.793l-.308 1.24c2.063 1.648 3.509 10.727 3.267 18.956-.243 8.23.39 14.048 1.121 18.249.733 4.204 1.591 13.498 8.383 10.737 5.695-2.334 8.588-8.42 9.019-18.531.29-6.82 1.044-5.82 1.091-11.94l.581-3.637c.67-11.237.107-14.843 3.916-13.18l.924.076c2.8.206 6.488-.456 8.653-1.46 4.612-2.142 7.352-5.712 2.8-4.776-10.377 2.143-11.086-1.372-11.086-1.372z"/></svg>`,
  },
  {
    name: "MongoDB",
    color: "#47A248",
    svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#47A248" d="M15.9.087l.854 1.604c.192.345.499.604.865.737C20.945 3.793 24 7.978 24 12.613c0 4.744-2.013 8.606-5.224 11.603-.422.391-.68.934-.722 1.515l-.301 4.852-.819.073-.707-4.927a2.1 2.1 0 00-.632-1.282C12.494 21.623 8 17.855 8 12.613 8 6.41 11.1 2.085 15.9.087z"/></svg>`,
  },
  {
    name: "Docker",
    color: "#2496ED",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#2496ED"><rect x="37" y="52" width="15" height="13" rx="1"/><rect x="54" y="52" width="15" height="13" rx="1"/><rect x="71" y="52" width="15" height="13" rx="1"/><rect x="54" y="37" width="15" height="13" rx="1"/><rect x="71" y="37" width="15" height="13" rx="1"/><rect x="71" y="22" width="15" height="13" rx="1"/></g><path fill="#2496ED" d="M122 60c-3-2-9-2-13-1-1-6-5-11-9-14l-2-1-2 2c-3 4-4 9-3 13 .4 2 1.2 4 2.4 5.4-2.3 1.3-6 1.6-9.4 1.6H7c-1.5 8 .6 17 6.6 23 6 5.8 14.5 8 24 8 20.6 0 38-9 46-29 5.2.3 11 .1 14.6-4.6.9-1.2 2-3 2.8-5l.6-1.6z"/></svg>`,
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.095-10.864 2.071-17.08.048-10.496 0-20.999 0-31.601z"/></svg>`,
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.876-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></svg>`,
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#FFA000" d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"/><path fill="#F57C00" d="M13.445 8.543l2.972 5.995-11.97 11.135z"/><path fill="#FFCA28" d="M23.123 7.003c.572-.55 1.164-.362 1.315.420l3.116 18.105-10.328 6.2c-.36.2-.992.274-1.328.07L4.447 25.673l18.676-18.67z"/><path fill="#FFA000" d="M13.445 8.543l-8.998 17.13 4.586-17.979z"/></svg>`,
  },
  {
    name: "Flutter",
    color: "#54C5F8",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#54C5F8" d="M12.3 64.2L76.3 0h39.4L32.1 83.6z"/><path fill="#01579B" d="M76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.9z"/><path fill="#29B6F6" d="M81.6 93.9L42.2 93.9 76.3 128h.1z"/></svg>`,
  },
  {
    name: "Dart",
    color: "#00B4AB",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#00B4AB" d="M35.3 8.6l-27 27v54.7l27 27h54.4l27-27V35.6l-27-27H35.3z"/><path fill="#fff" d="M70 35.6H54.2L40 49.8v28.4l14.2 14.2H70l14.2-14.2V49.8L70 35.6z"/></svg>`,
  },
  {
    name: "Git",
    color: "#F05032",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F34F29" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.993 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.109c-2.862-2.861-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.016-11.501z"/></svg>`,
  },
  {
  name: "Next.js",
  color: "#ffffff",
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="#fff" d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12 2.45 0 4.73-.735 6.63-1.995L7.83 9.75v7.5H6.3V6.75h1.8l11.49 15.12A11.95 11.95 0 0 0 24 12c0-6.628-5.372-12-12-12Zm4.2 16.5-1.5-2.1V6.75h1.5V16.5Z"/></svg>`,
},
];

export const FALLBACK_REPOS = [
  {
    id: 1,
    name: "eventful",
    description:
      "Production-grade event ticketing API. TypeScript, Express, Prisma, PostgreSQL, Redis, Paystack.",
    html_url: "https://github.com/TunmiseAyeni/eventful",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 2,
    name: "social-app-api",
    description:
      "Social media REST API with auth, posts, follows and feeds. TypeScript, Express, MongoDB, Jest.",
    html_url: "https://github.com/TunmiseAyeni/social-app-api",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 3,
    name: "birthday-reminder",
    description:
      "Automated birthday-email service with a daily cron job. TypeScript, Express, PostgreSQL, Resend.",
    html_url: "https://github.com/TunmiseAyeni/birthday-reminder",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 4,
    name: "bu-books-server",
    description:
      "Node.js and MongoDB API for an online bookstore, with JWT auth and stock-aware checkout.",
    html_url: "https://github.com/TunmiseAyeni/bu-books-server",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 5,
    name: "social-app-ui",
    description:
      "“Sprout”, the frontend UI for the Social App API, in HTML, CSS and vanilla JavaScript.",
    html_url: "https://github.com/TunmiseAyeni/social-app-ui",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 6,
    name: "Barcode-Scanner-App",
    description:
      "Enterprise Flutter app with barcode workflows, biometric login and Firestore sync.",
    html_url: "https://github.com/TunmiseAyeni/Barcode-Scanner-App",
    language: "Dart",
    stargazers_count: 0,
    forks_count: 0,
  },
];

export const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export const SECTION_IDS = [
  "about",
  "education",
  "projects",
  "experience",
  "stack",
  "github",
  "contact",
];

// CV download. Set to null to hide the "Download CV" buttons entirely.
// When your updated CV is ready, drop it in /public/ and set this to its path,
// e.g. "/Oluwatunmise-Ayeni-CV.pdf" — both buttons reappear automatically.
export const CV_URL = null;
