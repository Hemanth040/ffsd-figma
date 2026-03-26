document.addEventListener('DOMContentLoaded', function() {
    const archiveBtn = document.getElementById('archiveBtn');
    const viewDetailsBtns = document.querySelectorAll('.btn-view-details');
    const takeActionBtns = document.querySelectorAll('.btn-take-action');

    if (archiveBtn) {
        archiveBtn.addEventListener('click', function() {
            alert('Cleared alerts have been archived.');
        });
    }

    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('View details clicked');
        });
    });

    takeActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Take action clicked');
        });
    });
});
