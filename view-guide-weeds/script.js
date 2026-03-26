document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const searchInput = document.querySelector('.search-input');
    const weedCards = document.querySelectorAll('.weed-card');
    const viewGuideButtons = document.querySelectorAll('.view-guide-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const tabName = this.textContent.toLowerCase();
            if (tabName === 'diseases') {
                window.location.href = '../symptoms-guide/index.html';
            } else if (tabName === 'pesticides') {
                window.location.href = '../pesticides/index.html';
            } else if (tabName === 'fertilizers') {
                window.location.href = '../fertilizers/index.html';
            }
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            weedCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    viewGuideButtons.forEach(button => {
        button.addEventListener('click', function() {
            const weedName = this.closest('.weed-card').querySelector('.weed-name').textContent;
            console.log(`View full guide for: ${weedName}`);
            alert(`Full guide for ${weedName} would open here.`);
        });
    });

    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../weeds-guide/index.html';
        });
    }
});