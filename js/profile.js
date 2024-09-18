document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const fileInput = document.getElementById('fileInput');
    const profilePic = document.getElementById('profilePic');
    const usersList = document.getElementById('usersList');

    // Load saved profiles from localStorage
    const loadProfiles = () => {
        const savedProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];
        savedProfiles.forEach(profile => {
            const userProfile = document.createElement('div');
            userProfile.className = 'user-profile';
            userProfile.innerHTML = `
                <img src="${profile.picture}" alt="User Picture">
                <div>
                    <strong>${profile.name || 'Anonymous'}</strong>
                    <p>${profile.bio || 'No bio available'}</p>
                </div>
            `;
            usersList.appendChild(userProfile);
        });
    };

    // Call loadProfiles when page is loaded
    loadProfiles();

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                profilePic.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const bio = document.getElementById('bio').value;
        const picture = profilePic.src;

        // Create a user profile object
        const userProfile = {
            name: name || 'Anonymous',
            bio: bio || 'No bio available',
            picture: picture || ''
        };

        // Save the user profile to localStorage
        const savedProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];
        savedProfiles.push(userProfile);
        localStorage.setItem('userProfiles', JSON.stringify(savedProfiles));

        // Display the new user profile
        const profileElement = document.createElement('div');
        profileElement.className = 'user-profile';
        profileElement.innerHTML = `
            <img src="${picture}" alt="User Picture">
            <div>
                <strong>${userProfile.name}</strong>
                <p>${userProfile.bio}</p>
            </div>
        `;
        usersList.appendChild(profileElement);
        
        // Reset the form and profile picture preview
        profileForm.reset();
        profilePic.src = '';
    });
});
