function validateStaff() {
    if(document.staffLogin.username.value == "") {
        alert("Please enter your username");
        document.getElementById("inputUsername").focus();
        return false;
    } else {
        var username = document.getElementById("inputUsername").value;
    }
    if(document.staffLogin.password.value == "") {
        alert("Please enter your password");
        document.getElementById("inputPassword").focus();
        return false;
    } else {
        var password = document.getElementById("inputPassword").value;
    }
    return true;
}
