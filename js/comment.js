document.getElementById('submitComment').addEventListener('click', function() {
    var userName = document.getElementById('userName').value;
    var userComment = document.getElementById('userComment').value;

    if (userName && userComment) {
        var commentContainer = document.createElement('div');
        commentContainer.classList.add('comment');

        var commentName = document.createElement('div');
        commentName.classList.add('comment-name');
        commentName.innerText = userName;

        var commentText = document.createElement('div');
        commentText.classList.add('comment-text');
        commentText.innerText = userComment;

        commentContainer.appendChild(commentName);
        commentContainer.appendChild(commentText);

        document.getElementById('commentsContainer').appendChild(commentContainer);

        
        document.getElementById('userName').value = '';
        document.getElementById('userComment').value = '';
    } else {
        alert('Please fill out both fields.');
    }
});


// document.getElementById('submitArticle').addEventListener('click', function() {
//     var articleTitle = document.getElementById('articleTitle').value;
//     var articleContent = document.getElementById('articleContent').value;
//     var articleImage = document.getElementById('articleImage').files[0];

//     if (articleTitle && articleContent) {
//         var articleContainer = document.createElement('div');
//         articleContainer.classList.add('article');

//         var titleElement = document.createElement('div');
//         titleElement.classList.add('article-title');
//         titleElement.innerText = articleTitle;

//         var contentElement = document.createElement('div');
//         contentElement.classList.add('article-content');
//         contentElement.innerText = articleContent;

//         articleContainer.appendChild(titleElement);
//         articleContainer.appendChild(contentElement);

//         if (articleImage) {
//             var imageElement = document.createElement('img');
//             imageElement.src = URL.createObjectURL(articleImage);
//             articleContainer.appendChild(imageElement);
//         }

//         document.getElementById('articlesContainer').appendChild(articleContainer);

//         // Clear the form
//         document.getElementById('articleTitle').value = '';
//         document.getElementById('articleContent').value = '';
//         document.getElementById('articleImage').value = '';
//     } else {
//         alert('Please fill out the title and content fields.');
//     }
// });

window.addEventListener('scroll', function() {
    const stickyDiv = document.querySelector('.art_sidebar');
    const contentHeight = document.querySelector('.articles').offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= contentHeight) {
        stickyDiv.style.display = 'none';
    } else {
        stickyDiv.style.display = 'block';
    }
});
