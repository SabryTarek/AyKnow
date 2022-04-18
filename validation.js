
$(document).ready(function() {

    $("#myform").submit(function(e){
        e.preventDefault();

        var error = false;
        
        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var choice=document.querySelector('input[name="choice"]:checked').value;
        var books_choice=document.querySelector('input[name="books-choice"]:checked').value;
        var target_choice=document.querySelector('input[name="target-choice"]:checked').value;
        
        var formURL = $('#myform').attr('action');

        var postData = { userName : name ,
                            phoneNumber : phone,
                            emailAddress : email,
                            firstChoice : choice,
                            secondChoice : books_choice,
                            thirdChoice : target_choice
        }

        $.ajax({
            type:'POST',
            method: 'POST',
            url: formURL,
            data: JSON.stringify(postData),
            success: function (data, responseText) {
                $('input[type="text"]').val('');
                $('input[type="email"]').val('');
                $('input[type="radio"]').prop('checked', false);
            },
            /*complete: function() {
                alert('com');
            },*/
            // error: function (xhr, status, error) {
            //     console.log(xhr);
            //     console.log(status);
            //     console.log(error);
            // }
        });
        if ($('#finishing-modal').is(":visible")){
            $('#finishing-modal').modal('hide');
        }
    });
    $(".next").click(function(){
        var form = $("#myform");
        form.validate({
            errorElement: 'span',
            errorClass: 'help-block',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').addClass("has-error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass("has-error");
            },
            rules: {
                phone: {
                    required: true,
                },
                name: {
                    required: true,
                    minlength: 4,
                },
                email: {
                    required: true,
                    minlength: 10,
                }
            },
            messages: {
                phone: {
                    required: "phone required",
                },
                name: {
                    required: "Name required",
                },
                email: {
                    required: "Email required",
                },
            }
        });
        if (form.valid() === true){
            if ($('#infoModal').is(":visible")){
                current_fs = $('#infoModal');
                next_fs = $('#thanking-modal');
            }else if($('#thanking-modal').is(":visible")){
                current_fs = $('#thanking-modal');
                next_fs = $('#Q1-modal');
            }else if($('#Q1-modal').is(":visible")){
                current_fs = $('#Q1-modal');
                next_fs = $('#Q2-modal');
            }
            else if($('#Q2-modal').is(":visible")){
                current_fs = $('#Q2-modal');
                next_fs = $('#Q3-modal');
            }
            else if($('#Q3-modal').is(":visible")){
                current_fs = $('#Q3-modal');
                next_fs = $('#finishing-modal');
            }
            next_fs.modal('show');
            current_fs.modal('hide');
        }
    });
});