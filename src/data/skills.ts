export type SkillCategory = {
  number: string;
  title: string;
  items: string[];
};

// Number of pills shown per category before the "+N" toggle.
// The order in `items` decides which skills are visible first.
export const skillPreviewCount = 3;

export const skills: SkillCategory[] = [
  {
    number: "01",
    title: "AI Tools",
    items: ["Ollama", "ElevenLabs", "Wispr Flow", "LM Studio", "Docling"],
  },
  {
    number: "02",
    title: "AI-Assisted Development",
    items: ["Claude Code", "Claude Skills", "GSD Framework", "Prompt Engineering"],
  },
  {
    number: "03",
    title: "Languages & Frameworks",
    items: ["Python", "TypeScript", "LangChain", "LangGraph", "LangSmith", "AutoGen", "CrewAI", "FastAPI", "Angular", "Vue.js"],
  },
  {
    number: "04",
    title: "Infrastructure & Data",
    items: ["Docker", "PostgreSQL", "Supabase", "Vercel", "SQLite", "GitHub", "Google Cloud", "Railway"],
  },
  {
    number: "05",
    title: "Process Automation & Integration",
    items: ["n8n", "BPMN", "REST APIs", "Webhooks"],
  },
  {
    number: "06",
    title: "Design",
    items: ["Figma", "InDesign", "Claude Design", "Canva"],
  },
];
