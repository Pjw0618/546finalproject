(function($) {
    const theForm = $("#register");
    const thename = $("#signUpName");
    const thepassword = $("#signUpPassword");
    const thecheckPassword = $("#checkPassword");

    theForm.submit(e => {
        e.preventDefault();
        const formData = {
            name: thename.val(),
            password: thepassword.val(),
            checkPassword: thecheckPassword.val()
        };

        $.ajax({
            type: "POST",
            data: JSON.stringify(formData),
            success: function(data) {
                theResult.text(data.reply);
            },
            contentType: "application/json",
            dataType: "json"
        });
    });
})(jQuery); // jQuery is exported as $ and jQuery