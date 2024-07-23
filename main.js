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

// 信息區
// 示例：為 info_item 增加點擊效果以顯示更多信息
$(".info_item").click(function () {
    $(this).toggleClass("expanded");
});


// 新增圖片滑動區塊
// 圖片無限向右滑動
$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // 設置為0取消停頓時間
    speed: 2000, // 設置過渡速度為2000毫秒
    arrows: false,
    dots: false,
    cssEase: 'linear', // 使用線性平滑效果
    pauseOnHover: false
});

// 新增影片播放區塊

// 私人別墅宣傳
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $('.private_villa_section').each(function () {
        var topDistance = $(this).offset().top;
        if (topDistance < scrollTop + $(window).height() - 100) {
            $(this).fadeTo(1000, 1);
        }
    });
});

// 景點展示區塊滑動效果
$(document).ready(function () {
    var $slider = $('.attraction_slider');

    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.counter').text(i + ' / ' + slick.slideCount);
    });

    $slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        prevArrow: '<button class="slick-prev">＜</button>',
        nextArrow: '<button class="slick-next">＞</button>'
    });

    // 更新頁數計數器
    $slider.on('afterChange', function (event, slick, currentSlide) {
        $('.counter').text((currentSlide + 1) + ' / ' + slick.slideCount);
    });

    // 自訂導航按鈕
    $('.prev').click(function () {
        $slider.slick('slickPrev');
    });

    $('.next').click(function () {
        $slider.slick('slickNext');
    });
});

// 新增四季之美區域
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $('.seasons_beauty_section').each(function () {
        var topDistance = $(this).offset().top;
        if (topDistance < scrollTop + $(window).height() - 1) {
            $(this).fadeTo(100, 1);
        }
    });
});
