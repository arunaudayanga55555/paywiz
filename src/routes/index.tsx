import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle,
  Menu,
  X,
  Shield,
  Zap,
  Globe,
  Users,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Wallet,
  ChevronDown,
  ArrowRight,
  
  Mail,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const WHATSAPP_NUMBER = "94770000000";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const DEFAULT_MSG = "Hi Paywiz Global, I'm interested in your services";

// ---------- Components ----------

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div
      className={`${className} relative grid place-items-center rounded-xl bg-brand-gradient shadow-cta`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l3 10 3-7 3 7 3-10" />
        <circle cx="19" cy="6" r="2.4" fill="currentColor" stroke="none" />
        <path d="M18 6l0.8 0.8L20.4 5" stroke="white" strokeWidth="1.6" />
      </svg>
    </div>
  );
}

function WACTA({
  children,
  variant = "primary",
  size = "md",
  message = DEFAULT_MSG,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "white" | "outline" | "coral";
  size?: "md" | "lg";
  message?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 min-h-[48px] active:scale-[0.98]";
  const sizes = { md: "px-5 py-3 text-sm sm:text-base", lg: "px-7 py-4 text-base sm:text-lg" };
  const variants = {
    primary:
      "bg-teal text-white shadow-cta hover:brightness-110 hover:-translate-y-0.5",
    white:
      "bg-white text-navy-deep shadow-elevated hover:bg-mist hover:-translate-y-0.5",
    outline:
      "border-2 border-white/70 text-white hover:bg-white/10 backdrop-blur",
    coral: "bg-coral text-white shadow-cta hover:brightness-110",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

// ---------- Sections ----------

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#how", label: "How It Works" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <BrandMark />
          <span className="truncate text-lg font-extrabold tracking-tight sm:text-xl">
            <span className="text-gradient-brand">Paywiz</span>
            <span className="text-navy-deep"> Global</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-teal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WACTA className="hidden sm:inline-flex" size="md">
            Chat on WhatsApp
          </WACTA>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-mist"
              >
                {l.label}
              </a>
            ))}
            <WACTA className="mt-2 w-full">Chat on WhatsApp</WACTA>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-gradient text-white">
      {/* Organic blobs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-teal/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-navy-deep/60 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-[10%] hidden h-[70%] w-[65%] rounded-[50%] bg-white/5 lg:block" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="animate-fade-up">
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Get Your Global Payment Account —{" "}
            <span className="bg-gradient-to-r from-white via-teal-soft to-white bg-clip-text text-transparent">
              Fully Verified, Fast, and Hassle-Free
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            We help freelancers and businesses in Sri Lanka set up Stripe, PayPal,
            Wise, and Payoneer accounts — plus USA/UK business registration — so you
            can get paid from anywhere in the world.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WACTA size="lg" variant="white">Chat on WhatsApp</WACTA>
            <a
              href="#pricing"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-white/60 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              See Pricing <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5 text-xs sm:text-sm">
            {[
              { icon: Shield, text: "100% Legal & Compliant" },
              { icon: Zap, text: "Fast Turnaround" },
              { icon: HeartHandshake, text: "Real Human Support" },
            ].map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-medium backdrop-blur"
              >
                <b.icon className="h-3.5 w-3.5" />
                {b.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-[40%] bg-white/10 backdrop-blur-sm" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative grid h-64 w-64 place-items-center rounded-full border border-white/30 bg-gradient-to-br from-white/20 to-white/5 shadow-2xl">
                <Globe className="h-32 w-32 text-white/90" strokeWidth={1.2} />
                <div className="absolute -right-6 -top-4 rounded-2xl bg-white p-3 shadow-xl">
                  <span className="text-sm font-bold text-navy-deep">Stripe</span>
                </div>
                <div className="absolute -left-8 top-10 rounded-2xl bg-white p-3 shadow-xl">
                  <span className="text-sm font-bold text-navy-deep">PayPal</span>
                </div>
                <div className="absolute -left-4 -bottom-2 rounded-2xl bg-white p-3 shadow-xl">
                  <span className="text-sm font-bold text-navy-deep">Wise</span>
                </div>
                <div className="absolute -right-4 bottom-6 rounded-2xl bg-white p-3 shadow-xl">
                  <span className="text-sm font-bold text-navy-deep">Payoneer</span>
                </div>
                <div className="absolute -bottom-6 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-coral shadow-xl">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curve divider */}
      <svg
        viewBox="0 0 1440 80"
        className="block h-10 w-full text-white sm:h-16"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,64 C240,10 480,0 720,20 C960,40 1200,80 1440,50 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { n: "500+", l: "Accounts Set Up" },
    { n: "100%", l: "Verified & Compliant" },
    { n: "2–10", l: "Day Setup" },
    { n: "Lifetime", l: "Support Included" },
  ];
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Platforms we set up for you
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xl font-extrabold text-navy-deep sm:text-2xl">
          <span>Stripe</span>
          <span className="text-teal">·</span>
          <span>PayPal</span>
          <span className="text-teal">·</span>
          <span>Wise</span>
          <span className="text-teal">·</span>
          <span>Payoneer</span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border bg-mist/60 p-5 text-center shadow-card"
            >
              <div className="text-2xl font-extrabold text-gradient-brand sm:text-3xl">
                {s.n}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="bg-mist py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-navy-deep sm:text-4xl">
          Struggling to get a Stripe or PayPal account approved from Sri Lanka?
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          You're not alone. Getting verified from an unsupported region is where most
          freelancers and businesses get stuck.
        </p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          {[
            "Repeated rejections with no clear reason",
            "Confusing verification & document requests",
            "Zero local support when things go wrong",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-card">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                <X className="h-4 w-4" strokeWidth={3} />
              </span>
              <p className="text-sm font-medium text-ink sm:text-base">{t}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg font-semibold text-navy-deep sm:text-xl">
          Paywiz Global handles the entire process for you, start to finish.
        </p>
        <div className="mt-6 flex justify-center">
          <WACTA size="lg">Get Started on WhatsApp</WACTA>
        </div>
      </div>
    </section>
  );
}

