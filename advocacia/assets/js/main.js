$(document).ready(function() {

    $('#badges-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 80000,
        autoplayHoverPause: true,
        margin: 50,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            800: {
                items: 7
            }
        }
    });
});