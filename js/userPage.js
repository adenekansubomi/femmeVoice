// window.addEventListener('load', function() {
//     const selectedTopics = JSON.parse(localStorage.getItem('selectedTopics')) || [];
//     const articlesDiv = document.getElementById('articles');


//     const articles = {
//         Technology: ['Tech article 1', 'Tech article 2'],
//         Science: ['Science article 1', 'Science article 2'],
//         Health: ['Health article 1', 'Health article 2'],
//         Finance: ['Finance article 1', 'Finance article 2'],
//         Sports: ['Sports article 1', 'Sports article 2'],
//         Entertainment: ['Entertainment article 1', 'Entertainment article 2'],
//         Travel: ['Travel article 1', 'Travel article 2'],
//         Education: ['Education article 1', 'Education article 2']
//     };

//     selectedTopics.forEach(topic => {
//         const topicArticles = articles[topic];
//         const topicDiv = document.createElement('div');
//         topicDiv.innerHTML = `<h4>${topic}</h4><ul>${topicArticles.map(article => `<li>${article}</li>`).join('')}</ul>`;
//         articlesDiv.appendChild(topicDiv);
//     });
// });


window.addEventListener('load', function() {
    const selectedTopics = JSON.parse(localStorage.getItem('selectedTopics')) || [];
    const articlesDiv = document.getElementById('articles');

    // Load articles from articles.html
    fetch('../userArticles.html')
        .then(response => response.text())
        .then(data => {
            // Create a temporary DOM element to parse the articles
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Filter and display articles based on selected topics
            selectedTopics.forEach(topic => {
                const articles = tempDiv.querySelectorAll(`article[data-topic="${topic}"]`);
                articles.forEach(article => {
                    articlesDiv.appendChild(article.cloneNode(true)); // Append cloned article
                });
            });
        });
});
