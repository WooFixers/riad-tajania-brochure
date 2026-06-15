import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "en" | "fr" | "it";

export const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "it", label: "IT" },
];

export const translations = {
  en: {
    meta: {
      title: "Riad Tajania — Trusted Hospitality Partner in Marrakech",
      description: "An intimate luxury boutique riad in Marrakech. Partnership brochure for travel agencies, DMCs, tour operators, and luxury travel advisors.",
    },
    nav: {
      about: "About",
      suites: "Suites",
      spaces: "Spaces",
      experiences: "Experiences",
      partnership: "Partnership",
      contact: "Contact",
      becomePartner: "Become a Partner",
    },
    hero: {
      eyebrow: "Marrakech · Morocco",
      headline: "Your Trusted Hospitality Partner in Marrakech",
      para1: "Nestled in the heart of Marrakech's historic Medina, just steps from Bahia Palace, El Badi Palace, and a short walk from Jemaa El-Fna Square, Riad Tajania offers an intimate boutique experience designed for discerning travelers.",
      para2: "With only four refined suites accommodating up to eight guests, we combine authentic Moroccan hospitality, personalized service, and the comfort of a luxury private residence. Whether welcoming couples, families, celebrations, or small groups, we create memorable stays tailored to every guest.",
      contactUs: "Contact Us",
      highlights: {
        luxury: "Luxury Boutique Riad",
        capacity: "Exclusive Capacity – 8 Guests",
        service: "Personalized Hospitality",
        location: "Prime Medina Location",
        trusted: "Trusted by International Travelers",
      },
      scroll: "Scroll",
    },
    about: {
      eyebrow: "The Riad",
      titlePre: "Authentic Hospitality,",
      titleItalic: "Personalized",
      titlePost: " Experiences.",
      p1: "Born from a passion for hospitality, design, and Moroccan culture, Riad Tajania is more than a boutique riad—it is a place where authentic local heritage meets refined international standards.",
      p2: "Originally conceived as a private residence, every detail of the riad has been carefully curated to create a unique atmosphere inspired by both Moroccan craftsmanship and European boutique hotel elegance. Traditional tadelakt finishes, handcrafted furnishings, Berber textiles, Moroccan marble, and carefully selected decorative pieces come together to create spaces that feel both authentic and timeless.",
      p3: "At the heart of Riad Tajania is a simple philosophy: exceptional hospitality begins with exceptional people.",
      p4: "Our team is consistently praised by guests for their warmth, attentiveness, and professionalism. Their dedication transforms a stay into a genuine experience, creating the personal connections and lasting memories that inspire guests to return and recommend us.",
      p5: "For travel professionals, this means confidence that every client will receive attentive care, personalized service, and an authentic Marrakech experience from arrival to departure.",
      values: [
        "Authentic Moroccan Hospitality",
        "Personalized Guest Experience",
        "Luxury Boutique Atmosphere",
        "Exceptional Service Standards",
        "Prime Marrakech Location",
        "Trusted Local Expertise",
      ],
      suitesCount: "Luxury Suites",
      suitesDesc: "Up to eight guests · privately yours",
    },
    perfectFor: {
      eyebrow: "Perfect For",
      titlePre: "Tailored to ",
      titleItalic: "every",
      titlePost: " kind of journey.",
      intro: "From quiet romance to lively celebrations — Riad Tajania adapts gracefully to the spirit of each stay.",
      occasions: [
        "Couples Getaways",
        "Honeymoon Escapes",
        "Family Holidays",
        "Friends Trips",
        "Birthday Celebrations",
        "Small Private Groups",
        "Retreats",
        "Luxury Travelers",
      ],
    },
    suites: {
      eyebrow: "Accommodation",
      titlePre: "Our ",
      titleItalic: "Suites",
      titlePost: ".",
      intro: "Four individually designed suites, each accommodating two guests in quiet, considered luxury.",
      guests: "2 Guests",
      features: ["En-suite", "King bed", "Hand-crafted décor", "Air conditioning"],
      list: {
        amal: {
          name: "Suite Amal",
          blurb: "A serene retreat draped in ivory linen and emerald accents — opening onto a private terrace.",
        },
        habiba: {
          name: "Suite Habiba",
          blurb: "A romantic sanctuary with a hand-carved cedar headboard and the soft glow of brass lanterns.",
        },
        jasmine: {
          name: "Suite Jasmine",
          blurb: "Bright tadelakt walls, jasmine in bloom and the unhurried calm of a Marrakech morning.",
        },
        tajania: {
          name: "Suite Tajania",
          blurb: "Our signature suite — terracotta walls, layered textiles and timeless Moroccan grandeur.",
        },
      },
    },
    commonAreas: {
      eyebrow: "Common Areas",
      titlePre: "Shared spaces designed for ",
      titleItalic: "relaxation",
      titlePost: ".",
      intro: "Patio fountains, a sunlit pool, a rooftop with views to the Atlas — every corner of Tajania invites slow, sensory moments.",
    },
    reels: {
      eyebrow: "Tajania Moments",
      titlePre: "Bespoke ",
      titleItalic: "lifestyle",
      titlePost: " in motion.",
      intro: "Explore our curated stories, captured moments, and details that define Riad Tajania.",
      description: "Description",
      engagement: "Engagement",
      source: "Instagram Stories & Reels",
      likes: "likes",
      views: "views",
      captions: {
        experience: "Experience Riad Tajania. Authentic Moroccan hospitality meets personalized luxury.",
        marrakech: "Marrakech life and courtyard calm. A quiet sanctuary in the heart of the Medina.",
        sunset: "Sunset views over the rooftop terrace. Unwinding above the red city.",
        suites: "Indulge in our luxury suites. Individually designed, privately yours.",
        breakfast: "Traditional Moroccan breakfast served daily in the courtyard or rooftop.",
      },
    },
    services: {
      eyebrow: "Services & Experiences",
      titlePre: "Beyond ",
      titleItalic: "accommodation",
      titlePost: ".",
      intro: "We build complete Marrakech experiences for your clients — coordinated from a single, responsive point of contact.",
      list: [
        { title: "Airport Transfers", body: "Private chauffeured arrivals and departures, day or night." },
        { title: "Agafay Desert", body: "Sunset camps, camel rides and starlit dinners in the stone desert." },
        { title: "Atlas Mountains", body: "Day trips and overnights into the Berber high valleys." },
        { title: "Cooking Classes", body: "Hands-on tagine and pastry workshops with our chef." },
        { title: "Guided Medina Tours", body: "Souks, hidden palaces and craftsmen, walked with a local expert." },
        { title: "Customized Itineraries", body: "Multi-day Morocco journeys assembled around your client." },
        { title: "Celebration Arrangements", body: "Birthdays, proposals, intimate weddings — staged with care." },
        { title: "Local Recommendations", body: "Quiet addresses our concierge keeps for trusted guests." },
      ],
    },
    partnership: {
      eyebrow: "Partnership",
      titlePre: "Let's Create ",
      titleItalic: "Exceptional",
      titlePost: " Experiences Together.",
      p1: "At Riad Tajania, we believe successful partnerships are built on trust, responsiveness, and shared commitment to guest satisfaction.",
      p2: "We actively collaborate with travel agencies, tour operators, luxury travel advisors, DMCs, retreat organizers, and event planners seeking a reliable hospitality partner in Marrakech.",
      p3: "Our intimate size allows us to offer a highly personalized experience while remaining flexible enough to accommodate individual travelers, families, celebrations, and exclusive private buyouts of the entire riad.",
      discuss: "Discuss Partnership",
      requestRates: "Request Rates",
      benefits: [
        "Competitive commission structure",
        "Preferential agency rates",
        "Dedicated support before and during each stay",
        "Fast and responsive communication",
        "Assistance with transfers, excursions, and tailored itineraries",
        "Exclusive use options for small groups and private events",
        "Local destination expertise and trusted supplier network",
        "Consistently outstanding guest feedback",
      ],
      wrap1: "Beyond accommodation, we help create complete Marrakech experiences through airport transfers, Atlas Mountains excursions, Agafay Desert experiences, guided Medina tours, cooking classes, and personalized celebrations.",
      wrap2: "Our objective is simple: to make your clients feel genuinely welcomed while making your work effortless.",
      quote: "Whether you are arranging a romantic escape, a family holiday, a private group stay, or a bespoke Moroccan itinerary, Riad Tajania is ready to be your trusted local partner in Marrakech.",
    },
    whyPartner: {
      eyebrow: "Why Tajania",
      titlePre: "Eight reasons travel professionals ",
      titleItalic: "return",
      titlePost: ".",
      reasons: [
        "Exceptional Reviews",
        "Personalized Service",
        "Dedicated Team",
        "Authentic Moroccan Experience",
        "Luxury Boutique Environment",
        "Small Group Expertise",
        "Local Destination Knowledge",
        "Trusted Hospitality Partner",
      ],
    },
    testimonials: {
      eyebrow: "Guest Voices",
      titlePre: "Hospitality, ",
      titleItalic: "in their words",
      titlePost: ".",
      intro: "A dedicated space awaiting the voices of guests, travel agencies and tour operators who have stayed with us.",
      body: "Testimonial reserved for a future guest review — to highlight the warmth of our team and the care of their stay.",
      caption: "Guest · Future Review",
    },
    contact: {
      eyebrow: "Get in touch",
      titlePre: "Partner ",
      titleItalic: "with us",
      titlePost: ".",
      intro: "Contact us to discuss partnership opportunities, commission structures, and customized travel experiences for your clients.",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      instagram: "Instagram",
    },
    footer: {
      copyright: "© 2026 Riad Tajania. All rights reserved.",
    },
  },
  fr: {
    meta: {
      title: "Riad Tajania — Partenaire Hôtelier de Confiance à Marrakech",
      description: "Un riad boutique de luxe intimiste à Marrakech. Brochure de partenariat pour agences de voyages, DMCs, tour-opérateurs et conseillers de voyage de luxe.",
    },
    nav: {
      about: "À propos",
      suites: "Suites",
      spaces: "Espaces",
      experiences: "Expériences",
      partnership: "Partenariat",
      contact: "Contact",
      becomePartner: "Devenir Partenaire",
    },
    hero: {
      eyebrow: "Marrakech · Maroc",
      headline: "Votre Partenaire Hôtelier de Confiance à Marrakech",
      para1: "Niché au cœur de la Médina historique de Marrakech, à quelques pas du Palais de la Bahia, du Palais El Badi et à une courte distance de marche de la place Jemaa El-Fna, le Riad Tajania propose une expérience boutique intimiste conçue pour les voyageurs exigeants.",
      para2: "Avec seulement quatre suites raffinées accueillant jusqu'à huit personnes, nous associons l'hospitalité marocaine authentique, un service personnalisé et le confort d'une résidence privée de luxe. Qu'il s'agisse d'accueillir des couples, des familles, des célébrations ou des petits groupes, nous créons des séjours mémorables adaptés à chaque client.",
      contactUs: "Nous Contacter",
      highlights: {
        luxury: "Riad Boutique de Luxe",
        capacity: "Capacité Exclusive – 8 Invités",
        service: "Hospitalité Personnalisée",
        location: "Emplacement Idéal dans la Médina",
        trusted: "Apprécié des Voyageurs Internationaux",
      },
      scroll: "Défiler",
    },
    about: {
      eyebrow: "Le Riad",
      titlePre: "Hospitalité Authentique,",
      titleItalic: "Expériences",
      titlePost: " Personnalisées.",
      p1: "Né d'une passion pour l'accueil, le design et la culture marocaine, le Riad Tajania est plus qu'un simple riad boutique — c'est un lieu où le patrimoine local authentique rencontre les standards internationaux raffinés.",
      p2: "Initialement conçu comme une résidence privée, chaque détail du riad a été soigneusement pensé pour créer une atmosphère unique, inspirée à la fois de l'artisanat marocain et de l'élégance des hôtels-boutiques européens. Les finitions traditionnelles en tadelakt, le mobilier fait main, les textiles berbères, le marbre marocain et les objets décoratifs rigoureusement sélectionnés s'unissent pour composer des espaces à la fois authentiques et intemporels.",
      p3: "Au cœur du Riad Tajania se trouve une philosophie simple : une hospitalité d'exception commence par des personnes d'exception.",
      p4: "Notre équipe est régulièrement saluée par nos hôtes pour sa chaleur, son attention et son professionnalisme. Son dévouement transforme un séjour en une véritable expérience, créant des liens personnels et des souvenirs durables qui incitent les clients à revenir et à nous recommander.",
      p5: "Pour les professionnels du voyage, c'est l'assurance que chaque client recevra une attention bienveillante, un service personnalisé et vivra une expérience authentique de Marrakech, de son arrivée à son départ.",
      values: [
        "Hospitalité Marocaine Authentique",
        "Expérience Client Personnalisée",
        "Atmosphère Boutique de Luxe",
        "Normes de Service Exceptionnelles",
        "Emplacement Privilégié à Marrakech",
        "Expertise Locale de Confiance",
      ],
      suitesCount: "Suites de Luxe",
      suitesDesc: "Jusqu'à huit personnes · entièrement privé",
    },
    perfectFor: {
      eyebrow: "Idéal Pour",
      titlePre: "Adapté à ",
      titleItalic: "chaque",
      titlePost: " type de voyage.",
      intro: "De la romance paisible aux célébrations animées — le Riad Tajania s'adapte avec élégance à l'esprit de chaque séjour.",
      occasions: [
        "Escapades en Couple",
        "Lunes de Miel",
        "Vacances en Famille",
        "Voyages entre Amis",
        "Célébrations d'Anniversaires",
        "Petits Groupes Privés",
        "Retraites",
        "Voyageurs de Luxe",
      ],
    },
    suites: {
      eyebrow: "Hébergement",
      titlePre: "Nos ",
      titleItalic: "Suites",
      titlePost: ".",
      intro: "Quatre suites conçues individuellement, accueillant chacune deux personnes dans un luxe calme et discret.",
      guests: "2 Invités",
      features: ["Salle de bain attenante", "Lit King Size", "Décoration artisanale", "Climatisation"],
      list: {
        amal: {
          name: "Suite Amal",
          blurb: "Un havre de paix paré de lin ivoire et de touches émeraude — s'ouvrant sur une terrasse privée.",
        },
        habiba: {
          name: "Suite Habiba",
          blurb: "Un sanctuaire romantique avec une tête de lit en cèdre sculptée à la main et la douce lueur de lanternes en laiton.",
        },
        jasmine: {
          name: "Suite Jasmine",
          blurb: "Murs en tadelakt lumineux, jasmin en fleur et le calme serein d'une matinée à Marrakech.",
        },
        tajania: {
          name: "Suite Tajania",
          blurb: "Notre suite signature — murs en terre cuite, textiles superposés et grandeur marocaine intemporelle.",
        },
      },
    },
    commonAreas: {
      eyebrow: "Espaces Communs",
      titlePre: "Des espaces partagés dédiés à la ",
      titleItalic: "détente",
      titlePost: ".",
      intro: "Fontaines du patio, piscine ensoleillée, toit-terrasse avec vue sur l'Atlas — chaque recoin de Tajania invite à des instants de lenteur sensorielle.",
    },
    reels: {
      eyebrow: "Moments Tajania",
      titlePre: "Un style de vie sur mesure ",
      titleItalic: "en mouvement",
      titlePost: ".",
      intro: "Explorez nos histoires sélectionnées, nos instants capturés et les détails qui définissent le Riad Tajania.",
      description: "Description",
      engagement: "Engagement",
      source: "Stories & Reels Instagram",
      likes: "j'aime",
      views: "vues",
      captions: {
        experience: "Découvrez le Riad Tajania. L'hospitalité marocaine authentique rencontre le luxe personnalisé.",
        marrakech: "La vie à Marrakech et le calme du patio. Un sanctuaire de paix au cœur de la Médina.",
        sunset: "Coucher de soleil sur le toit-terrasse. Se détendre au-dessus de la ville rouge.",
        suites: "Laissez-vous séduire par nos suites de luxe. Conçues individuellement, entièrement vôtres.",
        breakfast: "Petit-déjeuner marocain traditionnel servi tous les jours dans le patio ou sur le toit-terrasse.",
      },
    },
    services: {
      eyebrow: "Services & Expériences",
      titlePre: "Au-delà de ",
      titleItalic: "l'hébergement",
      titlePost: ".",
      intro: "We build complete Marrakech experiences for your clients — coordinated from a single, responsive point of contact.",
      list: [
        { title: "Transferts Aéroport", body: "Arrivées et départs avec chauffeur privé, de jour comme de nuit." },
        { title: "Désert d'Agafay", body: "Bivouacs au coucher du soleil, balades à dos de chameau et dîners sous les étoiles dans le désert de pierre." },
        { title: "Montagnes de l'Atlas", body: "Excursions d'une journée et nuits au cœur des hautes vallées berbères." },
        { title: "Cours de Cuisine", body: "Ateliers pratiques de tajines et pâtisseries avec notre chef." },
        { title: "Visites Guidées de la Médina", body: "Souks, palais cachés et artisans, explorés aux côtés d'un guide local expert." },
        { title: "Itinéraires sur Mesure", body: "Voyages de plusieurs jours au Maroc élaborés autour des envies de votre client." },
        { title: "Organisation de Célébrations", body: "Anniversaires, demandes en mariage, mariages intimes — mis en scène avec le plus grand soin." },
        { title: "Recommandations Locales", body: "Les adresses secrètes que notre concierge réserve à nos hôtes de confiance." },
      ],
    },
    partnership: {
      eyebrow: "Partenariat",
      titlePre: "Créons ensemble des expériences ",
      titleItalic: "d'exception",
      titlePost: ".",
      p1: "Au Riad Tajania, nous sommes convaincus que les partenariats réussis reposent sur la confiance, la réactivité et un engagement mutuel pour la satisfaction de nos hôtes.",
      p2: "We actively collaborate with travel agencies, tour operators, luxury travel advisors, DMCs, retreat organizers, and event planners seeking a reliable hospitality partner in Marrakech.",
      p3: "Notre taille humaine nous permet d'offrir une expérience hautement personnalisée tout en restant assez flexible pour accueillir des voyageurs individuels, des familles, des célébrations ou des privatisations complètes du riad.",
      discuss: "Discuter du Partenariat",
      requestRates: "Demander les Tarifs",
      benefits: [
        "Structure de commissions compétitive",
        "Tarifs préférentiels pour les agences",
        "Assistance dédiée avant et pendant chaque séjour",
        "Communication rapide et réactive",
        "Aide aux transferts, excursions et itinéraires personnalisés",
        "Possibilité de privatisation pour petits groupes et événements privés",
        "Expertise locale de la destination et réseau de fournisseurs de confiance",
        "Retours clients systématiquement excellents",
      ],
      wrap1: "Au-delà de l'hébergement, nous aidons à créer des expériences complètes à Marrakech : transferts aéroport, excursions dans les montagnes de l'Atlas, expériences dans le désert d'Agafay, visites guidées de la Médina, cours de cuisine et célébrations personnalisées.",
      wrap2: "Notre objectif est simple : faire en sorte que vos clients se sentent véritablement bienvenus tout en vous facilitant le travail.",
      quote: "Que vous organisiez une escapade romantique, des vacances en famille, un séjour de groupe privé ou un itinéraire sur mesure au Maroc, le Riad Tajania est prêt à être votre partenaire local de confiance à Marrakech.",
    },
    whyPartner: {
      eyebrow: "Pourquoi Tajania",
      titlePre: "Huit raisons pour lesquelles les professionnels ",
      titleItalic: "reviennent",
      titlePost: ".",
      reasons: [
        "Avis Exceptionnels",
        "Service Personnalisé",
        "Équipe Dévouée",
        "Expérience Marocaine Authentique",
        "Environnement Boutique de Luxe",
        "Expertise pour Petits Groupes",
        "Connaissance de la Destination Locale",
        "Partenaire Hôtelier de Confiance",
      ],
    },
    testimonials: {
      eyebrow: "Paroles d'Hôtes",
      titlePre: "L'hospitalité, ",
      titleItalic: "selon leurs mots",
      titlePost: ".",
      intro: "Un espace dédié en attente des témoignages des clients, agences de voyages et tour-opérateurs ayant séjourné chez nous.",
      body: "Témoignage réservé à un futur avis client — pour souligner la chaleur de notre équipe et l'attention portée à leur séjour.",
      caption: "Client · Futur Avis",
    },
    contact: {
      eyebrow: "Entrer en contact",
      titlePre: "Devenez ",
      titleItalic: "partenaire",
      titlePost: ".",
      intro: "Contactez-nous pour discuter des opportunités de partenariat, des structures de commissions et des expériences de voyage sur mesure pour vos clients.",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      email: "E-mail",
      instagram: "Instagram",
    },
    footer: {
      copyright: "© 2026 Riad Tajania. Tous droits réservés.",
    },
  },
  it: {
    meta: {
      title: "Riad Tajania — Partner di Ospitalità di Fiducia a Marrakech",
      description: "Un intimo riad boutique di lusso a Marrakech. Brochure di partnership per agenzie di viaggio, DMC, tour operator e consulenti di viaggio di lusso.",
    },
    nav: {
      about: "Chi Siamo",
      suites: "Suite",
      spaces: "Spazi",
      experiences: "Esperienze",
      partnership: "Partnership",
      contact: "Contatti",
      becomePartner: "Diventa un Partner",
    },
    hero: {
      eyebrow: "Marrakech · Marocco",
      headline: "Il Tuo Partner di Fiducia per l'Ospitalità a Marrakech",
      para1: "Adagiato nel cuore della storica Medina di Marrakech, a pochi passi dal Palazzo Bahia, dal Palazzo El Badi e a breve distanza a piedi da Piazza Jemaa El-Fna, il Riad Tajania offre un'esperienza boutique intima pensata per viaggiatori esigenti.",
      para2: "Con solo quattro raffinate suite in grado di ospitare fino a otto persone, uniamo l'autentica ospitalità marocchina, un servizio personalizzato e il comfort di una residenza privata di lusso. Che si tratti di accogliere coppie, famiglie, festeggiamenti o piccoli gruppi, creiamo soggiorni memorabili su misura per ogni ospite.",
      contactUs: "Contattaci",
      highlights: {
        luxury: "Riad Boutique di Lusso",
        capacity: "Capacità Esclusiva – 8 Ospiti",
        service: "Ospitalità Personalizzata",
        location: "Posizione Privilegiata nella Medina",
        trusted: "Scelto da Viaggiatori Internazionali",
      },
      scroll: "Scorri",
    },
    about: {
      eyebrow: "Il Riad",
      titlePre: "Ospitalità Autentica,",
      titleItalic: "Esperienze",
      titlePost: " Personalizzate.",
      p1: "Nato dalla passione per l'ospitalità, il design e la cultura marocchina, il Riad Tajania è più di un semplice riad boutique: è un luogo in cui l'autentico patrimonio locale incontra raffinati standard internazionali.",
      p2: "Originariamente concepito come residenza privata, ogni dettaglio del riad è stato curato con attenzione per creare un'atmosfera unica ispirata sia all'artigianato marocchino che all'eleganza dei boutique hotel europei. Finiture tradizionali in tadelakt, arredi artigianali, tessuti berberi, marmo marocchino e pezzi decorativi accuratamente selezionati si uniscono per creare spazi che sembrano autentici e senza tempo.",
      p3: "Al cuore del Riad Tajania c'è una filosofia semplice: l'ospitalità eccezionale inizia con persone eccezionali.",
      p4: "Il nostro tempo riceve costantemente elogi dagli ospiti per il calore, l'attenzione e la professionalità. La loro dedizione trasforma un soggiorno in una vera e propria esperienza, creando legami personali e ricordi duraturi che ispirano gli ospiti a tornare e a consigliarci.",
      p5: "Per i professionisti del viaggio, questo si traduce nella certezza che ogni cliente riceverà cure attente, servizio personalizzato e un'autentica esperienza di Marrakech dall'arrivo alla partenza.",
      values: [
        "Autentica Ospitalità Marocchina",
        "Esperienza Ospite Personalizzata",
        "Atmosfera da Boutique di Lusso",
        "Standard di Servizio Eccezionali",
        "Posizione Privilegiata a Marrakech",
        "Esperienza Locale di Fiducia",
      ],
      suitesCount: "Suite di Lusso",
      suitesDesc: "Fino a otto ospiti · completamente privato",
    },
    perfectFor: {
      eyebrow: "Ideale Per",
      titlePre: "Su misura per ",
      titleItalic: "ogni",
      titlePost: " tipo di viaggio.",
      intro: "Dal pacato romanticismo alle vivaci celebrazioni, il Riad Tajania si adatta con grazia allo spirito di ogni soggiorno.",
      occasions: [
        "Fughe di Coppia",
        "Lune di Miele",
        "Vacanze in Famiglia",
        "Viaggi tra Amici",
        "Feste di Compleanno",
        "Piccoli Gruppi Privati",
        "Ritiri",
        "Viaggiatori di Lusso",
      ],
    },
    suites: {
      eyebrow: "Sistemazione",
      titlePre: "Le Nostre ",
      titleItalic: "Suite",
      titlePost: ".",
      intro: "Quattro suite progettate individualmente, ciascuna in grado di ospitare due persone in un lusso tranquillo e ricercato.",
      guests: "2 Ospiti",
      features: ["Bagno privato", "Letto King Size", "Arredamento artigianale", "Aria condizionata"],
      list: {
        amal: {
          name: "Suite Amal",
          blurb: "Un rifugio sereno avvolto in lino avorio e dettagli smeraldo — con apertura su una terrazza privata.",
        },
        habiba: {
          name: "Suite Habiba",
          blurb: "Un santuario romantico con testata in legno di cedro intagliata a mano e il morbido bagliore di lanterne in ottone.",
        },
        jasmine: {
          name: "Suite Jasmine",
          blurb: "Pareti luminose in tadelakt, gelsomino in fiore e la pacata calma di un mattino a Marrakech.",
        },
        tajania: {
          name: "Suite Tajania",
          blurb: "La nostra suite d'autore — pareti in terracotta, tessuti stratificati e intramontabile grandezza marocchina.",
        },
      },
    },
    commonAreas: {
      eyebrow: "Aree Comuni",
      titlePre: "Spazi condivisi pensati per il ",
      titleItalic: "relax",
      titlePost: ".",
      intro: "Fontane nel patio, piscina soleggiata, terrazza sul tetto con vista sull'Atlante: ogni angolo di Tajania invita a lenti momenti sensoriali.",
    },
    reels: {
      eyebrow: "Momenti Tajania",
      titlePre: "Stile di vita su misura ",
      titleItalic: "in movimento",
      titlePost: ".",
      intro: "Esplora le nostre storie curate, i momenti catturati e i dettagli che definiscono il Riad Tajania.",
      description: "Descrizione",
      engagement: "Interazioni",
      source: "Storie & Reel Instagram",
      likes: "like",
      views: "visualizzazioni",
      captions: {
        experience: "Vivi il Riad Tajania. L'autentica ospitalità marocchina incontra il lusso personalizzato.",
        marrakech: "La vita a Marrakech e la calma del cortile. Un rifugio di quiete nel cuore della Medina.",
        sunset: "Vista del tramonto sulla terrazza sul tetto. Rilassarsi sopra la città rossa.",
        suites: "Lasciati viziare dalle nostre suite di lusso. Progettate individualmente, tutte per te.",
        breakfast: "Colazione tradizionale marocchina servita tutti i giorni nel cortile o sulla terrazza sul tetto.",
      },
    },
    services: {
      eyebrow: "Servizi ed Esperienze",
      titlePre: "Oltre il ",
      titleItalic: "soggiorno",
      titlePost: ".",
      intro: "We build complete Marrakech experiences for your clients — coordinated from a single, responsive point of contact.",
      list: [
        { title: "Trasferimenti Aeroporto", body: "Arrivi e partenze con autista privato, giorno e notte." },
        { title: "Deserto di Agafay", body: "Campi al tramonto, passeggiate in cammello e cene sotto le stelle nel deserto di pietra." },
        { title: "Montagne dell'Atlante", body: "Escursioni giornaliere e pernottamenti nelle alte valli berbere." },
        { title: "Corsi di Cucina", body: "Laboratori pratici di tagine e pasticceria con il nostro chef." },
        { title: "Visite Guidate della Medina", body: "Souk, palazzi nascosti e artigiani, percorsi con un esperto locale." },
        { title: "Itinéraires sur Mesure", body: "Viaggi di più giorni in Marocco organizzati attorno al vostro cliente." },
        { title: "Organizzazione di Eventi", body: "Compleanni, proposte, matrimoni intimi, messi in scena con cura." },
        { title: "Consigli Locali", body: "Indirizzi riservati che il nostro concierge conserva per gli ospiti di fiducia." },
      ],
    },
    partnership: {
      eyebrow: "Partnership",
      titlePre: "Creiamo Insieme Esperienze ",
      titleItalic: "Eccezionali",
      titlePost: ".",
      p1: "Al Riad Tajania crediamo che le partnership di successo si fondino sulla fiducia, sulla reattività e sull'impegno condiviso per la soddisfazione degli ospiti.",
      p2: "We actively collaborate with travel agencies, tour operators, luxury travel advisors, DMCs, retreat organizers, and event planners seeking a reliable hospitality partner in Marrakech.",
      p3: "Le nostre dimensioni ridotte ci consentono di offrire un'esperienza altamente personalizzata, rimanendo al contempo abbastanza flessibili da accogliere singoli viaggiatori, famiglie, celebrazioni e l'affitto esclusivo dell'intero riad.",
      discuss: "Parla della Partnership",
      requestRates: "Richiedi le Tariffe",
      benefits: [
        "Struttura provvigionale competitiva",
        "Tariffe agenziali preferenziali",
        "Supporto dedicato prima e durante ogni soggiorno",
        "Comunicazione rapida e reattiva",
        "Assistenza con trasferimenti, escursioni e itinerari su misura",
        "Opzioni di uso esclusivo per piccoli gruppi ed eventi privati",
        "Esperienza della destinazione locale e rete di fornitori di fiducia",
        "Feedback degli ospiti costantemente eccezionale",
      ],
      wrap1: "Oltre al soggiorno, contribuiamo a creare esperienze complete a Marrakech attraverso trasferimenti aeroportuali, escursioni sulle montagne dell'Atlante, esperienze nel deserto di Agafay, visite guidate della Medina, corsi di cucina e celebrazioni personalizzate.",
      wrap2: "Il nostro obiettivo è semplice: far sentire i tuoi clienti sinceramente benvenuti, rendendo il tuo lavoro privo di sforzi.",
      quote: "Sia che tu stia organizzando una fuga romantica, una vacanza in famiglia, un soggiorno per un gruppo privato o un itinerario personalizzato in Marocco, il Riad Tajania è pronto a essere il tuo partner locale di fiducia a Marrakech.",
    },
    whyPartner: {
      eyebrow: "Perché Tajania",
      titlePre: "Otto motivi per cui i professionisti del viaggio ",
      titleItalic: "ritornano",
      titlePost: ".",
      reasons: [
        "Recensioni Eccezionali",
        "Servizio Personalizzato",
        "Team Dedicato",
        "Autentica Esperienza Marocchina",
        "Ambiente Boutique di Lusso",
        "Esperienza con Piccoli Gruppi",
        "Conoscenza della Destinazione Locale",
        "Partner di Ospitalità Affidabile",
      ],
    },
    testimonials: {
      eyebrow: "Voci degli Ospiti",
      titlePre: "L'ospitalità, ",
      titleItalic: "nelle loro parole",
      titlePost: ".",
      intro: "Uno spazio dedicato in attesa delle voci di ospiti, agenzie di viaggio e tour operator che hanno soggiornato da noi.",
      body: "Testimonianza riservata a una futura recensione degli ospiti, per evidenziare il calore del nostro team e la cura del loro soggiorno.",
      caption: "Ospite · Recensione Futura",
    },
    contact: {
      eyebrow: "Contattaci",
      titlePre: "Collabora ",
      titleItalic: "con noi",
      titlePost: ".",
      intro: "Contattaci per discutere opportunità di partnership, strutture provvigionali ed esperienze di viaggio personalizzate per i tuoi clienti.",
      phone: "Telefono",
      whatsapp: "WhatsApp",
      email: "E-mail",
      instagram: "Instagram",
    },
    footer: {
      copyright: "© 2026 Riad Tajania. Tutti i diritti riservati.",
    },
  },
};

