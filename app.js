$(document).ready(function(){

    // let response = fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(function(response) {
    //     console.log(response);
    // })
    // console.log(response);


    $('.btn-close').click(function(){
        document.location.reload();
    })

    $('#resetForm').click(() => {
        document.location.reload();
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
    let $loginForm = $('#loginForm');
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
    $loginForm.validate({
        rules: {
            userName:{
                required: true,
                noSpace: true,
                rangelength: [1, 50],
            },
            password: {
                required: true,
                noSpace: true,
                rangelength: [3, 16]
            },
        }
    })
})





