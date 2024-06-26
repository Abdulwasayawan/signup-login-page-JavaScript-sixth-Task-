var names = [];
var emails = [];
var userNames = [];
var Passowrds = [];
var isfound = false;
function Signup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var userName = document.getElementById("userName").value;
  var Passowrd = document.getElementById("Passowrd").value;
  var Confirmpassword = document.getElementById("Confirmpassword").value;
  //     if email exist to previous email so try another email
  for (var i = 0; i < emails.length; i++) {
    if (email === emails[i]) {
      document.getElementById("repeatEmail").innerHTML =
        "This Email also exist try another email !";
      document.getElementById("repeatEmail").style.color = "red";
      return;
    }
  }
   
  //     Checking password and confirmpassword
  if (Passowrd === Confirmpassword) {
    names.push(name);
    emails.push(email);
    userNames.push(userName);
    Passowrds.push(Passowrd);
    document.getElementById("signupsucessfully").innerHTML =
      "Signup successfully";
    document.getElementById("signupsucessfully").style.color = "green";
  } else {
    document.getElementById("correctPassAlert").innerHTML =
      "Password and Confirm Password Not Match !";
    document.getElementById("correctPassAlert").style.color = "red";
  }
  console.log(names);
  console.log(emails);
  console.log(userNames);
  console.log(Passowrds);
}
//        Login Function
function login() {
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;
  //         if match so print at bottom
  for (var i = 0; i < emails.length; i++) {
    if (loginEmail === emails[i] && loginPassword === Passowrds[i]) {
      document.getElementById("logindetails").innerHTML =
        userNames[i] + " " + emails[i] + " " + Passowrds[i];
      document.getElementById("logindetails").style.color = "white";
      isfound = true;
    }
  }
  if (isfound == false) {
    document.getElementById("loginemailpassmatch").innerHTML =
      "Eamil and Password not exsist!";
    document.getElementById("loginemailpassmatch").style.color = "red";
  }
}
