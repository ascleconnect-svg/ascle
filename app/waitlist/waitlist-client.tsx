"use client";

import { useEffect, useRef, useState } from "react";

const DISPLAY_FONT = "font-heading";
const BODY_FONT = "font-sans";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

type Feedback = {
  type: "success" | "error";
  title: string;
  detail: string;
} | null;

function WaitlistForm({
  formId,
  placeholder,
  buttonLabel,
  note,
}: {
  formId: string;
  placeholder: string;
  buttonLabel: string;
  note: React.ReactNode;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) {
      setFeedback({
        type: "error",
        title: "Email required.",
        detail: "Please enter your email address to join the waitlist.",
      });
      return;
    }
    if (!isValidEmail(email)) {
      setFeedback({
        type: "error",
        title: "Invalid email.",
        detail: "Please enter a valid email address (e.g. name@example.com).",
      });
      return;
    }

    setLoading(true);
    setFeedback(null);

    await new Promise((resolve) => setTimeout(resolve, 700));

    setFeedback({
      type: "success",
      title: "You're on the waitlist.",
      detail:
        "Founding access confirmed. We will reach you directly before we go live — August to October 2026.",
    });
    setEmail("");
    setLoading(false);
  }

  return (
    <form
      id={formId}
      noValidate
      aria-label="Join the waitlist"
      onSubmit={handleSubmit}
      className={`${BODY_FONT} mx-auto w-full max-w-[520px]`}
    >
      <div className="flex flex-col gap-2.5 overflow-hidden rounded-xl border border-[#3DD68C]/20 bg-white/4 transition-[border-color,box-shadow] duration-200 focus-within:border-[#3DD68C]/50 focus-within:shadow-[0_0_0_3px_rgba(61,214,140,0.08),0_4px_20px_rgba(0,0,0,0.3)] sm:flex-row sm:gap-0 sm:border sm:bg-white/4">
        <label htmlFor={`${formId}-email`} className="sr-only">
          Your email address
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (feedback?.type === "error") setFeedback(null);
          }}
          aria-describedby={`${formId}-feedback`}
          className="min-w-0 flex-1 rounded-xl border border-[#3DD68C]/20 bg-white/4 px-4.5 py-4 text-[15px] font-normal text-[#FAFAF8] outline-none placeholder:text-[#5a6b5e] sm:rounded-none sm:border-none sm:bg-transparent"
        />
        <button
          type="submit"
          disabled={loading}
          aria-label={buttonLabel}
          className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#3DD68C] px-7 py-4 text-sm font-bold tracking-wide whitespace-nowrap text-[#0A0F0C] transition-[background,transform] duration-150 hover:bg-[#5ee8a4] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:rounded-none"
        >
          {loading ? (
            <span
              aria-hidden="true"
              className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#0A0F0C]/30 border-t-[#0A0F0C]"
            />
          ) : (
            <span>{buttonLabel}</span>
          )}
        </button>
      </div>

      <p className="mt-3 text-xs font-normal tracking-wide text-[#5a6b5e]">
        {note}
      </p>

      {feedback && (
        <div
          id={`${formId}-feedback`}
          role="alert"
          aria-live="polite"
          className={`mt-4 flex animate-[fade-up_0.4s_ease_both] items-start gap-2.5 rounded-lg border px-4.5 py-3.5 text-sm font-medium ${
            feedback.type === "success"
              ? "border-[#3DD68C]/30 bg-[#3DD68C]/10 text-[#3DD68C]"
              : "border-[#c0392b]/30 bg-[#c0392b]/10 text-[#e8766a]"
          }`}
        >
          <span className="mt-px shrink-0 text-base" aria-hidden="true">
            {feedback.type === "success" ? "✓" : "⚠"}
          </span>
          <div className="text-left leading-normal">
            <strong className="mb-0.5 block">{feedback.title}</strong>
            <span className="text-xs font-normal opacity-80">
              {feedback.detail}
            </span>
          </div>
        </div>
      )}
    </form>
  );
}

function Reveal({
  className = "",
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"section">) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}

const SERVICES = [
  "Teleconsultation",
  "Home Nursing",
  "Lab Tests at Home",
  "Pharmacy Delivery",
];

