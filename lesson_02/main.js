var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
var bg = document.getElementById("bg");
burger.addEventListener("click", function () {
    var isCross = burger.classList.contains("cross");
    if (isCross){
        burger.classList.remove("cross");
        menu.classList.remove("visible");
        bg.classList.remove("visible");
} else {
        burger.classList.add("cross");
        menu.classList.add("visible");
        bg.classList.add("visible");
    }
});
$('.lead_cot').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,

});
