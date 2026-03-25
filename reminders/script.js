document.addEventListener('DOMContentLoaded', function() {
    const addReminderBtn = document.getElementById('addReminderBtn');
    
    if (addReminderBtn) {
        addReminderBtn.addEventListener('click', function() {
            alert('Add Reminder modal would open here');
        });
    }
});
