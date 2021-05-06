$(document).ready(function() {
    //Typing effect

    var i = 0;
    var txt = "I create and develop unique digital experiences through user-friendly websites.";
    var container = document.getElementById('typeEffect');

    function animate() {
        // Check existence
        if (typeof(container) != 'undefined' && container != null) {
            if (i < txt.length) {
                container.innerHTML += txt.charAt(i); // Iterate each character and increment
                i++;
                setTimeout(animate, 50)
            }
        } else {
            return false;
        }
    };
    animate();

    // Smooth scroll down

    $('#see-more').on('click', function() {
        const about = $('#about-wrapper').position().top //Get the  position

        $('html, body').animate({
            scrollTop: about
        }, 900);
    });

    //On click show slider

    $('.nav-icon').on('click', function() {
        $(this).hide();
        $('.nav-slider').css("width", "75vw");
        return false
    });

    //On click hide slider
    $('.btn-close').on('click', function() {
        $('.nav-icon').show();
        $('.nav-slider').css("width", "0vw");
        return false
    });

    // Scroll activated animation 
    var isScrolling = false

    window.addEventListener("scroll", throttleScroll, false); // Attach event handler to scrolling

    function throttleScroll(e) { // Throttle to 60fps
        if (isScrolling === false) {
            window.requestAnimationFrame(function() {
                scrolling(e); //
                isScrolling = false;
            })
        }
        isScrolling = true;
    }

    document.addEventListener('DOMContentLoaded', scrolling, false);

    var wrappers = document.querySelectorAll('.wrapper h3');

    function scrolling(e) {

        for (var i = 0; i < wrappers.length; i++) {
            var wrapper = wrappers[i]; // Store reference to list item
            if (isFullyVisibile(wrapper)) {
                wrapper.nextElementSibling.classList.add('fade');
            }
        }
    }

    function isFullyVisibile(el) {
        var elementBoundary = el.getBoundingClientRect();

        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;

        return ((top >= 0) && (window.innerHeight >= bottom));

    }
});