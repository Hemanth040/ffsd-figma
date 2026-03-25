document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            
            if (!email) {
                alert('Please enter your email or phone number');
                emailInput.focus();
                return;
            }
            
            if (!password) {
                alert('Please enter your password');
                passwordInput.focus();
                return;
            }
            
            console.log('Farmer login attempt:', { email: email });
            
            localStorage.setItem('userType', 'farmer');
            localStorage.setItem('userEmail', email);
            
            window.location.href = '../farmer-dashboard/index.html';
        });
    }

    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});