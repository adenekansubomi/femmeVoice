document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'), 10);

    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    const article = articles.find(article => article.id === articleId);

    if (article) {
        document.getElementById('editTitle').value = article.title;
        document.getElementById('editContent').value = article.content;
    }

    document.getElementById('editArticleForm').addEventListener('submit', function(event) {
        event.preventDefault();

        article.title = document.getElementById('editTitle').value;
        article.content = document.getElementById('editContent').value;

        localStorage.setItem('articles', JSON.stringify(articles));
        window.location.href = 'articles.html';
    });
});
