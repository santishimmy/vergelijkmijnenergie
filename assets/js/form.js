
// STORING FORM VALUES LOCALLY //////////////////////
// //////////////////////////////////////////////////

$(function() {
    $('.submit').click(function() { 
        
            var postcode = "";
            var huisnummer = "";
            var toevoeging = "";

            if ( $('#zip').length > 0 ) {
                postcode = $('#zip').val();
            }
            if ($('#housenumber').length > 0 ) {
                huisnummer = $('#housenumber').val();
            }
            if ( $('#addition').length > 0 ) {
                toevoeging = $('#addition').val();
            } 

            localStorage.setItem('postcode', postcode)
            localStorage.setItem('huisnummer', huisnummer)
            localStorage.setItem('toevoeging', toevoeging)
            
            localStorage.setItem('skip-first-step-form', true)

    })
    
    setTimeout(() => {
        if(localStorage.getItem("postcode") != null ){
            $('.formzip').val(localStorage.getItem('postcode'));
        }

        if(localStorage.getItem("huisnummer") != null ){
            $('.formhousenumber').val(localStorage.getItem('huisnummer'));
        }

        if(localStorage.getItem("toevoeging") != null ){
            $('.formaddition').val(localStorage.getItem('toevoeging'));
        }
        
        
    }, 250);
    
})



// VALIDATION FUNCTIONS //
// //////////////////// //


function validateInput(input, input_match) {
    if( $(input).val().match(input_match) ) {
        $(input).css('border-color', 'var(--quartiary-color)');
        $(input).parent().find('.error-msg').fadeOut(300);
    } else {
        $(input).css('border-color', '');
    }
}

function validateLength(input, length) {
    if( $(input).val().length > length ) {
        $(input).css('border-color', 'var(--quartiary-color)');
        $(input).parent().find('.error-msg').fadeOut(300);
    } else {
        $(input).css('border-color', '');
    }
}

function validateCheckbox(checkbox) {
    if( $(checkbox).is(':checked') ) {
        $(checkbox).parent().parent().find('.error-msg').fadeOut(300);
    }
}


// START FORM //
// ////////// //


$(function() {
    if (localStorage.getItem('skip-first-step-form')) {
        $('.form-begin').hide();
        $('.form-end').show();
        localStorage.removeItem('skip-first-step-form')
    } else {
        $('.form-end').hide();
    }
})

$(function() {

    var postcode_regex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
    var huisnummer_regex = /[0-9]{1}/


    // Submit Handle
    // /////////////

    $('.start-form .submit').click(function() {
        $(this).blur();
        if ( 
            $(this).parent().find('#zip').val().match(postcode_regex) && 
            $(this).parent().find('#housenumber').val().match(huisnummer_regex) 
        ) {

            $('.load-layover').fadeIn(175);
            setTimeout(() => {
                window.location.href = 'gratis-advies'
            }, 1000);

            
        } else {
            
            if ( !$(this).parent().find('#zip').val().match(postcode_regex) ) {
                $(this).parent().find('#zip').css('border-color', '#FF4848');
            }

            if ( !$(this).parent().find('#housenumber').val().match(huisnummer_regex) ) {
                $(this).parent().find('#housenumber').css('border-color', '#FF4848');
            }

        }
    })


    // Handling Key Up & Blur 
    // //////////////////////

    $('.formbox #zip').on('blur', function() {
        validateInput(this, postcode_regex)
    })

    $('.formbox #zip').on('keyup', function() {
        validateInput(this, postcode_regex)
    })

    $('.formbox #housenumber').on('blur', function() {
        validateInput(this, huisnummer_regex)
    })

    $('.formbox #housenumber').on('keyup', function() {
        validateInput(this, huisnummer_regex)
    })

})


// FULL FORM BEGIN //
// /////////////// //


$(function() {

    var postcode_regex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
    var huisnummer_regex = /[0-9]{1}/


    // Submit Handle
    // /////////////

    $('#next-step-button').click(function() {
        $(this).blur();
        if ( 
            $(this).parent().find('#zip').val().match(postcode_regex) && 
            $(this).parent().find('#housenumber').val().match(huisnummer_regex)
        ) {

            $('.form-begin').fadeOut(350);
            $('.form-end').delay(350).fadeIn(350);

            
        } else {
            
            if ( !$(this).parent().find('#zip').val().match(postcode_regex) ) {
                $(this).parent().find('#zip').css('border-color', '#FF4848');
            }

            if ( !$(this).parent().find('#housenumber').val().match(huisnummer_regex) ) {
                $(this).parent().find('#housenumber').css('border-color', '#FF4848');
            }

        }
    })


    // Handling Key Up & Blur 
    // //////////////////////

    $('.form #zip').on('blur', function() {
        validateInput(this, postcode_regex)
    })

    $('.form #zip').on('keyup', function() {
        validateInput(this, postcode_regex)
    })

    $('.form #housenumber').on('blur', function() {
        validateInput(this, huisnummer_regex)
    })

    $('.form #housenumber').on('keyup', function() {
        validateInput(this, huisnummer_regex)
    })

})


