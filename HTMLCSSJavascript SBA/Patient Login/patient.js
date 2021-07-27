function validatePatient() {
    if(document.patientLogin.username.value == "") {
        alert("Please enter your username");
        document.getElementById("inputUsername").focus();
        return false;
    } else {
        var username = document.getElementById("inputUsername").value;
    }
    if(document.patientLogin.password.value == "") {
        alert("Please enter your password");
        document.getElementById("inputPassword").focus();
        return false;
    } else {
        var password = document.getElementById("inputPassword").value;
    }
    userInfo();
    return true;
}

function userInfo() {
 var username = document.getElementById("inputUsername").value;
 var password = document.getElementById("inputPassword").value;
 console.log(username + "\n" + password);
}
