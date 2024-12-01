$(function() {

    'use strict';

    $('.fakeLoader').fakeLoader({

        timeToHide: 1200, //Time in milliseconds for fakeLoader disappear

        zIndex: "999", //Default zIndex

        spinner: "spinner3", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'

        bgColor: "#212121" //Hex, RGB or RGBA colors

    });

    

    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // // carousel resume
    // $('.owl-carousel').owlCarousel({
    //     items: 1,
    //     margin: 10
    // });

    // carousel resume
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        autoplay: true,           // Enables auto-swiping
        autoplayTimeout: 3000,    // Sets the delay to 3 seconds (3000 ms)
        autoplayHoverPause: true,  // Pauses autoplay on hover
       loop: true, // Enable looping of the carousel
    smartSpeed: 450 // Speed of the transition between items (optional)
    });
    
    // collapse show on resume
    $('.collapse-show').collapse();

    // // collapse show on resume
    // $('.collapse-show').collapse();

    // porfolio filterizr
    $('.filtr-container').imagesLoaded(function() {
        var filterizr = $('.filtr-container').filterizr();
    });

    // portfolio filter
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // portfolio magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var vScroll = $(this).scrollTop();

        if (vScroll > 100) {
            $(".navbar").addClass("fix");
        } else {
            $(".navbar").removeClass("fix");
        }

    });


});
// Initialize Typed.js
var typed = new Typed('#animated-text', {
    strings: ["WordPress Developer", "Frontend Developer",  "Freelancer", "Web Developer"],
    typeSpeed: 50,       // Speed of typing
    backSpeed: 30,       // Speed of backspacing
    backDelay: 1500,     // Pause before deleting
    startDelay: 500,     // Delay before starting
    loop: true           // Loop the animation
});



$('.nav-link ').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});





function SendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var fullName = document.getElementById("fullName").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email_id").value;
    var message = document.getElementById("message").value;

    // Email validation regex (simple version)
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if email is valid
    if (!emailRegex.test(email)) {
        document.getElementById("error-message").style.display = 'block'; // Show error message
        document.getElementById("success-message").style.display = 'none'; // Hide success message
        return; // Stop the function if email is invalid
    }

    // If phone number is empty or invalid, show error
    if (phone === "" || isNaN(phone)) {
        document.getElementById("error-message").style.display = 'block'; // Show error message
        document.getElementById("success-message").style.display = 'none'; // Hide success message
        return;
    }

    // Check if required fields are filled
    if (fullName === "" || phone === "" || email_id === "" || message === "") {
        document.getElementById("error-message").style.display = 'block'; // Show error message
        document.getElementById("success-message").style.display = 'none'; // Hide success message
        return;
    }

    // Parameters for emailjs
    var params = {
        from_name: fullName,
        first_name: fullName,
        phone: phone,
        subject: subject,
        email_id: email,
        message: message,
    };

    // Sending email using emailjs
    emailjs.send("service_p12dkli", "template_htueny5", params)
        .then(function (res) {
            // Show success message
            document.getElementById("success-message").style.display = 'block';
            document.getElementById("error-message").style.display = 'none'; // Hide error message
            
            // Optionally, hide the form after success
            document.getElementById("contact-form").reset();  // Reset the form
            document.getElementById("contact-form").style.display = 'none'; // Hide the form
        })
        .catch(function (err) {
            // Show error message if the email sending fails
            document.getElementById("error-message").style.display = 'block';
            document.getElementById("success-message").style.display = 'none'; // Hide success message
            console.log("Failed to send message: ", err);
        });
}
