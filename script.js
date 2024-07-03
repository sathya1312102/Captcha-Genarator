function generateCaptcha() {
    let captcha = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

function showCaptcha() {
    const captcha = generateCaptcha();
    document.getElementById('captcha').textContent = captcha;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('captcha-popup').style.display = 'block';
}

function verifyCaptcha() {
    const captchaInput = document.getElementById('captcha-input').value.trim();
    const captcha = document.getElementById('captcha').textContent;

    if (captchaInput === captcha) {
        alert('CAPTCHA verified successfully!');
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('captcha-popup').style.display = 'none';
    } else {
        alert('CAPTCHA verification failed. Please try again.');
    }
}