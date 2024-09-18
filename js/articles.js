document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articlesContainer');
    let articles = JSON.parse(localStorage.getItem('articles')) || [];

    articlesContainer.innerHTML = articles.map(article => `
        <div class="article" data-id="${article.id}">
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <button class="comment-btn">Comment</button>
            <div class="comments-container"></div>
        </div>
    `).join('');

    articlesContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const articleId = event.target.closest('.article').dataset.id;
            window.location.href = `edit-article.html?id=${articleId}`;
        }

        if (event.target.classList.contains('delete-btn')) {
            const articleId = event.target.closest('.article').dataset.id;
            deleteArticle(articleId);
        }

        if (event.target.classList.contains('comment-btn')) {
            const articleId = event.target.closest('.article').dataset.id;
            addComment(articleId);
        }
    });
});

function deleteArticle(id) {
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles = articles.filter(article => article.id !== parseInt(id));
    localStorage.setItem('articles', JSON.stringify(articles));
    window.location.reload();
}

function addComment(articleId) {
    const comment = prompt('Enter your comment:');
    if (comment) {
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        const article = articles.find(article => article.id === parseInt(articleId));
        if (article) {
            article.comments = article.comments || [];
            article.comments.push(comment);
            localStorage.setItem('articles', JSON.stringify(articles));
            window.location.reload();
        }
    }
}
