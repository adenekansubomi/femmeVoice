document.addEventListener('DOMContentLoaded', function() {
  var subscribeButton = document.getElementById('subscribeButton');
  var emailInput = document.getElementById('emailInput');

  subscribeButton.addEventListener('click', function(event) {
    event.preventDefault();

    var email = emailInput.value;
    var atIndex = email.indexOf("@");
    var com = email.indexOf(".com");

    if (atIndex !== -1 && com !== -1 && email.length > 8) {
      alert('Thank you for subscribing!');
    } else {
      alert('Please enter a valid email address.');
    }
  });
});
