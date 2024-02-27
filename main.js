let search = document.querySelector('.Search-Box')
document.querySelector('#search-icon').onclick =() =>{
search.classList.toggle('active')
Cart.classList.remove('active')
User.classList.remove('active')
}
let Cart = document.querySelector('.Cart')
document.querySelector('#cart-icon').onclick =() =>{
Cart.classList.toggle('active')
search.classList.remove('active')
User.classList.remove('active')
}
let User = document.querySelector('.User')
document.querySelector('#user-icon').onclick =() =>{
User.classList.toggle('active')
search.classList.remove('active')
Cart.classList.remove('active')
}


//   swiper
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints:{
    0:{
    slidesPerView:0,
    },
    568:{
    slidesPerView:2,
    },
    768:{
    slidesPerView:2
    },
    1020:{
    slidesPerView:3
    },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});