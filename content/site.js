/**
 * FlowUp Heating Ltd — site content
 * Edit this file to update copy, contact details, and navigation.
 */
const SITE = {
  company: {
    name: "FlowUp Heating Ltd",
    tagline: "Heating · Plumbing · Gas · Boilers",
    gasSafeRegistered: true,
  },

  meta: {
    themeColor: "#1a3a6b",
    pages: {
      home: {
        title: "FlowUp Heating Ltd | Home",
        description:
          "Professional heating, plumbing, gas, and boiler services. Gas Safe registered engineers.",
      },
      services: {
        title: "Our Services | FlowUp Heating Ltd",
        description:
          "Heating, plumbing, gas, and boiler installation, repair, and maintenance.",
      },
      about: {
        title: "About Us | FlowUp Heating Ltd",
        description:
          "Learn about FlowUp Heating Ltd — trusted, Gas Safe registered heating specialists.",
      },
      contact: {
        title: "Contact Us | FlowUp Heating Ltd",
        description: "Get in touch for a quote or emergency call-out.",
      },
    },
  },

  navigation: [
    { id: "home", label: "Home", href: "index.html" },
    { id: "services", label: "Services", href: "services.html" },
    { id: "about", label: "About", href: "about.html" },
    { id: "contact", label: "Contact Us", href: "contact.html" },
  ],

  credit: {
    label: "Website by",
    name: "Khubab Shams",
    url: "https://kshams.uk",
  },

  hero: {
    headline: "Warm homes. Reliable flow.",
    subheadline:
      "Expert heating, plumbing, gas, and boiler work — done safely, clearly, and on time.",
    primaryCta: { label: "Request a quote", href: "contact.html" },
    secondaryCta: { label: "View services", href: "services.html" },
    image: "assets/images/hero-logo.png",
    imageAlt: "FlowUp Heating Ltd — Heating, Plumbing, Gas, Boilers",
  },

  trustBadges: [
    { value: "Gas Safe", label: "Registered engineers" },
    { value: "24/7", label: "Emergency call-outs" },
    { value: "Free", label: "Quotes on request" },
  ],

  services: {
    title: "What we do",
    intro:
      "From annual boiler checks to full system installs — one team for every job.",
    items: [
      {
        id: "heating",
        icon: "heating",
        title: "Heating",
        description:
          "Boiler Repairs, Boiler Servicing, Central Heating Installation, Radiator Repairs & Installation, Underfloor Heating, Power Flushing, Thermostat Installation, Gas Safety Checks",
      },
      {
        id: "plumbing",
        icon: "plumbing",
        title: "Plumbing",
        description:
          "Emergency Plumbing Repairs, Leak Detection & Repairs, Tap & Toilet Repairs, Pipe Installation & Repairs, Bathroom Plumbing, Kitchen Plumbing, Shower Installation & Repairs",
      },
      // {
      //   id: "gas",
      //   icon: "gas",
      //   title: "Gas",
      //   description:
      //     "Appliances, pipework, safety inspections, and landlord gas safety certificates.",
      // },
      {
        id: "boilers",
        icon: "boilers",
        title: "Additional Services",
        description:
          "- 24/7 Emergency Call-Outs, Landlord Certificates, Maintenance Contracts",
      },
    ],
  },

  about: {
    title: "About FlowUp",
    paragraphs: [
      "FlowUp Heating Ltd is a trusted plumbing and heating company. We specialise in plumbing repairs, boiler installations, central heating, and emergency callouts.",
      "With experienced engineers, reliable service, and honest pricing, we are committed to delivering high-quality workmanship and excellent customer service on every job.",
    ],
    highlights: [
      "Gas Safe registered engineers",
      "Domestic & commercial work",
      "Transparent pricing",
      "Quality parts & workmanship",
    ],
    steps: [
      { step: "1", title: "Get in touch", text: "Call, email, or use the form — tell us what you need." },
      { step: "2", title: "We assess", text: "A clear visit or remote quote with no jargon." },
      { step: "3", title: "Job done", text: "Professional work, left clean, with paperwork where required." },
    ],
  },

  contact: {
    title: "Contact us",
    intro: "Ready for a quote or emergency help? Reach us using the details below.",
    address: {
      company: "FlowUp Heating Ltd",
      lines: ["123 Example Street", "London", "Postcode AB1 2CD", "United Kingdom"],
    },
    phone: {
      display: "+44 7908826396",
      tel: "+447908826396",
    },
    email: "flowupheatingltd@gmail.com",
    hours: "Mon–Fri 8:00–18:00 · Emergency call-outs available",
    form: {
      submitLabel: "Send message",
    },
  },

  assets: {
    favicon32: "assets/icons/favicon-32x32.png",
  },
};
