/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//nav
const navBar = document.getElementById("navbar__list")
// console.log(navBar)
// all section
const allSection = document.querySelectorAll("section")
//for good load
const goodLoad = document.createDocumentFragment();
/**
 * End Global Variables
 *  * Begin Main Functions
 * 
*/

// build the nav
allSection.forEach((Element) => {
    listNav = document.createElement("li");
    listNav.innerHTML = `<li>
    <a href= "#${Element.id}" data-nav="${Element.dataset.nav}" class="menu__link">${Element.dataset.nav}</a>
    </li>`
    listNav.addEventListener ("click", (event)=>{
        event.preventDefault();
        Element.scrollIntoView({behavior: "smooth"});
    })
    goodLoad.appendChild(listNav)
})
navBar.appendChild(goodLoad)

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll" , ()=> {
    for (section of allSection) {
        rect = section.getBoundingClientRect();
        if (rect.top > -100 && rect.top <300
            ) {
             section.classList.add("active-class");
                const allLinks = document.querySelectorAll("a")
                let  activeSection = section.getAttribute("data-nav")
                for (a of allLinks){
                    if (a.dataset.nav == activeSection){
                        a.classList.add("active")
                    }else{
                        a.classList.remove("active")
                    }
                }
            } else {
             section.classList.remove("active-class");
            } 
        }
    })
// go to up
let spanUp = document.querySelector(".up");
window.onscroll = function(){
    // console.log(this.scrollY)
    if (this.scrollY >= 800){
        spanUp.classList.add("showUp")
    }else {
        spanUp.classList.remove("showUp")
    }
};
spanUp.onclick = function(){
    window.scrollTo({
        top:0,
        behavior : "smooth"
    })
}

/**
 * End Main Functions
 * 
*/





