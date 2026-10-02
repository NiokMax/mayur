# Technical SEO & Google Search Console Checklist — Mayur Bikash Gogoi

Domain: **https://mayurbg.in**  
Identity: **Mayur Bikash Gogoi** (Full-Stack Developer, Freelancer, Copywriter, AI Prompt Engineer, Social Media Manager, Founder of Loopni)

---

## 1. Technical SEO Foundation

- [x] **Canonical Tags:** Every HTML page has a self-referential canonical URL pointing to `https://mayurbg.in/[page]`.
- [x] **Meta Descriptions:** Every page has a unique, descriptive meta description avoiding duplicate snippet warnings.
- [x] **Viewport Configuration:** Responsive mobile viewport (`width=device-width, initial-scale=1.0`) is present on all pages.
- [x] **Heading Hierarchy:** Each page has exactly one `<h1>` containing primary subject matter, followed by semantic `<h2>` and `<h3>` tags.
- [x] **Semantic HTML5:** Using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks for clear machine comprehension.
- [x] **Robots Directives:** `<meta name="robots" content="index, follow">` present on all public canonical pages.
- [x] **Clean 404 Page:** `404.html` exists with `noindex, follow` directive and clean navigational pathways back to the homepage.

---

## 2. Robots & Sitemap Configuration

### `robots.txt`
```txt
User-agent: *
Allow: /

Sitemap: https://mayurbg.in/sitemap.xml
```
* **Status:** Created and validated.
* **Verification:** Ensure no CSS, JavaScript, or public image paths are blocked from crawling.

### `sitemap.xml`
* **Status:** Created with standard `http://www.sitemaps.org/schemas/sitemap/0.9` namespace.
* **URLs Included:**
  * `https://mayurbg.in/` (priority 1.0)
  * `https://mayurbg.in/about.html` (priority 0.9)
  * `https://mayurbg.in/projects.html` (priority 0.9)
  * `https://mayurbg.in/skills.html` (priority 0.8)
  * `https://mayurbg.in/experience.html` (priority 0.8)
  * `https://mayurbg.in/education.html` (priority 0.8)
  * `https://mayurbg.in/services.html` (priority 0.8)
  * `https://mayurbg.in/copywriting.html` (priority 0.7)
  * `https://mayurbg.in/ai-prompt-engineering.html` (priority 0.7)
  * `https://mayurbg.in/social-media.html` (priority 0.7)
  * `https://mayurbg.in/discord-management.html` (priority 0.7)
  * `https://mayurbg.in/resume.html` (priority 0.8)
  * `https://mayurbg.in/contact.html` (priority 0.8)

---

## 3. Structured Data (JSON-LD) & Entity Authority

Implemented schemas:
1. **Person Schema** (`@type: "Person"`):
   * `name`: Mayur Bikash Gogoi
   * `givenName`: Mayur
   * `additionalName`: Bikash
   * `familyName`: Gogoi
   * `alternateName`:
     * "Mayur"
     * "Bikash"
     * "Mayur Bikash"
     * "Mayur Gogoi"
     * "Bikash Gogoi"
     * "MBG"
     * "MayurBikash"
     * "MayurBikashGogoi"
     * "Mayur Bikash Gogoi (MBG)"
     * "mayurbg"
     * "mayurbg.in"
     * "Mayoor Bikash Gogoi" (Phonetic spelling)
     * "Mayur Vikas Gogoi" (Common 'V/B' transliteration)
     * "Mayur Bikas Gogoi" (Common 'sh/s' spelling variation)
     * "Moyur Bikash Gogoi" (Assamese/Bengali phonetic spelling)
     * "Moyur Gogoi"
     * "Mayor Bikash Gogoi"
   * `disambiguatingDescription`: "Mayur Bikash Gogoi (also searched as Mayur, Bikash, Mayur Bikash, Mayur Gogoi, or MBG) is a full-stack developer, copywriter, and founder of Loopni from Assam, India, studying Computer Science and Engineering at Nalbari Polytechnic."
   * `image`:
     * `https://mayurbg.in/assets/images/profile/mayur-bikash-gogoi.jpg`
     * `https://mayurbg.in/assets/images/gallery/mayur-bikash-gogoi-travel-bike.jpg`
     * `https://mayurbg.in/assets/images/gallery/mayur-bikash-gogoi-fitness-gym.jpg`
   * `url`: https://mayurbg.in
   * `alumniOf`: Nalbari Polytechnic, Lahowal College, Montfort High School Chabua
   * `knowsAbout`: Full-Stack Web Development, Copywriting, AI Prompt Engineering, Social Media Management
   * `sameAs`: Verified Instagram, YouTube, and Loopni links.
2. **WebSite Schema** (`@type: "WebSite"`):
   * Declares canonical authority for search engine entity indexing with alternateName "MBG", "Mayur Bikash", and "Mayur".

