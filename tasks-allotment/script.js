document.addEventListener('DOMContentLoaded', () => {
    const createTaskBtn = document.getElementById('createTaskBtn');
    const taskModal = document.getElementById('taskModal');
    const closeModal = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const taskForm = document.getElementById('taskForm');
    const modalOverlay = document.querySelector('.modal-overlay');
    const tasksList = document.querySelector('.tasks-list');

    createTaskBtn.addEventListener('click', () => {
        taskModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeModalHandler() {
        taskModal.classList.remove('active');
        document.body.style.overflow = '';
        taskForm.reset();
    }

    closeModal.addEventListener('click', closeModalHandler);
    cancelBtn.addEventListener('click', closeModalHandler);
    modalOverlay.addEventListener('click', closeModalHandler);

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskTitle = document.getElementById('taskTitle').value;
        const shortDesc = document.getElementById('shortDesc').value;
        const status = document.getElementById('status').value;
        const priority = document.getElementById('priority').value;
        const deadline = document.getElementById('deadline').value;
        const assignee = document.getElementById('assignee').value;
        const equipment = document.getElementById('equipment').value;
        const location = document.getElementById('location').value;

        const newTask = document.createElement('div');
        newTask.className = 'task-card';

        const statusClass = status === 'completed' ? 'completed' : status === 'in-progress' ? 'in-progress' : 'pending';
        const priorityClass = priority;

        const assigneeName = assignee ? document.querySelector(`#assignee option[value="${assignee}"]`).text.split(' - ')[0] : 'Unassigned';
        const deadlineText = deadline ? `Due: ${new Date(deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : 'No deadline';

        newTask.innerHTML = `
            <div class="task-header">
                <div class="task-info">
                    <h3>${escapeHtml(taskTitle)}</h3>
                    <p>${escapeHtml(shortDesc)}</p>
                </div>
                <div class="task-badges">
                    <span class="badge ${priorityClass}">${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
                    <span class="badge ${statusClass}">${status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </div>
            </div>
            <div class="task-meta">
                <span class="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                    </svg>
                    ${deadlineText}
                </span>
                <span class="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    Assigned to: ${assigneeName}
                </span>
                <span class="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    ${location || 'No location specified'}
                </span>
            </div>
            <div class="task-actions">
                <button class="action-btn edit">Edit</button>
                <button class="action-btn delete">Delete</button>
            </div>
        `;

        tasksList.insertBefore(newTask, tasksList.firstChild);

        alert('Task created successfully!');
        closeModalHandler();
    });

    document.querySelectorAll('.action-btn.edit').forEach(btn => {
        btn.addEventListener('click', () => {
            const taskCard = btn.closest('.task-card');
            const taskTitle = taskCard.querySelector('.task-info h3').textContent;
            alert(`Edit task: ${taskTitle}`);
        });
    });

    document.querySelectorAll('.action-btn.delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const taskCard = btn.closest('.task-card');
            const taskTitle = taskCard.querySelector('.task-info h3').textContent;
            if (confirm(`Are you sure you want to delete "${taskTitle}"?`)) {
                taskCard.remove();
                alert('Task deleted successfully');
            }
        });
    });

    document.querySelector('.back-btn').addEventListener('click', () => {
        window.history.back();
    });

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});