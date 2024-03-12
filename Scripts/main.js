/*==== SHOW MENU ====*/

const navMenu = document.getElementById('nav_menu'),
    navToggle =document.getElementById('nav_toggle'),
    navclose = document.getElementById('nav_close');

/*==== SHOW MENU EVENT ====*/
//validate if constant exists
if (navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show_menu');
    });
}

/*==== MENU HIDDEN ====*/
//validate if constant exists
if(navclose){
    navclose.addEventListener('click', ()=> {
        navMenu.classList.remove('show_menu');
    });
}
/*==== REMOVE MENU MOBILE ====*/
const navLink = document.querySelectorAll('.nav_link');

const linkAction= () =>{
    const navMenu= document.getElementById('nav_menu');
    //When we click on each nav_link, we remove show_menu class
    navMenu.classList.remove('show_menu');
};
navLink.forEach( n => n.addEventListener('click', linkAction));

/*==== BLUR HEADER ====*/

const blurHeader = ()=>{
    const header = document.getElementById('header');

    //when scroll is greater than 50 viewport heigth, add the scroo-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
  
}
window.addEventListener('scroll', blurHeader);

/*==== EMAIL JS ====*/
const contactForm= document.getElementById('contact_form'),
contactMessage=document.getElementById('contact_message');

const sendEmail =(e)=>{
    e.preventDefault()

    //serviceID- TemplateID - #form - PublicKey
    emailjs.sendForm('service_2zteo2z', 'template_tnwwdwi', '#contact_form','NKVB8UNxIF2ZmALsm')
    .then(() => {
        //Show sent message
       contactMessage.textContent ='SUCCESS!';
       console.log('message success');
       //Remove message
       setTimeout(()=>{
        contactMessage.textContent=''
       }, 5000);

       //clean input field
       contactForm.reset();
    }, (error) => {
        //Show Error message
        contactMessage.textContent ='Message not set (service error), check console';
        console.log(error);
    });
}

contactForm.addEventListener('submit', sendEmail);