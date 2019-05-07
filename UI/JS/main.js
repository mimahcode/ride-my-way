let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("submit");

function onLogin(){
    if(email.value.length !==0 && password.value.length !== 0){
        login.disabled = false;

        console.log(email.value +" \n"+ password.value);
    }else{
        login.disabled = true;
        
    }
}

login.addEventListener("click", (e) => {
    e.preventDefault();
    onLogin();
})