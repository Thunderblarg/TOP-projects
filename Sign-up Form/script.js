document.addEventListener("DOMContentLoaded", function() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let emailAddress = document.getElementById("emailAddress");
    let phoneNumber = document.getElementById("phoneNumber");
    let password = document.getElementById("password");
    let verifyPassword = document.getElementById("verifyPassword");

    firstName.addEventListener("focusout", function(){
        validateField(this, /^[a-zA-Z]+$/);
    });
    
    lastName.addEventListener("focusout", function(){
        validateField(this, /^[a-zA-Z]+$/);
    });
    
    emailAddress.addEventListener("focusout", function(){
        validateField(this, /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
    });

    phoneNumber.addEventListener("focusout", function(){
        validateField(this, /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/);
    });

    password.addEventListener("focusout", function(){
        comparePasswords();
    });

    verifyPassword.addEventListener("focusout", function(){
        comparePasswords();
    });

});

var validateField = function(field, expression){
    let input = field.value;
    let name = field.name;
    let error = document.querySelector("label[for=" + name + "]").nextElementSibling;

    if(field.value){
        if(!expression.test(input)){
            error.style.display = "contents";
        }
        else {
            error.style.display = "none";
        }
    } else {
        error.style.display = "none";
    }
};

var comparePasswords = function(){
    let password1 = document.getElementById("password");
    let password2 = document.getElementById("verifyPassword");
    let error = document.querySelector("label[for=password]").nextElementSibling;

    
    if(password1.value != password2.value){
        error.style.display = "contents";
    }
    else {
        error.style.display = "none";
    }
}