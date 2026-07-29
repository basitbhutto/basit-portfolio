/* =========================================================
   app.js — main application logic
   ========================================================= */

/* ---------- Project data ---------- */
const PROJECTS = [
{
  slug: "medical",
  category: "Desktop Application",
  name: "Medical Store Management System",
  galleryCount: 18,
  imageExt: "png",

  shortDesc:
    "A complete offline pharmacy management system for billing, inventory, purchases, credit management, and expiry tracking.",

  tech: [
    ".NET 8",
    "WPF",
    "SQLite",
    "Entity Framework Core",
    "BCrypt",
    "Clean Architecture",
  ],

  overview:
    "A professional Medical Store Management System built as a 100% offline Windows desktop application for pharmacies and medical stores. The system manages medicine inventory, sales, purchases, customer credit, supplier records, business reports, subscription licensing, and secure backup & restore using an embedded SQLite database.",

  problem:
    "Many pharmacies rely on manual registers or spreadsheets to manage inventory, purchases, customer dues, and medicine expiry dates. This often leads to inaccurate stock levels, expired medicines remaining on shelves, delayed purchasing decisions, and difficulty tracking daily business performance.",

  solution:
    "I developed a fully offline WPF desktop application powered by SQLite and Entity Framework Core. The system automates medicine inventory with FEFO batch tracking, manages sales and purchases, customer credit settlements, supplier records, user permissions, subscription licensing, and secure password-protected backups without requiring an internet connection.",

  features: [
    "100% Offline Desktop Application",
    "Sales & POS Billing",
    "Medicine Inventory Management",
    "Batch & FEFO Expiry Tracking",
    "Low Stock & Near Expiry Alerts",
    "Purchase & Supplier Management",
    "Customer Credit & Wallet Settlement",
    "Sales, Purchase & Profit Reports",
    "User Roles & Permissions",
    "Subscription & License Management",
    "Password-Protected Backup & Restore",
    "SQLite Embedded Database",
  ],

  challenges:
    "Designing an efficient offline architecture while maintaining fast inventory operations, accurate FEFO batch deduction, reliable customer credit tracking, and secure backup & restore functionality without compromising application performance.",

  results:
    "Delivered a fast and reliable offline pharmacy management solution that simplifies daily operations, improves inventory accuracy, reduces expired stock through automated alerts, secures business data with encrypted backups, and enables pharmacy owners to manage their entire store from a single lightweight desktop application.",
},
{
  slug: "finebook",
  category: "Finance Application",
  name: "FineBook – Personal Finance Management Platform",
  galleryCount: 14,
  imageExt: "png",
  shortDesc:
    "Offline-first personal finance platform with wallets, expense tracking, reports, and a hidden double-entry accounting engine.",
  tech: [
    "ASP.NET Core 8 Web API",
    ".NET MAUI",
    "SQL Server",
    "Entity Framework Core",
    "SQLite",
    "JWT",
    "REST API"
  ],
  overview:
    "FineBook is a modern personal finance platform designed for individuals and small businesses to manage wallets, income, expenses, transfers, and financial reports through a simple user experience. Behind the scenes, the application maintains a professional double-entry accounting engine while keeping accounting concepts completely hidden from end users.",
  problem:
    "Traditional accounting software is too complex for everyday users, while many expense tracker apps lack offline capability, secure synchronization, structured financial reporting, and a scalable accounting foundation.",
  solution:
    "I designed and developed an offline-first finance platform with secure authentication, wallet management, income, expense and transfer tracking, automatic double-entry posting, background synchronization, encrypted API communication, and a clean Material Design user experience built on a scalable Clean Architecture.",
  features: [
    "Offline-first architecture with SQLite synchronization",
    "Wallet management with automatic balance calculation",
    "Income, Expense and Transfer transactions",
    "Automatic double-entry accounting engine",
    "Interactive financial dashboard with analytics",
    "Financial Summary, Account Statement, Income/Expense and Category reports",
    "JWT authentication with OTP verification",
    "7-day trial subscription activation",
    "Secure AES-256 encrypted API communication",
    "Role-based Super Admin management",
    "Soft-delete with complete audit trail",
    "Material Design 3 responsive mobile experience"
  ],
  challenges:
    "Building an offline-first financial platform while preserving accounting accuracy required implementing transactional posting, secure synchronization, conflict handling, user data isolation, encrypted communication, and automatic balance consistency across both local and server databases.",
  results:
    "Delivered a scalable finance platform with fast offline performance, secure synchronization, complete user data isolation, automatic accounting accuracy through double-entry posting, and a simple user experience that hides financial complexity from end users."
},
{
  slug: "magazine",
  category: "Web Application",
  name: "Digital Magazine & Guide Publishing Platform",
  galleryCount: 18,
  imageExt: "png",

  shortDesc:
    "A full-featured digital magazine marketplace where publishers upload and sell e-guides/magazines, and customers browse, favorite, and purchase PDF content online.",

  tech: [
    ".NET 10",
    "ASP.NET Core MVC",
    "SQL Server",
    "Entity Framework Core",
    "ASP.NET Core Identity",
    "Clean/Layered Architecture",
  ],

  overview:
    "A complete digital magazine and e-guide publishing platform built with ASP.NET Core MVC and SQL Server. The system lets admins and uploaders publish priced digital magazines with cover images, PDF files, and categories, while customers browse a public catalog, favorite guides, and complete checkout to access purchased content — all backed by role-based authentication and a layered N-tier architecture (Entities, Repository, Web).",

  problem:
    "Independent publishers and small magazine businesses often lack an affordable, dedicated platform to sell digital magazines and guides online. They're forced to rely on generic file-sharing or manual PDF distribution, which offers no catalog structure, no pricing/discount control, no user accounts, and no way to track sales, favorites, or publishing activity.",

  solution:
    "I built a role-based ASP.NET Core MVC platform on .NET 10 with a clean Entities/Repository/Web layered architecture. Admins and uploaders manage a full guide catalog (title, slug, summary, cover image, PDF, category, current/old price) through a secured admin CMS, while customers browse published guides, save favorites, and check out to purchase. ASP.NET Core Identity handles authentication with granular policies (AdminOnly, UploaderAccess, CustomerAccess), and a custom FileService validates and stores cover images and PDFs with strict size/type limits.",

  features: [
    "Digital Guide/Magazine Catalog with Slugs & Categories",
    "Cover Image & PDF Upload with Validation",
    "Pricing & Discount (Old/Current Price) Support",
    "Role-Based Access (Admin, SuperAdmin, Uploader, Customer)",
    "Admin CMS for Guide & Category Management",
    "Public Storefront with Guide Detail Pages",
    "Checkout / Purchase Flow",
    "User Favorites (Bookmarking)",
    "Customer Dashboard & Profile Management",
    "Activity & System Audit Logging",
    "ASP.NET Core Identity Authentication",
    "SQL Server + Entity Framework Core (Repository Pattern)",
  ],

  challenges:
    "Designing a clean layered architecture that cleanly separates domain entities, data access, and presentation logic, while enforcing strict role-based access across admin, uploader, and customer flows, and safely handling large file uploads (cover images up to 5MB, PDFs up to 50MB) without compromising performance or security.",

  results:
    "Delivered a production-ready digital magazine marketplace that gives publishers full control over their catalog and pricing, provides customers with a smooth browsing-to-checkout experience, and maintains data integrity and accountability through role-based permissions and detailed activity logging.",
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

const GALLERY_COUNT_DEFAULT = 8;
const IMAGE_EXT_DEFAULT = "svg";

function projectAssets(slug) {
  const project = PROJECTS.find((p) => p.slug === slug);
  const ext = project?.imageExt || IMAGE_EXT_DEFAULT;
  const count = project?.galleryCount || GALLERY_COUNT_DEFAULT;
  const base = `assets/screenshots/${slug}`;
  return {
    banner: `${base}/banner.${ext}`,
    thumb: `${base}/thumb.${ext}`,
    gallery: Array.from({ length: count }, (_, i) => `${base}/screen-${i + 1}.${ext}`),
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
