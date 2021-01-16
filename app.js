$(document).ready(function(){

    $('#registLink').click(function() {
        $('#registBlock').removeClass('hidden');
    })


    $('.btn-close').click(function (event) {
        location.reload(true);
    })


   


    
       
    


    




    // ///////check confirmation \\\\\\\\\ \\ 

    $('#gridCheck').change(function() {
        if (this.checked) {
            $('#submitRegist').removeAttr('disabled', 'disabled')
        }else {
            $('#submitRegist').attr('disabled', 'disabled')
        }
    })

/////   required verification form for registration
    $(function() {

        let $registrationForm = $('.registration-form'); 
        $.validator.addMethod("noSpace", function (value, elem) {
            return value == '' || value.trim().length != 0;
        }, "Spaces are not allowed")
      if($registrationForm.length) {

        $registrationForm.validate({
            rules: {
                username:{
                    required: true,
                    noSpace: true,
                    max: 50
                },
                email: {
                    required: true,
                    noSpace: true
                },
                password: {
                    required: true,
                    noSpace: true,
                    min: 3,
                    max: 16
                },
                confirmPassword: {
                    required: true,
                    noSpace: true,
                    equalTo: "#password"
                    },
                firstName: "required",
                Radio: "required"
              
            },
            messages:{
                username:{
                    required: "Invalid user name!"
                },
                email: {
                    required: "Invalid Email!"
                },
                password: {
                    required: "Invalid Password!"
                },
                confirmPassword: {
                    required: "Invalid Confirm Password!"
                },
                firstName: {
                    required: "Invalid First Name!"
                },
                Radio: {
                    required: "Invalid!"
                }

            }
            
        })

      }
     
    })
      
    
      









})





