/* =========================================================
   app.js — main application logic
   ========================================================= */

/* ---------- Project data ---------- */
const PROJECTS = [
  {
    slug: "medical",
    category: "Desktop + Web",
    name: "Medical Store Management System",
    shortDesc: "A complete pharmacy platform for billing, batch/expiry tracking and prescription management.",
    tech: ["ASP.NET Core", "WPF", "SQL Server", "Entity Framework", "JWT"],
    overview:
      "A full-featured management system built for retail pharmacies, covering point-of-sale billing, inventory with batch and expiry tracking, supplier purchase orders and prescription records. Built as a hybrid solution with a WPF counter application for fast in-store billing and an ASP.NET Core web dashboard for owners to monitor multiple branches remotely.",
    problem:
      "The pharmacy was tracking stock, expiry dates and sales manually in registers, leading to frequent stockouts of critical medicines, expired inventory being sold unknowingly, and no visibility into daily sales across branches.",
    solution:
      "I designed a batch-level inventory model tied to expiry dates with automated low-stock and near-expiry alerts, built a fast offline-capable WPF billing screen optimized for barcode scanners, and layered a secure REST API so a web dashboard could give the owner real-time visibility across all branches.",
    features: [
      "Barcode-driven point-of-sale billing with receipt printing",
      "Batch-wise stock tracking with expiry and low-stock alerts",
      "Supplier and purchase order management",
      "Prescription record keeping linked to customer profiles",
      "Multi-branch sales dashboard with daily/weekly/monthly reports",
      "Role-based access for cashiers, pharmacists and admins",
    ],
    challenges:
      "Keeping the WPF billing screen fully responsive during high-volume checkout while syncing stock changes to the central database required careful use of async operations and local caching to avoid UI freezes during network latency.",
    results:
      "Reduced expired-stock losses to near zero through proactive alerts, cut average checkout time by 40% with barcode scanning, and gave the owner a single dashboard to monitor all branches instead of daily phone calls.",
  },
  {
    slug: "airline",
    category: "Web Application",
    name: "Airline Management Software",
    shortDesc: "Flight scheduling, seat allocation and ticket booking platform for a regional carrier.",
    tech: ["ASP.NET Core MVC", "SQL Server", "Entity Framework", "REST API", "Bootstrap"],
    overview:
      "An airline operations platform covering flight scheduling, dynamic seat maps, ticket booking and check-in, built for a regional carrier that previously coordinated bookings through spreadsheets and phone calls.",
    problem:
      "Manual seat allocation caused frequent double-bookings, staff had no unified view of flight schedules across routes, and ticket pricing changes had to be communicated manually to every booking agent.",
    solution:
      "I built a relational scheduling engine that locks seats during the booking transaction to eliminate double-booking, an interactive seat-map component for agents and passengers, and a centralized fare-rules engine so price changes apply instantly everywhere.",
    features: [
      "Interactive visual seat map with real-time availability",
      "Multi-route flight scheduling with recurring flight templates",
      "Ticket booking, cancellation and refund workflows",
      "Dynamic fare rules by route, season and booking class",
      "Passenger check-in and boarding pass generation",
      "Admin reporting on load factor and route profitability",
    ],
    challenges:
      "Preventing race conditions when two agents tried to book the same seat simultaneously required implementing transactional row-locking at the database level combined with optimistic concurrency checks in the API.",
    results:
      "Eliminated double-booking incidents entirely, reduced booking time per passenger from minutes to under 30 seconds, and gave management route-level profitability reports for the first time.",
  },
  {
    slug: "accounting",
    category: "Web + Desktop",
    name: "Accounting Management System",
    shortDesc: "Double-entry ledgers, invoicing, and financial reporting for small and mid-sized businesses.",
    tech: [".NET 8", "ASP.NET Core", "Entity Framework", "SQL Server", "Clean Architecture"],
    overview:
      "A double-entry accounting system covering general ledgers, accounts receivable/payable, invoicing and tax-ready financial statements, designed for small and mid-sized trading businesses moving off manual bookkeeping.",
    problem:
      "The business was reconciling accounts manually in spreadsheets every month-end, which was error-prone, slow, and made it nearly impossible to produce accurate profit and loss statements on demand.",
    solution:
      "I implemented a proper double-entry ledger engine following standard accounting principles, automated invoice-to-ledger posting, and built report generators for trial balance, P&L and balance sheet that update in real time as transactions are entered.",
    features: [
      "Double-entry general ledger with automatic balancing",
      "Sales and purchase invoicing with tax calculation",
      "Accounts receivable and payable aging reports",
      "Real-time trial balance, P&L and balance sheet",
      "Bank reconciliation module",
      "Multi-user access with audit trail on every transaction",
    ],
    challenges:
      "Designing a ledger schema flexible enough to support custom chart-of-accounts structures per client, while still enforcing strict double-entry integrity, took several iterations of the data model before it was both flexible and safe.",
    results:
      "Cut month-end closing time from days to hours, eliminated reconciliation errors caused by manual entry, and gave management on-demand financial statements instead of waiting for a monthly report.",
  },
  {
    slug: "crm",
    category: "Web Application",
    name: "CRM System",
    shortDesc: "Lead tracking, sales pipeline and customer follow-up platform for a growing sales team.",
    tech: ["ASP.NET Core", ".NET 9", "REST API", "SQL Server", "JWT"],
    overview:
      "A customer relationship management platform built for a sales team that was tracking leads across scattered spreadsheets, WhatsApp chats and sticky notes, with no shared visibility into the pipeline.",
    problem:
      "Leads were falling through the cracks because there was no central record of who had contacted which prospect, no reminders for follow-ups, and sales managers had no way to measure individual or team performance.",
    solution:
      "I built a centralized lead and deal pipeline with stage-based tracking, automated follow-up reminders, and activity logging tied to each contact, exposed through a secure JWT-protected API consumed by the web dashboard.",
    features: [
      "Kanban-style sales pipeline with drag-and-drop stages",
      "Lead capture forms with automatic assignment rules",
      "Follow-up reminders and activity timeline per contact",
      "Sales performance dashboards by rep and by team",
      "Email and call logging linked to deals",
      "Role-based permissions for reps, managers and admins",
    ],
    challenges:
      "Building a pipeline view that stayed fast with thousands of leads meant optimizing the underlying queries with proper indexing and moving heavy aggregation for dashboards into scheduled background jobs.",
    results:
      "Increased lead follow-up rate significantly by removing manual tracking, gave sales managers real-time visibility into pipeline health, and shortened average deal-closing time through automated reminders.",
  },
  {
    slug: "ecommerce",
    category: "Web Platform",
    name: "E-Commerce Platform",
    shortDesc: "Full online storefront with catalog, cart, checkout and an admin panel for order management.",
    tech: ["ASP.NET Core", "REST API", "SQL Server", "Entity Framework", "Bootstrap", "JWT"],
    overview:
      "A full online storefront including product catalog, cart, checkout and order tracking on the customer side, paired with an admin panel for inventory, order fulfillment and sales analytics.",
    problem:
      "The client was selling exclusively through social media direct messages, which didn't scale past a handful of daily orders and gave no way to track inventory or analyze what was actually selling.",
    solution:
      "I built a catalog-driven storefront with category filtering and search, a persistent cart, and a checkout flow supporting multiple payment and delivery options, backed by an admin panel giving full control over products, orders and stock levels.",
    features: [
      "Product catalog with categories, filters and search",
      "Persistent shopping cart and guest checkout",
      "Order tracking with status updates for customers",
      "Admin panel for products, inventory and order fulfillment",
      "Discount codes and promotional pricing engine",
      "Sales analytics dashboard for best-sellers and revenue trends",
    ],
    challenges:
      "Keeping stock counts accurate under concurrent checkouts required implementing atomic stock-decrement operations at the database level to prevent overselling during high-traffic promotional periods.",
    results:
      "Enabled the business to scale from a handful of manual DM orders per day to a fully self-service storefront, while the admin analytics dashboard gave the owner clear visibility into best-selling products for the first time.",
  },
];

