let download = document.getElementById("download");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");
download.addEventListener("click", function(){
    alert("Download CV Successfully"); 
});

submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (email.value == "" && password.value == ""){
        alert("Email and Password cannot be empty");
    } else{
    alert("Submit Successfully"); 
    }
});


let ul = document.createElement("ul");
bar.addEventListener("click", function(){
    ul.classList.toggle("showData");
})
