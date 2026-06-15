import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Heart, Users, MapPin, Sparkles, Phone, Mail, MessageCircle, Instagram,
  Award, Handshake, ShieldCheck, Compass, ChefHat, Mountain, Plane,
  Map as MapIcon, PartyPopper, Star, ArrowRight, Quote, X, ChevronLeft, ChevronRight, Menu,
  Play, Volume2, VolumeX, Pause,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

import logoImg from "@/assets/riad-tajania.png";
import heroBgLocal from "@/assets/herobg.webp";
import authenticImg from "@/assets/riadtajania.webp";
import suiteAmalWebp from "@/assets/suites/amal/1.webp";
import suiteHabibaWebp from "@/assets/suites/habiba/1.webp";
import suiteJasmineWebp from "@/assets/suites/jasmine/1.webp";
import suiteTajaniaWebp from "@/assets/suites/tajania/1.webp";
import rooftopWebp from "@/assets/gallery/rooftop.webp";
import poolWebp from "@/assets/gallery/pool.webp";
import patioWebp from "@/assets/gallery/patio.webp";
import dinningWebp from "@/assets/gallery/dinning-room.webp";

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
      { property: "og:image", content: heroBgLocal },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgLocal },
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
      <InstagramReels />
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
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Suites", "#suites"],
    ["Spaces", "#spaces"],
    ["Experiences", "#experiences"],
    ["Partnership", "#partnership"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="w-full bg-white border-b border-border/40 py-6 relative z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center">
          <img
            src={logoImg}
            alt="Riad Tajania Logo"
            className="h-24 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs tracking-[0.22em] uppercase transition-colors text-ink/70 hover:text-terracotta"
            >
              {label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <a
            href="#partnership"
            className="hidden md:inline-flex items-center gap-2 border border-forest-deep px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase transition-all text-forest-deep hover:bg-forest-deep hover:text-ivory"
          >
            Become a Partner
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 lg:hidden text-ink hover:text-terracotta focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col p-6 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex items-center justify-between">
            <a href="#top" onClick={() => setIsOpen(false)} className="flex items-center">
              <img
                src={logoImg}
                alt="Riad Tajania Logo"
                className="h-20 w-auto object-contain"
              />
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-ink hover:text-terracotta focus:outline-none transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="size-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow gap-8 mt-12">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-xl tracking-[0.25em] uppercase text-ink hover:text-terracotta transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#partnership"
              onClick={() => setIsOpen(false)}
              className="mt-6 inline-flex items-center gap-2 border border-forest-deep px-8 py-3.5 text-xs tracking-[0.25em] uppercase transition-all bg-forest-deep text-ivory hover:bg-forest"
            >
              Become a Partner
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  const [bgUrl, setBgUrl] = useState(
    isSupabaseConfigured
      ? supabase.storage.from("images").getPublicUrl("herobg.webp").data.publicUrl
      : heroBgLocal
  );

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={bgUrl}
        alt="Riad Tajania courtyard at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setBgUrl(heroBgLocal)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/80" />

      {/* Ornamental frame */}
      <div className="absolute inset-6 sm:inset-10 border border-ivory/20 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-10 pt-20 pb-24">
        <p className="eyebrow text-brass fade-up">Marrakech · Morocco</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl fade-up">
          Your Trusted Hospitality Partner in Marrakech
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-base sm:text-lg leading-relaxed text-ivory/85 font-light fade-up">
          <p>
            Nestled in the heart of Marrakech's historic Medina, just steps from Bahia Palace, El Badi Palace, and a short walk from Jemaa El-Fna Square, Riad Tajania offers an intimate boutique experience designed for discerning travelers.
          </p>
          <p>
            With only four refined suites accommodating up to eight guests, we combine authentic Moroccan hospitality, personalized service, and the comfort of a luxury private residence. Whether welcoming couples, families, celebrations, or small groups, we create memorable stays tailored to every guest.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 fade-up">
          <a
            href="#partnership"
            className="group inline-flex items-center gap-3 bg-forest-deep px-7 py-4 text-xs tracking-[0.25em] uppercase text-ivory transition-all hover:bg-forest"
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

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-ivory/15 border border-ivory/15 max-w-5xl fade-up">
          {[
            { icon: Award, label: "Luxury Boutique Riad" },
            { icon: Users, label: "Exclusive Capacity – 8 Guests" },
            { icon: Heart, label: "Personalized Hospitality" },
            { icon: MapPin, label: "Prime Medina Location" },
            { icon: ShieldCheck, label: "Trusted by International Travelers" },
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
  const values = [
    "Authentic Moroccan Hospitality",
    "Personalized Guest Experience",
    "Luxury Boutique Atmosphere",
    "Exceptional Service Standards",
    "Prime Marrakech Location",
    "Trusted Local Expertise",
  ];
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="The Riad"
            title={
              <>
                Authentic Hospitality,
                <br />
                <em className="italic font-light text-terracotta">Personalized</em> Experiences.
              </>
            }
          />
          <div className="mt-10 space-y-6 text-[15px] sm:text-base leading-relaxed text-ink/80 font-light max-w-xl">
            <p>
              Born from a passion for hospitality, design, and Moroccan culture, Riad Tajania is more than a boutique riad—it is a place where authentic local heritage meets refined international standards.
            </p>
            <p>
              Originally conceived as a private residence, every detail of the riad has been carefully curated to create a unique atmosphere inspired by both Moroccan craftsmanship and European boutique hotel elegance. Traditional tadelakt finishes, handcrafted furnishings, Berber textiles, Moroccan marble, and carefully selected decorative pieces come together to create spaces that feel both authentic and timeless.
            </p>
            <p>
              At the heart of Riad Tajania is a simple philosophy: exceptional hospitality begins with exceptional people.
            </p>
            <p>
              Our team is consistently praised by guests for their warmth, attentiveness, and professionalism. Their dedication transforms a stay into a genuine experience, creating the personal connections and lasting memories that inspire guests to return and recommend us.
            </p>
            <p>
              For travel professionals, this means confidence that every client will receive attentive care, personalized service, and an authentic Marrakech experience from arrival to departure.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-2 text-sm text-ink/70">
                <span className="size-1 rounded-full bg-terracotta shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full">
            <img
              src={authenticImg}
              alt="Riad Tajania Courtyard"
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

const localSuiteImages = import.meta.glob("@/assets/suites/**/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getLocalSuiteImages = (suiteName: string, fallbackImg: string): string[] => {
  const images = Object.entries(localSuiteImages)
    .filter(([path]) => path.toLowerCase().includes(`/suites/${suiteName.toLowerCase()}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([_, url]) => url);
  return images.length > 0 ? images : [fallbackImg];
};

const localGalleryImages = import.meta.glob("@/assets/gallery/**/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getLocalGalleryImages = (): { src: string; label: string }[] => {
  return Object.entries(localGalleryImages)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([_, url]) => {
      return { src: url, label: "" };
    });
};

const fetchSuiteImages = async (suiteName: string): Promise<string[]> => {
  if (!isSupabaseConfigured) return [];
  try {
    const { data, error } = await supabase.storage
      .from("images")
      .list(`suites/${suiteName}`);
    if (error || !data || data.length === 0) return [];
    
    return data
      .filter((file) => /\.(webp|jpg|jpeg|png)$/i.test(file.name))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(
        (file) =>
          supabase.storage
            .from("images")
            .getPublicUrl(`suites/${suiteName}/${file.name}`).data.publicUrl
      );
  } catch (err) {
    console.error(`Error listing images for suite ${suiteName}:`, err);
    return [];
  }
};

function ImageCarousel({
  images,
  alt,
  fallbackImg,
}: {
  images: string[];
  alt: string;
  fallbackImg: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images, isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <img
        src={fallbackImg}
        alt={alt}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div
      className="relative w-full h-full select-none overflow-hidden group/carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((imgUrl, idx) => {
        const isActive = idx === activeIndex;
        return (
          <img
            key={imgUrl}
            src={imgUrl}
            alt={`${alt} view ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 scale-[1.03]" : "opacity-0 z-0 scale-100"
            }`}
            style={{
              transition: "opacity 1000ms ease-in-out, transform 5000ms ease-out",
            }}
            onError={(e) => {
              e.currentTarget.src = fallbackImg;
            }}
          />
        );
      })}

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-15 pointer-events-none" />

      {/* Manual Navigation Controls (only if more than 1 image) */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-25 p-2 bg-ink/40 hover:bg-terracotta border border-ivory/10 text-ivory rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-25 p-2 bg-ink/40 hover:bg-terracotta border border-ivory/10 text-ivory rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="size-4" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 px-3 py-1.5 rounded-full bg-ink/20 backdrop-blur-[2px]">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? "w-4 bg-brass" : "w-1.5 bg-ivory/60 hover:bg-ivory"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function SuiteCard({ suite, index }: { suite: any; index: number }) {
  const folderName = suite.name.split(" ")[1].toLowerCase(); // "Suite Amal" -> "amal"

  const { data: fetchedImages } = useQuery({
    queryKey: ["suiteImages", folderName],
    queryFn: () => fetchSuiteImages(folderName),
    staleTime: 1000 * 60 * 10,
  });

  const localImages = getLocalSuiteImages(folderName, suite.img);
  const images = fetchedImages && fetchedImages.length > 0 ? fetchedImages : localImages;

  return (
    <article className="group">
      <div className="relative overflow-hidden aspect-[5/4] bg-muted">
        <ImageCarousel
          images={images}
          alt={suite.name}
          fallbackImg={suite.img}
        />
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-3xl text-ink">{suite.name}</h3>
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-1.5">
          <Users className="size-3.5" strokeWidth={1.6} /> 2 Guests
        </span>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/70 font-light">{suite.blurb}</p>
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
  );
}

function Suites() {
  const suites = [
    { name: "Suite Amal", img: suiteAmalWebp, blurb: "A serene retreat draped in ivory linen and emerald accents — opening onto a private terrace." },
    { name: "Suite Habiba", img: suiteHabibaWebp, blurb: "A romantic sanctuary with a hand-carved cedar headboard and the soft glow of brass lanterns." },
    { name: "Suite Jasmine", img: suiteJasmineWebp, blurb: "Bright tadelakt walls, jasmine in bloom and the unhurried calm of a Marrakech morning." },
    { name: "Suite Tajania", img: suiteTajaniaWebp, blurb: "Our signature suite — terracotta walls, layered textiles and timeless Moroccan grandeur." },
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
            <SuiteCard key={s.name} suite={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Common Areas ───────────────────────── */

const fetchGalleryImages = async (): Promise<{ src: string; label: string }[]> => {
  if (!isSupabaseConfigured) return [];
  try {
    const { data, error } = await supabase.storage.from("images").list("gallery");
    if (error || !data || data.length === 0) return [];
    
    return data
      .filter((file) => /\.(webp|jpg|jpeg|png)$/i.test(file.name))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((file) => {
        const publicUrl = supabase.storage.from("images").getPublicUrl(`gallery/${file.name}`).data.publicUrl;
        return { src: publicUrl, label: "" };
      });
  } catch (err) {
    console.error("Error listing gallery images:", err);
    return [];
  }
};

function CommonAreas() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const { data: fetchedGallery } = useQuery({
    queryKey: ["galleryImages"],
    queryFn: fetchGalleryImages,
    staleTime: 1000 * 60 * 10,
  });

  const MOCK_GALLERY = [
    { src: rooftopWebp, label: "" },
    { src: poolWebp, label: "" },
    { src: patioWebp, label: "" },
    { src: dinningWebp, label: "" },
    { src: authenticImg, label: "" },
  ];

  const localGallery = getLocalGalleryImages();
  const galleryFallback = localGallery.length > 0 ? localGallery : MOCK_GALLERY;
  const gallery = fetchedGallery && fetchedGallery.length > 0 ? fetchedGallery : galleryFallback;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev === null ? null : (prev - 1 + gallery.length) % gallery.length
    );
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev === null ? null : (prev + 1) % gallery.length
    );
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

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

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {gallery.map((g, index) => (
            <div
              key={g.label}
              className="break-inside-avoid mb-6 cursor-pointer overflow-hidden group relative bg-ink border border-ivory/15"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 text-ivory transition-transform duration-500 group-hover:translate-y-[-4px]">
                <span className="text-[9px] tracking-[0.3em] uppercase text-brass block">
                  Riad Tajania
                </span>
                <p className="mt-2 font-display text-2xl leading-none">{g.label}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-ink/30">
                <div className="size-12 rounded-full border border-brass flex items-center justify-center bg-ink/60 backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <Sparkles className="size-5 text-brass" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 z-10 text-ivory/70 hover:text-brass transition-colors p-2 cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="size-8" strokeWidth={1.5} />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-ivory/70 hover:text-brass transition-colors p-3 bg-ink/20 hover:bg-ink/50 backdrop-blur-sm rounded-full z-10 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-8" strokeWidth={1.5} />
          </button>

          {/* Active image container */}
          <div className="relative max-w-5xl max-h-[80vh] px-4 flex flex-col items-center">
            <img
              src={gallery[selectedImageIndex].src}
              alt={gallery[selectedImageIndex].label}
              className="max-h-[75vh] w-auto max-w-full object-contain select-none shadow-2xl border border-ivory/10 animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
            <div 
              className="mt-6 text-center text-ivory animate-in fade-in slide-in-from-bottom-3 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[10px] tracking-[0.4em] uppercase text-brass">
                Riad Tajania
              </span>
              <p className="mt-2 font-display text-2xl sm:text-3xl">{gallery[selectedImageIndex].label}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-ivory/70 hover:text-brass transition-colors p-3 bg-ink/20 hover:bg-ink/50 backdrop-blur-sm rounded-full z-10 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="size-8" strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  );
}

/* ───────────────────────── Instagram Reels ───────────────────────── */

const fetchReelsFromSupabase = async () => {
  if (!isSupabaseConfigured) {
    return [];
  }
  
  // List files in the 'videos' bucket
  const { data, error } = await supabase.storage.from("videos").list("", {
    limit: 12,
    sortBy: { column: "created_at", order: "desc" },
  });
  
  if (error) throw error;
  if (!data || data.length === 0) return [];
  
  // Get public URL for each file
  return data
    .filter(file => file.name.endsWith(".mp4") || file.name.endsWith(".mov") || file.name.endsWith(".webm"))
    .map(file => {
      const publicUrl = supabase.storage.from("videos").getPublicUrl(file.name).data.publicUrl;
      
      // Try to parse a clean caption from the filename:
      // "Morning_Pool_Hour.mp4" -> "Morning Pool Hour"
      const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
      const caption = baseName.replace(/_/g, " ").replace(/-/g, " ");
      
      // Generate some mock views count and timestamp
      const views = `${Math.floor(Math.random() * 20 + 2)}k`;
      const likes = `${Math.floor(Math.random() * 800 + 100)}`;
      
      return {
        id: file.id,
        videoUrl: publicUrl,
        caption: caption || "Riad Tajania Lifestyle",
        views,
        likes,
      };
    });
};

const MOCK_REELS = [
  {
    id: "live-1",
    videoUrl: "https://zpxjkvdqkdcgpaatqxdh.supabase.co/storage/v1/object/public/videos/riadtajania.mp4",
    caption: "Experience Riad Tajania. Authentic Moroccan hospitality meets personalized luxury.",
    views: "18.5k",
    likes: "942",
  },
  {
    id: "live-2",
    videoUrl: "https://zpxjkvdqkdcgpaatqxdh.supabase.co/storage/v1/object/public/videos/riadtajania-marrakech.mp4",
    caption: "Marrakech life and courtyard calm. A quiet sanctuary in the heart of the Medina.",
    views: "14.2k",
    likes: "612",
  },
  {
    id: "live-3",
    videoUrl: "https://zpxjkvdqkdcgpaatqxdh.supabase.co/storage/v1/object/public/videos/riadtajania-rooftop.mp4",
    caption: "Sunset views over the rooftop terrace. Unwinding above the red city.",
    views: "22.8k",
    likes: "1,154",
  },
  {
    id: "live-4",
    videoUrl: "https://zpxjkvdqkdcgpaatqxdh.supabase.co/storage/v1/object/public/videos/riadtajania-suite.mp4",
    caption: "Indulge in our luxury suites. Individually designed, privately yours.",
    views: "11.6k",
    likes: "580",
  },
  {
    id: "live-5",
    videoUrl: "https://zpxjkvdqkdcgpaatqxdh.supabase.co/storage/v1/object/public/videos/riadtajania_breakfast.mp4",
    caption: "Traditional Moroccan breakfast served daily in the courtyard or rooftop.",
    views: "19.1k",
    likes: "876",
  },
];

function InstagramReels() {
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // TanStack Query to fetch reels
  const { data: reelsData } = useQuery({
    queryKey: ["reels"],
    queryFn: fetchReelsFromSupabase,
    retry: false, // Don't keep retrying if not configured
  });

  // Use fetched data if present and not empty, otherwise fallback to mock data
  const reels = (reelsData && reelsData.length > 0) ? reelsData : MOCK_REELS;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveReelIndex((prev) => 
      prev === null ? null : (prev - 1 + reels.length) % reels.length
    );
    setIsPlaying(true);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveReelIndex((prev) => 
      prev === null ? null : (prev + 1) % reels.length
    );
    setIsPlaying(true);
  };

  // Keyboard navigation & space bar play/pause
  useEffect(() => {
    if (activeReelIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveReelIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeReelIndex]);

  // Handle play/pause in modal
  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        modalVideoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  };

  // Synchronize play state when active reel changes
  useEffect(() => {
    if (activeReelIndex !== null && modalVideoRef.current) {
      modalVideoRef.current.load();
      if (isPlaying) {
        modalVideoRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [activeReelIndex]);

  return (
    <section className="py-28 lg:py-36 bg-ink text-ivory border-t border-ivory/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Tajania Moments"
            dark
            title={
              <>
                Bespoke <em className="italic font-light text-brass">lifestyle</em> in motion.
              </>
            }
          />
          <p className="text-sm text-ivory/60 max-w-sm lg:text-right">
            Explore our curated stories, captured moments, and details that define Riad Tajania.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {reels.map((reel, index) => (
            <ReelCard
              key={reel.id}
              videoUrl={reel.videoUrl}
              caption={reel.caption}
              views={reel.views}
              onClick={() => {
                setActiveReelIndex(index);
                setIsPlaying(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Reels Modal */}
      {activeReelIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-lg"
          onClick={() => setActiveReelIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveReelIndex(null)}
            className="absolute top-6 right-6 z-20 text-ivory/70 hover:text-brass transition-colors p-2 cursor-pointer"
            aria-label="Close reels player"
          >
            <X className="size-8" strokeWidth={1.5} />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-ivory/70 hover:text-brass transition-colors p-3 bg-ink/20 hover:bg-ink/50 backdrop-blur-sm rounded-full z-10 cursor-pointer"
            aria-label="Previous reel"
          >
            <ChevronLeft className="size-8" strokeWidth={1.5} />
          </button>

          {/* Reels Split Container */}
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] md:aspect-[1.5] bg-ink/65 border border-ivory/15 shadow-2xl flex flex-col md:flex-row mx-4 rounded-none overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Column: Video Player */}
            <div 
              className="relative flex-1 bg-black flex items-center justify-center aspect-[9/16] md:aspect-auto md:h-full cursor-pointer overflow-hidden"
              onClick={togglePlay}
            >
              <video
                ref={modalVideoRef}
                src={reels[activeReelIndex].videoUrl}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-contain md:max-h-[85vh]"
              />
              
              {/* Play/Pause state HUD indicator */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100 bg-black/10"}`}>
                <div className="size-16 rounded-full border border-brass flex items-center justify-center bg-ink/60 backdrop-blur-sm">
                  <Play className="size-8 text-brass fill-brass ml-1" />
                </div>
              </div>

              {/* Sound toggle overlay */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="absolute bottom-6 right-6 z-10 p-2.5 bg-ink/60 border border-ivory/20 hover:bg-ink/90 text-ivory rounded-full transition-colors cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              </button>
            </div>

            {/* Right Column: Profile & Info Panel */}
            <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-ivory/15 p-6 flex flex-col justify-between bg-ink/90 text-ivory overflow-y-auto">
              <div className="space-y-6">
                {/* Brand profile header */}
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full border border-brass/50 overflow-hidden flex items-center justify-center bg-ivory/5">
                    <img src={logoImg} alt="Riad Tajania" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-display text-base leading-none text-ivory">Riad Tajania</h4>
                    <span className="text-[10px] tracking-wider text-brass uppercase mt-1 block">Marrakech Médina</span>
                  </div>
                </div>

                <div className="border-t border-ivory/10 my-4" />

                {/* Video Caption */}
                <div className="space-y-2">
                  <p className="text-[11px] tracking-widest text-brass uppercase font-sans">Description</p>
                  <p className="text-sm font-light leading-relaxed text-ivory/80">
                    {reels[activeReelIndex].caption}
                  </p>
                </div>

                {/* Mock Instagram engagements */}
                <div className="space-y-2">
                  <p className="text-[11px] tracking-widest text-brass uppercase font-sans">Engagement</p>
                  <div className="flex items-center gap-6 text-xs text-ivory/70">
                    <span className="flex items-center gap-1.5"><Heart className="size-4 text-brass" /> {reels[activeReelIndex].likes} likes</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="size-4 text-brass" /> {reels[activeReelIndex].views} views</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-ivory/10 space-y-3">
                <a
                  href="#contact"
                  onClick={() => setActiveReelIndex(null)}
                  className="w-full text-center block bg-forest-deep hover:bg-forest text-ivory uppercase tracking-[0.2em] text-[10px] py-3 transition-colors font-medium border border-forest-deep"
                >
                  Become a Partner
                </a>
                <p className="text-[9px] tracking-wider text-center text-ivory/40 uppercase">
                  Instagram Stories & Reels
                </p>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-ivory/70 hover:text-brass transition-colors p-3 bg-ink/20 hover:bg-ink/50 backdrop-blur-sm rounded-full z-10 cursor-pointer"
            aria-label="Next reel"
          >
            <ChevronRight className="size-8" strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  );
}

// Separate helper for Reel card hover interactions

function ReelCard({ 
  videoUrl, 
  caption, 
  views, 
  onClick 
}: { 
  videoUrl: string; 
  caption: string; 
  views: string; 
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative aspect-[9/16] overflow-hidden bg-ink/50 border border-ivory/15 cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-black/30 opacity-75 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
      
      {/* Play Icon HUD */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}>
        <div className="size-14 rounded-full border border-brass flex items-center justify-center bg-ink/60 backdrop-blur-sm shadow-xl">
          <Play className="size-5 text-brass fill-brass ml-0.5" strokeWidth={1.5} />
        </div>
      </div>

      {/* Caption & View Count Overlay */}
      <div className="absolute bottom-6 left-6 right-6 text-ivory pointer-events-none transition-transform duration-500 group-hover:translate-y-[-4px]">
        <div className="flex items-center gap-2 text-[9px] tracking-widest text-brass uppercase font-sans mb-2">
          <span>Instagram Reel</span>
          <span className="size-1 rounded-full bg-brass/60" />
          <span>{views} views</span>
        </div>
        <p className="font-display text-lg sm:text-xl leading-snug line-clamp-2">{caption}</p>
      </div>
    </div>
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
    "Preferential agency rates",
    "Dedicated support before and during each stay",
    "Fast and responsive communication",
    "Assistance with transfers, excursions, and tailored itineraries",
    "Exclusive use options for small groups and private events",
    "Local destination expertise and trusted supplier network",
    "Consistently outstanding guest feedback",
  ];
  return (
    <section id="partnership" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={poolWebp} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-forest-deep/92" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6 text-ivory">
          <SectionHeader
            eyebrow="Partnership"
            dark
            title={
              <>
                Let's Create <em className="italic font-light text-brass">Exceptional</em>{" "}
                Experiences Together.
              </>
            }
          />
          <div className="mt-8 space-y-4 text-[15px] sm:text-base leading-relaxed text-ivory/80 font-light">
            <p>
              At Riad Tajania, we believe successful partnerships are built on trust, responsiveness, and shared commitment to guest satisfaction.
            </p>
            <p>
              We actively collaborate with travel agencies, tour operators, luxury travel advisors, DMCs, retreat organizers, and event planners seeking a reliable hospitality partner in Marrakech.
            </p>
            <p>
              Our intimate size allows us to offer a highly personalized experience while remaining flexible enough to accommodate individual travelers, families, celebrations, and exclusive private buyouts of the entire riad.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-forest-deep px-7 py-4 text-xs tracking-[0.25em] uppercase text-ivory hover:bg-forest transition-all"
            >
              Discuss Partnership
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:riadtajania@hotmail.com"
              className="inline-flex items-center gap-3 border border-ivory/60 px-7 py-4 text-xs tracking-[0.25em] uppercase text-ivory hover:bg-ivory hover:text-ink transition-all"
            >
              Request Rates
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-8 text-ivory">
          <ul className="grid sm:grid-cols-2 gap-px bg-ivory/15 border border-ivory/15">
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

          <div className="space-y-4 text-sm leading-relaxed text-ivory/80 font-light bg-forest-deep/30 border border-ivory/10 p-6 backdrop-blur-sm">
            <p>
              Beyond accommodation, we help create complete Marrakech experiences through airport transfers, Atlas Mountains excursions, Agafay Desert experiences, guided Medina tours, cooking classes, and personalized celebrations.
            </p>
            <p>
              Our objective is simple: to make your clients feel genuinely welcomed while making your work effortless.
            </p>
            <p className="font-display text-lg text-brass italic">
              Whether you are arranging a romantic escape, a family holiday, a private group stay, or a bespoke Moroccan itinerary, Riad Tajania is ready to be your trusted local partner in Marrakech.
            </p>
          </div>
        </div>
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
    { icon: Phone, label: "Phone", value: "+212 656 043 079", href: "tel:+212656043079" },
    { icon: MessageCircle, label: "WhatsApp", value: "+212 656 043 079", href: "https://wa.me/212656043079" },
    { icon: Mail, label: "Email", value: "riadtajania@hotmail.com", href: "mailto:riadtajania@hotmail.com" },
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

function Footer() {
  return (
    <footer className="bg-ink text-ivory/50 py-8 border-t border-ivory/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center text-[11px] tracking-[0.22em] uppercase">
        <p>© 2026 Riad Tajania. All rights reserved.</p>
      </div>
    </footer>
  );
}