type Plan = {
  name: string;
  price: string;
  tag: string;
  features: string[];
  popular?: boolean;
  msg: string;
};

const paymentPlans: Plan[] = [
  {
    name: "Stripe Individual",
    price: "LKR 10,000",
    tag: "Best for beginners to receive international payments",
    features: [
      "Fully verified account",
      "Payment links & invoices",
      "Basic usage guidance",
      "Lifetime support",
    ],
    msg: "Hi Paywiz Global, I want to set up a Stripe Individual account",
  },
  {
    name: "Stripe Business",
    price: "$249",
    tag: "Best for long-term business, scaling, and higher stability",
    features: [
      "UK/USA business registration",
      "EIN + business address included",
      "Fully verified Stripe Business account",
      "Lifetime support",
    ],
    popular: true,
    msg: "Hi Paywiz Global, I'm interested in the Stripe Business package",
  },
  {
    name: "Wise Business",
    price: "$99",
    tag: "Fast international transfers for registered businesses",
    features: [
      "Multi-currency business account",
      "Low FX fees",
      "Verification handled end-to-end",
      "Lifetime support",
    ],
    msg: "Hi Paywiz Global, I'd like to open a Wise Business account",
  },
  {
    name: "Payoneer Individual",
    price: "LKR 7,500",
    tag: "Simple payout solution for freelancers",
    features: [
      "Personal verified account",
      "Receive from marketplaces & clients",
      "Local LKR withdrawal",
      "Lifetime support",
    ],
    msg: "Hi Paywiz Global, I want a Payoneer Individual account",
  },
  {
    name: "Payoneer Business",
    price: "LKR 15,500",
    tag: "Payouts under your business name",
    features: [
      "Business verified account",
      "Invoice international clients",
      "Multi-currency receiving",
      "Lifetime support",
    ],
    msg: "Hi Paywiz Global, I need a Payoneer Business account",
  },
  {
    name: "PayPal Business",
    price: "$50",
    tag: "Accept payments via the world's most recognized wallet",
    features: [
      "Verified PayPal Business",
      "Accept global payments",
      "Withdrawal setup",
      "Lifetime support",
    ],
    msg: "Hi Paywiz Global, I want a PayPal Business account",
  },
];

const registrationPlans: Plan[] = [
  {
    name: "USA Registration",
    price: "$199",
    tag: "Montana / Delaware / Kentucky / Wyoming",
    features: [
      "EIN issuance",
      "Business address included",
      "Registered agent fee included",
      "Ready for Stripe/Wise/PayPal",
    ],
    msg: "Hi Paywiz Global, I'm interested in USA business registration",
  },
  {
    name: "UK Registration",
    price: "$225",
    tag: "Fully compliant UK company formation",
    features: [
      "UK Ltd company setup",
      "Registered address",
      "Companies House filing",
      "Ready for Stripe/Wise/PayPal",
    ],
    msg: "Hi Paywiz Global, I'm interested in UK business registration",
  },
];

