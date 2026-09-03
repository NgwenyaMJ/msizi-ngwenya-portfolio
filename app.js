const projects = [
  {
    title: "Broadcast Operations Dashboard",
    status: "Planned Independent Build",
    category: "Operations · Monitoring · Dashboard",
    description: "A software dashboard exploring how technical teams can monitor service health, operational incidents, system availability and infrastructure status from one interface.",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    preview: "dashboard"
  },
  {
    title: "Media Content Management System",
    status: "Planned Independent Build",
    category: "Digital Media · Content Management",
    description: "A digital media platform for organising content libraries, managing metadata, monitoring publishing status and supporting structured content workflows.",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    preview: "library"
  },
  {
    title: "AI IT Support Assistant",
    status: "Planned Independent Build",
    category: "AI · IT Support · Automation",
    description: "An AI-powered support system designed to classify technical problems, suggest troubleshooting actions and convert user requests into structured support tickets.",
    stack: ["Next.js", "React", "JavaScript", "AI Workflows"],
    preview: "ai"
  }
];

function previewMarkup(type) {
  if (type === "dashboard") {
    return `<div class="preview-dashboard" aria-hidden="true"><div class="p-box"></div><div class="p-box"></div><div class="p-box wide"></div></div>`;
  }
  if (type === "library") {
    return `<div class="preview-library" aria-hidden="true">${Array.from({length: 6}, () => '<div class="p-tile"></div>').join('')}</div>`;
  }
  return `<div class="preview-ai" aria-hidden="true"><div class="bubble"></div><div class="bubble"></div><div class="ticket"></div></div>`;
}

const grid = document.getElementById("project-grid");
projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.style.setProperty("--delay", `${index * 70}ms`);
  card.innerHTML = `
    <div class="project-preview">${previewMarkup(project.preview)}</div>
    <div class="project-content">
      <div class="project-meta">
        <span class="project-status">${project.status}</span>
        <span class="project-index">0${index + 1}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="project-category">${project.category}</p>
      <p>${project.description}</p>
      <div class="project-tags">${project.stack.map(item => `<span>${item}</span>`).join("")}</div>
      <div class="project-footer"><span>Case study coming soon</span><span aria-hidden="true">↗</span></div>
    </div>`;
  grid.appendChild(card);
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  siteNav.classList.toggle("open", !isOpen);
});

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
revealItems.forEach(el => {
  const delay = el.dataset.delay || el.style.getPropertyValue("--delay");
  if (delay) el.style.setProperty("--delay", typeof delay === "string" && delay.includes("ms") ? delay : `${delay}ms`);
});

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach(el => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
  revealItems.forEach(el => observer.observe(el));
}

document.getElementById("year").textContent = new Date().getFullYear();

// FormSubmit requires a one-time email activation on the first successful submission.
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", () => {
  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;
});
