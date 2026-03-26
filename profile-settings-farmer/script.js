document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const saveBtn = document.querySelector('.btn-primary');
    const cancelBtn = document.querySelector('.btn-secondary');

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '../farmer-dashboard/index.html';
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            alert('Settings options would appear here');
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            alert('Changes saved successfully!');
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            window.location.href = '../farmer-dashboard/index.html';
        });
    }
});
