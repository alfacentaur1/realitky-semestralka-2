function isEmailValid(e) {
    let test = document.getElementById("email");
    if (test.value.indexOf("@") === -1 || test.value.indexOf(".") === -1) {
        test.classList.add("chyba");
    }
    else {
        test.classList.remove("chyba");
    }
}
//kdyz chybi @ a . nemuzeme submittnout
function isEmailSubmittable(e) {
    let test = document.getElementById("email");
    if (test.value.indexOf("@") === -1 && test.value.indexOf(".") === -1) {
        e.preventDefault();
        test.classList.add("chyba");
    }

}


function main() {
    let email = document.querySelector("[name=email]");
    email.addEventListener("blur",isEmailValid);
    email.addEventListener("submit", isEmailSubmittable)
}

main();


//závislost password polí
