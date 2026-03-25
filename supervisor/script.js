document.addEventListener('DOMContentLoaded', () => {
    const inspectBtns = document.querySelectorAll('.inspect-btn');
    const todoItems = document.querySelectorAll('.todo-item');
    const viewAllBtn = document.querySelector('.view-all-btn');
    const addBtn = document.querySelector('.add-btn');
    const iconBtns = document.querySelectorAll('.icon-btn');

    inspectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const farmCard = btn.closest('.farm-card');
            const farmName = farmCard.querySelector('.farm-info h3').textContent;
            alert(`Starting inspection for ${farmName}`);
        });
    });

    todoItems.forEach(item => {
        item.addEventListener('click', () => {
            const taskTitle = item.querySelector('h4').textContent;
            const taskTime = item.querySelector('.todo-time').textContent;
            alert(`Task: ${taskTitle}\nScheduled: ${taskTime}`);
        });
    });

    viewAllBtn.addEventListener('click', () => {
        alert('Viewing all farms');
    });

    addBtn.addEventListener('click', () => {
        const newTask = prompt('Enter new task:');
        if (newTask) {
            alert(`Task "${newTask}" added to to-do list`);
        }
    });

    iconBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const svg = btn.querySelector('svg');
            if (svg.innerHTML.includes('M18 8A6')) {
                alert('Notifications: 3 new alerts');
            } else if (svg.innerHTML.includes('M19.4 15')) {
                alert('Opening settings');
            } else if (svg.innerHTML.includes('M20 21v-2')) {
                alert('Profile menu');
            }
        });
    });

    document.querySelectorAll('.stat-card').forEach(card => {
        card.addEventListener('click', () => {
            const label = card.querySelector('.stat-label').textContent;
            console.log(`Viewing ${label} details`);
        });
    });
});