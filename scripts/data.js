/* ===== PORTFOLIO DATA ===== */
const portfolioData = {

  /* --- Personal Info --- */
  personal: {
    name: "Nahuel Pierini",
    role: "Developer",
    greeting: "Hello, I'm",
    description:
      "Developer specialized in MERN, Java & Spring Boot. I build robust, scalable web solutions from idea to production.",
    profileImage: "./assets/perfil.png",
    cvLink: "#",
  },

  /* --- Social Links --- */
  social: [
    { icon: "ri-github-fill",    url: "https://github.com/alqmst99",                              label: "GitHub"    },
    { icon: "ri-instagram-fill", url: "https://www.instagram.com/fstailsolution/",                label: "Instagram" },
    { icon: "ri-linkedin-box-fill", url: "https://www.linkedin.com/in/nahuel-pierini-b16396150/", label: "LinkedIn"  },
    { icon: "ri-facebook-circle-line", url: "https://www.facebook.com/profile.php?id=61576895656920", label: "Facebook"  },
  ],

  /* --- About --- */
  about: {
    subtitle: "My Intro",
    title: "About Me",
    description:
      "I'm a Developer who loves turning complex problems into elegant digital experiences. I work end-to-end — from designing intuitive UIs to architecting solid back-end systems. Always learning, always shipping.",
  },

  /* --- Skills --- */
  skills: {
    subtitle: "Favorite Skills",
    title: "My Skills",
    description:
      "A curated set of tools I use daily to build modern, performant web applications.",
    groups: [
      {
        label: "Front-End",
        items: ["HTML & CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React JS", "Redux"],
      },
      {
        label: "Back-End",
        items: ["Java", "Express.js", "Spring Boot", "MySQL", "MongoDB", "Postman"],
      },
      {
        label: "Tools & Design",
        items: ["Git & GitHub", "Figma", "Docker (basics)", "REST APIs"],
      },
    ],
  },

  /* --- Services --- */
  services: [
    {
      icon: "ri-layout-3-fill",
      title: "Web Development",
      description:
        "Custom web pages built with modern technologies and best practices. Fast, accessible, and production-ready.",
    },
    {
      icon: "ri-pantone-line",
      title: "UI / UX Design",
      description:
        "Clean, user-centered interface design crafted in Figma — for web apps and mobile applications.",
    },
    {
      icon: "ri-file-settings-fill",
      title: "API Development",
      description:
        "Scalable RESTful APIs using Java + Spring Boot or Node.js + Express. Solid, documented, and secure.",
    },
  ],

  /* --- Projects --- */
  projects: [
    {
      image: "./assets/project-img-1.jpg",
      category: "Web",
      title: "Modern Real Estate",
      url: "https://alqmst99.github.io/Real-State-BT/",
    },
    {
      image: "./assets/project-img-4.jpg",
      category: "Web",
      title: "Book Store",
      url: "https://alqmst99.github.io/Books/",
    },
    {
      image: "./assets/project-img-2.jpg",
      category: "Web",
      title: "Shoes Website",
      url: "https://alqmst99.github.io/Shoes-WebSite/",
    },
    {
      image: "./assets/project-img-3.jpg",
      category: "Web",
      title: "Gym Landing Page",
      url: "https://alqmst99.github.io/Landing-Gym/",
    },
    {
      image: "./assets/project-img-6.jpg",
      category: "Web",
      title: "Medical Care",
      url: "https://alqmst99.github.io/Medical-Care/",
    },
    {
      image: "./assets/project-img-4.jpg",
      category: "Web",
      title: "E-Commerce",
      url: "https://alqmst99.github.io/Clothes-comerce/",
    },
    {
      image: "./assets/project-img-5.jpg",
      category: "API",
      title: "E-Commerce API",
      url: "#",
    },
    {
      image: "./assets/project-img-6.jpg",
      category: "API",
      title: "Blogging API",
      url: "#",
    },
  ],

  /* --- Footer --- */
  footer: {
    copy: `© 2025 <a href="https://alqmst99.github.io/profesional-plan/index.html">FSTailSolution</a> · All rights reserved`,
  },
};