const CARDS = [
  {
    icon: "🩺",
    iconClass: "bg-[#3DD68C]/10 border-[#3DD68C]/18",
    tag: "Teleconsultation",
    title: "See a Doctor",
    body: "Video and audio consultations with MDCN-licensed physicians. Digital prescriptions and follow-up care plans delivered to your dashboard.",
    price: "From ₦2,000 per consultation",
  },
  {
    icon: "🏠",
    iconClass: "bg-[#C5A84B]/10 border-[#C5A84B]/18",
    tag: "Home Nursing",
    title: "Care at Your Door",
    body: "NMCN-certified nurses dispatched to your home for wound care, injections, vital monitoring, and post-operative support.",
    price: "From ₦5,000 per visit",
  },
  {
    icon: "🧪",
    iconClass: "bg-[#64A0DC]/10 border-[#64A0DC]/18",
    tag: "Lab Testing",
    title: "Results, Not Queues",
    body: "Certified phlebotomists collect samples at your location. Processing through HEFAMAA-accredited labs. Results delivered digitally.",
    price: "From ₦4,500 per panel",
  },
  {
    icon: "💊",
    iconClass: "bg-[#965AC8]/10 border-[#965AC8]/18",
    tag: "Pharmacy",
    title: "Medications Delivered",
    body: "Over 200 NAFDAC-registered medications from licensed pharmacy partners. Prescription-controlled. Same-day or next-day delivery.",
    price: "Free delivery over ₦10,000",
  },
];

const TRUST = [
  { num: "200K+", label: "Registered nurses\nin Nigeria we can reach", aria: "200,000 plus" },
  { num: "₦2K", label: "Starting price for\na doctor consultation", aria: "2,000 Naira" },
  { num: "10m", label: "From opening the app\nto confirmed booking", aria: "Under 10 minutes" },
  { num: "2026", label: "Our launch year.\nWaitlist open now.", aria: "2026" },
];

