document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.querySelector('.checkout-btn');
    const updateProgressBtns = document.querySelectorAll('.action-btn');
    
    checkoutBtn.addEventListener('click', () => {
        const currentTime = new Date();
        alert(`Checked out at: ${currentTime.toLocaleTimeString()}`);
    });

    updateProgressBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const taskCard = btn.closest('.task-card');
            const taskTitle = taskCard.querySelector('h3').textContent;
            
            if (btn.textContent === 'Update Progress') {
                const newProgress = prompt('Enter progress percentage (0-100):');
                if (newProgress !== null) {
                    alert(`Progress updated to ${newProgress}% for "${taskTitle}"`);
                }
            } else if (btn.textContent === 'Mark Complete') {
                if (confirm(`Mark "${taskTitle}" as complete?`)) {
                    taskCard.style.opacity = '0.6';
                    taskCard.style.textDecoration = 'line-through';
                    alert('Task marked as complete!');
                }
            } else if (btn.textContent === 'View Details') {
                alert(`Viewing details for "${taskTitle}"`);
            } else if (btn.textContent === 'Start Task') {
                const statusBadge = taskCard.querySelector('.badge.pending');
                statusBadge.textContent = 'in-progress';
                statusBadge.classList.remove('pending');
                statusBadge.classList.add('in-progress');
                alert(`Task "${taskTitle}" started!`);
            }
        });
    });

    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', () => {
            const label = card.querySelector('.stat-label').textContent;
            console.log(`Viewing ${label} details`);
        });
    });

    const attendanceDays = document.querySelectorAll('.attendance-day');
    attendanceDays.forEach(day => {
        day.addEventListener('click', () => {
            const dayName = day.querySelector('.day-name').textContent;
            const hours = day.querySelector('.hours').textContent;
            if (hours !== '-') {
                console.log(`${dayName}: ${hours} hours worked`);
            }
        });
    });
});