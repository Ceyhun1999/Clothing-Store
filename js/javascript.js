
const hamb = document.querySelector(".hamb");
const navMenu = document.querySelector(".nav__menu");

hamb.addEventListener("click", () => {
    hamb.classList.toggle("active")
    navMenu.classList.toggle("active");
})

const navLink = document.querySelectorAll(".nav__menu-link");

navLink.forEach((item) => {
    item.addEventListener("click", closeMenu)
})

function closeMenu() {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
}

new Swiper('.swiper',{
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
    },
    grabCursor:true,
    slidesPerView: 2.5,
    spaceBetween: 65,
    loop: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: true,
        disableOnInteraction: true,
    },
    speed: 800,
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 2.5,
        },
    },on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }}
})

new Swiper('.swiper2',{
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
    },
    grabCursor:true,
    slidesPerView: 1.5,
    spaceBetween: 65,
    loop: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: true,
        disableOnInteraction: true,
    },
    speed: 800,
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1.5,
        },
    },on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }}
})


