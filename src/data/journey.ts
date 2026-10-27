import type { Text } from "./i18n";

export type JourneyStation = {
  period: Text;         // e.g. "10/2024 – 07/2025" or { en: "since 04/2026", de: "seit 04/2026" }
  role: Text;
  org: Text;
  description: Text;    // "\n" starts a new line
  parallel?: boolean;   // true = side branch, runs alongside the main path
};

// Newest station first. Consecutive `parallel` stations form one side branch
// that forks off the main path below and merges back into it above.
export const journey: JourneyStation[] = [
  {
    period: "04/2026 – 10/2026",
    role: "Automation Expert",
    org: "Prodigy",
    description: {
      en: "Built AI-powered recruiting workflows: from voicebots and transcript analysis to candidate–job matching and automated job ads for portals and social media.",
      de: "Aufbau KI-gestützter Recruiting-Workflows: von Voicebots und Transkriptanalyse über Kandidaten-Job-Matching bis zu automatisierten Stellenanzeigen für Jobportale und Social Media.",
    },
  },
  {
    period: "10/2024 – 07/2025",
    role: { en: "Research Assistant", de: "Wissenschaftlicher Mitarbeiter" },
    org: { en: "Leipzig University", de: "Universität Leipzig" },
    description: {
      en: "ESleepA project: analysis of sleep data.",
      de: "Projekt ESleepA: Analyse von Schlafdaten.",
    },
    parallel: true,
  },
  {
    period: "10/2023 – 09/2024",
    role: { en: "Working Student", de: "Werkstudent" },
    org: "Robotron Datenbank-Software GmbH",
    description: {
      en: "Frontend development with Angular and backend with PL/SQL, plus design support with Figma and InDesign.",
      de: "Frontend-Entwicklung mit Angular und Backend mit PL/SQL, dazu Design-Support mit Figma und InDesign.",
    },
    parallel: true,
  },
  {
    period: "10/2023 – 04/2026",
    role: { en: "M.Sc. Business Information Systems", de: "M.Sc. Wirtschaftsinformatik" },
    org: { en: "Leipzig University", de: "Universität Leipzig" },
    description: {
      en: "Focus on ML, Data Science and Advanced AI.\nMaster's thesis: prototype of a decision support system for editorial screening in scientific peer review, built on LLM agents and multi-agent workflows.",
      de: "Schwerpunkt auf ML, Data Science und Advanced AI.\nMasterarbeit: Prototyp eines Entscheidungsunterstützungssystems für das redaktionelle Screening im wissenschaftlichen Peer Review, basierend auf LLM-Agenten und Multi-Agenten-Workflows.",
    },
  },
  {
    period: "10/2020 – 09/2023",
    role: { en: "B.Sc. Business Information Systems (dual)", de: "B.Sc. Wirtschaftsinformatik (dual)" },
    org: "Duale Hochschule Sachsen (DHSN) & Robotron Datenbank-Software GmbH",
    description: {
      en: "Frontend development with Angular, backend with PL/SQL, and UX design.",
      de: "Frontend-Entwicklung mit Angular, Backend mit PL/SQL sowie UX-Design.",
    },
  },
];
