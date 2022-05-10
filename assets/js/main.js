
// //////////////////////////////////////// //// //////////////////////////////////////// //// //////////////////////////////////////// //
//                                          //// //////////////////////////////////////// //// //////////////////////////////////////// //
// FUNCTIONS & METHODS //////////////////// //// //////////////////////////////////////// //// //////////////////////////////////////// //
//                                          //// //////////////////////////////////////// //// //////////////////////////////////////// //
// //////////////////////////////////////// //// //////////////////////////////////////// //// //////////////////////////////////////// //


// ELEMENT IN VIEWPORT CHECK                //// //////////////////////////////////////// //
// //////////////////////////////////////// //

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom < viewportBottom && elementTop > viewportTop;
};


// SCROLL DISABLE & ENABLE                  //// //////////////////////////////////////// //
// //////////////////////////////////////// //

var scrollTopPosition = 0;

function scroll_pause(){
    scrollTopPosition = $(window).scrollTop();
    $("body").addClass("no-scroll").css({"top":-1*scrollTopPosition+"px"});
}

function scroll_resume(){
    $("body").removeClass("no-scroll").removeAttr("style");
    $(window).scrollTop(scrollTopPosition);
}


// COUNT UP                                 //// //////////////////////////////////////// //
// //////////////////////////////////////// //

var timers = [];

function count(element, startValue, endValue, duration, htmlContent) {
    var countEl = document.querySelector(element);
    var x = startValue;
    var y = endValue;
    var step = Math.round((endValue - startValue) / 100); 
    var interval = duration / 100;
    if( htmlContent === undefined || htmlContent === null ) {
        htmlContent = ''
    }

    function addNum() {
        countEl.innerHTML = htmlContent + x.toLocaleString('nl-EU'); 
        x += step;
        if (x > y) {
            clearInterval(timers);
            countEl.innerHTML = htmlContent + endValue.toLocaleString('nl-EU');
        }
    }

    function subtractNum() {
        countEl.innerHTML = htmlContent + x.toLocaleString('nl-EU'); 
        x += step;
        if (x < y) {
            clearInterval(timers);
            countEl.innerHTML = htmlContent + endValue.toLocaleString('nl-EU');
        }
    }

    if( startValue < endValue ) {
        timers.push(window.setInterval(addNum, interval));
    }
    else if( startValue > endValue ) {
        timers.push(window.setInterval(subtractNum, interval));
    }

}


// //////////////////////////////////////// //// //////////////////////////////////////// //// //////////////////////////////////////// //
//                                          //// //////////////////////////////////////// //// //////////////////////////////////////// //
// MAIN /////////////////////////////////// //// //////////////////////////////////////// //// //////////////////////////////////////// //
//                                          //// //////////////////////////////////////// //// //////////////////////////////////////// //
// //////////////////////////////////////// //// //////////////////////////////////////// //// //////////////////////////////////////// //



// //////////////////////////////////////// //
//                                          //
// HEADER & MENU ////////////////////////// //
//                                          //
// //////////////////////////////////////// //


// HEADER

$(function() {

    var lastScrollPos = 0;

    $(window).on('scroll load', function() {

        if ( $(window).scrollTop() > lastScrollPos && $(window).scrollTop() > 10 ) {
            $('.header').addClass('active')
            $('.menu-button').addClass('hidden')
        } else {
            $('.header').removeClass('active')
            $('.menu-button').removeClass('hidden')
        }

        lastScrollPos = $(window).scrollTop()

    })
})


// MENU

$(function() {
    $('.menu-button').click(function() {
        if ( !$(this).hasClass('active') ) {

            scroll_pause();

            $(this).addClass('active');
            $('.menu').fadeIn(200);
            $('.menu .nav-content').delay(150).addClass('active');

        } else if ( $(this).hasClass('active') ) {

            scroll_resume();

            $(this).removeClass('active');
            $('.menu').fadeOut(200);
            $('.menu .nav-content').removeClass('active');

        }
    })
})


// //////////////////////////////////////// //
//                                          //
// COOKIES & USER TRACKING //////////////// //
//                                          //
// //////////////////////////////////////// //


// Cookie Consent 
if( !localStorage.getItem('cookie consent') ) {
    $(function() {
        $('#cookie-banner').fadeIn();
    })
}

$(function() {
    $('#cookie-consent').click(function() {
        $('#cookie-banner').fadeOut();
        localStorage.setItem('cookie consent', true);
    });
})


// //////////////////////////////////////// //
//                                          //
// PAGE LOADING /////////////////////////// //
//                                          //
// //////////////////////////////////////// //


// ON LOGO CLICK

$(function() {
    $('#logo').click(function() {
        $('.load-layover').fadeIn(175);

        setTimeout(() => {
            window.location.href = 'energie-vergelijken';
        }, 250);
    })
})


