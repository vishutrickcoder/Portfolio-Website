
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