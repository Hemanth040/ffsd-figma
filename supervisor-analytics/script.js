document.addEventListener('DOMContentLoaded', function() {
    const exportBtn = document.querySelector('.export-btn');
    const viewButtons = document.querySelectorAll('.view-btn');

    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('Exporting report... This would generate a PDF/Excel report.');
        });
    }

    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const reportTitle = this.closest('.report-card').querySelector('.report-title').textContent;
            console.log('Viewing report:', reportTitle);
            alert(`Opening ${reportTitle}...`);
        });
    });

    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.history.back();
        });
    }
});