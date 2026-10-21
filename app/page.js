"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import s from "./page.module.css";
import {
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  TECH_STACK,
  FALLBACK_REPOS,
  NAV_ITEMS,
  SECTION_IDS,
  CV_URL,
} from "../lib/data";

const LANG_COLORS = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Dart: "#54C5F8",
  Python: "#3776AB",
  Kotlin: "#7F52FF",
  "C++": "#f34b7d",
  Shell: "#89e051",
};
const langColor = (lang) => LANG_COLORS[lang] ?? "#14b8a6";

// HTTP method → colour for the API preview cards
const METHOD_COLORS = {
  GET: "#10b981",
  POST: "#3b82f6",
  PUT: "#f59e0b",
  PATCH: "#f59e0b",
  DELETE: "#ef4444",
  HOOK: "#14b8a6",
  CRON: "#8b5cf6",
};
const methodColor = (m) => METHOD_COLORS[m] ?? "#64748b";

// ── Project preview — renders an API console, a mobile skeleton, or a web skeleton ──
function ProjectPreview({ project }) {
  const accent = project.accent || "#14b8a6";
  const pv = project.preview || { kind: "api", endpoints: [] };
  const shellBg = "#0a0f1a";

  // Shared faux-window chrome (traffic lights + title)
  const Chrome = ({ title }) => (
    <div
      style={{
        display: "flex",
        gap: 6,
        alignItems: "center",
        marginBottom: 14,
      }}
    >
      <div
        style={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: "#ff5f57",
        }}
      />
      <div
        style={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: "#febc2e",
        }}
      />
      <div
        style={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: "#28c840",
        }}
      />
      <span
        style={{
          marginLeft: 10,
          fontSize: ".66rem",
          letterSpacing: ".06em",
          color: "rgba(255,255,255,.28)",
          fontFamily: "ui-monospace, monospace",
        }}
      >
        {title}
      </span>
    </div>
  );

  const Wrap = ({ children }) => (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: shellBg,
        borderRadius: 12,
        position: "relative",
        overflow: "hidden",
        padding: "1.4rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${accent}2e`,
      }}
    >
      {children}
      {pv.note && (
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 14,
            fontSize: ".65rem",
            fontWeight: 600,
            letterSpacing: ".04em",
            color: accent,
            background: `${accent}14`,
            border: `1px solid ${accent}33`,
            borderRadius: 6,
            padding: ".2rem .55rem",
          }}
        >
          {pv.note}
        </div>
      )}
    </div>
  );

  // ── API console ──
  if (pv.kind === "api") {
    return (
      <Wrap>
        <Chrome title={`${project.title.split(" ")[0].toLowerCase()} ~ api`} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 9,
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            fontSize: ".76rem",
          }}
        >
          {(pv.endpoints || []).map((e, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <span
                style={{
                  minWidth: 46,
                  textAlign: "center",
                  fontSize: ".62rem",
                  fontWeight: 700,
                  letterSpacing: ".03em",
                  color: methodColor(e.m),
                  background: `${methodColor(e.m)}18`,
                  border: `1px solid ${methodColor(e.m)}40`,
                  borderRadius: 5,
                  padding: ".16rem .3rem",
                }}
              >
                {e.m}
              </span>
              <span
                style={{
                  color: "rgba(220,232,240,.72)",
                  flex: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {e.p}
              </span>
              <span
                style={{
                  color: methodColor(e.m),
                  fontSize: ".68rem",
                  fontWeight: 600,
                }}
              >
                {e.s}
              </span>
            </div>
          ))}
        </div>
      </Wrap>
    );
  }

  // ── Mobile skeleton ──
  if (pv.kind === "mobile") {
    return (
      <Wrap>
        <Chrome title="app preview" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 132,
              height: "100%",
              maxHeight: 210,
              borderRadius: 18,
              border: `1.5px solid ${accent}3a`,
              background: "rgba(255,255,255,.02)",
              padding: "1rem .8rem",
              display: "flex",
              flexDirection: "column",
              gap: 9,
            }}
          >
            <div
              style={{
                height: 8,
                width: "55%",
                borderRadius: 4,
                background: `${accent}66`,
              }}
            />
            <div
              style={{
                height: 46,
                borderRadius: 8,
                background: `${accent}18`,
                border: `1px solid ${accent}33`,
              }}
            />
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 7, alignItems: "center" }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 6,
                    background: `${accent}2e`,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      height: 5,
                      width: `${70 - i * 8}%`,
                      borderRadius: 3,
                      background: "rgba(255,255,255,.14)",
                      marginBottom: 4,
                    }}
                  />
                  <div
                    style={{
                      height: 4,
                      width: `${50 - i * 6}%`,
                      borderRadius: 3,
                      background: "rgba(255,255,255,.07)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    );
  }

  // ── Web skeleton ──
  return (
    <Wrap>
      <Chrome title="localhost:3000" />
      <div
        style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}
      >
        <div
          style={{
            height: 40,
            borderRadius: 8,
            background: `${accent}14`,
            border: `1px solid ${accent}30`,
            display: "flex",
            alignItems: "center",
            padding: "0 .7rem",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 5,
              background: `${accent}55`,
            }}
          />
          <div
            style={{
              height: 6,
              width: 70,
              borderRadius: 3,
              background: "rgba(255,255,255,.18)",
            }}
          />
          <div
            style={{
              marginLeft: "auto",
              height: 6,
              width: 90,
              borderRadius: 3,
              background: "rgba(255,255,255,.1)",
            }}
          />
        </div>
        <div
          style={{
            height: 8,
            width: "70%",
            borderRadius: 4,
            background: `${accent}66`,
          }}
        />
        <div
          style={{
            height: 5,
            width: "90%",
            borderRadius: 3,
            background: "rgba(255,255,255,.1)",
          }}
        />
        <div
          style={{
            height: 5,
            width: "80%",
            borderRadius: 3,
            background: "rgba(255,255,255,.08)",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 7,
            marginTop: 4,
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                height: 52,
                borderRadius: 8,
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            />
          ))}
        </div>
      </div>
    </Wrap>
  );
}

