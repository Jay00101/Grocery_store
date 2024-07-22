// Function to generate captcha code
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Function to refresh captcha
function refreshCaptcha() {
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = generateCaptcha(); // Generate new captcha
}

// Call the function to generate captcha when the page loads
window.onload = function() {
    refreshCaptcha();
};

// Form submission handler
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const captchaInput = document.getElementById('captcha-input').value;
    const captchaText = document.getElementById('captcha').textContent;

    if (captchaInput === captchaText) {
        alert('Successfully logged in!');
        window.location.href = 'index.html'; // Redirect to index.html
    } else {
        alert('Captcha is incorrect. Please try again.');
        refreshCaptcha();
        document.getElementById('captcha-input').value = '';
    }
});
