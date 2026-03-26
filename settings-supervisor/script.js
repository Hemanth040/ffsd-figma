document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.querySelector('.btn-primary');
    const cancelBtn = document.querySelector('.btn-secondary');
    const inputs = document.querySelectorAll('.form-input');

    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const form = this.closest('.settings-form');
            if (form) {
                const inputs = form.querySelectorAll('.form-input');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (input.value.trim() === '' && !input.disabled) {
                        input.style.borderColor = '#EF4444';
                        isValid = false;
                    } else {
                        input.style.borderColor = '';
                    }
                });

                if (isValid) {
                    alert('Settings saved successfully!');
                }
            }
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            window.location.href = '../supervisor-dashboard/index.html';
        });
    }

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '';
        });
    });

    const toggles = document.querySelectorAll('.toggle input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            console.log('Notification setting changed:', this.checked);
        });
    });
});