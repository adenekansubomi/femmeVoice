
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
       
    }
});
