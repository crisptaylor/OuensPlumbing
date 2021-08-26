const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".intro-section");

const sectionOneOptions = {
    rootMargin:"-220px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver (function(
    entries,
   sectionOneObserver
    ) {
       entries.forEach(entry => {
           if(!entry.isIntersecting) {
               nav.classList.add ("menu-scrolled");
               nav.classList.add("navbar-light");
               nav.classList.remove("gradient");
               nav.classList.remove("navbar-dark");
               
               
           } else {
               nav.classList.remove ("menu-scrolled");
               nav.classList.remove("navbar-light");
               nav.classList.add("gradient");
               nav.classList.add("navbar-dark");
               
           }

        });
    },
sectionOneOptions);

sectionOneObserver.observe(sectionOne);