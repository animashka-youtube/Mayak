document.getElementById("main-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    proverka();
});

function proverka(){
    let result = 0;
    const usernameValue = document.getElementById("username").value.trim();
    const familiaValue = document.getElementById("userf").value.trim();
    const emailValue = document.getElementById("Email").value.trim();
    const passwordValue = document.getElementById("userpar").value.trim();
    const password2Value = document.getElementById("userpar2").value.trim();

    const form = document.getElementById("main-form");
    const username = document.getElementById("username");
    const familia = document.getElementById("userf");
    const email = document.getElementById("Email");
    const password = document.getElementById("userpar");
    const password2 = document.getElementById("userpar2");
    
    const regName = /^[А-ЯЁA-Z][а-яёa-z]{2,20}$/;
    const regFam = /^[А-ЯЁA-Z][а-яёa-z]{2,30}$/; //igmsuydws
    const regEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;                          
    const regPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[\W_]).{7,}$/; 

    if (usernameValue === "") {
        form.querySelector(".NameNone").style = "display: block";
        form.querySelector(".NameUnCorrect").style = "display: none";
        username.classList.add("error");
    } else if (regName.test(usernameValue) == false) {
        form.querySelector(".NameUnCorrect").style = "display: block";
        form.querySelector(".NameNone").style = "display: none";
        username.classList.add("error");
    } else {
        username.classList.add("success");
        username.classList.remove("error");
        form.querySelector(".NameNone").style = "display: none";
        form.querySelector(".NameUnCorrect").style = "display: none";
        result++;
    }


    if (familiaValue === "") {
        form.querySelector(".FamiliaNone").style = "display: block";
        form.querySelector(".FamiliaUnCorrect").style = "display: none";
        familia.classList.add("error");
    } else if (regFam.test(familiaValue) == false) {
        form.querySelector(".FamiliaUnCorrect").style = "display: block";
        form.querySelector(".FamiliaNone").style = "display: none";
        familia.classList.add("error");
    } else {
        familia.classList.add("success");
        familia.classList.remove("error");
        form.querySelector(".FamiliaUnCorrect").style = "display: none";
        form.querySelector(".FamiliaNone").style = "display: none";
        result++;
    }


    if (emailValue === "") {
        form.querySelector(".EmailNone").style = "display: block";
        form.querySelector(".EmailUnCorrect").style = "display: none";
        email.classList.add("error");
    } else if (regEmail.test(emailValue) == false) {
        form.querySelector(".EmailUnCorrect").style = "display: block";
        form.querySelector(".EmailNone").style = "display: none";
        email.classList.add("error");
    } else {
        email.classList.add("success");
        email.classList.remove("error");
        form.querySelector(".EmailUnCorrect").style = "display: none";
        form.querySelector(".EmailNone").style = "display: none";
        result++;
    }


    if (passwordValue === "") {
        form.querySelector(".PasswordNone").style = "display: block";
        form.querySelector(".PasswordUnCorrect").style = "display: none";
        password.classList.add("error");
    } else if (regPass.test(passwordValue) == false) {
        form.querySelector(".PasswordUnCorrect").style = "display: block";
        form.querySelector(".PasswordNone").style = "display: none";
        password.classList.add("error");
    } else {
        password.classList.add("success");
        password.classList.remove("error");
        form.querySelector(".PasswordUnCorrect").style = "display: none";
        form.querySelector(".PasswordNone").style = "display: none";
        result++;
    }


    if (password2Value === "") {
        form.querySelector(".Password2None").style = "display: block";
        form.querySelector(".Password2UnCorrect").style = "display: none";
        password2.classList.add("error");

    } else if (passwordValue !== password2Value) {
        form.querySelector(".Password2UnCorrect").style = "display: block";
        form.querySelector(".Password2None").style = "display: none";
        password2.classList.add("error");

    } else {
        password2.classList.add("success");
        password2.classList.remove("error");
        form.querySelector(".Password2UnCorrect").style = "display: none";
        form.querySelector(".Password2None").style = "display: none";
        result++;
    }
    //console.log(result);
    if (result == 5) {
        alert("Отправлено!");
        form.submit();
    }
}