const GALLERY_COUNT = 8;

function projectAssets(slug) {
  const base = `assets/screenshots/${slug}`;
  return {
    banner: `${base}/banner.svg`,
    thumb: `${base}/thumb.svg`,
    gallery: Array.from({ length: GALLERY_COUNT }, (_, i) => `${base}/screen-${i + 1}.svg`),
  };
}

/* ---------- Render project rows ---------- */
const PROJECTS_DEFAULT_COUNT = 4;

function renderProjectCards() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => {
    const assets = projectAssets(p.slug);
    const hiddenClass = i >= PROJECTS_DEFAULT_COUNT ? " card-hidden" : "";
    return `
      <article class="project-card${hiddenClass}" data-project="${p.slug}" data-reveal="fade-up" data-reveal-delay="${(i % 4) * 60}" tabindex="0" role="button" aria-label="View ${p.name} details">
        <img src="${assets.thumb}" alt="${p.name} preview" loading="lazy" width="800" height="600" />
        <div class="project-card-overlay">
          <span class="project-card-category">${p.category}</span>
          <h3>${p.name}</h3>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openProjectModal(card.dataset.project));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(card.dataset.project);
      }
    });
  });
}

function initViewAllProjects() {
  const btn = document.getElementById("viewAllBtn");
  const label = document.getElementById("viewAllLabel");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const hiddenCards = document.querySelectorAll("#projectsGrid .project-card.card-hidden");
    const expanded = btn.classList.toggle("expanded");

    if (expanded) {
      hiddenCards.forEach((card) => card.classList.remove("card-hidden"));
      label.textContent = "Show Less";
    } else {
      document.querySelectorAll("#projectsGrid .project-card").forEach((card, i) => {
        if (i >= PROJECTS_DEFAULT_COUNT) card.classList.add("card-hidden");
      });
      label.textContent = "View All Work";
      document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

/* ---------- Modal ---------- */
let gallerySlider;
let lastFocusedEl = null;

function initGallerySlider() {
  gallerySlider = new GallerySlider({
    track: document.getElementById("galleryTrack"),
    prevBtn: document.getElementById("galleryPrev"),
    nextBtn: document.getElementById("galleryNext"),
    counter: document.getElementById("galleryCounter"),
  });
}

function openProjectModal(slug) {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return;
  const assets = projectAssets(slug);
  const modal = document.getElementById("projectModal");

  document.getElementById("modalBanner").src = assets.banner;
  document.getElementById("modalBanner").alt = `${project.name} banner`;
  document.getElementById("modalTitle").textContent = project.name;
  document.getElementById("modalTech").innerHTML = project.tech.map((t) => `<span>${t}</span>`).join("");
  document.getElementById("modalOverview").textContent = project.overview;
  document.getElementById("modalProblem").textContent = project.problem;
  document.getElementById("modalSolution").textContent = project.solution;
  document.getElementById("modalFeatures").innerHTML = project.features.map((f) => `<li>${f}</li>`).join("");
  document.getElementById("modalChallenges").textContent = project.challenges;
  document.getElementById("modalResults").textContent = project.results;

  gallerySlider.load(assets.gallery, project.name);

  lastFocusedEl = document.activeElement;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

function initModal() {
  const modal = document.getElementById("projectModal");
  document.getElementById("modalClose").addEventListener("click", closeProjectModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeProjectModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeProjectModal();
  });

  document.querySelectorAll("[data-open-project]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => openProjectModal(link.dataset.openProject), 400);
    });
  });
}

/* ---------- Loader ---------- */
function initLoader() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("loaded"), 400);
  });
}

/* ---------- Scroll progress bar ---------- */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${(scrollTop / docHeight) * 100}%`;
  });
}

