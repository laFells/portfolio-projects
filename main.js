// // TOGLE ICON NAVBAR

// let menuIcon = document.querySelector('#menu-icon');
// let navBae = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-xmark')
//     navbar.classList.toggle('active')
// }


// //*_____________________ scrolll


// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () =>
// {
//     sections.forEach (sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach.apply(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a [href*-' + id + ']').classList.add('active');
//             });
//         };
//     });
// }


// // stick navbar 

// let header = document.querySelector('header');
// header.classList.toggle('sticky', window.scrollY > 100 );

// // remove toggle icon and navbar

// menuIcon.classList.remove('fa-xmark');
// navbar.classList.remove('active');

// // scroll view

// // ScrollReveal({
// //     distance: '80px',
// //     duration: 2000,
// //     delay: 200,
// // });

// ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'button'});
// ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
// ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

const typed = new Typed ('.text',{
    strings: ['Frontend Developer', 'Web Designer',],
    typedSpeed: 20,
    backSpeed:90,
    backDelay:100,
    loop:true,
});
