document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const searchInput = document.getElementById('searchInput');
    const weedCards = document.querySelectorAll('.weed-card');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        weedCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const scientific = card.querySelector('.scientific-name').textContent.toLowerCase();
            const crop = card.dataset.crop;

            if (title.includes(searchTerm) || scientific.includes(searchTerm) || crop.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            if (tab !== 'weeds') {
                if (tab === 'diseases') {
                    window.location.href = '../disease-guide/index.html';
                } else if (tab === 'pesticides') {
                    window.location.href = '../pesticides/index.html';
                } else if (tab === 'fertilizers') {
                    window.location.href = '../fertilizers/index.html';
                }
            }
        });
    });

    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            const source = sessionStorage.getItem('userSource');
            if (source === 'supervisor') {
                window.location.href = '../supervisor-dashboard/index.html';
            } else {
                window.location.href = '../farmer-dashboard/index.html';
            }
        });
    }

    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const weedCard = btn.closest('.weed-card');
            const weedName = weedCard.querySelector('h3').textContent;
            
            if (btn.textContent === 'View Full Guide') {
                alert(`Opening full guide for ${weedName}`);
            } else if (btn.textContent === 'Find Herbicides') {
                alert(`Finding herbicides for ${weedName}`);
            }
        });
    });
});