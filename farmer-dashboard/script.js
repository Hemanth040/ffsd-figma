document.addEventListener('DOMContentLoaded', function() {
    const headerButtons = document.querySelectorAll('.header-button');
    const actionButtons = document.querySelectorAll('.action-button');
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    const newCropBtn = document.querySelector('.new-crop-btn');
    const reminderItems = document.querySelectorAll('.reminder-item');
    const warningItems = document.querySelectorAll('.warning-item');

    headerButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            if (btnText === 'Alerts') {
                window.location.href = '../warnings-alerts/index.html';
            } else if (btnText.includes('Add Crop')) {
                window.location.href = '../crop-planning/index.html';
            }
        });
    });

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent;
            if (btnText === 'Manage Crops') {
                window.location.href = '../crop-planning/index.html';
            } else if (btnText === 'Manage Workers') {
                window.location.href = '../worker-management-farmer/index.html';
            } else if (btnText === 'View Timeline') {
                alert('Activity Timeline feature coming soon');
            } else if (btnText === 'Manage Resources') {
                alert('Resource Management feature coming soon');
            } else if (btnText === 'View Finances') {
                window.location.href = '../farmer-wages-management/index.html';
            } else if (btnText === 'View Reports') {
                alert('Reports & Analytics feature coming soon');
            }
        });
    });

    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            if (btnText === 'Tasks') {
                window.location.href = '../tasks-allotment/index.html';
            } else if (btnText === 'Attendance') {
                window.location.href = '../worker-attendance/index.html';
            } else if (btnText === 'Issues') {
                window.location.href = '../farmer-issue-dashboard/index.html';
            }
        });
    });

    if (newCropBtn) {
        newCropBtn.addEventListener('click', function() {
            window.location.href = '../crop-planning/index.html';
        });
    }

    reminderItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.reminder-title').textContent;
            console.log('Reminder clicked:', title);
        });
    });

    warningItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.warning-title').textContent;
            console.log('Warning clicked:', title);
            window.location.href = '../warnings-alerts/index.html';
        });
    });

    const userAvatar = document.querySelector('.user-avatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', function() {
            if (confirm('Logout?')) {
                localStorage.clear();
                window.location.href = '../farmer-login/index.html';
            }
        });
    }
});