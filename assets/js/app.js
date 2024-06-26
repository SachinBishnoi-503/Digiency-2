let menuicon = document.querySelector(".menubar");
let menulist = document.querySelector(".nav-items");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})

$(".parentslider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});