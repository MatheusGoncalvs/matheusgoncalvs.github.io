$(document).ready(function() {

    $('#badges-carousel').owlCarousel({
        loop: false,
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
});