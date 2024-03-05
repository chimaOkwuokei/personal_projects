let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

    //when navbar has been clicked i.e, any other icon is closed 
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active'); 
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active'); 
   navbar.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active'); 
 };

 document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
 };

 document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');  //on clicking X, close the box
 };

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active'); 
}

var swiper = new Swiper(".home-slider",{
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});