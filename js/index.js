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
    var subscribeButton = document.getElementById('subscribeButton');
    var confirmationMessage = document.getElementById('confirmationMessage');
    
    subscribeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        confirmationMessage.style.display = 'block'; // Show the confirmation message
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


document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demo purposes, we're not doing real authentication.
    if (username && password) {
        // Redirect to topic selection page
        window.location.href = 'topics.html';
    } else {
        alert('Please enter both username and password.');
    }
});

document.getElementById('register').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demo purposes, we're not doing real authentication.
    if (username && password) {
        // Redirect to topic selection page
        window.location.href = 'topics.html';
    } else {
        alert('Please enter both username and password.');
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


window.addEventListener('load', function() {
    const selectedTopics = JSON.parse(localStorage.getItem('selectedTopics')) || [];
    const articlesDiv = document.getElementById('articles');

    // Dummy articles for demonstration
    const articles = {
        Technology: ['Tech article 1', 'Tech article 2'],
        Science: ['Science article 1', 'Science article 2'],
        Health: ['Health article 1', 'Health article 2'],
        Finance: ['Finance article 1', 'Finance article 2'],
        Sports: ['Sports article 1', 'Sports article 2'],
        Entertainment: ['Entertainment article 1', 'Entertainment article 2'],
        Travel: ['Travel article 1', 'Travel article 2'],
        Education: ['Education article 1', 'Education article 2']
    };

    selectedTopics.forEach(topic => {
        const topicArticles = articles[topic];
        const topicDiv = document.createElement('div');
        topicDiv.innerHTML = `<h4>${topic}</h4><ul>${topicArticles.map(article => `<li>${article}</li>`).join('')}</ul>`;
        articlesDiv.appendChild(topicDiv);
    });
});






