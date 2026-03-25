document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');
    const archiveBtn = document.getElementById('archiveBtn');
    const dismissBtns = document.querySelectorAll('.btn-dismiss');
    const viewBtns = document.querySelectorAll('.btn-view');

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.history.back();
        });
    }

    if (archiveBtn) {
        archiveBtn.addEventListener('click', function() {
            alert('Archived alerts would be moved to archive');
        });
    }

    dismissBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.warning-card');
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.remove();
            }, 300);
        });
    });

    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('View details clicked');
        });
    });
});
