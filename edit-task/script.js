// Edit Task Page JavaScript

function saveTask() {
    // Get form values
    const taskData = {
        title: document.getElementById('taskTitle').value,
        description: document.getElementById('shortDesc').value,
        status: document.getElementById('status').value,
        priority: document.getElementById('priority').value,
        fieldLocation: document.getElementById('fieldLocation').value,
        detailedDescription: document.getElementById('detailedDesc').value,
        distance: document.getElementById('distance').value,
        deadlineTime: document.getElementById('deadlineTime').value,
        duration: document.getElementById('duration').value,
        fieldSize: document.getElementById('fieldSize').value,
        currentWorkers: document.getElementById('currentWorkers').value,
        totalWorkers: document.getElementById('totalWorkers').value
    };
    
    console.log('Task updated:', taskData);
    
    // Show save confirmation
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Saved!';
    submitBtn.style.background = '#256327';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        window.location.href = '../tasks-allotment/index.html';
    }, 1500);
}

// Add button functionality for equipment
document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.querySelector('.add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            const input = document.getElementById('equipment');
            if (input.value.trim()) {
                const tagsContainer = document.querySelector('.equipment-tags');
                const newTag = document.createElement('span');
                newTag.className = 'equipment-tag';
                newTag.innerHTML = `${input.value} <span class="tag-remove">×</span>`;
                tagsContainer.appendChild(newTag);
                
                // Add remove functionality to new tag
                newTag.querySelector('.tag-remove').addEventListener('click', function() {
                    newTag.remove();
                });
                
                input.value = '';
            }
        });
    }
    
    // Remove worker button
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.worker-item').remove();
        });
    });
    
    // Assign workers button
    const assignBtn = document.querySelector('.assign-workers-btn');
    if (assignBtn) {
        assignBtn.addEventListener('click', function() {
            alert('Worker assignment modal would open here');
        });
    }
    
    // Delete button
    const deleteBtn = document.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this task? This action cannot be undone.')) {
                alert('Task deleted successfully!');
                window.location.href = '../tasks-allotment/index.html';
            }
        });
    }
    
    // Equipment tag remove functionality
    const tagRemoves = document.querySelectorAll('.tag-remove');
    tagRemoves.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.equipment-tag').remove();
        });
    });
});
