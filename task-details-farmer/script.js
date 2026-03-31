document.addEventListener('DOMContentLoaded', function() {
    // Save Note Button
    const saveNoteBtn = document.querySelector('.save-note-btn');
    if (saveNoteBtn) {
        saveNoteBtn.addEventListener('click', function() {
            const noteText = document.querySelector('.notes-textarea').value;
            if (noteText.trim()) {
                saveNoteBtn.textContent = 'Saved!';
                saveNoteBtn.style.background = '#256327';
                
                setTimeout(() => {
                    saveNoteBtn.textContent = 'Save Note';
                    saveNoteBtn.style.background = '';
                }, 1500);
            }
        });
    }
    
    // Assign Workers Button
    const assignWorkersBtn = document.querySelector('.assign-workers-btn');
    if (assignWorkersBtn) {
        assignWorkersBtn.addEventListener('click', function() {
            alert('Worker assignment modal would open here');
        });
    }
    
    console.log('Task Details page loaded');
});
