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
    speed: 2000, // 設置過渡速度為2000毫秒，與autoplay速度一致
    arrows: false,
    dots: false,
    cssEase: 'linear', // 使用線性平滑效果
    pauseOnHover: false
});

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
let currentSlide = 0;
const slides = document.querySelectorAll('.attraction_slider .slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.navigation .prev');
const nextButton = document.querySelector('.navigation .next');
const counter = document.querySelector('.navigation .counter');

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100 / 3}%)`;
    });
    counter.textContent = `${(currentSlide % totalSlides) + 1} / ${totalSlides}`;
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    updateSlide();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateSlide();
});

updateSlide();