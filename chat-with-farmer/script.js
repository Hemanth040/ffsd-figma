const issues = [
    {
        id: 1,
        title: "Tractor Engine Problem",
        farmer: "Vikram Reddy",
        date: "2026-03-03",
        status: "open",
        priority: "high",
        category: "equipment",
        description: "The tractor engine is making unusual noises and experiencing power loss. Needs immediate inspection."
    },
    {
        id: 2,
        title: "Irrigation Pipe Leak",
        farmer: "Priya Singh",
        date: "2026-03-02",
        status: "in-progress",
        priority: "medium",
        category: "infrastructure",
        description: "Water leakage from main irrigation pipe in sector B. Partial blockage causing low water flow."
    },
    {
        id: 3,
        title: "Low Water Pressure",
        farmer: "Rajesh Kumar",
        date: "2026-03-01",
        status: "resolved",
        priority: "low",
        category: "water",
        description: "Water pressure in the main pipeline has been restored to normal levels after pump maintenance."
    },
    {
        id: 4,
        title: "Fertilizer Quality Concern",
        farmer: "Amit Patel",
        date: "2026-02-28",
        status: "open",
        priority: "medium",
        category: "resources",
        description: "Suspected poor quality fertilizer delivered last week. Plants showing unusual yellowing symptoms."
    }
];

function renderIssues() {
    const issuesList = document.getElementById('issuesList');
    issuesList.innerHTML = issues.map(issue => `
        <div class="issue-card status-${issue.status}">
            <div class="issue-header">
                <h3 class="issue-title">${issue.title}</h3>
                <div class="issue-meta">
                    <span class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        ${issue.farmer}
                    </span>
                    <span class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        ${issue.date}
                    </span>
                </div>
            </div>
            <div class="badges-container">
                <span class="badge badge-status ${issue.status}">${issue.status.replace('-', ' ')}</span>
                <span class="badge badge-priority ${issue.priority}">${issue.priority}</span>
                <span class="badge badge-category">${issue.category}</span>
            </div>
            <div class="issue-actions">
                <button class="btn btn-outline" onclick="viewDetails(${issue.id})">View Details</button>
                <button class="btn btn-primary" onclick="openStatusModal(${issue.id})">Update Status</button>
            </div>
        </div>
    `).join('');
}

function viewDetails(id) {
    const issue = issues.find(i => i.id === id);
    if (!issue) return;

    const modal = document.getElementById('detailsModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h2>${issue.title}</h2>
        <div class="detail-row">
            <span class="detail-label">Farmer:</span>
            <span class="detail-value">${issue.farmer}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Date:</span>
            <span class="detail-value">${issue.date}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Status:</span>
            <span class="badge badge-status ${issue.status}">${issue.status.replace('-', ' ')}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Priority:</span>
            <span class="badge badge-priority ${issue.priority}">${issue.priority}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Category:</span>
            <span class="badge badge-category">${issue.category}</span>
        </div>
        <div class="detail-row" style="flex-direction: column; gap: 8px;">
            <span class="detail-label">Description:</span>
            <span class="detail-value">${issue.description}</span>
        </div>
    `;

    modal.classList.add('active');
}

function openStatusModal(id) {
    const issue = issues.find(i => i.id === id);
    if (!issue) return;

    const modal = document.getElementById('statusModal');
    const statusOptions = document.getElementById('statusOptions');

    const statuses = ['open', 'in-progress', 'resolved'];
    statusOptions.innerHTML = statuses.map(status => `
        <div class="status-option ${status}" onclick="updateStatus(${issue.id}, '${status}')">
            ${status.replace('-', ' ').toUpperCase()}
        </div>
    `).join('');

    modal.classList.add('active');
}

function updateStatus(id, newStatus) {
    const issue = issues.find(i => i.id === id);
    if (issue) {
        issue.status = newStatus;
        renderIssues();
    }
    closeModal('statusModal');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

document.getElementById('closeModal').addEventListener('click', () => closeModal('detailsModal'));
document.getElementById('closeStatusModal').addEventListener('click', () => closeModal('statusModal'));

document.getElementById('detailsModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('detailsModal')) {
        closeModal('detailsModal');
    }
});

document.getElementById('statusModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('statusModal')) {
        closeModal('statusModal');
    }
});

document.addEventListener('DOMContentLoaded', renderIssues);
