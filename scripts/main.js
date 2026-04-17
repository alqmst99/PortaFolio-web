/* ===== RENDER PORTFOLIO FROM DATA ===== */

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderAbout();
  renderSkills();
  renderServices();
  renderProjects();
  renderFooter();
  initNav();
  initScrollEffects();
  initScrollReveal();
  initEmailJS();
});

/* ---- HOME ---- */
function renderHome() {
  const d = portfolioData.personal;
  const s = portfolioData.social;

  document.querySelector(".home_subtitle").innerHTML =
    `${d.greeting} <span>—</span>`;
  document.querySelector(".home_title").textContent = d.name;
  document.querySelector(".home_education").textContent = d.role;
  document.querySelector(".home_description").textContent = d.description;

  // profile images
  document.querySelectorAll(".blob_img").forEach(img => img.setAttribute("href", d.profileImage));

  // social icons
  const socialEl = document.querySelector(".home_social");
  socialEl.innerHTML = s
    .filter(l => ["GitHub","Instagram","LinkedIn"].includes(l.label))
    .map(l => `
      <a href="${l.url}" target="_blank" class="home_social-link" aria-label="${l.label}">
        <i class="${l.icon}"></i>
      </a>`)
    .join("");
}

/* ---- ABOUT ---- */
function renderAbout() {
  const a = portfolioData.about;
  const img = portfolioData.personal.profileImage;
  document.querySelector(".about_subtitle").textContent = a.subtitle;
  document.querySelector(".about_section_title").textContent = a.title;
  document.querySelector(".about_description").textContent = a.description;
  document.querySelectorAll(".about_img_el").forEach(el => el.setAttribute("href", img));
}

/* ---- SKILLS ---- */
function renderSkills() {
  const sk = portfolioData.skills;
  document.querySelector(".skills_subtitle").textContent = sk.subtitle;
  document.querySelector(".skills_section_title").textContent = sk.title;
  document.querySelector(".skills_description").textContent = sk.description;

  const content = document.querySelector(".skills_content");
  content.innerHTML = sk.groups.map(g => `
    <ol class="skills_group">
      <h3 class="section_subtitle skills_group-label">${g.label}</h3>
      ${g.items.map(i => `<li class="skills_items">${i}</li>`).join("")}
    </ol>`).join("");
}

/* ---- SERVICES ---- */
function renderServices() {
  const container = document.querySelector(".services_container");
  container.innerHTML = portfolioData.services.map(s => `
    <article class="services_card">
      <i class="${s.icon} service_icon"></i>
      <h2 class="services_title">${s.title}</h2>
      <p class="service_description">${s.description}</p>
    </article>`).join("");
}

/* ---- PROJECTS ---- */
function renderProjects() {
  const container = document.querySelector(".projects_container");
  container.innerHTML = portfolioData.projects.map(p => `
    <article class="projects_card">
      <img src="${p.image}" alt="${p.title}" class="project_img" loading="lazy">
      <div class="project_modal">
        <span class="projects_subtitle">${p.category}</span>
        <h2 class="projects_title">${p.title}</h2>
        <a href="${p.url}" target="_blank" rel="noopener" class="projects_button">
          View Demo <i class="ri-external-link-line"></i>
        </a>
      </div>
    </article>`).join("");
}

/* ---- FOOTER ---- */
function renderFooter() {
  const d = portfolioData.personal;
  const s = portfolioData.social;
  const f = portfolioData.footer;

  document.querySelector(".footer_name").innerHTML =
    d.name.split(" ").map((w, i) => i === 1 ? `<span>${w}</span>` : w).join(" ");
  document.querySelector(".footer_role").textContent = d.role;
  document.querySelector(".footer_copy").innerHTML = f.copy;

  const socialEl = document.querySelector(".footer_social");
  socialEl.innerHTML = s.map(l => `
    <a href="${l.url}" target="_blank" class="footer_social-link" aria-label="${l.label}">
      <i class="${l.icon}"></i>
    </a>`).join("");
}

/* ---- NAV ---- */
function initNav() {
  const navMenu   = document.getElementById("nav_menu");
  const navToggle = document.getElementById("nav_toggle");
  const navClose  = document.getElementById("nav_close");

  navToggle?.addEventListener("click", () => navMenu.classList.add("show_menu"));
  navClose?.addEventListener("click",  () => navMenu.classList.remove("show_menu"));

  document.querySelectorAll(".nav_link").forEach(link =>
    link.addEventListener("click", () => navMenu.classList.remove("show_menu"))
  );
}

/* ---- SCROLL EFFECTS ---- */
function initScrollEffects() {
  const header  = document.getElementById("header");
  const scrollUpBtn = document.getElementById("scroll-up");
  const sections = document.querySelectorAll("section[id]");

  const onScroll = () => {
    const y = window.scrollY;

    // Blur header
    header.classList.toggle("blur-header", y >= 50);

    // Scroll-up button
    scrollUpBtn?.classList.toggle("show-scroll", y >= 350);

    // Active nav link
    sections.forEach(section => {
      const top    = section.offsetTop - 60;
      const height = section.offsetHeight;
      const id     = section.getAttribute("id");
      const link   = document.querySelector(`.nav_menu a[href*="${id}"]`);
      if (!link) return;
      link.classList.toggle("active-link", y >= top && y < top + height);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---- SCROLL REVEAL ---- */
function initScrollReveal() {
  if (typeof ScrollReveal === "undefined") return;

  const sr = ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 900,
    delay: 100,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    reset: false,
  });

  sr.reveal(".home_data", { origin: "left", delay: 200 });
  sr.reveal(".home_social", { origin: "left", delay: 350 });
  sr.reveal(".home_image", { origin: "right", delay: 300 });
  sr.reveal(".about_data", { origin: "left" });
  sr.reveal(".about_image", { origin: "right" });
  sr.reveal(".skills_data", { origin: "left" });
  sr.reveal(".skills_content", { origin: "right" });
  sr.reveal(".services_card", { interval: 120 });
  sr.reveal(".projects_card", { interval: 100 });
  sr.reveal(".contact_container", { origin: "bottom" });
}

/* ---- EMAILJS ---- */
function initEmailJS() {
  const form    = document.getElementById("contact_form");
  const msgEl   = document.getElementById("contact_message");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (typeof emailjs === "undefined") {
      msgEl.textContent = "Email service not configured.";
      return;
    }
    try {
      await emailjs.sendForm("service_code", "template_code", "#contact_form", "publickey");
      msgEl.textContent = "✓ Message sent successfully!";
      msgEl.style.color = "var(--first-color)";
      form.reset();
    } catch (err) {
      msgEl.textContent = "Message could not be sent. Try again.";
      msgEl.style.color = "#ff6b6b";
      console.error(err);
    }
    setTimeout(() => { msgEl.textContent = ""; }, 5000);
  });
}
