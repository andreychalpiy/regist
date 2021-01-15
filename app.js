$(document).ready(function(){

    $('#registLink').click(function() {
        $('#registBlock').removeClass('hidden');
    })


    $('.btn-close').click(function () {
        location.reload(true);
    })

    

   


    $('#confirmPass').change(checkPassword);








    




    // ///////check confirmation \\\\\\\\\ \\ 

    $('#gridCheck').change(function() {
        if (this.checked) {
            $('#submitRegist').removeAttr('disabled', 'disabled')
        }else {
            $('#submitRegist').attr('disabled', 'disabled')
        }
    })

    
        
   


})


function checkPassword() {
    var password = $("#password").val();
    var confirmPassword = $("#confirmPass").val();

    if (password != confirmPassword){
       
        return  $(".alert-warning").removeClass("hidden");;
    }

    return $(".alert-warning").addClass("hidden");
}