// ON ANCHOR CLICK / URL CHANGE

$(function() {
    $('a').click(function(e) {
        e.preventDefault();
        $(this).blur();

        $('.load-layover').fadeIn(175);

        setTimeout(() => {
            window.location.href = $(this).attr('href');
        }, 250);
    })
})


// SELECTED LINK

$(function() {

    if ( window.location.href.indexOf("zonne-energie") > -1 ) {
        $('.nav .nav-link[href="zonne-energie"]').addClass('active');
    }

    if ( window.location.href.indexOf("gratis-advies") > -1 ) {
        $('.nav .nav-link[href="gratis-advies"]').addClass('active');
    }

    if ( window.location.href.indexOf("over-ons") > -1 ) {
        $('.nav .nav-link[href="over-ons"]').addClass('active');
    }

    if ( window.location.href.indexOf("energie-vergelijken") > -1 ) {
        $('.nav .nav-link[href="energie-vergelijken"]').addClass('active');
    }

})


// ON PAGE LOAD 

$(function() {
    $('.load-layover').delay(250).fadeOut(175);
})


// MAKE SUBMIT FOCUSABLE

$(function() {
    $('.submit').each(function() {
        $(this).attr('tabindex', '0');
    })
})


// //////////////////////////////////////// //
//                                          //
// CALCULATOR/SLIDER ////////////////////// //
//                                          //
// //////////////////////////////////////// //


$(function() {

    var zonnepanelen_input = $('#calculation-input');
    var zonnepanelen_output = $('#output-panelen span');

    var opwekking_output = '#output-opwekking .output b';
    var verduurzaming_output = '#output-verduurzaming .output b';
    var rendement_output = '#output-rendement .output b';

    var countDuration = 300;

    // Opbrengsten Paneel in 5 jaar
    var energie_prijs = 0.34; // €
    var opwekking_per_paneel = 1750; //KwH
    var verduurzaming_per_paneel = 956; //Kg Co2
    var rendement_per_paneel = opwekking_per_paneel * energie_prijs; // €

    zonnepanelen_input.on('input', function() {

        zonnepanelen_output.html(zonnepanelen_input.val());

        var opwekking_old_value = parseInt($(opwekking_output).html().replace('.', ''));
        var verduurzaming_old_value = parseInt($(verduurzaming_output).html().replace('.', ''));
        var rendement_old_value = parseInt($(rendement_output).html().replace('.', ''));

        // Berekening
        var opwekking_value = opwekking_per_paneel * zonnepanelen_input.val();
        var verduurzaming_value = verduurzaming_per_paneel * zonnepanelen_input.val();
        var rendement_value = rendement_per_paneel * zonnepanelen_input.val();

        if(timers.length > 0){
            for(let i = 0; i< timers.length;i++){
                clearInterval(timers[i]);
            }
        }

        count(opwekking_output, opwekking_old_value, opwekking_value, countDuration);
        count(verduurzaming_output, verduurzaming_old_value, verduurzaming_value, countDuration);
        count(rendement_output, rendement_old_value, rendement_value, countDuration);
    })

    var opwekking_value = opwekking_per_paneel * zonnepanelen_input.val();
    var verduurzaming_value = verduurzaming_per_paneel * zonnepanelen_input.val();
    var rendement_value = rendement_per_paneel * zonnepanelen_input.val();

    $(opwekking_output).html(opwekking_value.toLocaleString('nl-EU'));
    $(verduurzaming_output).html(verduurzaming_value.toLocaleString('nl-EU'));
    $(rendement_output).html(rendement_value.toLocaleString('nl-EU'));

})


// //////////////////////////////////////// //
//                                          //
// CWT COUNT UP /////////////////////////// //
//                                          //
// //////////////////////////////////////// //


$(function() {
    
    if ($('.cwt-animation').length) {

        $.first_time =true;

        var output = '.cwt-animation b';
        var animation_duration = 1000;
        var start = 0;
        var end = 21732;
        var content = "€"
        
        $(window).on('scroll load', function() {
            
            if( $('.cwt-animation').isInViewport() == true && $.first_time == true ) {
                
                $('.cwt-animation-outline-one').css('animation', `rotate-right ${animation_duration / 2}ms infinite ease-in-out`);
                $('.cwt-animation-outline-two').css('animation', `rotate-left-mirror ${animation_duration / 2}ms infinite ease-in-out`);

                count(output, start, end, animation_duration, content)

                setTimeout(() => {
                    $('.cwt-animation-outline-one').css('animation', 'none');
                    $('.cwt-animation-outline-two').css('animation', 'none');
                }, animation_duration);

                $.first_time = false;
            
            }
        })
    
    }

})