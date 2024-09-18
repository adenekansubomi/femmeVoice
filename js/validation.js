// const formDataArray = [];



// document.getElementById('register').addEventListener('click', function() {
//     const user = document.getElementById('user').value;
//     const email = document.getElementById('email').value;
//     const pass = document.getElementById('pass').value;
//     const cpass = document.getElementById('cpass').value;

//     const formData = {
//         user: user,
//         email: email,
//         pass: pass,
//         cpass: cpass
//     };

//     formDataArray.push(formData);

//     console.log(formDataArray);
// });

// const {formDataArray} = require('./post');

// validation.js
document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username);
    console.log(password);
    

    const formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

    const userExists = formDataArray.some(function(user) {
        return user.user === username && user.pass === password;
    });

    console.log(userExists);
    console.log(formDataArray);
    

    if (userExists) {
        console.log('Login successful');

        // alert them if login was successful

        window.location.href = 'topics.html';


    } else {
        console.log('Invalid username or password');

        // do alert for when they enter wrong username  

        alert("wrong username or password");
        return;
    }
});
