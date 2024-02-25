// Hero Swiper Bullet Data
const heroBulletData = [
  "AI서비스+서버리스",
  "임베디드-MCU",
  "Vue.js 로드맵",
  "백엔드 성능 개선",
  "Amazon EKS",
  "지금 할인중 💸",
  "Top 50 👑",
  "로드맵 🌱",
  "0원 취업교육 🔥",
  "왕초보 모여라 😎",
]

// Hero Swiper
const heroCurrentIndexEl = document.querySelector(".hero .current-index")
let heroSwiper = new Swiper('.hero .swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  autoplay: {
    disableOnInteraction: false,
    delay: 5000
  },

  navigation: {
    nextEl: '.hero-btn-next',
    prevEl: '.hero-btn-prev',
  },

  pagination: {
      el: '.hero .swiper-pagination-container .swiper-pagination',
      clickable: true,
      renderBullet: function (index) {
        return /* html */ `
          <span class="swiper-pagination-bullet hero-bullet hero-bullet${index+1}">${heroBulletData[index]}</span>
        `
      },
  },
});

// Hero More Swiper
let heroMoreSwiper = new Swiper(".hero .swiper", {
  loop: true,

  pagination: {
    el: '.hero .hero-more .swiper-pagination',
    clickable: true,
    renderBullet: function (index) {
      return /* html */ `
        <span class="swiper-pagination-bullet hero-bullet hero-bullet${index+1}">${heroBulletData[index]}</span>
      `
    },
  },
})

heroSwiper.controller.control = heroMoreSwiper
heroMoreSwiper.controller.control = heroSwiper

// Hero Swiper Player
const heroSwiperPlayerEl = document.querySelector(".hero .hero-btn-player")
const heroSwiperPlayerIconEl = heroSwiperPlayerEl.querySelector("i")
heroSwiperPlayerEl.addEventListener("click", () => {
  if(heroSwiperPlayerIconEl.classList.contains("fa-play")) {
    heroSwiperPlayerIconEl.classList.remove("fa-play")
    heroSwiperPlayerIconEl.classList.add("fa-pause")
    heroSwiper.autoplay.start();
  } else {
    heroSwiperPlayerIconEl.classList.add("fa-play")
    heroSwiperPlayerIconEl.classList.remove("fa-pause")
    heroSwiper.autoplay.stop();
  }
})

// Hero Swiper Pagination Bullet Slider
heroSwiper.on("slideChange", () => {
  var heroSwiperIndex = heroSwiper.realIndex + 1
  heroCurrentIndexEl.textContent = heroSwiperIndex

  const heroBulletContainerEl = document.querySelector(".hero .swiper-pagination-container .swiper-pagination")
  if(heroSwiperIndex === 1 || heroSwiperIndex === 2 || heroSwiperIndex === 3 || heroSwiperIndex === 4) {
    heroBulletContainerEl.style.transform = "translateX(0)"
  } else if(heroSwiperIndex === 5) {
    heroBulletContainerEl.style.transform = "translateX(-130px)"
  } else if(heroSwiperIndex === 6) {
    heroBulletContainerEl.style.transform = "translateX(-260px)"
  } else {
    heroBulletContainerEl.style.transform = "translateX(-340px)"
  }
})

// Hero More Toggler 
const heroToggleBtnEl = document.querySelector(".hero .hero-more-toggler")
const heroMoreEl = document.querySelector(".hero .hero-more")
const heroMoreHideBtnEl = heroMoreEl.querySelector('.hero-more-hide-btn')

heroToggleBtnEl.addEventListener("click", () => {
  heroToggleBtnEl.classList.toggle("active")
  heroMoreEl.classList.toggle("show")
})
heroMoreHideBtnEl.addEventListener("click", () => {
  heroToggleBtnEl.classList.remove("active")
  heroMoreEl.classList.remove("show")
})

// Move Scroll If Searching Input Focus
const searchingInputEl = document.querySelector(".searching .search input")
searchingInputEl.addEventListener("click", () => {
  window.scrollTo(0, 385)
})

// New Curation Swiper
let newCurationSwiper = new Swiper('.new-curation .new-curation__swiper', {
  direction: 'horizontal',
  slidesPerView: 12,
  slidesPerGroup: 11,
  slidesOffsetAfter: 56,

  navigation: {
    nextEl: '.new-curation__next-btn',
    prevEl: '.new-curation__prev-btn',
  },

  disabledClass: 'swiper-button-disabled',
});

// Free Course Swiper
let freeCourseSwiper = new Swiper(".free-course .free-course__swiper", {
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 6,
  slidesPerGroup: 5,

  navigation: {
    nextEl: '.free-course__next-btn',
    prevEl: '.free-course__prev-btn',
  },

  disabledClass: 'swiper-button-disabled',
})

// Welcome Course Swiper
let welcomeCourseSwiper = new Swiper (".welcome-course .welcome-course__swiper", {
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 6,
  slidesPerGroup: 5,

  navigation: {
    nextEl: '.welcome-course__next-btn',
    prevEl: '.welcome-course__prev-btn',
  },

  disabledClass: 'swiper-button-disabled',
})

// Roadmap Swiper
let roadmapSwiper = new Swiper (".roadmap .roadmap__swiper", {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,

  navigation: {
    nextEl: '.roadmap__next-btn',
    prevEl: '.roadmap__prev-btn',
  },

  disabledClass: 'swiper-button-disabled',
})

// New Course Swiper
let newCourseSwiper = new Swiper (".new-course .new-course__swiper", {
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 6,
  slidesPerGroup: 5,

  navigation: {
    nextEl: '.new-course__next-btn',
    prevEl: '.new-course__prev-btn',
  },

  disabledClass: 'swiper-button-disabled',
})

// Review Swiper
let reviewSwiper = new Swiper (".review__right .swiper", {
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  mousewheel: true,
  speed: 800,
})

// Banner Swiper
let bannerSwiper = new Swiper (".banner .banner__swiper", {
  direction: 'horizontal',
  slidesPerView: 1,

  navigation: {
    nextEl: '.banner .swiper-next-btn',
    prevEl: '.banner .swiper-prev-btn',
  },

  pagination: {
    el: '.banner .banner__pagination',
    clickable: true,
  },

  disabledClass: 'swiper-button-disabled',
})

// Chat Toggler
const chatTogglerEl = document.querySelector(".chat .chat__toggler")
const chatWindowEl = document.querySelector(".chat .chat__window")
chatTogglerEl.addEventListener("click", () => {
  chatTogglerEl.classList.toggle("show")
  chatWindowEl.classList.toggle("show")
})