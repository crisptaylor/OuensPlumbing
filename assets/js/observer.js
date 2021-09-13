const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".intro-section");
const fader = document.querySelectorAll(".fade-in");
const slider = document.querySelectorAll(".slide-in");
const sectionOneOptions = {
    rootMargin:"-220px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver (function(
    entries,
   _sectionOneObserver
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

const appearoptions = {
threshold:0,
rootMargin:"0px 0px -100px 0px",
};
//NEW OBSERVER
const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
    ) {
        entries.forEach(entry=> {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearoptions);
fader.forEach(fader => {
    appearOnScroll.observe(fader);
});
slider.forEach(slider => {
    appearOnScroll.observe(slider);
});