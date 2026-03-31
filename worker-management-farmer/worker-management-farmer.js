const workers = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Supervisor",
        field: "Field A - Wheat",
        phone: "+91 98765 43210",
        email: "rajesh.kumar@farm.com",
        status: "active",
        attendance: 95,
        tasks: 48,
        joinedDate: "Jan 2024"
    },
    {
        id: 2,
        name: "Priya Singh",
        role: "Worker",
        field: "Field B - Rice",
        phone: "+91 98765 43211",
        email: "priya.singh@farm.com",
        status: "active",
        attendance: 92,
        tasks: 45,
        joinedDate: "Mar 2024"
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "Worker",
        field: "Field C - Corn",
        phone: "+91 98765 43212",
        email: "amit.patel@farm.com",
        status: "on-leave",
        attendance: 88,
        tasks: 42,
        joinedDate: "Jun 2024"
    },
    {
        id: 4,
        name: "Vikram Reddy",
        role: "Technician",
        field: "All Fields",
        phone: "+91 98765 43213",
        email: "vikram.reddy@farm.com",
        status: "active",
        attendance: 98,
        tasks: 52,
        joinedDate: "Feb 2024"
    },
    {
        id: 5,
        name: "Sunita Devi",
        role: "Worker",
        field: "Field D - Vegetables",
        phone: "+91 98765 43214",
        email: "sunita.devi@farm.com",
        status: "active",
        attendance: 90,
        tasks: 44,
        joinedDate: "Apr 2024"
    }
];

let currentFilter = 'all';

function renderWorkers() {
    const grid = document.getElementById('workersGrid');
    const filteredWorkers = currentFilter === 'all' 
        ? workers 
        : workers.filter(w => w.status === currentFilter);
    
    grid.innerHTML = filteredWorkers.map(worker => `
        <div class="worker-card ${worker.status === 'on-leave' ? 'on-leave' : ''}">
            <div class="worker-header">
                <div class="worker-avatar">
                    <span class="initials">${getInitials(worker.name)}</span>
                </div>
                <div class="worker-info">
                    <h3 class="worker-name">${worker.name}</h3>
                    <p class="worker-role">${worker.role}</p>
                    <span class="worker-status ${worker.status}">${formatStatus(worker.status)}</span>
                </div>
            </div>
            <div class="worker-details">
                <div class="detail-item">
                    <span class="detail-label">Field</span>
                    <span class="detail-value">${worker.field}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Joined</span>
                    <span class="detail-value">${worker.joinedDate}</span>
                </div>
            </div>
            <div class="worker-actions">
                <button class="btn-action" onclick="viewWorkerDetails(${worker.id})">View</button>
                <button class="btn-action primary">Edit</button>
            </div>
        </div>
    `).join('');
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function formatStatus(status) {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function viewWorkerDetails(workerId) {
    const worker = workers.find(w => w.id === workerId);
    if (!worker) return;

    document.getElementById('workerDetailsContent').innerHTML = `
        <div class="details-header">
            <div class="details-avatar">
                <span class="initials">${getInitials(worker.name)}</span>
            </div>
            <div class="details-info">
                <h4>${worker.name}</h4>
                <p>${worker.role}</p>
                <span class="worker-status ${worker.status}">${formatStatus(worker.status)}</span>
            </div>
        </div>
        <div class="details-grid">
            <div class="details-item">
                <label>Phone</label>
                <span>${worker.phone}</span>
            </div>
            <div class="details-item">
                <label>Email</label>
                <span>${worker.email}</span>
            </div>
            <div class="details-item">
                <label>Assigned Field</label>
                <span>${worker.field}</span>
            </div>
            <div class="details-item">
                <label>Joined Date</label>
                <span>${worker.joinedDate}</span>
            </div>
            <div class="details-item">
                <label>Attendance Rate</label>
                <span>${worker.attendance}%</span>
            </div>
            <div class="details-item">
                <label>Tasks Completed</label>
                <span>${worker.tasks}</span>
            </div>
        </div>
    `;

    document.getElementById('workerDetailsModal').classList.add('show');
}

function closeWorkerDetailsModal() {
    document.getElementById('workerDetailsModal').classList.remove('show');
}

function openAddWorkerModal() {
    document.getElementById('addWorkerModal').classList.add('show');
}

function closeAddWorkerModal() {
    document.getElementById('addWorkerModal').classList.remove('show');
    document.getElementById('addWorkerForm').reset();
}

document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderWorkers();
    });
});

document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const grid = document.getElementById('workersGrid');
    
    const filteredWorkers = workers.filter(w => 
        w.name.toLowerCase().includes(searchTerm) ||
        w.role.toLowerCase().includes(searchTerm) ||
        w.field.toLowerCase().includes(searchTerm)
    );
    
    grid.innerHTML = filteredWorkers.map(worker => `
        <div class="worker-card ${worker.status === 'on-leave' ? 'on-leave' : ''}">
            <div class="worker-header">
                <div class="worker-avatar">
                    <span class="initials">${getInitials(worker.name)}</span>
                </div>
                <div class="worker-info">
                    <h3 class="worker-name">${worker.name}</h3>
                    <p class="worker-role">${worker.role}</p>
                    <span class="worker-status ${worker.status}">${formatStatus(worker.status)}</span>
                </div>
            </div>
            <div class="worker-details">
                <div class="detail-item">
                    <span class="detail-label">Field</span>
                    <span class="detail-value">${worker.field}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Joined</span>
                    <span class="detail-value">${worker.joinedDate}</span>
                </div>
            </div>
            <div class="worker-actions">
                <button class="btn-action" onclick="viewWorkerDetails(${worker.id})">View</button>
                <button class="btn-action primary">Edit</button>
            </div>
        </div>
    `).join('');
});

document.getElementById('addWorkerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newWorker = {
        id: workers.length + 1,
        name: document.getElementById('workerName').value,
        role: document.getElementById('workerRole').value,
        field: document.getElementById('workerField').value,
        phone: document.getElementById('workerPhone').value,
        email: document.getElementById('workerEmail').value,
        status: document.getElementById('workerStatus').value,
        attendance: 0,
        tasks: 0,
        joinedDate: "Mar 2026"
    };
    
    workers.push(newWorker);
    renderWorkers();
    closeAddWorkerModal();
});

document.getElementById('workerDetailsModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeWorkerDetailsModal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    renderWorkers();
});
