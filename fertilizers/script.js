document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const filterButtons = document.querySelectorAll('.filter-button');
    const searchInput = document.querySelector('.search-input');
    const categoryCards = document.querySelectorAll('.category-card');
    const guideButtons = document.querySelectorAll('.guide-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const tabName = this.textContent.toLowerCase();
            if (tabName === 'diseases') {
                window.location.href = '../disease-guide/index.html';
            } else if (tabName === 'pesticides') {
                window.location.href = '../pesticides/index.html';
            } else if (tabName === 'weeds') {
                window.location.href = '../weeds-guide/index.html';
            }
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            categoryCards.forEach(card => {
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
            
            categoryCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                const fertilizerItems = card.querySelectorAll('.fertilizer-item');
                
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    let hasMatch = false;
                    fertilizerItems.forEach(item => {
                        const itemText = item.textContent.toLowerCase();
                        if (itemText.includes(searchTerm)) {
                            item.style.display = 'flex';
                            hasMatch = true;
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    
                    if (hasMatch || searchTerm === '') {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    }

    guideButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fertilizerName = this.closest('.fertilizer-item').querySelector('.fertilizer-name').textContent;
            console.log(`View application guide for: ${fertilizerName}`);
            alert(`Application Guide for ${fertilizerName} would open here.`);
        });
    });

    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }
});