**Testing Tool:** Validate markup after deployment using the [Google Rich Results Test](https://search.google.com/test/rich-results).

---

## 3.1 Ranking Strategy for Every Name Variation & Spelling Mistakes

When people search for you, they use different abbreviations, nicknames, or spelling mistakes. Here is how Google connects them all to your personal website:

1. **Schema.org `alternateName` Knowledge Graph Sync:**
   * Google reads the JSON-LD `alternateName` array to create an entity relationship. If someone types "Mayur Vikas", "Moyur Bikash Gogoi", "Mayur Gogoi", or "Mayur Bikash", Google's RankBrain and MUM models recognize it as the same entity.
2. **Meta Keywords Tag Across All 14 HTML Pages:**
   * Contains every phonetic spelling, regional transliteration, and joined form:
     `Mayur Bikash Gogoi, Mayur, Bikash, Mayur Bikash, Mayur Gogoi, Bikash Gogoi, MBG, mayurbg, mayurbg.in, MayurBikash, MayurBikashGogoi, Mayoor Bikash Gogoi, Mayur Vikas Gogoi, Mayur Bikas Gogoi, Moyur Bikash Gogoi, Moyur Gogoi, Mayor Bikash Gogoi, Mayur Assam, Mayur Bikash Assam...`
3. **On-Page Identity Text:**
   * In `about.html`, the Quick Profile card contains the explicit row:  
     `Also Known As: Mayur, Bikash, Mayur Bikash, Mayur Gogoi, MBG`  
     Search crawlers use this natural language phrase to confirm entity synonyms.
4. **Google Image Search Ranking for Real Photos:**
   * **Profile Portrait (`mayur-bikash-gogoi.jpg`):** Appears on Hero, About, Open Graph preview, and Twitter card.
   * **Motorcycle / Travel Photo (`mayur-bikash-gogoi-travel-bike.jpg`):** High-ranking for queries like "Mayur Bikash Gogoi Assam", "Mayur Bikash bike", "Mayur Gogoi Royal Enfield".
   * **Fitness / Gym Photo (`mayur-bikash-gogoi-fitness-gym.jpg`):** High-ranking for queries like "Mayur Bikash gym", "Mayur Gogoi fitness", "Mayur Bikash workout".
   * All three photos are declared in `sitemap.xml` under `<image:image>` tags with targeted titles and captions.

5. **External Social Bio Synchronization:**
   * **Instagram (`@mayurrr__g`):** Set name to `Mayur Bikash Gogoi (MBG)` with link `https://mayurbg.in`.
   * **YouTube (`Niok Max`):** Include `Mayur Bikash Gogoi` in the description with link `https://mayurbg.in`.
   * **Loopni (`loopni.shop`):** Link `Founded by Mayur Bikash Gogoi` to `https://mayurbg.in`.
  7. `assets/images/gallery/loopni-brand-apparel-mayur.svg` — Loopni brand clothing & apparel merchandise
  8. `assets/images/gallery/jarvis-ai-assistant-screen.svg` — JARVIS Personal AI Assistant project interface
  9. `assets/images/gallery/mayur-bikash-gogoi-assam-hometown.svg` — Hometown & landscape surroundings in Assam, India
  10. `assets/images/gallery/mayur-bikash-gogoi-speaking-event.svg` — Technical presentations & college workshop discussions
  11. `assets/images/gallery/mayur-bikash-gogoi-portrait-campus.svg` — Student portrait on college campus

* **Drop In Actual Photos:** Replace any of the above `.svg` placeholder files with your actual `.jpg`, `.png`, or `.webp` photographs using the same filename or updating the extension in `index.html` and `js/config.js`.
* **Surrounding Context:** Each photo is wrapped in semantic `<figure>` and `<figcaption>` elements with explicit captions, width, height, and descriptive alt text mentioning your name and location for maximum indexing authority.

---

## 6. Google Search Console Onboarding Steps

1. **Deploy Repository to GitHub Pages** with custom domain `mayurbg.in`.
2. **Enforce HTTPS** in GitHub Pages Settings.
3. Open [Google Search Console](https://search.google.com/search-console).
4. Select **Add Property** &rarr; Choose **Domain** property &rarr; Enter `mayurbg.in`.
5. Copy the TXT verification token provided by Google.
6. In your domain DNS manager (e.g. Cloudflare, Namecheap, GoDaddy):
   * Add a DNS record: `Type: TXT`, `Host: @`, `Value: [google verification token]`.
7. Return to Search Console and click **Verify**.
8. Navigate to **Sitemaps** &rarr; Submit `https://mayurbg.in/sitemap.xml`.
9. Use the **URL Inspection** tool on `https://mayurbg.in/` &rarr; Click **Request Indexing**.
10. Check back within 3–7 days to review index coverage and organic queries.