// ── Contact form — POSTs to /api/contact (Resend) ────────────────────────────
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function ContactForm({ s }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in every field.");
      return;
    }
    if (!isEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "", company: "" });
      } else {
        setStatus("error");
        setError(
          data.error ||
            "Couldn't send your message. Please try again or email me directly.",
        );
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email me directly.");
    }
  };

  return (
    <div className={s.formFields}>
      <div className={s.formRow}>
        <div className={s.formGroup}>
          <label className={s.formLabel}>Your Name</label>
          <input
            className={s.formInput}
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className={s.formGroup}>
          <label className={s.formLabel}>Your Email</label>
          <input
            className={s.formInput}
            name="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={s.formGroup}>
        <label className={s.formLabel}>Your Message</label>
        <textarea
          className={s.formTextarea}
          name="message"
          placeholder="Tell me about your project…"
          value={form.message}
          onChange={handleChange}
          rows={5}
        />
      </div>

      {/* Honeypot — hidden from real users; bots fill it and get silently dropped */}
      <input
        className={s.honeypot}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.company}
        onChange={handleChange}
      />

      <button
        className={`${s.btn} ${s.btnTeal} ${s.formSubmit}`}
        onClick={handleSubmit}
        disabled={status === "sending" || status === "sent"}
      >
        {status === "sending"
          ? "Sending…"
          : status === "sent"
            ? "✓ Message sent!"
            : "Send Message →"}
      </button>

      {status === "sent" && (
        <p className={s.formNote}>
          Thanks, your message is on its way. I'll get back to you soon.
        </p>
      )}
      {error && status !== "sent" && <p className={s.formError}>{error}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [githubState, setGithubState] = useState("loading");
  const [repos, setRepos] = useState([]);
  const [activeExp, setActiveExp] = useState(0);
  const [activeNav, setActiveNav] = useState("");
  const [showTop, setShowTop] = useState(false);
  const [typedText, setTypedText] = useState("");

  const roles = [
    "Backend Developer",
    "Software Engineer",
    "API & Systems Developer",
    "Full-Stack Developer",
  ];
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const isDeleting = useRef(false);

  // ── Typewriter ──
  useEffect(() => {
    const tick = () => {
      const current = roles[roleIdx.current];
      if (!isDeleting.current) {
        charIdx.current++;
        setTypedText(current.slice(0, charIdx.current));
        if (charIdx.current === current.length) {
          isDeleting.current = true;
          setTimeout(tick, 2000);
          return;
        }
      } else {
        charIdx.current--;
        setTypedText(current.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          isDeleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % roles.length;
        }
      }
      setTimeout(tick, isDeleting.current ? 45 : 85);
    };
    const t = setTimeout(tick, 800);
    return () => clearTimeout(t);
  }, []);

  // ── GitHub with fallback ──
  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const res = await fetch(
          "https://api.github.com/users/TunmiseAyeni/repos?per_page=100&sort=updated",
          { headers: { Accept: "application/vnd.github+json" } },
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error();
        const sorted = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              b.stargazers_count * 3 +
              b.forks_count * 2 -
              (a.stargazers_count * 3 + a.forks_count * 2),
          )
          .slice(0, 6);
        if (active) {
          setRepos(sorted.length ? sorted : FALLBACK_REPOS);
          setGithubState(sorted.length ? "ready" : "fallback");
        }
      } catch {
        if (active) {
          setRepos(FALLBACK_REPOS);
          setGithubState("fallback");
        }
      }
    }
    load();
    return () => {
      active = false;
    };
  }, []);

  // ── Scroll reveal ──
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e, i) => {
          if (e.isIntersecting)
            setTimeout(() => e.target.classList.add("vis"), i * 65);
        }),
      { threshold: 0.07 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [repos]);

  // ── Active nav ──
  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveNav(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  // ── Back-to-top + outside click ──
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    const onClickOutside = (e) => {
      if (!e.target.closest("[data-nav]") && !e.target.closest("[data-mobbtn]"))
        setMenuOpen(false);
    };
    document.addEventListener("click", onClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    [],
  );
  const year = new Date().getFullYear();

  return (
    <>
      <div className={s.bgCanvas} aria-hidden="true" />
      <div className={s.bgGrid} aria-hidden="true" />

      {/* ── HEADER ── */}
      <header className={s.header}>
        <div className={s.hdr}>
          <a href="#top" className={s.logo}>
            <span className={s.logoMark} aria-hidden="true">
              OA
            </span>
            Tunmise
          </a>
          <nav
            data-nav
            className={`${s.navLinks}${menuOpen ? ` ${s.open}` : ""}`}
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={activeNav === href.slice(1) ? s.active : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className={s.hdrRight}>
            <a
              className={s.iconBtn}
              href="https://github.com/TunmiseAyeni"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              className={s.iconBtn}
              href="https://www.linkedin.com/in/oluwatunmise-ayeni/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <button
              data-mobbtn
              className={s.mobBtn}
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className={s.main} id="top">
        {/* HERO */}
        <section className={s.hero} aria-label="Introduction">
          <div className="reveal">
            <div className={s.availPill}>
              <span className={s.aDot} aria-hidden="true" /> Open to
              opportunities
            </div>
            <h1 className={s.heroName}>
              Oluwatunmise
              <br />
              <span className={s.grad}>Ayeni</span>
            </h1>
            <div className={s.typerow} aria-label="Current role">
              {typedText}
              <span className={s.cursor} aria-hidden="true">
                |
              </span>
            </div>
            <p className={s.heroDesc}>
              I mostly work on the server side, building the REST APIs,
              authentication, databases and background jobs that products run
              on, with Node.js, TypeScript and PostgreSQL. I'm happy taking a
              product the whole way too, so I build the mobile and web side when
              a project needs it.
            </p>
            <div className={s.heroCta}>
              <a href="#projects" className={`${s.btn} ${s.btnTeal}`}>
                See My Work
              </a>
              {CV_URL && (
                <a href={CV_URL} download className={`${s.btn} ${s.btnGhost}`}>
                  ↓ Download CV
                </a>
              )}
            </div>
          </div>

          <div className={`${s.heroPanel} reveal`} aria-hidden="true">
            <div className={s.glassCard}>
              <div className={s.termBar}>
                <div className={`${s.td} ${s.tr}`} />
                <div className={`${s.td} ${s.ty}`} />
                <div className={`${s.td} ${s.tg}`} />
                <span className={s.tlbl}>tunmise ~ zsh</span>
              </div>
              <div className={s.termBody}>
                <div>
                  <span className={s.tp}>❯ </span>
                  <span className={s.tc2}>whoami</span>
                </div>
                <div className={s.tout}>oluwatunmise-ayeni</div>
                <br />
                <div>
                  <span className={s.tp}>❯ </span>
                  <span className={s.tc2}>cat stack.json</span>
                </div>
                <div className={s.tout}>{"{"}</div>
                <div className={s.tout}>
                  &nbsp; <span className={s.tamb}>"focus"</span>: "backend
                  engineering",
                </div>
                <div className={s.tout}>
                  &nbsp; <span className={s.tamb}>"core"</span>:
                  ["Node.js","TypeScript"],
                </div>
                <div className={s.tout}>
                  &nbsp; <span className={s.tamb}>"data"</span>:
                  ["PostgreSQL","MongoDB"],
                </div>
                <div className={s.tout}>
                  &nbsp; <span className={s.tamb}>"status"</span>:{" "}
                  <span style={{ color: "#34d399" }}>"open_to_work"</span>
                </div>
                <div className={s.tout}>{"}"}</div>
              </div>
            </div>
            <div className={s.statsRow}>
              {[
                { val: "1st", lbl: "Class Honours" },
                { val: "6+", lbl: "Projects Shipped" },
                { val: "Cert.", lbl: "Backend Eng" },
              ].map((st) => (
                <div key={st.lbl} className={s.statBox}>
                  <div className={s.sv}>{st.val}</div>
                  <div className={s.sl}>{st.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className={s.section}>
          <div className="reveal">
            <div className={s.eyebrow}>About Me</div>
            <h2 className={s.sectionTitle}>The person behind the code</h2>
            <p className={s.sectionSub}>
              A little bit about who I am, what drives me, and where I'm headed
            </p>
          </div>
          <div className={`${s.aboutGrid} reveal`}>
            <div className={`${s.aboutCard} ${s.profileCard}`}>
              <div className={s.profileWrap}>
                <img
                  src="/tunmise.jpg"
                  alt="Oluwatunmise Ayeni"
                  className={s.profileImg}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className={s.profileMeta}>
                <div className={s.profileName}>Oluwatunmise Ayeni</div>
                <div className={s.profileTitle}>Backend Developer</div>
                <div className={s.profileLocation}>
                  📍 Lagos / Ogun State, Nigeria
                </div>
              </div>
            </div>
            <div className={s.aboutCard}>
              <h3>Who I am</h3>
              <p>
                I'm a software developer who works mainly on the backend: the
                APIs, data models and services that products run on. I studied
                Computer Science at Babcock University and graduated with First
                Class Honours, and I'm a certified backend engineer from
                ALTSchool Africa's Node.js programme.
              </p>
              <p>
                Most of my day is spent in Node.js, TypeScript, Express and
                databases, though I'm comfortable taking a product the whole
                way. I build mobile apps with Flutter and web apps with Next.js
                when a project calls for it.
              </p>
              <p>
                Outside of code, I like building things from the ground up. I
                co-founded R.E.T Innovate and placed 2nd at the Conrad Challenge
                in Orlando. What I care about most is writing clean, readable
                code and building systems that hold up when real people use
                them.
              </p>
            </div>
          </div>
          <div className={`${s.learningCard} reveal`}>
            <div className={s.learningIcon}>🚀</div>
            <div>
              <h4>Currently Exploring</h4>
              <p>
                Right now I'm going deeper into cloud and DevOps, and learning
                to build systems that scale and ship themselves.
              </p>
              <div className={s.learningTags}>
                {[
                  "Cloud (AWS)",
                  "Docker & CI/CD",
                  "System Design",
                  "Advanced PostgreSQL",
                  "Redis & Queues",
                ].map((t) => (
                  <span key={t} className={s.learningTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className={s.section}>
          <div className="reveal">
            <div className={s.eyebrow}>Credentials</div>
            <h2 className={s.sectionTitle}>Education & Certifications</h2>
            <p className={s.sectionSub}>Where the foundations were built</p>
          </div>
          <div className={`${s.eduGrid} reveal`}>
            {EDUCATION.map((ed) => (
              <div key={ed.credential} className={s.eduCard}>
                <div className={s.eduIcon} aria-hidden="true">
                  {ed.icon}
                </div>
                <div className={s.eduBody}>
                  <div className={s.eduCred}>{ed.credential}</div>
                  <div className={s.eduDetail}>{ed.detail}</div>
                  <div className={s.eduOrg}>{ed.org}</div>
                  <div className={s.eduPeriod}>{ed.period}</div>
                  {ed.credentialId && (
                    <div className={s.eduCredId}>
                      Credential ID: {ed.credentialId}
                    </div>
                  )}
                  {ed.link && (
                    <a
                      href={ed.link}
                      target="_blank"
                      rel="noreferrer"
                      className={s.eduLink}
                    >
                      {ed.link.endsWith(".pdf")
                        ? "View certificate (PDF) ↗"
                        : "View credential ↗"}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className={s.section}>
          <div className="reveal">
            <div className={s.eyebrow}>Selected Work</div>
            <h2 className={s.sectionTitle}>Featured Projects</h2>
            <p className={s.sectionSub}>
              Backend-first work, plus the full-stack and mobile products around
              it
            </p>
          </div>
          <div className={s.projCards}>
            {PROJECTS.map((p) => (
              <article key={p.title} className={`${s.projCard} reveal`}>
                <div className={s.projCardInfo}>
                  <div className={s.projMeta}>
                    <span className={s.projChip}>{p.type}</span>
                    <span className={s.projRole}>{p.role}</span>
                  </div>
                  <h3 className={s.projCardTitle}>{p.title}</h3>
                  <p className={s.projDesc}>{p.description}</p>
                  <div className={s.projTags}>
                    {p.tags.map((t) => (
                      <span key={t} className={s.projTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className={s.projLinks}>
                    {p.links && p.links.length > 0 ? (
                      p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className={s.projLink}
                        >
                          ↗ {l.label}
                        </a>
                      ))
                    ) : (
                      <span className={`${s.projLink} ${s.projLinkDisabled}`}>
                        {p.status || "Private / No repo"}
                      </span>
                    )}
                  </div>
                </div>
                <div className={s.projCardPreview} aria-hidden="true">
                  <ProjectPreview project={p} />
                </div>
              </article>
            ))}
          </div>
          <div className={`${s.projGithubCta} reveal`}>
            <a
              href="https://github.com/TunmiseAyeni"
              target="_blank"
              rel="noreferrer"
              className={`${s.btn} ${s.btnGhost}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              See More on GitHub
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className={s.section}>
          <div className="reveal">
            <div className={s.eyebrow}>Career</div>
            <h2 className={s.sectionTitle}>Professional Journey</h2>
            <p className={s.sectionSub}>
              Where I've worked and what I've shipped
            </p>
          </div>
          <div className={`${s.expWrap} reveal`}>
            <div className={s.expTabs} role="tablist">
              {EXPERIENCE.map((e, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={activeExp === i}
                  className={`${s.expTab}${activeExp === i ? ` ${s.expTabActive}` : ""}`}
                  onClick={() => setActiveExp(i)}
                >
                  <div className={s.expTabRole}>{e.role}</div>
                  <div className={s.expTabCo}>
                    {e.company.split("·")[0].trim()}
                  </div>
                </button>
              ))}
            </div>
            <div className={s.expPanel} role="tabpanel">
              <div className={s.expPeriod}>{EXPERIENCE[activeExp].period}</div>
              <h3 className={s.expRole}>{EXPERIENCE[activeExp].role}</h3>
              <div className={s.expCo}>{EXPERIENCE[activeExp].company}</div>
              <ul className={s.expPoints}>
                {EXPERIENCE[activeExp].points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="stack" className={s.section}>
          <div className="reveal">
            <div className={s.eyebrow}>Toolkit</div>
            <h2 className={s.sectionTitle}>Tech Stack</h2>
            <p className={s.sectionSub}>
              The technologies I reach for to build and ship backend systems
            </p>
          </div>
          <div className={s.techGrid}>
            {TECH_STACK.map((t) => (
              <div
                key={t.name}
                className={`${s.techCard} reveal`}
                style={{ "--tc": `${t.color}55` }}
                title={t.name}
              >
                <div
                  className={s.techSvg}
                  dangerouslySetInnerHTML={{ __html: t.svg }}
                  aria-hidden="true"
                />
                <div className={s.techName}>{t.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* GITHUB */}
        <section id="github" className={s.section}>
          <div className="reveal">
            <div className={s.eyebrow}>Open Source</div>
            <h2 className={s.sectionTitle}>GitHub Activity</h2>
            <p className={s.sectionSub}>
              Live repos pulled directly from my GitHub profile
            </p>
          </div>
          <div className={`${s.ghShell} reveal`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: ".75rem",
              }}
            >
              <a
                className={`${s.btn} ${s.btnGhost} ${s.btnSm}`}
                href="https://github.com/TunmiseAyeni"
                target="_blank"
                rel="noreferrer"
              >
                View Full Profile →
              </a>
              {githubState === "fallback" && (
                <span className={s.ghNote}>
                  ⚠ Showing featured repos (GitHub API unavailable)
                </span>
              )}
            </div>
            {githubState === "loading" && (
              <p className={s.ghLoading}>Loading repositories…</p>
            )}
            {(githubState === "ready" || githubState === "fallback") && (
              <div className={s.repoGrid}>
                {repos.map((r) => (
                  <a
                    key={r.id}
                    className={s.repoCard}
                    href={r.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={s.repoName}>{r.name}</div>
                    <div className={s.repoDesc}>
                      {r.description || "No description provided."}
                    </div>
                    <div className={s.repoMeta}>
                      <span className={s.repoLang}>
                        <span
                          className={s.langDot}
                          style={{ background: langColor(r.language) }}
                        />
                        {r.language || "N/A"}
                      </span>
                      <span>⭐ {r.stargazers_count}</span>
                      <span>🍴 {r.forks_count}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={s.section}>
          <div className="reveal">
            <div className={s.eyebrow}>Get In Touch</div>
            <h2 className={s.sectionTitle}>Let's Build Something</h2>
            <p className={s.sectionSub}>
              Have a backend, API or full product in mind? I'd love to hear
              about it.
            </p>
          </div>
          <div className={`${s.contactGrid} reveal`}>
            <div className={s.contactInfo}>
              <h3 className={s.contactInfoTitle}>Contact Information</h3>
              <p className={s.contactInfoDesc}>
                Reach out directly via email or the form. I'm always open to
                discussing new projects, backend/engineering roles, or freelance
                work.
              </p>
              <div className={s.contactItems}>
                <div className={s.contactItem}>
                  <div className={s.contactItemIcon}>✉</div>
                  <div>
                    <div className={s.contactItemLabel}>Email</div>
                    <a
                      href="mailto:tunmiseayeni13@gmail.com"
                      className={s.contactItemValue}
                    >
                      tunmiseayeni13@gmail.com
                    </a>
                  </div>
                </div>
                <div className={s.contactItem}>
                  <div className={s.contactItemIcon}>📍</div>
                  <div>
                    <div className={s.contactItemLabel}>Location</div>
                    <div className={s.contactItemValue}>
                      Lagos / Ogun State, Nigeria
                    </div>
                  </div>
                </div>
                <div className={s.contactItem}>
                  <div className={s.contactItemIcon}>📱</div>
                  <div>
                    <div className={s.contactItemLabel}>Phone</div>
                    <a href="tel:+2348101788909" className={s.contactItemValue}>
                      +234 810 178 8909
                    </a>
                  </div>
                </div>
                <div className={s.contactItem}>
                  <div className={s.contactItemIcon}>◎</div>
                  <div>
                    <div className={s.contactItemLabel}>Availability</div>
                    <div
                      className={s.contactItemValue}
                      style={{ color: "var(--color-teal)" }}
                    >
                      Open to backend & full-time roles
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.contactLinks}>
                <a
                  href="https://github.com/TunmiseAyeni"
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.btn} ${s.btnGhost} ${s.btnSm}`}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/oluwatunmise-ayeni/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.btn} ${s.btnGhost} ${s.btnSm}`}
                >
                  LinkedIn
                </a>
                {CV_URL && (
                  <a
                    href={CV_URL}
                    download
                    className={`${s.btn} ${s.btnGhost} ${s.btnSm}`}
                  >
                    ↓ CV
                  </a>
                )}
              </div>
            </div>
            <div className={s.contactForm}>
              <h3 className={s.contactFormTitle}>Send a Message</h3>
              <ContactForm s={s} />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={s.footer}>
        <span>© {year} Oluwatunmise Ayeni. All Rights Reserved.</span>
        <div className={s.footerLinks}>
          <a
            href="https://github.com/TunmiseAyeni"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/oluwatunmise-ayeni/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:tunmiseayeni13@gmail.com">Email</a>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <button
        className={`${s.backTop}${showTop ? "" : ` ${s.backTopHidden}`}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
