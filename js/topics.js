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