/* ---------- Floating pill nav ---------- */
function initNavbar() {
  const toggle = document.getElementById("navPillToggle");
  const dropdown = document.getElementById("navDropdown");
  const navLinks = document.querySelectorAll(".nav-drop-link");
  if (!toggle || !dropdown) return;

  toggle.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      dropdown.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".floating-nav") && dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  const sections = ["about", "services", "projects", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            const activeLink = document.querySelector(`.nav-drop-link[data-nav="${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => navObserver.observe(section));
  }
}

/* ---------- Scroll-linked hero photo flip ---------- */
function initHeroFlip() {
  const hero = document.getElementById("home");
  const inner = document.getElementById("heroFlipInner");
  if (!hero || !inner) return;

  function update() {
    const rect = hero.getBoundingClientRect();
    const vh = window.innerHeight;
    // progress 0 while hero fills the viewport, ramps to 1 as it scrolls away
    const progress = Math.min(Math.max(-rect.top / (rect.height * 0.6), 0), 1);
    inner.style.transform = `perspective(1600px) rotateY(${progress * 180}deg)`;
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Custom cursor ---------- */
function initCustomCursor() {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  let ringX = 0, ringY = 0;

  window.addEventListener("mousemove", (e) => {
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    ringX = e.clientX;
    ringY = e.clientY;
  });

  function animateRing() {
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = "a, button, .project-card, input, textarea, .service-row";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.add("hovered");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.remove("hovered");
  });
}

/* ---------- Ripple effect ---------- */
function initRipple() {
  document.querySelectorAll(".ripple").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const circle = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      circle.className = "ripple-effect";
      circle.style.width = circle.style.height = `${size}px`;
      circle.style.left = `${e.clientX - rect.left - size / 2}px`;
      circle.style.top = `${e.clientY - rect.top - size / 2}px`;
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 650);
    });
  });
}

/* ---------- Footer year ---------- */
function initFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjectCards();
  initViewAllProjects();
  initGallerySlider();
  initModal();
  initLoader();
  initScrollProgress();
  initNavbar();
  initHeroFlip();
  initBackToTop();
  initCustomCursor();
  initRipple();
  initFooterYear();

  if (window.initScrollReveal) window.initScrollReveal();
  if (window.initCounters) window.initCounters();
  if (window.initParticles) window.initParticles();
});
