$(".header__burger").click(function(){
    $(".menu__nav").addClass("active");
});
$(".close__burger,.main__information").click(function(){
    $(".menu__nav").removeClass("active");
});
$(".slider__projects").slick({
    prevArrow: '<div class="prev"><svg><use xlink:href="img/sprite.svg#prev"></use></svg> Пред</div>',
    nextArrow: '<div class="next">След <svg><use xlink:href="img/sprite.svg#next"></use></svg></div>',
});