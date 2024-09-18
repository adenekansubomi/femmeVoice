 document.getElementById('sendBtn').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission
    
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let errorMessage = '';
    
            // Validate username
            if (username === '' || username.length < 3) {
                errorMessage += 'Username must be at least 3 characters long.<br>';
            }
    
            // Validate email
            if (!email.includes('@') || !email.endsWith('.com')) {
                errorMessage += 'Please enter a valid email address.<br>';
            }
    
            // Validate message
            if (message === '') {
                errorMessage += 'Message cannot be empty.<br>';
            }
    
            // Show modal if there are errors
            if (errorMessage) {
                document.getElementById('errorMessage').innerHTML = errorMessage;
                document.getElementById('errorModal').style.display = 'block';
            } else {
                // Submit form or perform further actions if needed
                alert('Form submitted successfully!');
            }
        });
    
        // Close modal when the user clicks on <span> (x)
        document.getElementById('closeModal').onclick = function() {
            document.getElementById('errorModal').style.display = 'none';
        }
    
        // Close modal when the user clicks anywhere outside of the modal
        window.onclick = function(event) {
