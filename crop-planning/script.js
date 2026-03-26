document.addEventListener('DOMContentLoaded', function() {
    const addCropBtn = document.querySelector('.add-crop-btn');
    
    if (addCropBtn) {
        addCropBtn.addEventListener('click', function() {
            window.location.href = '../plan-new-crop/index.html';
        });
    }

    const viewDetailsBtns = document.querySelectorAll('.btn-outline');
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            window.location.href = '../wheat-crop-activity/index.html';
        });
    });

    const manageBtns = document.querySelectorAll('.btn-primary');
    manageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            window.location.href = '../modify-crop-timeline/index.html';
        });
    });
});
