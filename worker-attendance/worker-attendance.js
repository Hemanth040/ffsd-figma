const attendanceRecords = [
    {
        id: 1,
        date: "2026-03-24",
        day: "Tuesday",
        checkIn: "08:00 AM",
        checkOut: "05:00 PM",
        status: "present"
    },
    {
        id: 2,
        date: "2026-03-23",
        day: "Monday",
        checkIn: "08:15 AM",
        checkOut: "05:00 PM",
        status: "present"
    },
    {
        id: 3,
        date: "2026-03-22",
        day: "Sunday",
        checkIn: "-",
        checkOut: "-",
        status: "absent"
    },
    {
        id: 4,
        date: "2026-03-21",
        day: "Saturday",
        checkIn: "08:30 AM",
        checkOut: "04:00 PM",
        status: "late"
    }
];

const leaveRequests = [
    {
        id: 1,
        type: "Sick Leave",
        startDate: "2026-03-15",
        endDate: "2026-03-16",
        days: 2,
        status: "approved"
    },
    {
        id: 2,
        type: "Annual Leave",
        startDate: "2026-04-10",
        endDate: "2026-04-15",
        days: 6,
        status: "pending"
    }
];

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function getDayName(dateStr) {
    const date = new Date(dateStr);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

function renderAttendanceRecords() {
    const list = document.getElementById('attendanceList');
    list.innerHTML = attendanceRecords.map(record => `
        <div class="record-entry ${record.status === 'absent' ? 'absent' : ''}">
            <div class="record-info">
                <div class="record-avatar ${record.status}">
                    ${record.status === 'present' || record.status === 'late' ? `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    ` : `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    `}
                </div>
                <div class="record-details">
                    <span class="record-date">${formatDate(record.date)} - ${getDayName(record.date)}</span>
                    <span class="record-time">${record.checkIn} - ${record.checkOut}</span>
                </div>
            </div>
            <span class="record-badge ${record.status}">${record.status}</span>
        </div>
    `).join('');
}

function renderLeaveRequests() {
    const list = document.getElementById('leaveRequestsList');
    list.innerHTML = leaveRequests.map(request => `
        <div class="request-card">
            <div class="request-header">
                <span class="request-type">${request.type}</span>
                <span class="request-status ${request.status}">${request.status}</span>
            </div>
            <div class="request-dates">
                ${formatDate(request.startDate)} - ${formatDate(request.endDate)}
            </div>
            <div class="request-days">${request.days} <span class="request-label">days</span></div>
        </div>
    `).join('');
}

function openLeaveModal() {
    document.getElementById('leaveModal').classList.add('show');
}

function closeLeaveModal() {
    document.getElementById('leaveModal').classList.remove('show');
    document.getElementById('leaveForm').reset();
}

document.getElementById('leaveForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newRequest = {
        id: leaveRequests.length + 1,
        type: document.getElementById('leaveType').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        days: Math.ceil((new Date(document.getElementById('endDate').value) - new Date(document.getElementById('startDate').value)) / (1000 * 60 * 60 * 24)) + 1,
        status: "pending"
    };
    
    leaveRequests.push(newRequest);
    renderLeaveRequests();
    closeLeaveModal();
});

document.getElementById('leaveModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLeaveModal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    renderAttendanceRecords();
    renderLeaveRequests();
});
