/**
 * Mayur Bikash Gogoi Portfolio - Performance Animations & Custom Cursor
 * 60fps GPU-accelerated motion with zero scroll jank
 */

document.addEventListener("DOMContentLoaded", () => {
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Fast Loading Screen Fade
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    // Dismiss quickly without artificial waiting
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 200);
  }

  // 2. High-Performance IntersectionObserver for Scroll Animations
  const revealElements = document.querySelectorAll(".reveal-on-scroll, .reveal-item");
  if (!isReducedMotion && "IntersectionObserver" in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // If reduced motion or observer not supported, reveal immediately
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  // 3. Ultra-Smooth GPU Custom Desktop Cursor
  const isFinePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
  if (isFinePointer && !isReducedMotion) {
    document.body.classList.add("has-custom-cursor");

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;

    // Track mouse with passive event listener
    window.addEventListener(
      "mousemove",
      (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!isVisible) {
          isVisible = true;
          dot.style.opacity = "1";
          ring.style.opacity = "0.6";
        }

        // Direct GPU translation for central dot (zero lag)
        dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      },
      { passive: true }
    );

    // Physics interpolation (lerp) for the outer ring
    function updateCursorRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(updateCursorRing);
    }
    requestAnimationFrame(updateCursorRing);

    // Contextual Hover States
    const interactiveSelector = "a, button, input, textarea, select, .btn, .filter-btn, .theme-toggle-btn, .contact-channel-item";
    
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(interactiveSelector)) {
        document.body.classList.add("cursor-hover");
      }
      if (e.target.closest(".gallery-item")) {
        document.body.classList.add("cursor-photo");
      }
      if (e.target.closest(".project-card")) {
        document.body.classList.add("cursor-hover");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(interactiveSelector)) {
        document.body.classList.remove("cursor-hover");
      }
      if (e.target.closest(".gallery-item")) {
        document.body.classList.remove("cursor-photo");
      }
      if (e.target.closest(".project-card")) {
        document.body.classList.remove("cursor-hover");
      }
    });

    document.addEventListener("mousedown", () => {
      document.body.classList.add("cursor-click");
    });

    document.addEventListener("mouseup", () => {
      document.body.classList.remove("cursor-click");
    });

    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isVisible = false;
    });
  }
});
