$(window).scroll(function (){
    const scroll=$(window).scrollTop();
    console.log(scroll);
    if(scroll>=45){
        $(".header").addClass('scroll');
    }
    else if(scroll<45)
        $(".header").removeClass('scroll');
    if(scroll>=1400){
        $(".staging__item").addClass('active');
    }
    else if(scroll<=917)
        $(".staging__item").removeClass('active');
});
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