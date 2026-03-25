document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.back-button');
    const viewDetailsButtons = document.querySelectorAll('.action-btn.outline');
    const updateStatusButtons = document.querySelectorAll('.action-btn.filled');
    const issueCards = document.querySelectorAll('.issue-card');

    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../farmer-dashboard/index.html';
        });
    }

    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const issueTitle = this.closest('.issue-card').querySelector('.issue-title').textContent;
            console.log('View details for:', issueTitle);
            alert(`Issue Details for: ${issueTitle}\n\nFull description and history would be shown here.`);
        });
    });

    updateStatusButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const issueCard = this.closest('.issue-card');
            const issueTitle = issueCard.querySelector('.issue-title').textContent;
            const currentStatus = issueCard.querySelector('.status-badge').textContent;
            
            const statuses = ['open', 'in-progress', 'resolved'];
            const currentIndex = statuses.indexOf(currentStatus);
            const nextStatus = statuses[(currentIndex + 1) % statuses.length];
            
            if (confirm(`Update status of "${issueTitle}" to "${nextStatus}"?`)) {
                const statusBadge = issueCard.querySelector('.status-badge');
                statusBadge.textContent = nextStatus;
                statusBadge.className = `status-badge ${nextStatus}`;
                
                issueCard.className = `issue-card ${nextStatus}`;
                
                console.log(`Status updated to: ${nextStatus}`);
            }
        });
    });

    issueCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('action-btn')) return;
            
            const title = this.querySelector('.issue-title').textContent;
            const reporter = this.querySelector('.issue-reporter').textContent.trim();
            const date = this.querySelector('.issue-date').textContent.trim();
            const status = this.querySelector('.status-badge').textContent;
            const priority = this.querySelector('.priority-badge').textContent;
            const category = this.querySelector('.category-badge').textContent;
            
            console.log('Issue clicked:', { title, reporter, date, status, priority, category });
        });
    });
});