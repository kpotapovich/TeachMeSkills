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
var profile = {name:"katia", surname:"chitnik", age: 24, faculty:"journalism"};
var template = {name:"kris", surname:"potapovich", age: 22, favoriteColor:"red"};
var passport = {name:"andrei", surname:"naruts", age: 20, residence:"minsk"};
var certificate = {name:"lusha", surname:"prokhorenko", patronymic:"Alexandrovich", age: 29,};
var data = [profile, template, passport, certificate];
console.log (data);