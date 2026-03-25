document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.back-button');
    
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../disease-guide/index.html';
        });
    }

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.timeline-title').textContent;
            const duration = this.querySelector('.timeline-duration').textContent;
            const desc = this.querySelector('.timeline-desc').textContent;
            
            console.log(`Timeline: ${title} - ${duration}`);
        });
    });

    const treatmentItems = document.querySelectorAll('.treatment-item');
    treatmentItems.forEach(item => {
        const button = document.createElement('button');
        button.className = 'apply-button';
        button.textContent = 'View Product';
        button.style.cssText = 'margin-top: 12px; padding: 8px 16px; font-size: 13px; font-weight: 600; color: #374151; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 6px; cursor: pointer;';
        
        button.addEventListener('click', function() {
            const treatmentName = item.querySelector('.treatment-name').textContent;
            alert(`Viewing product details for ${treatmentName}`);
        });
        
        item.querySelector('.treatment-details').appendChild(button);
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});