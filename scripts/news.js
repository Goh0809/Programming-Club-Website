const page_nav = document.querySelector('.page_nav .wrapper ul')
const news_list = document.querySelectorAll('.latest_news .latest_news_bp>div')
page_nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        const i = +e.target.dataset.id
        document.querySelector('.latest_news .latest_news_bp .active').classList.remove('active')
        news_list[i].classList.add('active')
        document.querySelector('.page_nav wrapper ul .active').classList.remove('active')
        e.classList.add('active')
    }
})

const navigation = document.querySelector(".navigation-bar")
const top_news = document.querySelector(".top_news")
// add the scroll down event to window 
window.addEventListener('scroll', function () {
    // get the scrollTop value 
    const scroll_distance = document.documentElement.scrollTop
    if (scroll_distance >= top_news.offsetTop) {
        navigation.style.position = "fixed";
        navigation.style.top = "-10px";
        navigation.style.backgroundColor = "rgba(255,255,255,.9)";
    } else {
        navigation.style.position = "relative";
        navigation.style.top = "0";
    }
})