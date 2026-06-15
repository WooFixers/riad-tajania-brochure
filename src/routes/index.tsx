import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Heart, Users, MapPin, Sparkles, Phone, Mail, MessageCircle, Instagram,
  Award, Handshake, ShieldCheck, Compass, ChefHat, Mountain, Plane,
  Map as MapIcon, PartyPopper, Star, ArrowRight, Quote,
} from "lucide-react";

import heroImg from "@/assets/hero-riad.jpg";
import poolImg from "@/assets/pool.jpg";
import rooftopImg from "@/assets/rooftop.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import loungeImg from "@/assets/lounge.jpg";
import detailsImg from "@/assets/details.jpg";
import suiteAmal from "@/assets/suite-amal.jpg";
import suiteHabiba from "@/assets/suite-habiba.jpg";
import suiteJasmine from "@/assets/suite-jasmine.jpg";
import suiteTajania from "@/assets/suite-tajania.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riad Tajania — Trusted Hospitality Partner in Marrakech" },
      {
        name: "description",
        content:
          "An intimate luxury boutique riad in Marrakech. Partnership brochure for travel agencies, DMCs, tour operators, and luxury travel advisors.",
      },
      { property: "og:title", content: "Riad Tajania — Marrakech" },
      {
        property: "og:description",
        content:
          "Luxury boutique riad with four suites for couples, families and small groups. Trusted hospitality partner for travel professionals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <PerfectFor />
      <Suites />
      <CommonAreas />
      <Services />
      <Partnership />
      <WhyPartner />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ───────────────────────── Nav ───────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Suites", "#suites"],
    ["Spaces", "#spaces"],
    ["Experiences", "#experiences"],
    ["Partnership", "#partnership"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span
            className={`font-display text-2xl tracking-tight ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
          >
            Riad Tajania
          </span>
          <span
            className={`text-[10px] tracking-[0.3em] uppercase ${
              scrolled ? "text-muted-foreground" : "text-ivory/70"
            }`}
          >
            Marrakech
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-xs tracking-[0.22em] uppercase transition-colors ${
                scrolled
                  ? "text-ink/70 hover:text-terracotta"
                  : "text-ivory/80 hover:text-ivory"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#partnership"
          className={`hidden md:inline-flex items-center gap-2 border px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase transition-all ${
            scrolled
              ? "border-terracotta text-terracotta hover:bg-terracotta hover:text-ivory"
              : "border-ivory/60 text-ivory hover:bg-ivory hover:text-ink"
          }`}
        >
          Become a Partner
        </a>
      </div>
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Riad Tajania courtyard at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/80" />

      {/* Ornamental frame */}
      <div className="absolute inset-6 sm:inset-10 border border-ivory/20 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-10 pt-32 pb-24">
        <p className="eyebrow text-brass fade-up">Marrakech · Morocco</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl fade-up">
          Your Trusted{" "}
          <em className="text-brass not-italic font-light italic">Hospitality</em> Partner
          <br />
          in Marrakech.
        </h1>
        <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-ivory/85 font-light fade-up">
          An intimate luxury riad welcoming couples, families, small groups,
          celebrations and tailor-made travel experiences — crafted in
          partnership with discerning travel professionals.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 fade-up">
          <a
            href="#partnership"
            className="group inline-flex items-center gap-3 bg-terracotta px-7 py-4 text-xs tracking-[0.25em] uppercase text-ivory transition-all hover:bg-terracotta-deep"
          >
            Become a Partner
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-ivory/60 px-7 py-4 text-xs tracking-[0.25em] uppercase text-ivory hover:bg-ivory hover:text-ink transition-all"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-ivory/15 border border-ivory/15 max-w-4xl fade-up">
          {[
            { icon: Award, label: "Luxury Boutique Riad" },
            { icon: Users, label: "Up to 8 Guests" },
            { icon: Heart, label: "Personalized Service" },
            { icon: MapPin, label: "Prime Marrakech Location" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="bg-ink/40 backdrop-blur-sm px-5 py-5 flex items-center gap-3">
              <Icon className="size-4 text-brass shrink-0" strokeWidth={1.4} />
              <span className="text-[11px] sm:text-xs tracking-[0.15em] uppercase text-ivory/90">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 text-[10px] tracking-[0.4em] uppercase">
        Scroll
      </div>
    </section>
  );
}

/* ───────────────────────── Section helpers ───────────────────────── */

function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${dark ? "text-brass" : "text-terracotta"}`}>
        <span className="hairline mr-3" />
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] ${
          dark ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-6 text-base sm:text-lg leading-relaxed font-light ${
            dark ? "text-ivory/75" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* ───────────────────────── About ───────────────────────── */

function About() {
  const traits = [
    "Privacy", "Authentic charm", "Luxury", "Personalized service",
    "Dedicated team", "Ideal location",
  ];
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="The Riad"
            title={
              <>
                Authentic hospitality,
                <br />
                <em className="italic font-light text-terracotta">personalized</em> experiences.
              </>
            }
          />
          <div className="mt-10 space-y-6 text-[15px] sm:text-base leading-relaxed text-ink/80 font-light max-w-xl">
            <p>
              Riad Tajania is an intimate boutique riad in the heart of
              Marrakech, featuring only four luxury suites accommodating up to
              eight guests. Our scale is our promise — highly personalized
              service, exceptional attention to detail, and the warm,
              unhurried rhythm of authentic Moroccan hospitality.
            </p>
            <p>
              Our greatest strength is our team. Guest reviews consistently
              highlight the quality, kindness, professionalism and dedication
              of our staff. We believe genuine hospitality is what transforms
              a stay into a memory that endures.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 max-w-xl">
            {traits.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-ink/70">
                <span className="size-1 rounded-full bg-terracotta" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full">
            <img
              src={detailsImg}
              alt="Moroccan architectural detail"
              width={1200}
              height={1500}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-terracotta hidden sm:block" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-forest hidden sm:block" />
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="font-display text-6xl text-terracotta leading-none">4</span>
            <div className="text-sm">
              <p className="font-medium text-ink">Luxury Suites</p>
              <p className="text-muted-foreground">Up to eight guests · privately yours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Perfect For ───────────────────────── */

function PerfectFor() {
  const items = [
    "Couples Getaways", "Honeymoon Escapes", "Family Holidays", "Friends Trips",
    "Birthday Celebrations", "Small Private Groups", "Retreats", "Luxury Travelers",
  ];
  return (
    <section className="relative py-28 lg:py-36 bg-sand/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Perfect For"
          title={<>Tailored to <em className="italic font-light text-terracotta">every</em> kind of journey.</>}
          intro="From quiet romance to lively celebrations — Riad Tajania adapts gracefully to the spirit of each stay."
          align="center"
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {items.map((label, i) => (
            <div
              key={label}
              className="group bg-background aspect-square flex flex-col items-center justify-center p-6 text-center hover:bg-terracotta transition-colors duration-500"
            >
              <span className="font-display text-xs text-terracotta group-hover:text-ivory/70 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-display text-xl sm:text-2xl text-ink group-hover:text-ivory transition-colors">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Suites ───────────────────────── */

function Suites() {
  const suites = [
    { name: "Suite Amal", img: suiteAmal, blurb: "A serene retreat draped in ivory linen and emerald accents — opening onto a private terrace." },
    { name: "Suite Habiba", img: suiteHabiba, blurb: "A romantic sanctuary with a hand-carved cedar headboard and the soft glow of brass lanterns." },
    { name: "Suite Jasmine", img: suiteJasmine, blurb: "Bright tadelakt walls, jasmine in bloom and the unhurried calm of a Marrakech morning." },
    { name: "Suite Tajania", img: suiteTajania, blurb: "Our signature suite — terracotta walls, layered textiles and timeless Moroccan grandeur." },
  ];
  return (
    <section id="suites" className="relative py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            eyebrow="Accommodation"
            title={<>Our <em className="italic font-light text-terracotta">Suites</em>.</>}
          />
          <p className="text-sm text-muted-foreground max-w-sm lg:text-right">
            Four individually designed suites, each accommodating two guests in
            quiet, considered luxury.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-10 gap-y-20">
          {suites.map((s, i) => (
            <article key={s.name} className="group">
              <div className="relative overflow-hidden aspect-[5/4] bg-muted">
                <img
                  src={s.img}
                  alt={s.name}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-ivory/95 px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase text-terracotta">
                  N° {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl text-ink">{s.name}</h3>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-1.5">
                  <Users className="size-3.5" strokeWidth={1.6} /> 2 Guests
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70 font-light">{s.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["En-suite", "King bed", "Hand-crafted décor", "Air conditioning"].map((f) => (
                  <span
                    key={f}
                    className="text-[11px] tracking-[0.12em] uppercase border border-border px-3 py-1.5 text-ink/60"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Common Areas ───────────────────────── */

function CommonAreas() {
  const gallery = [
    { src: rooftopImg, label: "Rooftop Terrace", w: 1600, h: 1100, span: "md:col-span-8 md:row-span-2 aspect-[16/11]" },
    { src: poolImg, label: "Swimming Pool", w: 1280, h: 1600, span: "md:col-span-4 md:row-span-3 aspect-[4/5]" },
    { src: loungeImg, label: "Lounge", w: 1400, h: 1000, span: "md:col-span-4 aspect-[7/5]" },
    { src: restaurantImg, label: "Restaurant", w: 1400, h: 1000, span: "md:col-span-4 aspect-[7/5]" },
    { src: detailsImg, label: "Moroccan Détails", w: 1200, h: 1500, span: "md:col-span-4 aspect-[7/5]" },
  ];
  return (
    <section id="spaces" className="relative py-28 lg:py-36 bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Common Areas"
          dark
          title={
            <>
              Shared spaces designed for{" "}
              <em className="italic font-light text-brass">relaxation</em>.
            </>
          }
          intro="Patio fountains, a sunlit pool, a rooftop with views to the Atlas — every corner of Tajania invites slow, sensory moments."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-auto">
          {gallery.map((g) => (
            <figure
              key={g.label}
              className={`relative overflow-hidden group ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.label}
                width={g.w}
                height={g.h}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-ivory">
                <span className="text-[10px] tracking-[0.3em] uppercase text-brass">
                  Riad Tajania
                </span>
                <p className="mt-1 font-display text-2xl">{g.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Services ───────────────────────── */

function Services() {
  const services = [
    { icon: Plane, title: "Airport Transfers", body: "Private chauffeured arrivals and departures, day or night." },
    { icon: Compass, title: "Agafay Desert", body: "Sunset camps, camel rides and starlit dinners in the stone desert." },
    { icon: Mountain, title: "Atlas Mountains", body: "Day trips and overnights into the Berber high valleys." },
    { icon: ChefHat, title: "Cooking Classes", body: "Hands-on tagine and pastry workshops with our chef." },
    { icon: MapIcon, title: "Guided Medina Tours", body: "Souks, hidden palaces and craftsmen, walked with a local expert." },
    { icon: Sparkles, title: "Customized Itineraries", body: "Multi-day Morocco journeys assembled around your client." },
    { icon: PartyPopper, title: "Celebration Arrangements", body: "Birthdays, proposals, intimate weddings — staged with care." },
    { icon: Heart, title: "Local Recommendations", body: "Quiet addresses our concierge keeps for trusted guests." },
  ];
  return (
    <section id="experiences" className="relative py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Services & Experiences"
          title={<>Beyond <em className="italic font-light text-terracotta">accommodation</em>.</>}
          intro="We build complete Marrakech experiences for your clients — coordinated from a single, responsive point of contact."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-background p-8 hover:bg-sand/40 transition-colors group"
            >
              <Icon className="size-7 text-terracotta" strokeWidth={1.3} />
              <h3 className="mt-6 font-display text-2xl text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65 font-light">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Partnership ───────────────────────── */

function Partnership() {
  const benefits = [
    "Competitive commission structure",
    "Preferential partner rates",
    "Fast, responsive communication",
    "Personalized pre- and in-stay support",
    "Transfers & activities organised in-house",
    "Flexible solutions for small groups",
    "Dedicated local expertise",
    "Consistently high guest satisfaction",
  ];
  return (
    <section id="partnership" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={poolImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-forest-deep/92" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6 text-ivory">
          <SectionHeader
            eyebrow="Partnership"
            dark
            title={
              <>
                Let's create <em className="italic font-light text-brass">exceptional</em>{" "}
                experiences together.
              </>
            }
            intro="We welcome collaborations with travel professionals and provide dedicated support for agencies and tour operators seeking a reliable, hands-on accommodation partner in Marrakech."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-terracotta px-7 py-4 text-xs tracking-[0.25em] uppercase text-ivory hover:bg-terracotta-deep transition-all"
            >
              Discuss Partnership
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:partners@riadtajania.com"
              className="inline-flex items-center gap-3 border border-ivory/60 px-7 py-4 text-xs tracking-[0.25em] uppercase text-ivory hover:bg-ivory hover:text-ink transition-all"
            >
              Request Rates
            </a>
          </div>
        </div>

        <ul className="lg:col-span-6 grid sm:grid-cols-2 gap-px bg-ivory/15 border border-ivory/15">
          {benefits.map((b) => (
            <li
              key={b}
              className="bg-forest-deep/40 backdrop-blur-sm p-6 flex items-start gap-4"
            >
              <Handshake className="size-5 text-brass mt-0.5 shrink-0" strokeWidth={1.4} />
              <span className="text-sm leading-relaxed text-ivory/90 font-light">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Why Partner ───────────────────────── */

function WhyPartner() {
  const reasons = [
    { icon: Star, title: "Exceptional Reviews" },
    { icon: Heart, title: "Personalized Service" },
    { icon: Users, title: "Dedicated Team" },
    { icon: Sparkles, title: "Authentic Moroccan Experience" },
    { icon: Award, title: "Luxury Boutique Environment" },
    { icon: Compass, title: "Small Group Expertise" },
    { icon: MapPin, title: "Local Destination Knowledge" },
    { icon: ShieldCheck, title: "Trusted Hospitality Partner" },
  ];
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why Tajania"
          align="center"
          title={<>Eight reasons travel professionals <em className="italic font-light text-terracotta">return</em>.</>}
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {reasons.map(({ icon: Icon, title }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="size-14 rounded-full border border-terracotta/40 flex items-center justify-center">
                <Icon className="size-6 text-terracotta" strokeWidth={1.3} />
              </div>
              <p className="mt-5 font-display text-lg text-ink leading-snug max-w-[160px]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Testimonials ───────────────────────── */

function Testimonials() {
  return (
    <section className="relative py-28 lg:py-36 bg-sand/70">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <SectionHeader
          eyebrow="Guest Voices"
          align="center"
          title={<>Hospitality, <em className="italic font-light text-terracotta">in their words</em>.</>}
          intro="A dedicated space awaiting the voices of guests, travel agencies and tour operators who have stayed with us."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
          {[1, 2, 3].map((i) => (
            <figure
              key={i}
              className="bg-background p-10 flex flex-col items-center text-center"
            >
              <Quote className="size-7 text-terracotta" strokeWidth={1.2} />
              <blockquote className="mt-6 font-display text-lg italic text-ink/70 leading-relaxed min-h-[7rem]">
                "Testimonial reserved for a future guest review — to highlight
                the warmth of our team and the care of their stay."
              </blockquote>
              <div className="mt-8 flex items-center gap-1 text-brass">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <figcaption className="mt-4 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                Guest · Future Review
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */

function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: "+212 5 24 00 00 00", href: "tel:+212524000000" },
    { icon: MessageCircle, label: "WhatsApp", value: "+212 6 00 00 00 00", href: "https://wa.me/212600000000" },
    { icon: Mail, label: "Email", value: "partners@riadtajania.com", href: "mailto:partners@riadtajania.com" },
    { icon: Instagram, label: "Instagram", value: "@riadtajania", href: "https://instagram.com/riadtajania" },
  ];
  return (
    <section id="contact" className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Get in touch"
          align="center"
          title={<>Partner <em className="italic font-light text-terracotta">with us</em>.</>}
          intro="Contact us to discuss partnership opportunities, commission structures, and customized travel experiences for your clients."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {items.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-background p-8 text-center hover:bg-terracotta transition-colors duration-500"
            >
              <Icon className="size-6 text-terracotta group-hover:text-ivory mx-auto transition-colors" strokeWidth={1.3} />
              <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-muted-foreground group-hover:text-ivory/70 transition-colors">
                {label}
              </p>
              <p className="mt-2 font-display text-lg text-ink group-hover:text-ivory transition-colors break-all">
                {value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function Footer() {
  return (
    <footer className="bg-ink text-ivory pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-ivory/15">
          <div>
            <p className="font-display text-3xl">Riad Tajania</p>
            <p className="mt-2 text-xs tracking-[0.3em] uppercase text-brass">
              Marrakech · Morocco
            </p>
            <p className="mt-6 font-display italic text-lg text-ivory/75 max-w-sm leading-relaxed">
              "Where authentic Moroccan hospitality meets personalized luxury."
            </p>
          </div>

          <div>
            <p className="eyebrow text-brass">Visit</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              {["About", "Suites", "Spaces", "Experiences", "Partnership", "Contact"].map(
                (l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="hover:text-brass transition-colors">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-brass">Partner Enquiries</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              <li>partners@riadtajania.com</li>
              <li>+212 5 24 00 00 00</li>
              <li>WhatsApp: +212 6 00 00 00 00</li>
              <li>
                <a href="https://instagram.com/riadtajania" className="hover:text-brass transition-colors">
                  @riadtajania
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.22em] uppercase text-ivory/50">
          <p>© {new Date().getFullYear()} Riad Tajania. All rights reserved.</p>
          <p>Marrakech Médina · Morocco</p>
        </div>
      </div>
    </footer>
  );
}
