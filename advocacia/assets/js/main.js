$(document).ready(function() {

    $('#badges-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 80000,
        autoplayHoverPause: true,
        margin: 100,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            800: {
                items: 10
            },
            645: {
                items: 10
            },
            1000: {
                items: 10
            }
        }
    });
    $('#skills-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            645: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});