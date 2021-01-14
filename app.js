
const registBtn = document.querySelector('.registered__btn');
const btnClose = document.querySelector('.btn_close');

const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');


registBtn.onclick = function () {
    content1.classList.add('hidden');

    content2.classList.remove('hidden');
}

btnClose.onclick = function () {
    
    window.location.reload();
}

$(document).ready(function(){

    function checkPassword() {
        var password = $("#password").val();
        var confirmPassword = $("#confirm_pass").val();

        if (password != confirmPassword){
            $("#checkPassword").removeClass("hidden");
        }else if(confirmPassword == null){
            $("#checkPassword").addClass("hidden");
        }else {
            $("#checkPassword").addClass("hidden");
        }
        
    }

    $('#confirm_pass').change(checkPassword);

})



$(document).ready(function() {

    $('.signIn__btn').click(function() {
        $('#content3').removeClass('hidden')

        $('#content1').addClass('hidden')
    })

    $('.btn-Cnl').click(function() {

        window.location.reload();
    })
})














