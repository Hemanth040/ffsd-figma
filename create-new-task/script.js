document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');
    const addBtn = document.querySelector('.add-btn');
    const equipmentInput = document.querySelector('.equipment-input input');
    const equipmentTags = document.querySelector('.equipment-tags');
    const createTaskBtn = document.querySelector('.btn-primary');
    const cancelBtn = document.querySelector('.btn-secondary');

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '../tasks-allotment/index.html';
        });
    }

    if (addBtn && equipmentInput) {
        addBtn.addEventListener('click', () => {
            const value = equipmentInput.value.trim();
            if (value) {
                const tag = document.createElement('span');
                tag.className = 'equipment-tag';
                tag.innerHTML = `${value} <button type="button" class="remove-tag">&times;</button>`;
                equipmentTags.appendChild(tag);
                equipmentInput.value = '';
                
                tag.querySelector('.remove-tag').addEventListener('click', () => {
                    tag.remove();
                });
            }
        });
    }

    if (createTaskBtn) {
        createTaskBtn.addEventListener('click', () => {
            const taskTitle = document.querySelector('input[placeholder="e.g., Plow Field A"]');
            if (!taskTitle || !taskTitle.value) {
                alert('Please enter a task title');
                return;
            }
            alert('Task created successfully!');
            window.location.href = '../tasks-allotment/index.html';
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            window.location.href = '../tasks-allotment/index.html';
        });
    }
});