// FINAL FORM SUBMIT //
// ///////////////// //


function validateForm() {

    var telefoonnummer_regex = /^\(?([+]31|0031|0)-?6(\s?|-)([0-9]\s{0,3}){8}$/;
    var email_regex = /^\S+@\S+\.\S+$/;


    // Submit Handle
    // /////////////

    $('#submit-form-button').click(function() {

        if ( 
            $('#usage').val().length > 0 &&
            $('#name').val().length > 0 &&
            $('#phone').val().match(telefoonnummer_regex) &&
            $('#mail').val().match(email_regex) &&
            $('#opt-in').is(':checked')
        ) {

            $('.form-end').fadeOut(500);
            $('form').submit();
        
        } else {

            if ( !$('#usage').val().length > 0 ) {
                $('#usage').css('border-color', '#FF4848');
            }

            if ( !$('#name').val().length > 0 ) {
                $('#name').css('border-color', '#FF4848');
            }

            if ( !$('#phone').val().match(telefoonnummer_regex) ) {
                $('#phone').css('border-color', '#FF4848');
            }

            if ( !$('#mail').val().match(email_regex) ) {
                $('#mail').css('border-color', '#FF4848');
            }

            if ( !$('#opt-in').is(':checked') ) {
                $('#opt-in').parent().parent().find('.error-msg').fadeIn(300);
            }

        }
    })


    // Handling Key Up & Blur 
    // //////////////////////

    $('#usage').on('blur', function() {
        validateLength(this, 0)
    })

    $('#usage').on('keyup', function() {
        validateLength(this, 0)
    })

    $('#name').on('blur', function() {
        validateLength(this, 0)
    })

    $('#name').on('keyup', function() {
        validateLength(this, 0)
    })

    $('#phone').on('blur', function() {
        validateInput(this, telefoonnummer_regex)
    })

    $('#phone').on('keyup', function() {
        validateInput(this, telefoonnummer_regex)
    })

    $('#mail').on('blur', function() {
        validateInput(this, email_regex)
    })

    $('#mail').on('keyup', function() {
        validateInput(this, email_regex)
    })

    $('#opt-in').on('change',function() {
        validateCheckbox(this)
    })

}


// FORM DATA SUBMIT & STORE //
// //////////////////////// //


function storeData(event) {
    event.preventDefault()
    const url = 'https://portal.vergelijkmijnenergie.nl/api/form'
    const formData = new FormData(event.target)
    formData.forEach((value, key) => data[key] = value);

    return data;

}

function sendData(data) {

    tries++
    const url = 'https://portal.vergelijkmijnenergie.nl/api/form'
    const jsonData = JSON.stringify(data);

    const jsonObj = {"url":"https://vergelijkmijnenergie.nl", "data": jsonData}
    
    if(localStorage.getItem('hash')){
        var user_hash = localStorage.getItem('hash');
        jsonObj.hash = user_hash       
    }

    var source = window.location.pathname
    var page_source = window.location.href;
    jsonObj.source = page_source

    $.ajax({
        type: "POST",
        url: url,
        data: jsonObj,
        success: successHandler,
        error: successHandler,
        fail: successHandler,
        
        dataType: "json"
    });
    
    function successHandler(data){
        if ( !localStorage.getItem('hash') && tries  <= 1 && data.status == "ok" ) {
            localStorage.setItem('hash', data.hash);
        }

        if ( data.status == 400 ) {
           
            if ( data.responseJSON.message.indexOf('hash') > 0 ) {
                localStorage.removeItem('hash');

                if ( tries < 2 ) {
                    
                }

                setTimeout(function(){
                    tries++;
                    $('form').submit();
                }, 750);
                
                if ( tries > 2 ) {
                    $('#failure-msg').delay(500).fadeIn(500);   
                }
            }
        } if ( data.status == 'ok' ) {
            window.location.href = 'bedankt';
            // $('#confirmation-msg').delay(500).fadeIn(500);
        } else {
            $('#failure-msg').delay(500).fadeIn(500);   
        }
        
    }

}

var tries = 0;
var data = {};

$(function() {
    validateForm();
})

$(function() {
    $('form').on('submit', function(e) {
        storeData(e)
    })

    $('.form-end').on('submit', function(e) {
        sendData(storeData(e))
    })
})