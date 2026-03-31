document.addEventListener('DOMContentLoaded', function() {
    // Assign Task button
    const assignBtn = document.querySelector('.btn-primary');
    if (assignBtn) {
        assignBtn.addEventListener('click', function() {
            const task = document.getElementById('selectTask').value;
            const worker = document.getElementById('assignTo').value;
            const dueDate = document.getElementById('dueDate').value;
            
            if (task === 'Select a task...' || worker === 'Select worker...' || !dueDate) {
                alert('Please fill in all required fields');
                return;
            }
            
            assignBtn.textContent = 'Assigned!';
            assignBtn.style.background = '#256327';
            
            setTimeout(() => {
                assignBtn.textContent = 'Assign Task';
                assignBtn.style.background = '';
                window.location.href = '../tasks-allotment/index.html';
            }, 1500);
        });
    }
    
    console.log('Assign Task page loaded');
});
