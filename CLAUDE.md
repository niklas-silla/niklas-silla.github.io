# CLAUDE.md — Anweisungen für Claude Code

## Projekt
Personal Website für Niklas Silla (AI Engineer & Automation Developer).
Einseitige Seite auf Englisch (`/`) und Deutsch (`/de/`).

## Tech-Stack (festgelegt)

- **Astro** (statisches Framework, keine Hydration nötig)
- **Vanilla CSS** mit CSS Custom Properties (KEIN Tailwind, KEIN CSS-in-JS)
- **TypeScript** für Daten-Files (Texte, Skills, Journey, Research-Themen)
- **Hosting**: GitHub Pages via GitHub Actions (`https://niklas-silla.github.io`)

Begründung: Inhalte sollen pflegbar in Daten-Files liegen. Astro rendert das beim Build zu reinem HTML, ohne JavaScript an den Browser auszuliefern. Vanilla CSS, weil DESIGN.md sehr token-basiert ist und Tailwind den HTML hier nur unnötig aufblähen würde.

## Wichtige Dokumente

- `DESIGN.md` — exakte Design-Spezifikation (Farben, Typo, Komponenten)
- `src/assets/profile.png` — Profilfoto (freigestellt, transparent), wird über `astro:assets` als WebP ausgeliefert

## Projektstruktur

```
├── astro.config.mjs
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── profile.png
│   ├── pages/
│   │   ├── index.astro          ← Englisch, rendert <Home lang="en" />
│   │   └── de/index.astro       ← Deutsch, rendert <Home lang="de" />
│   ├── layouts/
│   │   └── BaseLayout.astro     ← <html lang>, <head>, hreflang-Links, Scroll-Animation
│   ├── components/
│   │   ├── Home.astro           ← Seitenaufbau, den beide Sprachen teilen
│   │   ├── Nav.astro            ← inkl. Sprach-Umschalter (zeigt aktive Sprache)
│   │   ├── Hero.astro
│   │   ├── QuickFacts.astro
│   │   ├── About.astro
│   │   ├── Journey.astro        ← Werdegang als Git-Graph
│   │   ├── Skills.astro         ← Pills mit "+N"-Toggle (reines CSS)
│   │   ├── Research.astro
│   │   └── Contact.astro
│   ├── data/
│   │   ├── i18n.ts              ← Sprachen, Text-Typ, t(), homePath()
│   │   ├── site.ts              ← Hero, QuickFacts, About, Research-Texte, UI-Texte, Links
│   │   ├── journey.ts           ← Werdegang-Stationen
│   │   ├── skills.ts            ← Skill-Kategorien
│   │   └── research.ts          ← Research-Themen
│   └── styles/
│       ├── tokens.css           ← CSS Custom Properties (alle Farben, Spacings)
│       └── global.css           ← Reset, Body, Grid-Hintergrund, Typo-Defaults
└── .github/workflows/           ← Deploy auf GitHub Pages
```

## Daten-Files (KRITISCH)

Alle sichtbaren Texte liegen in `src/data/`. Komponenten enthalten keine Inhalte, nur Markup und Styles.

### Mehrsprachigkeit (`src/data/i18n.ts`)

- Jeder Text hat den Typ `Text`: ein String gilt für beide Sprachen, ein Objekt `{ en: "...", de: "..." }` hält je eine Version.
- Komponenten bekommen `lang` als Prop und lösen Texte mit `t(text, lang)` auf.
- Neue Sprache: in `languages` ergänzen, `src/pages/<lang>/index.astro` anlegen, Texte ergänzen.
- Bewusst **englisch auf beiden Seiten**: `//`-Labels und Nav-Links, Tagline, Skill-Kategorien und Skill-Namen, Berufstitel (AI Engineer, Automation Expert), Fokus-Zeile. Studiengänge, Organisationen und Fließtext werden übersetzt.
- Im deutschen Fließtext "KI" statt "AI"; überall "PhD" (nicht "Ph.D.").

### `src/data/skills.ts`

- `skillPreviewCount` legt fest, wie viele Pills pro Kategorie sichtbar sind; der Rest steckt hinter dem "+N"-Toggle.
- Die Reihenfolge in `items` bestimmt, welche Skills zuerst sichtbar sind.
- Niemals Skills im Komponenten-HTML hardcoden.

### `src/data/journey.ts`

- Neueste Station zuerst.
- `parallel: true` setzt eine Station auf den Seitenzweig des Git-Graphen (z. B. Werkstudent neben dem Studium). Aufeinanderfolgende parallele Stationen bilden einen Zweig.
- `\n` in `description` erzeugt einen Zeilenumbruch.

### `src/data/site.ts`

- In `about` markiert `<strong>…</strong>` die goldenen Hervorhebungen (wird per `set:html` gerendert).
- `\n` im Research-Intro erzeugt einen Zeilenumbruch.

## Zusammenarbeit mit Niklas

- Größere Änderungen erst als Vorschlag mit ihm durchgehen, dann umsetzen. Kleine, konkrete Wünsche direkt erledigen.
- Neue deutsche Texte sind Entwürfe, die Niklas prüft.
- Nur committen, wenn er es ausdrücklich möchte.

## Was NICHT machen

- **Kein Tailwind** einführen, auch wenn es schneller scheint
- **Keine zusätzlichen Sektionen** ohne Rücksprache (Testimonials, Newsletter, Contact-Form — bewusst weggelassen)
- **Keine Inhalte in Komponenten hardcoden** — immer aus `src/data/` lesen
- **Keine Roboter-Illustrationen** — die Website nutzt nur Grid und Knoten-Motiv
- **Kein Terminal-Look** (kein blinkender Cursor, keine `$`-Prompts)
- **Keine schweren Animations-Libs** (kein GSAP, kein Framer Motion, kein Lottie) — alles mit reinem CSS + IntersectionObserver
- **Skill-Pills nicht runden**: max. `border-radius: 3px` (siehe DESIGN.md)
- **Keine Schatten** unter Cards/Pills — alles flach
- **Keine zentrierten Layouts** — alles linksbündig (Ausnahme: Hero gestapelt auf Tablet/Mobil)
- `prefers-reduced-motion` respektieren

## Pflege durch Niklas

Niklas sollte ohne Code-Verständnis:
- **Skills hinzufügen**: `src/data/skills.ts` editieren, einen String anhängen
- **Neue Skill-Kategorie**: ein Objekt anhängen, Nummer hochzählen
- **Journey-Station hinzufügen**: Objekt oben in `src/data/journey.ts` einfügen
- **Texte ändern**: `src/data/site.ts` editieren (je `en` und `de`)
- **Research-Themen**: `src/data/research.ts` editieren

Offen: eine `README.md` im Projekt-Root mit klaren Anleitungen und Beispielen für genau diese Operationen.

## Spätere Erweiterungen (nicht jetzt umsetzen)

- **Blog** via Content Collections (`src/content/blog/*.md`)
- **Unterseiten** wie `/now`, `/research` — dann pro Sprache unter `src/pages/` und `src/pages/de/`

Kein Over-Engineering: keine i18n-Library installieren, das eigene `t()` reicht.

## Deployment

- GitHub Pages, ausgelöst durch Push auf `main` (GitHub Actions)
- Build-Command: `npm run build`, Output: `dist`, Node 20+
- `site` in `astro.config.mjs` muss zur Domain passen (wird für hreflang-URLs genutzt)
