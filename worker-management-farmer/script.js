document.addEventListener('DOMContentLoaded', function() {
    const addWorkerBtn = document.getElementById('addWorkerBtn');
    
    if (addWorkerBtn) {
        addWorkerBtn.addEventListener('click', function() {
            alert('Add Worker modal would open here');
        });
    }

    const searchInput = document.getElementById('searchInput');
    const workerCards = document.querySelectorAll('.worker-card');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            workerCards.forEach(card => {
                const name = card.querySelector('.worker-info h3').textContent.toLowerCase();
                const role = card.querySelector('.worker-role').textContent.toLowerCase();
                if (name.includes(searchTerm) || role.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.textContent.toLowerCase();
            workerCards.forEach(card => {
                const status = card.querySelector('.worker-status');
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (filter === 'active') {
                    card.style.display = status.classList.contains('active') ? 'block' : 'none';
                } else if (filter === 'inactive') {
                    card.style.display = status.classList.contains('inactive') ? 'block' : 'none';
                }
            });
        });
    });

    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Action button clicked');
        });
    });
});
