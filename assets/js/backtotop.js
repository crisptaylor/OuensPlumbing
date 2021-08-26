const backtotop = document.querySelector("#back-to-top");
window.addEventListener("scroll", scrollFunction);
function scrollFunction(){
    if (window.pageYOffset > 900) {
        backtotop.style.display = "block";
    }
    else {
        backtotop.style.display = "none";
    }
}