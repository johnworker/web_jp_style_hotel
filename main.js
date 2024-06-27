// 選單效果
$(".menu_btn").click(function () {
    $(".menu_wrap").toggleClass("active");
    $(this).toggleClass("active");
});


// 滾動效果
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
        $('.header_load').css('background', 'rgba(0, 0, 0, 0)');
        $('.main_text').fadeOut(); // 當滾動時隱藏
    } else {
        $('.header_load').css('background', '#ffffff');
        $('.main_text').fadeIn(); // 當回到頂部時顯示
    }
});

// 圖片無限向右滑動
$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false
});
