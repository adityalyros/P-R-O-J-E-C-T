

let form=document.querySelector("form")
let name_box=document.querySelector("#name");
let email_box=document.querySelector("#email");
let passwoed_box=document.querySelector("password");
let confirm_password_box=document.querySelector("#confirm-password");
let btn=document.querySelector("button");
let output=document.querySelector(".output");

btn.addEventListener("click", ValidateForm)

function ValidateForm(){
    let name=name_box.value;
    let email=email_box.value;
    let password=passwoed_box.value;
    let confirm_password=passwoed_box.value;
    console.log(name,email,password,confirm_password);

    output.innerHTML=`name:${name} Email:${email} password:${password} confirm_password:${confirm_password}`
}
