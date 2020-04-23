$(document).ready(function () {
    $('#destaque-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            645: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});