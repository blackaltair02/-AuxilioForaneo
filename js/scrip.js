let sinUp = document.getElementById("sinUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameInput.style.maxHeight="0";
    title.innerHTML ="Login";
    singUp.classList.add("disable");
    signIn.classList.remove("disable");
}

sinUp.onclick = function() {
    nameInput.style.maxHeight="60px";
    title.innerHTML ="Registro";
    sinUp.classList.remove("disable");
    signIn.classList.add("disable");
}