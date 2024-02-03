
const tabs = document.querySelector(".about-tabs")
const aboutSection = document.querySelector('.about-section')

tabs.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains('active')){
        tabs.querySelector('.active').classList.remove("active")
        e.target.classList.add("active")
        const result = e.target.getAttribute("data-target")
        aboutSection.querySelector(".tab-content.active").classList.remove("active")
        aboutSection.querySelector(result).classList.add("active")

    }
})

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