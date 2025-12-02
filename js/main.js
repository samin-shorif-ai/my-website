
/*------------------navigation menu-------------------------*/

(() =>{
    const hamburderBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu"),
    scrollBtn = document.querySelector('.scroll-up-btn');

    // console.log(hamburderBtn);
    hamburderBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);
    function showNavMenu(){
        navMenu.classList.add("open");
        // bodyScrollingToggle();
        scrollBtn.classList.add("close");
        document.body.style.overflow = 'hidden';
    }
    function hideNavMenu(){
        navMenu.classList.remove("open")
        fadeOutEffect();
        // bodyScrollingToggle();
        scrollBtn.classList.remove("close");
        document.body.style.overflow = 'visible';
    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300);
    }

    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('link-item')){
            hideNavMenu();
        }
    })

    setInterval(() => {
        var y = window.scrollY;
        var x = document.querySelector('header').clientWidth;
        // console.log(x)
        if (y >= 400) {
            hamburderBtn.classList.add("move");
        }
        else{
            hamburderBtn.classList.remove("move");
        }
        if (y >= 500) {
            hamburderBtn.classList.add("show");
        }
        else{
            hamburderBtn.classList.remove("show");
        }
    }, 100);


})();


/*---------------about section tabs----------------------*/
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event)=>{
        // if event.target contains 'tab-item' classs and not contains 'active' class
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            // console.log("all ok");
            const target = event.target.getAttribute("data-target")
            // console.log(target);
            // deactive existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // active new 'tab-item
            event.target.classList.add("active", "outer-shadow");
            // deactive existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // active new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();




window.addEventListener("load", () =>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 1200);
})