export default function WaitlistClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${BODY_FONT} overflow-x-hidden bg-[#0A0F0C] text-[16px] leading-relaxed text-[#FAFAF8] antialiased`}
    >
      <style>{`
        @keyframes fade-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes card-rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes orb-drift { from { transform: translate(0,0) scale(1); } to { transform: translate(30px,-20px) scale(1.08); } }
        @keyframes pulse-dot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(.7); } }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      {/* NAV */}
      <nav
        role="banner"
        className={`fixed inset-x-0 top-0 z-100 flex h-[68px] items-center justify-between border-b px-6 backdrop-blur-[18px] transition-colors duration-300 sm:px-16 ${
          scrolled
            ? "border-[#3DD68C]/12 bg-[#0A0F0C]/97"
            : "border-[#3DD68C]/8 bg-[#0A0F0C]/85"
        }`}
      >
        <div className="flex items-center gap-2.5" aria-label="Ascle home">
          <div
            aria-hidden="true"
            className={`${DISPLAY_FONT} flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#1a6b3f] to-[#2a9d5c] text-[13px] font-semibold tracking-wide text-[#FAFAF8]`}
          >
            Asc
          </div>
          <span className={`${DISPLAY_FONT} text-[22px] font-normal tracking-wide text-[#FAFAF8]`}>
            Ascle
          </span>
        </div>
        <div className="hidden rounded-full border border-[#3DD68C]/30 px-3 py-1 text-[10px] font-semibold tracking-[2px] text-[#3DD68C] uppercase sm:block">
          Launching 2026
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section
          aria-labelledby="hero-headline"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-[100px] pb-20 text-center sm:px-20"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(10,61,31,0.55) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(26,107,63,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 10% 60%, rgba(197,168,75,0.06) 0%, transparent 50%), #0A0F0C",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(61,214,140,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(61,214,140,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 40%, black 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 50% 40%, black 0%, transparent 75%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -top-[200px] -left-[150px] z-0 h-[600px] w-[600px] animate-[orb-drift_14s_ease-in-out_infinite_alternate] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(10,61,31,0.35) 0%, transparent 70%)" }}
          />
          <div
            aria-hidden="true"
            className="absolute top-[20%] -right-[100px] z-0 h-[400px] w-[400px] animate-[orb-drift_18s_ease-in-out_infinite_alternate] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(26,107,63,0.2) 0%, transparent 70%)",
              animationDelay: "-4s",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[10%] left-[15%] z-0 h-[300px] w-[300px] animate-[orb-drift_22s_ease-in-out_infinite_alternate] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(197,168,75,0.08) 0%, transparent 70%)",
              animationDelay: "-8s",
            }}
          />

          <div className="relative z-1 mx-auto max-w-[780px]">
            <div
              role="doc-subtitle"
              className="mb-9 inline-flex animate-[fade-up_0.8s_ease_both] items-center gap-2 rounded-full border border-[#3DD68C]/25 bg-[#3DD68C]/6 px-4.5 py-1.5 text-[11px] font-semibold tracking-[2.5px] text-[#3DD68C] uppercase"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 animate-[pulse-dot_2.4s_ease-in-out_infinite] rounded-full bg-[#3DD68C]"
              />
              Pre-Launch · Waitlist Now Open
            </div>

            <h1
              id="hero-headline"
              className={`${DISPLAY_FONT} mb-2.5 animate-[fade-up_0.8s_ease_both] text-[44px] leading-[1.06] font-normal tracking-[-0.5px] text-[#FAFAF8] sm:text-[64px] lg:text-[84px]`}
              style={{ animationDelay: "0.1s" }}
            >
              The Future of
              <br />
              <em className="bg-gradient-to-br from-[#3DD68C] to-[#C5A84B] bg-clip-text font-normal text-transparent not-italic italic">
                Home Healthcare
              </em>
              <br />
              is Coming
            </h1>

            <p
              className={`${DISPLAY_FONT} mb-5 animate-[fade-up_0.8s_ease_both] text-[22px] font-light text-[#8A9E8E] italic sm:text-[28px] lg:text-[36px]`}
              style={{ animationDelay: "0.15s" }}
            >
              A doctor in your home. A lab at your door.
            </p>

            <div
              aria-label="Expected launch: August to October 2026"
              className="mb-12 inline-flex animate-[fade-up_0.8s_ease_both] items-center gap-2.5 text-[13px] font-medium text-[#d4b86a] before:block before:h-px before:w-8 before:bg-[#C5A84B] before:opacity-50 before:content-[''] after:block after:h-px after:w-8 after:bg-[#C5A84B] after:opacity-50 after:content-['']"
              style={{ animationDelay: "0.2s" }}
            >
              Expected Launch · August – October 2026
            </div>

            <div
              className="mx-auto w-full max-w-[520px] animate-[fade-up_0.8s_ease_both]"
              style={{ animationDelay: "0.25s" }}
            >
              <WaitlistForm
                formId="hero-form"
                placeholder="Enter your email address"
                buttonLabel="Join Waitlist"
                note="No spam. No noise. Only your access confirmation when we go live."
              />
            </div>

            <div
              aria-label="Services launching with Ascle"
              className="mt-14 flex animate-[fade-up_0.8s_ease_both] flex-wrap items-center justify-center gap-x-6 gap-y-2.5"
              style={{ animationDelay: "0.35s" }}
            >
              <span className="mb-1 w-full text-center text-[10px] font-semibold tracking-[2px] text-[#5a6b5e] uppercase">
                What&apos;s coming
              </span>
              {SERVICES.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2 rounded-full border border-white/8 bg-white/2 px-3.5 py-1.5 text-[13px] font-normal text-[#8A9E8E]"
                >
                  <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#3DD68C]/70" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE CARDS */}
        <Reveal aria-labelledby="cards-headline" className="px-6 py-16 sm:px-20 sm:py-24">
          <div className="mx-auto max-w-[1100px]">
            <p className="mb-3.5 text-[11px] font-semibold tracking-[2.5px] text-[#3DD68C] uppercase">
              Our Services
            </p>
            <h2
              id="cards-headline"
              className={`${DISPLAY_FONT} mb-14 max-w-[540px] text-[34px] leading-[1.1] font-normal text-[#FAFAF8] sm:text-[44px] lg:text-[56px]`}
            >
              Everything your health needs,
              <br />
              <em className="text-[#8A9E8E] not-italic italic">without leaving home.</em>
            </h2>

            <div role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CARDS.map((card, i) => (
                <article
                  key={card.tag}
                  role="listitem"
                  className="group relative overflow-hidden rounded-3xl border border-white/7 bg-[#111813]/80 p-7 backdrop-blur-md transition-[transform,border-color,box-shadow] duration-300 ease-out animate-[card-rise_0.7s_ease_both] hover:-translate-y-1.5 hover:border-[#3DD68C]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(61,214,140,0.1)]"
                  style={{ animationDelay: `${0.05 + i * 0.07}s` }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(61,214,140,0.07) 0%, transparent 65%)",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className={`mb-5.5 flex h-13 w-13 items-center justify-center rounded-xl border text-[22px] ${card.iconClass}`}
                  >
                    {card.icon}
                  </div>
                  <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#3DD68C] uppercase">
                    {card.tag}
                  </p>
                  <h3 className={`${DISPLAY_FONT} mb-3 text-2xl font-medium leading-tight text-[#FAFAF8]`}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-normal text-[#8A9E8E]">
                    {card.body}
                  </p>
                  <p className="mt-5 border-t border-white/6 pt-5 text-xs font-semibold tracking-wide text-[#d4b86a]">
                    {card.price}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* TRUST NUMBERS */}
        <Reveal
          aria-label="Platform statistics"
          className="border-y border-white/5 bg-gradient-to-b from-[#0A0F0C] to-[#111813] px-6 py-16 sm:px-20 sm:py-20"
        >
          <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-12 text-center md:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.num}>
                <div
                  aria-label={t.aria}
                  className={`${DISPLAY_FONT} mb-2 bg-gradient-to-br from-[#3DD68C] to-[#C5A84B] bg-clip-text text-[44px] leading-none font-semibold text-transparent sm:text-[56px] lg:text-[68px]`}
                >
                  {t.num}
                </div>
                <p className="text-[13px] leading-normal font-normal whitespace-pre-line text-[#8A9E8E]">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* SECOND CTA */}
        <Reveal aria-labelledby="cta-headline" className="relative overflow-hidden px-6 py-20 text-center sm:px-20 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(10,61,31,0.45) 0%, transparent 70%), #111813",
            }}
          />
          <div className="relative z-1 mx-auto max-w-[600px]">
            <h2
              id="cta-headline"
              className={`${DISPLAY_FONT} mb-4 text-[38px] leading-[1.1] font-normal text-[#FAFAF8] sm:text-[50px] lg:text-[64px]`}
            >
              Reserve your
              <br />
              <em className="text-[#3DD68C] not-italic italic">founding access.</em>
            </h2>
            <p className="mb-10 text-base leading-relaxed font-normal text-[#8A9E8E]">
              Waitlist members receive priority access at launch and a founding-member rate
              locked for twelve months. We go live in Lagos and Abuja first.
            </p>

            <WaitlistForm
              formId="cta-form"
              placeholder="Your email address"
              buttonLabel="Secure My Spot"
              note="Lagos & Abuja only at launch · No spam · Unsubscribe anytime"
            />
          </div>
        </Reveal>
      </main>

      {/* FOOTER */}
      <footer
        role="contentinfo"
        className="flex flex-wrap items-center justify-between gap-5 border-t border-white/6 px-6 py-10 sm:px-20"
      >
        <div className={`${DISPLAY_FONT} text-xl font-normal tracking-wide text-[#FAFAF8]`}>
          Ascle
          <span className={`${BODY_FONT} mt-0.5 block text-xs font-normal tracking-wide text-[#5a6b5e]`}>
            by Glitzhealth Technologies Ltd.
          </span>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap gap-6">
          <a href="mailto:support@ascle.com.ng" className="text-[13px] font-normal text-[#5a6b5e] transition-colors hover:text-[#3DD68C]">
            Contact
          </a>
          <a href="#" className="text-[13px] font-normal text-[#5a6b5e] transition-colors hover:text-[#3DD68C]">
            Privacy Policy
          </a>
          <a href="#" className="text-[13px] font-normal text-[#5a6b5e] transition-colors hover:text-[#3DD68C]">
            Terms of Service
          </a>
        </nav>
        <p className="w-full border-t border-white/5 pt-5 text-center text-xs font-normal text-[#5a6b5e]">
          &copy; 2026 Glitzhealth Technologies Ltd. All rights reserved. Ascle is a registered
          trademark. MDCN &middot; NMCN &middot; NAFDAC &middot; NDPA 2023 Compliant.
        </p>
      </footer>
    </div>
  );
}
