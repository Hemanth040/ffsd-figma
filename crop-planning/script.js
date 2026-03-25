document.addEventListener('DOMContentLoaded', function() {
    const addCropBtn = document.getElementById('addCropBtn');
    
    if (addCropBtn) {
        addCropBtn.addEventListener('click', function() {
            alert('Add New Crop modal would open here');
        });
    }

    const cropCards = document.querySelectorAll('.crop-card');
    cropCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Crop card clicked');
        });
    });
});
