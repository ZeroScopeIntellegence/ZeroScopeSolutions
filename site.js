/* =====================================================================
   site.js  |  shared code for every page (you rarely need to edit this)
   1) Header + footer  2) Scroll glow  3) Page renderers (blogs, practices)
   Each page loads:  content.js  then  site.js
   Page options (on the site.js script tag):
     data-base   = "" for pages in the main folder, "../" for /blogs and /docs pages
     data-active = which nav link to highlight: home | blogs  (leave "" for none)
   ===================================================================== */
(function () {
  const tag    = document.currentScript;
  const BASE   = tag.dataset.base || "";
  const ACTIVE = tag.dataset.active || "";
  const $      = id => document.getElementById(id);
  const esc    = t => String(t).replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
  const ext    = url => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";

  /* ===== 1. HEADER + FOOTER ===== */
  // NAV links: [label, link, key]. Edit here to change the nav on ALL pages.
  const NAV = [
    ["Home",       BASE + "index.html",        "home"],
    ["Blogs",      BASE + "blogs/index.html",  "blogs"],
    ["Newsletter", LINKS.newsletter,           "news"]
  ];
  const header = `
<header>
  <div class="inline-flex-meta">
    <a class="logo" href="${BASE}index.html">WIL<span>.</span>DENNISON</a>
  </div>
  <nav>${NAV.map(n => `<a href="${n[1]}"${ext(n[1])}${n[2] === ACTIVE ? ' class="active"' : ""}>${n[0]}</a>`).join("")}</nav>
  <span class="nav-tag">// ZEROSCOPE SOLUTIONS</span>
</header>`;

  // Footer icons: [label, link, svg path]
  const ICONS = [
    ["LinkedIn", LINKS.linkedin, "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"],
    ["GitHub",   LINKS.github,   "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"],
    ["GitLab",   LINKS.gitlab,   "M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.45.044 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.625-8.444a.924.924 0 0 0 .33-1.023"],
    ["Medium",   LINKS.medium,   "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"]
  ];
  const footer = `
<footer>
  <div class="footer-left">
    <strong>WIL DENNISON</strong> &nbsp;//&nbsp; Cybersecurity Writer &amp; Researcher<br>
    <span class="inline-font-size">© 2026 — ZeroScope Solutions. All rights reserved.</span>
  </div>
  <div class="footer-right">${ICONS.map(i => `
    <a href="${i[1]}" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="${i[2]}"/></svg>${i[0]}</a>`).join("")}
  </div>
  <div class="footer-tag">#StayCuriousStaySharp</div>
</footer>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  /* ===== 2. SCROLL GLOW (background glow drifts as you scroll) ===== */
  const glow = () => document.body.style.setProperty("--scroll-shift", (window.scrollY * 0.2) + "px");
  addEventListener("scroll", glow, { passive: true });
  glow();

  /* ===== 3a. HOME: best-practice cards (from PRACTICES in content.js) ===== */
  if ($("practices")) {
    $("practices").innerHTML = PRACTICES.map((p, i) => `
      <div class="practice-card">
        <div class="practice-num">// ${String(i + 1).padStart(2, "0")}</div>
        <div class="practice-title">${esc(p.title)}</div>
        <p class="practice-desc">${esc(p.text)}</p>
      </div>`).join("");
  }

  /* ===== 3b. BLOGS PAGE: filter buttons + article list (from BLOGS) ===== */
  if ($("blog-list")) {
    const topics = [...new Set(BLOGS.map(b => b.topic))];
    $("blog-filters").innerHTML = '<span class="filter-label">// Filter</span>' +
      ["All", ...topics].map((t, i) => `<button class="filter-btn${i ? "" : " active"}" data-filter="${esc(t.toLowerCase())}">${esc(t)}</button>`).join("");
    $("blog-list").innerHTML = BLOGS.map((b, i) => {
      const href = b.url || b.file;
      return `<a class="article-entry" data-cat="${esc(b.topic.toLowerCase())}" href="${esc(href)}"${ext(href)}>
        <div class="entry-top"><span class="entry-date">// ${esc([b.date, b.topic, b.read].filter(Boolean).join(" · ").toUpperCase())}</span>${i === 0 ? '<span class="badge-new">New</span>' : ""}</div>
        <div class="entry-title">${esc(b.title)}</div>
        <p class="entry-excerpt">${esc(b.summary || "")}</p>
      </a>`;
    }).join("");
    const btns = document.querySelectorAll(".filter-btn");
    btns.forEach(btn => btn.addEventListener("click", () => {
      btns.forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".article-entry").forEach(a =>
        a.classList.toggle("hidden", btn.dataset.filter !== "all" && a.dataset.cat !== btn.dataset.filter));
    }));
  }

})();
