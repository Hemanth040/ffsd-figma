document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const filterButtons = document.querySelectorAll('.filter-button');
    const searchInput = document.querySelector('.search-input');
    const pesticideCards = document.querySelectorAll('.pesticide-card');
    const safetyButtons = document.querySelectorAll('.safety-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const tabName = this.textContent.toLowerCase();
            if (tabName === 'diseases') {
                window.location.href = '../disease-guide/index.html';
            } else if (tabName === 'fertilizers') {
                window.location.href = '../fertilizers/index.html';
            } else if (tabName === 'weeds') {
                window.location.href = '../view-guide-weeds/index.html';
            }
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            pesticideCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            pesticideCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    safetyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pesticideName = this.closest('.pesticide-card').querySelector('.pesticide-name').textContent;
            console.log(`View safety data for: ${pesticideName}`);
            alert(`Safety Data Sheet for ${pesticideName} would open here.`);
        });
    });

    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../farmer-dashboard/index.html';
        });
    }
});