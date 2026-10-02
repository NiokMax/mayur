# Mayur Bikash Gogoi — Personal Portfolio & Online Resume Website

Official personal portfolio, developer profile, and online resume for **Mayur Bikash Gogoi**, a developer, freelancer, copywriter, AI prompt engineer, and social media manager from Assam, India. Founder of Loopni.

* **Live Domain:** [https://mayurbg.in](https://mayurbg.in)
* **Brand Store:** [https://loopni.shop](https://loopni.shop)
* **Personal Instagram:** [@mayurrr__g](https://www.instagram.com/mayurrr__g/)
* **YouTube Channel:** [Niok Max](https://www.youtube.com/channel/UCuGtS1lE7Xo4gN8YwA_8jWQ)

---

## 1. Project Overview & Architecture

This website is built with clean, modern, semantic standards:
* **Core Technologies:** HTML5, CSS3, Vanilla JavaScript (ES6+). Zero paid backends, zero node/PHP servers required.
* **Hosting:** Fully optimized for **GitHub Pages** with custom domain support (`mayurbg.in`).
* **Design Philosophy:** Warm editorial aesthetic, minimalist typography, subtle interactions, and responsive design supporting devices from 320px up to 1920px+.
* **Performance & Accessibility:** Fully accessible keyboard navigation, ARIA landmarks, `IntersectionObserver` scroll reveals, lightweight custom desktop cursor, and instant theme toggling (Light / Dark mode).

---

## 2. Directory Structure

```text
Mayur/
├── index.html                  # Main comprehensive homepage portfolio
├── about.html                  # Deep-dive about page & philosophy
├── education.html              # Academic timeline & training history
├── skills.html                 # Categorized skills breakdown
├── experience.html             # Multi-role professional experience
├── services.html               # Service offerings & collaboration hub
├── projects.html               # Filterable projects showcase
├── copywriting.html            # Copywriting portfolio & sample state
├── ai-prompt-engineering.html  # AI instructions & prompt showcase
├── social-media.html           # Social presence & brand management
├── discord-management.html     # Discord server architecture & moderation
├── resume.html                 # Complete printable online resume
├── contact.html                # Direct contact & communication channels
├── 404.html                    # Branded 404 fallback page
│
├── css/
│   ├── style.css               # Design system, theme variables, core layouts
│   ├── responsive.css          # Breakpoints (320px, 375px, 768px, 1024px, 1440px+)
│   ├── animations.css          # Subtle scroll reveals, cursor, loader styles
│   └── print.css               # Clean print stylesheet for resume printing
│
├── js/
│   ├── config.js               # Central configuration file for all personal details
│   ├── projects.js             # Extensible projects database
│   ├── theme.js                # Dark/light mode switcher with localStorage
│   ├── navigation.js           # Sticky header, mobile drawer, active section spy
│   ├── animations.js           # Scroll observer, role ticker, custom cursor
│   ├── gallery.js              # Accessible image lightbox modal
│   └── app.js                  # Project filters, resume handler, contact form
│
├── assets/
│   ├── images/
│   │   ├── profile/            # Place your portrait photo here
│   │   ├── projects/           # Loopni & JARVIS project mockups
│   │   ├── gallery/            # Journey in pictures photo placeholders
│   │   ├── branding/           # MBG logos, favicons, social share previews
│   │   └── social/             # Social media graphics
│   ├── resume/                 # Place your approved PDF resume here
│   └── icons/                  # Visual assets
│
├── CNAME                       # Custom domain file containing: mayurbg.in
├── favicon.svg                 # MBG monogram favicon
├── manifest.json               # Web app manifest
├── robots.txt                  # Search engine crawler instructions
├── sitemap.xml                 # Valid canonical XML sitemap
├── README.md                   # This documentation
├── SEO-CHECKLIST.md            # Step-by-step Google Search Console & SEO guide
└── SECURITY.md                 # Public repository security guidelines
```

---

## 3. How to Update & Customize Content

All personal details, education entries, skills, and projects are centralized so you do not need to rebuild the entire website to make updates.

### Updating Personal Information
Open `js/config.js`. You will find:
* `fullName`, `shortName`, `age`, `location`
* `college`, `branch`, `educationStatus`
* `availability` status label
* `aboutBio` paragraphs
* Social media and external URLs

### Adding or Updating Projects
Open `js/projects.js`. Each project entry follows this schema:
```javascript
{
  id: "my-new-project",
  name: "Project Title",
  tagline: "Short one-line description",
  category: "web-development", // 'web-development', 'ai', 'software', or 'creative'
  categoryLabel: "Category Display Name",
  status: "Live / In Development",
  statusType: "active", // 'active' or 'in-development'
  description: "Detailed description of what you built...",
  technologies: ["Tech 1", "Tech 2", "Tech 3"],
  image: "assets/images/projects/your-screenshot.webp",
  liveUrl: "https://yourproject.com", // Leave empty string "" if none
  sourceUrl: "",
  socialUrl: "",
  featured: true,
  year: "2026"
}
```

### Adding Your Profile Photo
1. Save your photograph (recommended size: 800x1000px, WebP or JPG) as:
   `assets/images/profile/mayur-bikash-gogoi.jpg`
2. In `js/config.js`, update `profilePhoto: "assets/images/profile/mayur-bikash-gogoi.jpg"`
3. In `index.html`, replace the image `src` in `.hero-photo-card` with your new image path.

### Uploading Your PDF Resume
1. Place your approved resume PDF at:
   `assets/resume/mayur-bikash-gogoi-resume.pdf`
2. The "Download Resume" buttons on the website will automatically detect the file and trigger the download!

---

## 4. Local Testing

To test the site on your computer before deploying:

### Option A: Using Python's Built-in Server
Open PowerShell in the project directory (`c:\Users\theki\Desktop\Mayur`) and run:
```powershell
python -m http.server 8000
```
Open your browser at `http://localhost:8000`.

### Option B: Using VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"**.

---

## 5. GitHub Pages Deployment Guide

Follow these steps to deploy your website live for free:

1. **Create a GitHub Repository:**
   * Go to [GitHub.com](https://github.com) and create a new repository (e.g., `mayurbg-portfolio` or `mayurbg.github.io`).
   * Set it to **Public**.

2. **Push the Files to GitHub:**
   In your terminal or PowerShell inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Mayur Bikash Gogoi portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   * In your GitHub repository, click **Settings** &rarr; **Pages** (under Code and automation in the left sidebar).
   * Under **Build and deployment > Source**, select **Deploy from a branch**.
   * Under **Branch**, select `main` and directory `/ (root)`.
   * Click **Save**.

4. **Verify Deployment:**
   After 1–2 minutes, your website will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

---

## 6. Custom Domain Setup (`mayurbg.in`)

To connect your custom domain:

1. **Verify CNAME File:**
   The repository already includes a `CNAME` file containing:
   ```text
   mayurbg.in
   ```

2. **Configure DNS Records at Your Domain Registrar:**
   Log in to the control panel of the registrar where you registered `mayurbg.in` (e.g. GoDaddy, Namecheap, Cloudflare, Hostinger):
   * Add 4 **A Records** pointing `@` (root domain) to GitHub Pages IP addresses:
     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   * Add 1 **CNAME Record** for `www`:
     ```text
     Host: www
     Points to: YOUR_USERNAME.github.io
     ```

3. **Configure Custom Domain in GitHub:**
   * In GitHub repo **Settings > Pages > Custom domain**, enter `mayurbg.in` and click **Save**.
   * GitHub will check DNS records. Wait 15–30 minutes for DNS propagation.
   * Check the box: **Enforce HTTPS**.

---

## 7. Google Search Console & SEO Setup

1. Complete domain setup above and ensure HTTPS is active.
2. Open [Google Search Console](https://search.google.com/search-console).
3. Choose **Domain** property and enter `mayurbg.in`.
4. Copy the TXT verification record provided by Google.
5. Add the TXT record in your domain registrar's DNS settings.
6. Click **Verify** in Search Console.
7. Go to **Sitemaps** in the Search Console sidebar and submit:
   ```text
   https://mayurbg.in/sitemap.xml
   ```
8. Use **URL Inspection** on `https://mayurbg.in/` and click **Request Indexing**.
9. See [SEO-CHECKLIST.md](SEO-CHECKLIST.md) for full audit details.
