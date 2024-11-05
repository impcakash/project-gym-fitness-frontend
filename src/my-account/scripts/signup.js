function pf_signup(e) {
    e.preventDefault();

    let pf_myForm = document.getElementById("pf_myForm");

    let pf_first_name = pf_myForm.pf_first_name.value;
    let pf_last_name = pf_myForm.pf_last_name.value;
    let pf_email = pf_myForm.pf_email.value;
    let pf_password = pf_myForm.pf_password.value;

    if (localStorage.getItem("pf_users") === null) {
        localStorage.setItem("pf_users", JSON.stringify([]));
    }

    let user_data = {
        pf_first_name,
        pf_last_name,
        pf_email,
        pf_password
    };

    let arr = JSON.parse(localStorage.getItem("pf_users"));
    arr.push(user_data);

    localStorage.setItem("pf_users", JSON.stringify(arr));
}

function pf_createAccount() {
    window.location.href = "signin.html";
}