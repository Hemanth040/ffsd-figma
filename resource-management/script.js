document.addEventListener('DOMContentLoaded', function() {
    const updateStockBtns = document.querySelectorAll('.update-stock-btn');
    
    updateStockBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.resource-card');
            const title = card.querySelector('.card-title').textContent;
            alert(`Update stock for ${title}`);
        });
    });
});