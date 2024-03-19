/*################# Scroll Reveal Animations #################*/

const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    dealay: 400,
    //reset:true //animation repeat
})

sr.reveal('.home_data, .home_social, .contact_container');
sr.reveal('.services_card, .projects_card', {interval:100});


sr.reveal('.home_image', {origin: 'bottom'});


sr.reveal('.about_data, .skills_data', {origin: 'left'});


sr.reveal('.about_image, .skills_content', {origin: 'rigth'});
