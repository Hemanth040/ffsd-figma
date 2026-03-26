document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.querySelector('.view-all-btn');
    const inspectBtns = document.querySelectorAll('.inspect-btn');
    const addBtn = document.querySelector('.add-btn');
    const iconBtns = document.querySelectorAll('.icon-btn');

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            alert('View All Farms feature coming soon');
        });
    }

    inspectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const farmCard = this.closest('.farm-card');
            const farmName = farmCard.querySelector('.farm-info h3').textContent;
            console.log('Inspecting farm:', farmName);
            alert(`Starting inspection for: ${farmName}`);
        });
    });

    if (addBtn) {
        addBtn.addEventListener('click', function() {
            alert('Add new task feature coming soon');
        });
    }

    iconBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const title = btn.getAttribute('title');
            if (title === 'Profile') {
                if (confirm('Logout?')) {
                    localStorage.clear();
                    window.location.href = '../supervisor-login/index.html';
                }
            } else if (title === 'Notifications') {
                alert('Notifications feature coming soon');
            } else if (title === 'Settings') {
                window.location.href = '../settings-supervisor/index.html';
            }
        });
    });

    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => {
        item.addEventListener('click', function() {
            const taskName = this.querySelector('h4').textContent;
            console.log('Todo clicked:', taskName);
        });
    });

    // Analytics link if present
    const analyticsLinks = document.querySelectorAll('[data-link="analytics"], .analytics-btn');
    analyticsLinks.forEach(link => {
        link.addEventListener('click', function() {
            window.location.href = '../supervisor-analytics/index.html';
        });
    });
});
