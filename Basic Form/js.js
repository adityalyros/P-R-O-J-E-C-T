let form = document.querySelector("form");
let name_box = document.querySelector("#name");
let email_box = document.querySelector("#email");
let password_box = document.querySelector("#password");
let confirm_password_box = document.querySelector("#confirm-password");
let output = document.querySelector(".output");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    ValidateForm(); 
});

function ValidateForm() {
    
    let name = name_box.value;
    let email = email_box.value;
    let password = password_box.value;
    let confirm_password = confirm_password_box.value; 
     console.log(name, email, password, confirm_password);
    output.innerHTML = `Name: ${name} <br> Email: ${email} <br> Password: ${password} <br> Confirm Password: ${confirm_password}`;
}