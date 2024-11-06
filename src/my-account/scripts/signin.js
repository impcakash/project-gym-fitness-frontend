/*
function pf_signin(e) {
    e.preventDefault();

    let pf_myForm = document.getElementById("pf_myForm");
    let pf_warning = document.getElementById("pf_warning");

    let pf_email = pf_myForm.pf_email.value;
    let pf_password = pf_myForm.pf_password.value;

    let all_users = JSON.parse(localStorage.getItem("pf_users"));

    all_users.forEach((user) => {

        if (pf_email === user.pf_email && pf_password === user.pf_password) {
            // alert("Login Succesfull");
            window.location.href = "index.html";
        }
        else {
            // alert("Invalid credentials !");
            window.location.href = "myAccount.html"
            // pf_warning.textContent = "Wrong Credentials!";
            // pf_warning.style.color = "red";
        }
    });
}
*/

function pf_signin_href() {
    window.location.href = "myAccount.html"
}