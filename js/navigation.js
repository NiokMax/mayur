/**
 * Mayur Bikash Gogoi Portfolio - Navigation Module
 * Sticky header, active links, mobile drawer, and back-to-top
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTopBtn = document.querySelector(".back-to-top");

  // Announcement Bar Dismiss Logic
  const announcementBar = document.getElementById("announcement-bar");
  const announcementClose = document.getElementById("announcement-close");
  if (announcementBar && announcementClose) {
    if (sessionStorage.getItem("mbg_announcement_closed") === "true") {
      announcementBar.classList.add("is-hidden");
    }
    announcementClose.addEventListener("click", () => {
      announcementBar.classList.add("is-hidden");
      sessionStorage.setItem("mbg_announcement_closed", "true");
    });
  }

  // Sticky Header Scroll Effect with requestAnimationFrame for 60fps
  let isScrolling = false;
  function handleScroll() {
    if (window.scrollY > 20) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
    isScrolling = false;
  }

  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      window.requestAnimationFrame(handleScroll);
      isScrolling = true;
    }
  }, { passive: true });
  handleScroll();

  // Back to Top Handler
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile Menu Drawer
  function toggleMobileMenu(open) {
    const isOpen = open !== undefined ? open : !navMenu.classList.contains("open");
    navMenu.classList.toggle("open", isOpen);
    mobileMenuBtn?.classList.toggle("active", isOpen);
    mobileMenuBtn?.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  // Dropdown Menu Toggle (Touch & Click Support)
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownItem = document.querySelector(".nav-item.dropdown");
  if (dropdownToggle && dropdownItem) {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = dropdownItem.classList.toggle("is-open");
      dropdownToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
      if (!dropdownItem.contains(e.target)) {
        dropdownItem.classList.remove("is-open");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => toggleMobileMenu());

    // Close menu when clicking any nav link or dropdown link
    const allLinks = document.querySelectorAll(".nav-link, .dropdown-link");
    allLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("open")) {
          toggleMobileMenu(false);
        }
        dropdownItem?.classList.remove("is-open");
        dropdownToggle?.setAttribute("aria-expanded", "false");
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (navMenu.classList.contains("open")) {
          toggleMobileMenu(false);
        }
        dropdownItem?.classList.remove("is-open");
        dropdownToggle?.setAttribute("aria-expanded", "false");
      }
    });

    // Close when clicking outside drawer on mobile
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("open") &&
        !navMenu.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
      ) {
        toggleMobileMenu(false);
      }
    });
  }

  // Active Section Observer for Single-Page In-Page Links
  const sections = document.querySelectorAll("section[id]");
  if (sections.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const href = link.getAttribute("href");
              if (href === `#${id}` || href === `/#${id}` || href === `index.html#${id}`) {
                link.classList.add("active");
              } else if (href && href.startsWith("#")) {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
});