export const getNestedTranslation = (obj: any, path: string): any => {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current == null) return undefined;
    current = current[part];
  }
  return current;
};

// SSR Safe Detection
const isBrowser = typeof window !== "undefined";

const getInitialLanguage = (): Language => {
  if (!isBrowser) return "en";

  try {
    // 1. Check URL parameters (?lang=)
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "en" || urlLang === "fr" || urlLang === "it") {
      return urlLang as Language;
    }

    // 2. Check localStorage
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "en" || savedLang === "fr" || savedLang === "it") {
      return savedLang as Language;
    }

    // 3. Check browser settings
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === "fr") return "fr";
    if (browserLang === "it") return "it";
  } catch (e) {
    console.error("Failed to detect initial language:", e);
  }

  return "en";
};

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  // Run on client load to set dynamic starting state
  useEffect(() => {
    setLangState(getInitialLanguage());
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (isBrowser) {
      try {
        localStorage.setItem("lang", newLang);
        // Sync URL lang parameter silently
        const url = new URL(window.location.href);
        url.searchParams.set("lang", newLang);
        window.history.pushState({}, "", url.toString());
        // Set document language attribute
        document.documentElement.lang = newLang;
      } catch (e) {
        console.error("Failed to save language preference:", e);
      }
    }
  };

  const t = (path: string): any => {
    // Fetch from translations dict
    const val = getNestedTranslation(translations[lang], path) ?? getNestedTranslation(translations["en"], path);
    return val ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
