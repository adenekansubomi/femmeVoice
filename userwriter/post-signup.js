document.getElementById('articleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create an article object
    const article = {
        id: new Date().getTime(), // Unique ID based on timestamp
        title: title,
        content: content
    };

    // Save article to localStorage (for simplicity, using JSON)
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.push(article);
    localStorage.setItem('articles', JSON.stringify(articles));

    // Redirect to articles page
    window.location.href = 'articles.html';
});
