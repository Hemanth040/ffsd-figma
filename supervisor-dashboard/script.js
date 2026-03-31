document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.querySelector('.view-all-btn');
    const inspectBtns = document.querySelectorAll('.inspect-btn');
    const addBtn = document.querySelector('.add-btn');
    const iconBtns = document.querySelectorAll('.icon-btn');

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            const farmsList = document.querySelector('.farms-list');
            const isExpanded = farmsList.classList.toggle('expanded');
            viewAllBtn.classList.toggle('expanded', isExpanded);
            viewAllBtn.textContent = isExpanded ? 'Show Less' : 'View All';
        });
    }

    const farmSlugs = {
        'Green Valley Farm': 'green-valley',
        'Sunrise Organics': 'sunrise-organics',
        'Harvest Fields': 'harvest-fields',
        'Golden Crops Ltd': 'golden-crops',
        'Maple Ridge Estate': 'maple-ridge',
        'Riverbend Farms': 'riverbend',
        'Oakwood Plantations': 'oakwood',
        'Blue Sky Agri': 'blue-sky',
        'Emerald Fields Co-op': 'emerald-fields'
    };

    inspectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const farmItem = this.closest('.farm-item');
            if (farmItem) {
                const farmName = farmItem.querySelector('.farm-name').textContent;
                const slug = farmSlugs[farmName] || 'green-valley';
                window.location.href = `../inspect-supervisor/index.html?farm=${slug}`;
            }
        });
    });

    if (addBtn) {
        addBtn.addEventListener('click', function() {
            const modal = document.getElementById('addTaskModal');
            if (modal) {
                modal.classList.add('active');
            }
        });
    }

    const closeModal = document.getElementById('closeModal');
    const addTaskModal = document.getElementById('addTaskModal');
    const addTaskForm = document.getElementById('addTaskForm');
    const todoList = document.querySelector('.todo-list');

    if (closeModal && addTaskModal) {
        closeModal.addEventListener('click', function() {
            addTaskModal.classList.remove('active');
        });

        addTaskModal.addEventListener('click', function(e) {
            if (e.target === addTaskModal) {
                addTaskModal.classList.remove('active');
            }
        });
    }

    if (addTaskForm && todoList) {
        addTaskForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const title = document.getElementById('taskTitle').value;
            const type = document.getElementById('taskType').value;
            const date = document.getElementById('taskDate').value;
            const time = document.getElementById('taskTime').value;

            if (!title || !type || !date) return;

            const dateObj = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);

            let timeText;
            if (dateObj.getTime() === today.getTime()) {
                timeText = 'Today';
            } else if (dateObj.getTime() === tomorrow.getTime()) {
                timeText = 'Tomorrow';
            } else {
                timeText = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
            }

            if (time) {
                const timeParts = time.split(':');
                const hour = parseInt(timeParts[0]);
                const minute = timeParts[1];
                const ampm = hour >= 12 ? 'PM' : 'AM';
                const displayHour = hour % 12 || 12;
                timeText += `, ${displayHour}:${minute} ${ampm}`;
            }

            const todoItem = document.createElement('div');
            todoItem.className = `todo-item ${type === 'follow-up' ? 'followup' : type}`;

            todoItem.innerHTML = `
                <div class="todo-content">
                    <h4>${title}</h4>
                    <span class="todo-time">${timeText}</span>
                </div>
                <span class="todo-tag">${type}</span>
                <button class="complete-btn" title="Mark as Complete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </button>
            `;

            todoList.appendChild(todoItem);

            addTaskForm.reset();
            addTaskModal.classList.remove('active');
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
                window.location.href = '../warnings-alerts/index.html';
            } else if (title === 'Settings') {
                window.location.href = '../settings-supervisor/index.html';
            }
        });
    });

    if (todoList) {
        todoList.addEventListener('click', function(e) {
            const completeBtn = e.target.closest('.complete-btn');
            if (completeBtn) {
                const todoItem = completeBtn.closest('.todo-item');
                if (todoItem) {
                    todoItem.classList.toggle('completed');
                }
                return;
            }

            const todoItem = e.target.closest('.todo-item');
            if (todoItem && !todoItem.classList.contains('completed')) {
                const taskName = todoItem.querySelector('h4').textContent;
                console.log('Todo clicked:', taskName);
            }
        });
    }

    const analyticsLinks = document.querySelectorAll('[data-link="analytics"], .analytics-btn');
    analyticsLinks.forEach(link => {
        link.addEventListener('click', function() {
            window.location.href = '../supervisor-analytics/index.html';
        });
    });
});
