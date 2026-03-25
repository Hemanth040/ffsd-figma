document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.back-button');
    const workerCards = document.querySelectorAll('.worker-card');

    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../farmer-dashboard/index.html';
        });
    }

    workerCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('status-badge')) return;
            
            const name = this.querySelector('.worker-name').textContent;
            const period = this.querySelector('.worker-period').textContent;
            const hours = this.querySelectorAll('.stat-item .stat-value')[0].textContent;
            const rate = this.querySelectorAll('.stat-item .stat-value')[1].textContent;
            const total = this.querySelector('.stat-item.total .stat-value').textContent;
            
            console.log('Worker wages:', { name, period, hours, rate, total });
            
            alert(`Worker: ${name}\nPeriod: ${period}\nHours: ${hours}\nRate: ${rate}\nTotal: ${total}`);
        });
    });

    let totalAmount = 0;
    workerCards.forEach(card => {
        const amount = card.querySelector('.stat-item.total .stat-value').textContent;
        const numericValue = parseInt(amount.replace(/[^0-9]/g, ''));
        totalAmount += numericValue;
    });

    console.log('Total wages for February 2026:', totalAmount);
});