# Security & Static Architecture Policy — Mayur Bikash Gogoi

This repository contains the source code for the personal portfolio and resume of **Mayur Bikash Gogoi** hosted on **GitHub Pages** ([https://mayurbg.in](https://mayurbg.in)).

---

## 1. Static Client-Side Architecture

This website is delivered as static HTML, CSS, and client-side JavaScript. Because it is served directly to client browsers:
* **Source Visibility:** All frontend code (HTML, CSS, JS) is publicly inspectable via web developer tools.
* **No Artificial Code Obfuscation:** The codebase does **not** employ fake source protection techniques (such as disabling right-click, blocking F12, or disabling Ctrl+U). These techniques harm accessibility and offer zero real security.
* **No Server Execution:** The website requires no server-side execution environments (no PHP, Node.js runtime servers, Python backend daemons, or server databases). This eliminates an entire class of server-side vulnerabilities (e.g., SQL injection, server remote code execution).

---

## 2. Secrets & Credential Management

* **Zero Secret Tokens:** Never commit private API tokens, private signing keys, backend passwords, or personal credentials into this repository.
* **Contact Forms:** Static GitHub Pages forms should never attempt to communicate with authenticated private endpoints without public client tokens or dedicated third-party form handlers (such as Formspree or mailto links).
* **Environment Separation:** If third-party client tokens are used in the future (e.g. analytics or map widgets), ensure they are restricted to domain `https://mayurbg.in` in their respective provider consoles.

---

## 3. External Content & Links

* All external hyperlinks (such as Instagram, YouTube, and Loopni) strictly enforce:
  ```html
  target="_blank" rel="noopener noreferrer"
  ```
  This prevents reverse tab-nabbing vulnerabilities and isolates external navigation contexts.

---

## 4. Reporting Security Vulnerabilities

If you identify any security issue or unintentional disclosure in this public repository, please contact Mayur Bikash Gogoi directly via the contact channels listed on [https://mayurbg.in/contact.html](https://mayurbg.in/contact.html).
