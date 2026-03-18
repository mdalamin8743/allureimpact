# Allure Impact

A luxury brand website built with Next.js, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Builder.io Visual CMS Setup

Builder.io gives Kim a full drag-and-drop visual editor (like WordPress/Divi) — no coding required.

### Step 1: Create a Builder.io Account

1. Go to [builder.io](https://builder.io) and create a free account
2. Create a new **Space** called "Allure Impact"

### Step 2: Get Your API Key

1. In the Builder.io dashboard, go to **Settings** (gear icon)
2. Copy the **Public API Key**

### Step 3: Configure the Project

Add the API key to your environment:

**Local development:** Edit `.env.local`:
```
NEXT_PUBLIC_BUILDER_API_KEY=your_actual_api_key_here
```

**Vercel deployment:** Go to your Vercel project → Settings → Environment Variables → Add:
- Name: `NEXT_PUBLIC_BUILDER_API_KEY`
- Value: your API key

### Step 4: Set Up the Page Model

1. In Builder.io dashboard, go to **Models** (left sidebar)
2. Click **+ Create Model**
3. Choose **Page** type
4. Name it `page`
5. Save

### Step 5: Connect Your Site URL

1. In Builder.io, go to **Settings → Site URL**
2. Enter your site URL (e.g. `https://allureimpact.ca` or `http://localhost:3000` for local)
3. This enables the live visual preview

### Step 6: Start Editing

1. Go to **Content** in Builder.io dashboard
2. Click **+ New Entry** → select the **page** model
3. Set the URL path (e.g., `/` for homepage, `/custom-page` for a new page)
4. Drag and drop the registered components from the left sidebar:
   - **Hero Section** — Full-screen hero with title, subtitle, CTA
   - **Stats Bar** — Four statistics with numbers and labels
   - **Services Section** — Numbered services list
   - **About Teaser** — Two-column about preview with decorative box
   - **Text Block** — Rich text section with label and title
   - **CTA Banner** — Full-width call-to-action banner
5. Click on any component to edit its text, links, and content
6. Click **Publish** when ready

### How It Works

- The site loads normally with all static sections as defaults
- When Builder.io content exists for a page, it takes priority
- If no Builder.io content is set up (or the API key isn't configured), the static site works perfectly
- All custom components (Hero, Stats, Services, etc.) are registered with Builder.io so Kim can drag them into any page

## Tech Stack

- **Next.js 16** — React framework
- **Tailwind CSS v4** — Utility-first CSS
- **Framer Motion** — Animations
- **Builder.io** — Visual CMS

## Project Structure

```
app/
  page.tsx              # Homepage (Builder.io + static fallback)
  contact/page.tsx      # Contact page
  builder/[...page]/    # Catch-all for Builder.io pages
components/
  sections/             # Page sections (Hero, Stats, Services, etc.)
  layout/               # Navbar, Footer
  ui/                   # Reusable UI components
lib/
  builder.ts            # Builder.io initialization
  builder-registry.ts   # Component registrations for Builder.io
```
