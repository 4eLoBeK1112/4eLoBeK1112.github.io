document.addEventListener("DOMContentLoaded", ()=>{
    const year = document.getElementById("year")
    if (year) {
        year.textContent=new Date().getFullYear()
    }
    const sections = document.querySelectorAll("section[id], header[id]")
    const navlinks = document.querySelectorAll(".navbar-nav .nav-link")

    const setactive = ()=>{
        let curent = ""
        sections.forEach(section => {
            const top = section.offsetTop - 120
            if (window.scrollY >= top){
                curent = section.getAttribute("id")
            }
        })
        navlinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${curent}`)
        })
    }
    
    window.addEventListener("scroll", setactive)
    setactive()

    const navmenu = document.getElementById("navMenu")
    navlinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navmenu.classList.contains("show")){
                bootstrap.Collapse.getOrCreateInstance(navmenu).hide()
            }
        })
    })

})