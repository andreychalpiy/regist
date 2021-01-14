
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

    $('.btn-cnl').click(function() {

        window.location.reload();
    })
})



// $('.selectPicker').selectpicker();

$(document).ready(function(){

    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
    removeItemButton: true,
    maxItemCount:5,
    searchResultLimit:5,
    renderChoiceLimit:5
    });
   
   
});



// ///////check confirmation \\\\\\\\\ \\ 


let checkBox = document.getElementById('checkbox');
let submit = document.getElementById('submit');

checkBox.onchange = function () {

    if(this.checked) {
        submit.removeAttribute('disabled', 'disabled');
    }else{
        submit.setAttribute('disabled', 'disabled');
    }

    
}





