var box = document.querySelector(".scroll-up-btn");
setInterval(() => {
    var y = window.scrollY;
    if (y >= 500) {
        box.classList.add("show");
    }
    else{
        box.classList.remove("show");
    }
}, 100);

function scrollToTop() {
    window.scrollTo(0, 0);
}
