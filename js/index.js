const harmbuger = document.querySelector(".harmbuger")
const navMenu = document.querySelector(".nav_links")

harmbuger.addEventListener("click", ()=>{
    harmbuger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.addEventListener('DOMContentLoaded', function() {
  var subscribeButton = document.getElementById('subscribeButtonf');
  var emailInput = document.getElementById('emailInputf');

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



document.addEventListener('DOMContentLoaded', function() {
  // Function to get query parameter value
  function getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
  }

  const articleId = getQueryParam('article-id'); // Get the article ID from the query parameter

  if (articleId) {
      const articles = document.querySelectorAll('#article-container article');
      articles.forEach(article => {
          if (article.id === articleId) {
              article.style.display = 'block'; // Show the selected article
          }
      });
  }
});




document.getElementById('submitTopics').addEventListener('click', function() {
    const selectedTopics = Array.from(document.querySelectorAll('input[name="topics"]:checked'))
                                .map(checkbox => checkbox.value);

    if (selectedTopics.length >= 3) {
        // Save topics to localStorage or sessionStorage for demo purposes
        localStorage.setItem('selectedTopics', JSON.stringify(selectedTopics));

        // Redirect to user page
        window.location.href = 'userPage.html';
    } else {
        alert('Please select at least 3 topics.');
    }
});








