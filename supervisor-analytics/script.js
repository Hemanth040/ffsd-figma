document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.querySelector('.back-btn');
    const viewAllBtn = document.querySelector('.view-all-btn');
    const pageBtns = document.querySelectorAll('.page-btn');
    const filterBtn = document.querySelector('.filter-btn');
    const sortBtn = document.querySelector('.sort-btn');

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = '../supervisor-dashboard/index.html';
        });
    }

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            alert('Viewing all critical actions...');
        });
    }

    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log(`Pagination: ${action}`);
        });
    });

    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            alert('Filter options would open here');
        });
    }

    if (sortBtn) {
        sortBtn.addEventListener('click', function() {
            alert('Sort options would open here');
        });
    }
});
