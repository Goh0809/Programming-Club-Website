const nav = document.querySelectorAll('.navigation-bar .nav li a')
// get the first a 
const fourth_nav_a = document.querySelector('.navigation-bar .nav li:nth-child(4) a')
for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('mouseenter', function () {
        fourth_nav_a.classList.remove('active')
    })
    nav[i].addEventListener('mouseleave', function () {
        fourth_nav_a.classList.add('active')
    })
}

const program_header_img = document.querySelector(".program_header_img")
const navigation = document.querySelector(".navigation-bar")
// add the scroll down event to window 
window.addEventListener('scroll', function () {
    // get the scrollTop value 
    const scroll_distance = document.documentElement.scrollTop
    if (scroll_distance >= program_header_img.offsetTop) {
        navigation.style.position = "fixed";
        navigation.style.top = "-10px";
        navigation.style.backgroundColor = "rgba(255,255,255,.9)";
    } else {
        navigation.style.position = "relative";
        navigation.style.top = "0";
    }
})

const lift = document.querySelector('.lift')
lift.addEventListener('click', function () {
    document.documentElement.scrollTop = "0"
})

window.addEventListener('scroll', function () {
    const scroll_distance = document.documentElement.scrollTop
    if (scroll_distance >= 500) {
        lift.style.right = "45px";
    } else {
        lift.style.right = "-50px";
    }
})