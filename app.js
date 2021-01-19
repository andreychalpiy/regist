$(document).ready(function(){

    $('#registLink').click(function() {
        $('#registBlock').removeClass('hidden');

        $('.main-content').addClass('hidden');
    })

    $('.btn-close').click(function(){
        document.location.reload();
    })
  
    $("#mainContentImg > img").each(function(i, elem) {
        $(elem).click(function() {
    
            $("#mainContentImg > img").removeClass('active')
    
            $(this).addClass('active')
            
        })
    })

    $('.date').mask();
    
    $('#multi').multipleSelect()
    
    // ///////check confirmation \\\\\\\\\ \\ 

    $('#confirmCheck').change(function() {
        if (this.checked) {
            $('#submitRegist').removeAttr('disabled', 'disabled')
        }else {
            $('#submitRegist').attr('disabled', 'disabled')
        }
    })

/////   required verification form for registration
    
    let $registrationForm = $('.registration-form'); 
    $.validator.addMethod("noSpace", function (value, elem) {
        return value == '' || value.trim().length != 0;
    }, "Spaces are not allowed")
    $registrationForm.validate({
        rules: {
            userName:{
                required: true,
                noSpace: true,
                rangelength: [1, 50],
            },
            email: {
                required: true,
                noSpace: true
            },
            password: {
                required: true,
                noSpace: true,
                rangelength: [3, 16]
            },
            confirmPassword: {
                required: true,
                noSpace: true,
                maxlength: 16,
                equalTo: "#password"
            },
            firstName: {
                required: true,
                maxlength: 50,
                noSpace: true
            },
            lastName: {
                maxlength: 50
            },
            radio: "required",
            date: {
                dateITA: true
            }
            
        }
    })

})





