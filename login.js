document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        console.log('Attempting to redirect with email:', email); // Debugging line

        // TODO: Implement actual authentication logic here
        // For now, we just redirect to the home page

        if(email && password) { // Simple check for non-empty values
            // Redirect to the home page
            console.log('Redirecting to /index.html'); // Debugging line
            window.location.href = '/index.html';
        } else {
            // If email or password is empty, display an alert
            console.log('Email or password empty'); // Debugging line
            alert('Please enter both email and password.');
        }
    });
});
