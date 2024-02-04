
const tabs = document.querySelector(".about-tabs");
const aboutSection = document.querySelector('.about-section');
const navToggler = document.querySelector('.nav-togg');
tabs.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains('active')){
        tabs.querySelector('.active').classList.remove("active")
        e.target.classList.add("active")
        const result = e.target.getAttribute("data-target")
        aboutSection.querySelector(".tab-content.active").classList.remove("active")
        aboutSection.querySelector(result).classList.add("active")

    }
})

navToggler.addEventListener('click' , (e) => {
    hideSection();
    toggleNavBar();
    document.body.classList.toggle('hide-scrolling')
})

function toggleNavBar(){
    document.querySelector('.header').classList.toggle('active')
}

function hideSection(){
    document.querySelector('section.active').classList.toggle('fade-out');
}


/* Active Section*/

document.addEventListener('click' , (e) => {
    if(e.target.classList.contains('link-item') && e.target.hash !== ""){
        navToggler.classList.add('hide')
        if(e.target.classList.contains('nav-item')){
            toggleNavBar()
        }else{
            hideSection()
            document.body.classList.add('hide-scrolling');
        }

        setTimeout(() => {
            document.querySelector('section.active').classList.remove('active' , "fade-out")
            document.querySelector(e.target.hash).classList.add('active')
            window.scrollTo(0,0)
            document.body.classList.remove('hide-scrolling');
            navToggler.classList.remove('hide')

        },500)
    }
})

//End

document.addEventListener("click",(e) => {
    if(e.target.classList.contains("project-view")){
       togglePortfolioPopUp()
       document.querySelector('.portfolio-detail-popup').scrollTo(0,0)
       portfolioItemDetail(e.target.parentElement)
    }
})

function togglePortfolioPopUp(){
    document.querySelector('.portfolio-detail-popup').classList.toggle('open')
    document.body.classList.toggle('hide-scrolling')
    document.querySelector('.main').classList.toggle("fade-main")
}

document.querySelector('.popup-close').addEventListener('click', togglePortfolioPopUp)
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup-inner')){
        togglePortfolioPopUp()
    }
})
function portfolioItemDetail(portfolioItem){
    document.querySelector('.popup-thunbnail img').src = portfolioItem.querySelector('.porfolio-thumbnail img').src ;
    document.querySelector('.popup-header h3').innerHTML = portfolioItem.querySelector('.portfolio-title').innerHTML;

    document.querySelector('.popup-body').innerHTML = portfolioItem.querySelector('.portfolio-item-detail').innerHTML;
}