$(document).ready(function () {

    $('#destaque-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        margin: 10,
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
    $('#skills-carousel').owlCarousel({
        loop: false,
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
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    /*-----------------------------------
    * ONE PAGE SCROLLING
    *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    //Sections animate scroller
    const secoes = document.querySelectorAll('.secao');
    const alturaTela = window.innerHeight;

    const revelarSecoes = () => {
        secoes.forEach(secao => {
            const distanciaTopo = secao.getBoundingClientRect().top;
            distanciaTopo < alturaTela - 50
                ? secao.classList.add('scroll-revela')
                : secao.classList.remove('scroll-revela');
        });
    };

    window.addEventListener('load', () => revelarSecoes());
    window.addEventListener('scroll', () => revelarSecoes());

    let navToggle = document.getElementById('navbarNav');
    navToggle.addEventListener("click", () => {
        setTimeout(() => {
            navToggle.classList.remove('show');
        }, 2000);
    });

    //nodemailer
    const nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        host: "",
        port: 587,
        secure: false,
        auth: {
            user: "",
            pass: ""
        }
    });

    transporter.sendMail({
        from: "Matheus Goncalves <matheusdevnascimento@gmail.com>",
        to: "matheusgoncalvs@gmail.com",
        subject: "Olá, teste from nodemailer!",
        text: "Mensagem teste",
        html:""
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    });

});
