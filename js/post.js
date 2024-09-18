var $ = function(id) {
  return document.getElementById(id);
}

var reg = function() {
  var email = $("email").value;
  var user = $("user").value;
  var pass = $("pass").value;
  var cpass = $("cpass").value;
  var atIndex = email.indexOf("@");
  var com = email.indexOf(".com")
  let validated = true;

  console.log(email)

  if (email == "") {
    $("empty_email").firstChild.nodeValue = "Required field.";
    validated = false;
  } else if (atIndex == -1 || com == -1 || email.length <= 8) {
    $("empty_email").firstChild.nodeValue = "Invalid email.";
    validated = false;
  } else {
    $("empty_email").firstChild.nodeValue = "";
  }

  if (user.length <= 6) {
    document.getElementById('empty_user').innerText = 'Username must be more than 6 characters';
    validated = false;
    if (user == "") {
      $("empty_user").firstChild.nodeValue = "Required field.";
      validated = false;
    }
  } else {
    $("empty_user").firstChild.nodeValue = "";
  }

  if (pass == "") {
    $("empty_pass").firstChild.nodeValue = "Required field.";
    validated = false;
  } else if (pass.length <= 6) {
    document.getElementById('empty_pass').innerText = 'Password must be more than 6 characters';
    validated = false;
  } else {
    $("empty_pass").firstChild.nodeValue = "";
  }

  if (cpass == "") {
    $("empty_cpass").firstChild.nodeValue = "Required field.";
    validated = false;
  } else {
    $("empty_cpass").firstChild.nodeValue = "";
  }

  if (pass !== cpass) {
    $("empty_cpass").firstChild.nodeValue = "Password and confirm password mismatch";
    validated = false;
  } else {
    $("empty_cpass").firstChild.nodeValue = "";
  }

  console.log(validated);

  if (validated) {
    const formData = {
      user: user,
      email: email,
      pass: pass,
      cpass: cpass
    };

    let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
    formDataArray.push(formData);
    localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
    console.log(formDataArray);

    // Redirect to login page after signup
    window.location.href = 'login.html';
    alert("You have successfully registered");
  }
}

document.getElementById('register').addEventListener('click', reg);




