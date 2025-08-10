// Rosewood Foundation JavaScript

$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Smooth scrolling for navigation links
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Header scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    // Parallax effect for home section
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('#home').css('background-position-y', -(scrollTop * 0.5) + 'px');
    });

    // Counter animation for impact section
    function animateCounter(element, target) {
        $({ Counter: 0 }).animate({ Counter: target }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $(element).text(Math.ceil(this.Counter));
            }
        });
    }

    // Trigger counter animation when impact section is in view
    var impactSection = $('#impact');
    var impactSectionTop = impactSection.offset().top;
    var windowHeight = $(window).height();
    var hasAnimated = false;

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (!hasAnimated && scrollTop > impactSectionTop - windowHeight + 200) {
            animateCounter('#jobs-created', 500);
            animateCounter('#trees-planted', 10000);
            animateCounter('#carbon-reduced', 1000);
            hasAnimated = true;
        }
    });

    // Form submission
    $('#join-form').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Here you would typically send this data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        // Show a success message
        Swal.fire({
            title: 'شكراً لك!',
            text: 'تم استلام رسالتك بنجاح. سنتواصل معك قريباً.',
            icon: 'success',
            confirmButtonText: 'حسناً'
        });

        // Clear the form
        this.reset();
    });

    // Typed.js effect for home section
    var typed = new Typed('#typed-text', {
        strings: ['نحو مستقبل أخضر', 'لبيئة مستدامة', 'لمصر أفضل'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Glide.js carousel for testimonials
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        breakpoints: {
            800: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    }).mount();
});