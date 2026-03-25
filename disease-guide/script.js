document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const searchInput = document.querySelector('.search-input');
    const diseaseCards = document.querySelectorAll('.disease-card');
    const actionButtons = document.querySelectorAll('.action-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            diseaseCards.forEach(card => {
                const diseaseName = card.querySelector('.disease-name').textContent.toLowerCase();
                const cropTag = card.querySelector('.crop-tag').textContent.toLowerCase();
                const symptoms = card.querySelector('.info-text').textContent.toLowerCase();
                
                if (diseaseName.includes(searchTerm) || cropTag.includes(searchTerm) || symptoms.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            const diseaseCard = this.closest('.disease-card');
            const diseaseName = diseaseCard.querySelector('.disease-name').textContent;
            
            if (buttonText === 'View Full Guide') {
                console.log(`View full guide for: ${diseaseName}`);
                window.location.href = `../disease-leaf-rust/index.html`;
            } else if (buttonText === 'Find Products') {
                console.log(`Find products for: ${diseaseName}`);
                window.location.href = '../pesticides/index.html';
            }
        });
    });

    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }
});