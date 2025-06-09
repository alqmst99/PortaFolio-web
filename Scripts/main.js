/*==== SHOW MENU ====*/

const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav_toggle"),
  navclose = document.getElementById("nav_close");

/*==== SHOW MENU EVENT ====*/
//validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

/*==== MENU HIDDEN ====*/
//validate if constant exists
if (navclose) {
  navclose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}
/*==== REMOVE MENU MOBILE ====*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav_menu");
  //When we click on each nav_link, we remove show_menu class
  navMenu.classList.remove("show_menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==== BLUR HEADER ====*/

const blurHeader = () => {
  const header = document.getElementById("header");

  //when scroll is greater than 50 viewport heigth, add the scroo-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*==== EMAIL JS ====*/
const contactForm = document.getElementById("contact_form"),
  contactMessage = document.getElementById("contact_message");

const sendEmail = (e) => {
  e.preventDefault();
//create account in emailjs and complete the fields
  //serviceID- TemplateID - #form - PublicKey
  emailjs
    .sendForm(
      "service_code",
      "template_code",
      "#contact_form",
      "publickey"
    )
    .then(
      () => {
        //Show sent message
        contactMessage.textContent = "SUCCESS!";
        console.log("message success");
        //Remove message
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //clean input field
        contactForm.reset();
      },
      (error) => {
        //Show Error message
        contactMessage.textContent =
          "Message not set (service error), check console";
        console.log(error);
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

//ScrollUP
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //When the scroll is higher than 350 viewport height, add show scroll class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*SCROLL SECTION ACTIVE*/

const sections = document.querySelectorAll("section[id]");

const scrollactive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((c) => {
    const sectionHeight = c.offsetHeight,
      sectionTop = c.offsetTop - 58,
      sectionId = c.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );
    console.log(c);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollactive);
