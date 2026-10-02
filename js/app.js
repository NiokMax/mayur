/**
 * Mayur Bikash Gogoi Portfolio - Core Application Script
 * Dynamic rendering, project filtering, contact handling, and resume interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Loading Screen Dismissal
  const loadingScreen = document.querySelector(".loading-screen");
  if (loadingScreen) {
    // Hide quickly once resources are ready
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 250);
  }

  // 1b. Role Cycler (Subtle, smooth, readable text rotation)
  const roleCyclerEl = document.getElementById("role-cycler");
  if (roleCyclerEl) {
    const roles = window.SITE_CONFIG?.personal?.roles || [
      "Full-Stack Developer",
      "Freelancer",
      "Copywriter",
      "AI Prompt Engineer",
      "Social Media Manager",
      "Entrepreneur"
    ];
    let roleIndex = 0;
    setInterval(() => {
      roleCyclerEl.style.opacity = "0";
      setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleCyclerEl.textContent = roles[roleIndex];
        roleCyclerEl.style.opacity = "1";
      }, 250);
    }, 2800);
  }

  // 2. Dynamic Projects Rendering & Filtering
  const projectsContainer = document.getElementById("projects-grid-container");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function renderProjects(filter = "all") {
    if (!projectsContainer || !window.PROJECTS_DATA) return;

    const filtered = window.PROJECTS_DATA.filter((proj) => {
      if (filter === "all") return true;
      if (filter === "web" && (proj.category === "web-development" || proj.category === "web")) return true;
      if (filter === "ai" && (proj.category === "ai" || proj.category === "software")) return true;
      if (filter === "other" && proj.category !== "web-development" && proj.category !== "ai") return true;
      return proj.category === filter;
    });

    projectsContainer.innerHTML = "";

    filtered.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card reveal-item revealed";

      const liveBtnHtml = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
             Live Website
           </a>`
        : "";

      const socialBtnHtml = project.socialUrl
        ? `<a href="${project.socialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             ${project.socialLabel || "Instagram"}
           </a>`
        : "";

      const sourceBtnHtml = project.sourceUrl
        ? `<a href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
             Source Code
           </a>`
        : "";

      const statusBadgeClass = project.statusType === "in-development" ? "in-development" : "active";

      card.innerHTML = `
        <div class="project-thumb">
          <img src="${project.image}" alt="${project.name} preview thumbnail" loading="lazy" width="600" height="380" onerror="this.src='assets/images/projects/loopni-project.svg'">
        </div>
        <div class="project-body">
          <div class="project-meta-row">
            <span class="project-category">${project.categoryLabel || project.category}</span>
            <span class="project-status-badge ${statusBadgeClass}">${project.status}</span>
          </div>
          <h3 class="project-name">${project.name}</h3>
          <div class="project-tagline">${project.tagline}</div>
          <p class="project-desc">${project.description}</p>
          <div class="project-tech-tags">
            ${project.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-actions">
            ${liveBtnHtml}
            ${socialBtnHtml}
            ${sourceBtnHtml}
          </div>
        </div>
      `;

      projectsContainer.appendChild(card);
    });
  }

  // Initialize projects
  if (projectsContainer) {
    renderProjects("all");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter") || "all";
        renderProjects(filter);
      });
    });
  }

  // 3. Resume Download & Print Handlers
  const resumeDownloadBtns = document.querySelectorAll(".btn-download-resume");
  const resumePrintBtns = document.querySelectorAll(".btn-print-resume");
  const modalOverlay = document.getElementById("resume-modal");
  const modalCloseBtn = modalOverlay?.querySelector(".modal-close-btn");

  resumePrintBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.print();
    });
  });

  resumeDownloadBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      // Check if actual file is available or show helper modal
      const resumeUrl = window.SITE_CONFIG?.personal?.resumePdf || "assets/resume/mayur-bikash-gogoi-resume.pdf";
      
      fetch(resumeUrl, { method: "HEAD" })
        .then((res) => {
          if (res.ok) {
            window.location.href = resumeUrl;
          } else {
            showResumePlaceholderModal();
          }
        })
        .catch(() => {
          showResumePlaceholderModal();
        });
    });
  });

  function showResumePlaceholderModal() {
    if (modalOverlay) {
      modalOverlay.classList.add("active");
      modalOverlay.setAttribute("aria-hidden", "false");
    } else {
      alert("Resume PDF notice: Place your official PDF resume at assets/resume/mayur-bikash-gogoi-resume.pdf. In the meantime, you can print or view the complete online resume.");
    }
  }

  modalCloseBtn?.addEventListener("click", () => {
    modalOverlay?.classList.remove("active");
    modalOverlay?.setAttribute("aria-hidden", "true");
  });

  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
      modalOverlay.setAttribute("aria-hidden", "true");
    }
  });

  // 4. Contact Form Handler (Static Site Friendly mailto fallback)
  const contactForm = document.getElementById("portfolio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.querySelector("#contact-name")?.value.trim() || "";
      const email = contactForm.querySelector("#contact-email")?.value.trim() || "";
      const subject = contactForm.querySelector("#contact-subject")?.value.trim() || "Inquiry from mayurbg.in";
      const message = contactForm.querySelector("#contact-message")?.value.trim() || "";

      const bodyText = `Hello Mayur,%0D%0A%0D%0AMy Name: ${encodeURIComponent(name)}%0D%0AMy Email: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0ASent from portfolio website https://mayurbg.in`;

      // Open mail client
      const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${bodyText}`;
      window.location.href = mailtoUrl;

      const notice = contactForm.querySelector(".form-notice");
      if (notice) {
        notice.textContent = "Thank you! Opening your email client to complete message delivery to Mayur.";
        notice.style.color = "var(--accent)";
      }
    });
  }

  // 5. Copy to Clipboard for Prompts & Snippets
  const copyButtons = document.querySelectorAll(".btn-copy-prompt");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        navigator.clipboard.writeText(targetEl.innerText).then(() => {
          const originalText = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(() => {
            btn.textContent = originalText;
          }, 2000);
        });
      }
    });
  });
});
