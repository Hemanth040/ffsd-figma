document.addEventListener('DOMContentLoaded', function() {
    const markAttendanceBtn = document.getElementById('markAttendanceBtn');
    
    if (markAttendanceBtn) {
        markAttendanceBtn.addEventListener('click', function() {
            alert('Mark Attendance modal would open here');
        });
    }

    const approveButtons = document.querySelectorAll('.btn-approve');
    approveButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const leaveItem = this.closest('.leave-item');
            leaveItem.style.opacity = '0.5';
            setTimeout(() => {
                leaveItem.remove();
            }, 300);
        });
    });

    const rejectButtons = document.querySelectorAll('.btn-reject');
    rejectButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const leaveItem = this.closest('.leave-item');
            leaveItem.remove();
        });
    });
});
