// banner part 
const banner = document.querySelector(".apu_banner")
let z = 0
// let the banner can slide 
// declare the list consist the src of banner img 
const banner_img_src = ['../img/banner_01.jpg', '../img/banner_02.jpg', '../img/banner_03.jpg', '../img/banner_04.png', '../img/banner_05.png']
// get the banner img 
const banner_img = document.querySelector(".apu_banner .banner img")
// select the prev and next button
const btnPrev = document.querySelector(".apu_banner .arrow .prev")
const btnNext = document.querySelector(".apu_banner .arrow .next")
// select all the span inside the indicator 
const indicators = document.querySelectorAll(".apu_banner .indicator span")


function toggle(event) {
    // to prevent website scroll to the top when changing the img src
    event.preventDefault();
    banner_img.src = banner_img_src[z]
    document.querySelector(".apu_banner .indicator .active").classList.remove("active")
    document.querySelector(`.apu_banner .indicator span:nth-child(${z + 1})`).classList.add("active")
}

btnNext.addEventListener('click', function (event) {
    z++
    if (z >= banner_img_src.length) {
        z = 0
    }
    toggle(event)
})

btnPrev.addEventListener('click', function (event) {
    z--
    if (z < 0) {
        z = 4
    }
    toggle(event)
})

for(let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', function(){
        const id = this.getAttribute('data-id')
        z = +id
        banner_img.src = banner_img_src[z]
        document.querySelector(".apu_banner .indicator .active").classList.remove("active")
        document.querySelector(`.apu_banner .indicator span:nth-child(${z + 1})`).classList.add("active")
    })
}


let timerId = setInterval(function () {
    btnNext.click()
}, 2000)

banner.addEventListener('mouseenter', function () {
    clearInterval(timerId)
})

banner.addEventListener('mouseleave', function () {
    timerId = setInterval(function () {
        btnNext.click()
    }, 2000)
})
// banner part 


// navigation bar when users scroll down below banner part navigation bar will fixed at the top part 
// get the navigation bar 
const navigation = document.querySelector(".navigation-bar")
// add the scroll down event to window 
window.addEventListener('scroll', function () {
    // get the scrollTop value 
    const scroll_distance = document.documentElement.scrollTop
    if (scroll_distance >= banner.offsetTop) {
        navigation.style.position = "fixed";
        navigation.style.top = "-10px";
        navigation.style.backgroundColor = "rgba(255,255,255,.9)";
    } else {
        navigation.style.position = "relative";
        navigation.style.top = "0";
    }
})

const program = document.querySelector('.program')
const lift = document.querySelector('.lift')
lift.addEventListener('click', function () {
    document.documentElement.scrollTop = "0"
})

window.addEventListener('scroll', function () {
    const scroll_distance = document.documentElement.scrollTop
    if (scroll_distance >= program.offsetTop) {
        lift.style.right = "45px";
    } else {
        lift.style.right = "-50px";
    }
})

// remove the active class of the nav and add it to the mouseenter a 
const nav = document.querySelectorAll('.navigation-bar .nav li a')
// get the first a 
const first_nav_a = document.querySelector('.navigation-bar .nav li:first-child a')
for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('mouseenter', function(){
        first_nav_a.classList.remove('active')
    })
    nav[i].addEventListener('mouseleave',function(){
        first_nav_a.classList.add('active')
    })
}

