import type { Text } from "./i18n";

export const site = {
  name: "Niklas Silla",
  role: "AI Engineer & Automation Developer",
  tagline: "// developing intelligent systems" as Text,
  description: {
    en: "I build agentic systems and automation workflows — solutions where language models go beyond text generation to autonomous decision-making.",
    de: "Ich baue agentische Systeme und Automatisierungs-Workflows — Lösungen, in denen Sprachmodelle über reine Textgenerierung hinausgehen und eigenständig Entscheidungen treffen.",
  } as Text,
  techStack: ["Claude Code", "Ollama", "ElevenLabs"],
  quickFacts: {
    background: {
      en: "M.Sc. Business Information Systems",
      de: "M.Sc. Wirtschaftsinformatik",
    } as Text,
    focus: "Agentic AI · LLM Workflows · Local AI" as Text,
    next: {
      en: "Start PhD program",
      de: "Start PhD-Programm",
    } as Text,
  },
  // <strong>…</strong> marks the gold highlights.
  about: [
    {
      en: "I work at the intersection of <strong>information systems</strong> and <strong>applied AI</strong> — from individual automation pipelines to multi-agent architectures, in research as well as in production.",
      de: "Ich arbeite an der Schnittstelle von <strong>Wirtschaftsinformatik</strong> und <strong>angewandter KI</strong> — von einzelnen Automatisierungs-Pipelines bis zu Multi-Agenten-Architekturen, in der Forschung ebenso wie in der Praxis.",
    },
    {
      en: "My research interests center on the reliability and explainability of agentic systems and their application domains. I’m particularly interested in how <strong>AI-assisted development</strong> can make these systems faster and more reliable to build, and how <strong>local models</strong> can meet data-protection requirements without sacrificing too much capability. I plan to pursue these directions in a PhD.",
      de: "Meine Forschungsinteressen konzentrieren sich auf die Zuverlässigkeit und Erklärbarkeit agentischer Systeme und ihre Anwendungsfelder. Besonders interessiert mich, wie <strong>KI-gestützte Entwicklung</strong> diese Systeme schneller und zuverlässiger entstehen lässt und wie <strong>lokale Modelle</strong> Datenschutzanforderungen erfüllen können, ohne zu viel Leistungsfähigkeit einzubüßen. Diese Richtungen möchte ich in einem PhD vertiefen.",
    },
  ] as Text[],
  research: {
    intro: {
      en: "I plan to pursue an external PhD in Business Information Systems & Data Science.\nCurrent areas of interest:",
      de: "Ich strebe einen externen PhD in Wirtschaftsinformatik & Data Science an.\nAktuelle Interessensgebiete:",
    } as Text,
    footer: {
      en: "Open to conversations with research groups and industry partners.",
      de: "Offen für Gespräche mit Forschungsgruppen und Partnern aus der Industrie.",
    } as Text,
  },
  // Small interface texts
  ui: {
    showAllSkills: { en: "Show all skills", de: "Alle Skills anzeigen" } as Text,
    less: { en: "less", de: "weniger" } as Text,
    switchLanguage: { en: "Auf Deutsch wechseln", de: "Switch to English" } as Text,
  },
  links: {
    email: "mailto:niklas.silla@gmail.com",
    linkedin: "https://www.linkedin.com/in/niklas-silla-3ba113224/",
    github: "https://github.com/niklas-silla",
  },
};
