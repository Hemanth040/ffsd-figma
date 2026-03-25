document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const userTypeSelect = document.getElementById('userType');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userType = userTypeSelect.value;
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const phone = phoneInput.value.trim();
            const password = passwordInput.value.trim();
            
            if (!userType) {
                alert('Please select a role');
                userTypeSelect.focus();
                return;
            }
            
            if (!name) {
                alert('Please enter your name');
                nameInput.focus();
                return;
            }
            
            if (!email) {
                alert('Please enter your email');
                emailInput.focus();
                return;
            }
            
            if (!phone) {
                alert('Please enter your phone number');
                phoneInput.focus();
                return;
            }
            
            if (!password) {
                alert('Please create a password');
                passwordInput.focus();
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                passwordInput.focus();
                return;
            }
            
            console.log('Registration attempt:', { userType, name, email, phone });
            
            localStorage.setItem('registeredUser', JSON.stringify({
                userType,
                name,
                email,
                phone
            }));
            
            let redirectUrl = '../farmer-login/index.html';
            if (userType === 'supervisor') {
                redirectUrl = '../supervisor-login/index.html';
            } else if (userType === 'worker') {
                redirectUrl = '../worker-login/index.html';
            }
            
            alert('Registration successful! Please login.');
            window.location.href = redirectUrl;
        });
    }

    const inputs = document.querySelectorAll('.form-input, .form-select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});