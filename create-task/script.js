// Create Task Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const taskData = {
                title: document.getElementById('taskTitle').value,
                description: document.getElementById('shortDesc').value,
                status: document.getElementById('status').value,
                priority: document.getElementById('priority').value,
                fieldLocation: document.getElementById('fieldLocation').value,
                detailedDescription: document.getElementById('detailedDesc').value,
                equipment: document.getElementById('equipment').value,
                distance: document.getElementById('distance').value,
                fieldSize: document.getElementById('fieldSize').value,
                deadlineDate: document.getElementById('deadlineDate').value,
                deadlineTime: document.getElementById('deadlineTime').value,
                duration: document.getElementById('duration').value,
                currentWorkers: document.getElementById('currentWorkers').value,
                totalWorkers: document.getElementById('totalWorkers').value
            };
            
            console.log('Task created:', taskData);
            alert('Task created successfully!');
            window.location.href = '../tasks-allotment/index.html';
        });
    }
    
    // Add button functionality for equipment
    const addBtn = document.querySelector('.add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            const input = document.getElementById('equipment');
            if (input.value.trim()) {
                alert('Equipment added: ' + input.value);
                input.value = '';
            }
        });
    }
    
    // Assign workers button
    const assignBtn = document.querySelector('.assign-workers-btn');
    if (assignBtn) {
        assignBtn.addEventListener('click', function() {
            alert('Worker assignment modal would open here');
        });
    }
});