function PricingCard({ p }: { p: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:p-7 ${
        p.popular ? "border-coral/40 ring-2 ring-coral/30 sm:scale-[1.02]" : "border-border"
      }`}
    >
      {p.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-coral px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-cta">
          ⭐ Most Popular
        </span>
      )}
      <h3 className="text-xl font-extrabold text-navy-deep">{p.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="text-3xl font-extrabold text-gradient-brand sm:text-4xl">{p.price}</span>
      </div>
      <ul className="mt-5 space-y-2.5">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex-1" />
      <WACTA
        message={p.msg}
        variant={p.popular ? "coral" : "primary"}
        className="mt-2 w-full"
      >
        Get Started on WhatsApp
      </WACTA>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="services" className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal">
            Services & Pricing
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
            Simple, transparent pricing —{" "}
            <span className="text-gradient-brand">no hidden costs</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Choose the account you need. Pay an advance to start, and settle the balance
            only after your account is fully verified.
          </p>
        </div>

        <h3 className="mt-14 text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Payment Account Setup
        </h3>
        <div className="mt-6 grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
          {paymentPlans.map((p) => (
            <PricingCard key={p.name} p={p} />
          ))}
        </div>

        <h3 className="mt-16 text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Business Registration
        </h3>
        <div className="mt-6 grid gap-6 pt-4 sm:grid-cols-2 lg:max-w-3xl">
          {registrationPlans.map((p) => (
            <PricingCard key={p.name} p={p} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-teal/30 bg-teal/5 p-5 text-center text-sm text-ink sm:text-base">
          💳 <span className="font-semibold">Advance payment to start</span>, balance paid
          only after your account is fully verified and ready to use.{" "}
          <span className="font-semibold text-teal">No hidden costs.</span>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { t: "Message us on WhatsApp", d: "Tell us which account or service you need." },
    { t: "Share basic details", d: "No documents to us — we send a secure official verification link." },
    { t: "We handle setup & verification", d: "Our team does the heavy lifting end-to-end." },
    { t: "Start receiving payments", d: "Get your active, verified account — ready to use." },
  ];
  return (
    <section id="how" className="bg-mist py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-deep sm:text-4xl">
            Fully verified in 4 simple steps
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.t}
              className="relative rounded-3xl border border-border bg-white p-6 shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-lg font-extrabold text-white shadow-cta">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-deep">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <WACTA size="lg">Start on WhatsApp</WACTA>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Shield, t: "Fully Verified & Compliant", d: "Every account meets each platform's requirements." },
    { icon: Wallet, t: "No Full Payment Upfront", d: "Advance to start, balance only after verification." },
    { icon: Zap, t: "Fast Turnaround", d: "Most accounts ready in 2–10 business days." },
    { icon: HeartHandshake, t: "Real Human Support", d: "Talk to actual people, not chatbots." },
    { icon: Globe, t: "Sri Lankan Team, Global Reach", d: "Local expertise on international platforms." },
    { icon: Users, t: "Lifetime Support", d: "We stay with you long after setup." },
  ];
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-coral/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-coral">
            Why Paywiz Global
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-deep sm:text-4xl">
            The details that make us the trusted choice
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.t}
              className="group rounded-3xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-cta">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-deep">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="rounded-2xl border border-border bg-white shadow-card">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-navy-deep sm:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-teal transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    {
      q: "Is this legal and safe?",
      a: "Yes. All accounts are properly verified and fully compliant with each platform's policies.",
    },
    {
      q: "Do I need to send my documents to you?",
      a: "No — we never collect your documents directly. We send a secure official verification link from the platform itself.",
    },
    {
      q: "How long does setup take?",
      a: "Individual accounts: 2–4 business days. Business accounts with registration: 7–10 business days.",
    },
    {
      q: "Do I pay everything upfront?",
      a: "No. An advance payment starts the process, and the balance is paid only once your account is fully verified and ready to use.",
    },
    {
      q: "Can I accept payments from international clients?",
      a: "Yes — all platforms we set up support receiving payments from customers worldwide in multiple currencies.",
    },
    {
      q: "What if my account gets rejected?",
      a: "We guide you through the entire verification process to maximize approval, and provide lifetime support for any account issues.",
    },
  ];
  return (
    <section id="faq" className="bg-mist py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-deep sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <FAQItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <a
            href={waLink(DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal underline-offset-4 hover:underline"
          >
            Ask us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
          <Clock className="h-3.5 w-3.5" />
          Free consultation · Reply in minutes
        </div>
        <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
          Ready to Start Receiving Global Payments?
        </h2>
        <p className="mt-4 text-base text-white/85 sm:text-lg">
          Chat with our team on WhatsApp — get a free consultation and find the right
          account for you.
        </p>
        <div className="mt-8 flex justify-center">
          <WACTA size="lg" variant="white">
            Chat on WhatsApp
          </WACTA>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep py-14 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <span className="text-xl font-extrabold text-white">Paywiz Global</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Your trusted partner for global payment accounts.
          </p>
          <div className="mt-5">
            <WACTA>Chat on WhatsApp</WACTA>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { href: "#services", label: "Services" },
              { href: "#pricing", label: "Pricing" },
              { href: "#faq", label: "FAQ" },
              { href: "#top", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 transition hover:text-teal-soft">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-teal-soft" />
              <a href={waLink(DEFAULT_MSG)} className="hover:text-white">
                WhatsApp: +94 77 000 0000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-teal-soft" />
              <a href="mailto:hello@paywizglobal.com" className="hover:text-white">
                hello@paywizglobal.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-soft" />
              Colombo, Sri Lanka
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 sm:px-6 lg:px-8">
        <p className="text-xs text-white/50">
          Paywiz Global is an independent service provider and is not affiliated with
          Stripe, PayPal, Wise, or Payoneer.
        </p>
        <p className="mt-2 text-xs text-white/50">
          © {new Date().getFullYear()} Paywiz Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink(DEFAULT_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-whatsapp transition-transform hover:scale-110 sm:h-16 sm:w-16"
      style={{ backgroundColor: "#25D366" }}
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Pricing />
        <HowItWorks />
        <WhyUs />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
