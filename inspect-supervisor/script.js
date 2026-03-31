document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inspectionForm');
    const btnCancel = document.getElementById('btnCancel');
    const btnDraft = document.getElementById('btnDraft');
    const btnSubmit = document.getElementById('btnSubmit');
    const inspectionScore = document.getElementById('inspectionScore');
    const scoreValue = document.getElementById('scoreValue');
    const followUpRequired = document.getElementById('followUpRequired');
    const followUpDateGroup = document.getElementById('followUpDateGroup');
    const uploadArea = document.getElementById('uploadArea');
    const photoUpload = document.getElementById('photoUpload');
    const photoPreview = document.getElementById('photoPreview');
    const successModal = document.getElementById('successModal');
    const btnViewReport = document.getElementById('btnViewReport');
    const btnBackDashboard = document.getElementById('btnBackDashboard');

    const farmName = document.getElementById('farmName');
    const farmOwner = document.getElementById('farmOwner');
    const farmArea = document.getElementById('farmArea');
    const farmLastInsp = document.getElementById('farmLastInsp');
    const farmStatus = document.getElementById('farmStatus');
    const inspectionId = document.getElementById('inspectionId');

    function loadFarmData() {
        const params = new URLSearchParams(window.location.search);
        const farm = params.get('farm');

        const farmData = {
            'green-valley': {
                name: 'Green Valley Farm',
                owner: 'Farmer: Ram Singh',
                area: '50 Acres',
                lastInsp: 'Last Insp: 2024-03-01',
                status: 'Active'
            },
            'sunrise-organics': {
                name: 'Sunrise Organics',
                owner: 'Farmer: Vikram Sahay',
                area: '45 Acres',
                lastInsp: 'Last Insp: 2024-03-02',
                status: 'Active'
            },
            'harvest-fields': {
                name: 'Harvest Fields',
                owner: 'Farmer: Arjun Patel',
                area: '60 Acres',
                lastInsp: 'Last Insp: 2024-02-15',
                status: 'Needs Inspection'
            },
            'golden-crops': {
                name: 'Golden Crops Ltd',
                owner: 'Farmer: Priya Sharma',
                area: '120 Acres',
                lastInsp: 'Last Insp: 2024-02-28',
                status: 'Active'
            }
        };

        let data;
        if (farm && farmData[farm]) {
            data = farmData[farm];
        } else {
            data = farmData['green-valley'];
        }

        farmName.textContent = data.name;
        farmOwner.textContent = data.owner;
        farmArea.textContent = data.area;
        farmLastInsp.textContent = data.lastInsp;
        farmStatus.textContent = data.status;

        if (data.status === 'Needs Inspection') {
            farmStatus.classList.add('needs-inspection');
        }

        const randomId = Math.floor(Math.random() * 9000) + 1000;
        inspectionId.textContent = `INS-2024-${randomId}`;

        const today = new Date().toISOString().split('T')[0];
        document.getElementById('inspectionDate').value = today;
    }

    loadFarmData();

    inspectionScore.addEventListener('input', function() {
        scoreValue.textContent = this.value;
    });

    followUpRequired.addEventListener('change', function() {
        followUpDateGroup.style.display = this.value === 'yes' ? 'flex' : 'none';
    });

    uploadArea.addEventListener('click', function() {
        photoUpload.click();
    });

    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.borderColor = '#7C3AED';
        this.style.background = '#F5F3FF';
    });

    uploadArea.addEventListener('dragleave', function() {
        this.style.borderColor = '#E2E8F0';
        this.style.background = '#F8FAFC';
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.borderColor = '#E2E8F0';
        this.style.background = '#F8FAFC';
        handleFiles(e.dataTransfer.files);
    });

    photoUpload.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        for (const file of files) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    photoPreview.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        }
    }

    btnCancel.addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
            window.location.href = '../supervisor-dashboard/index.html';
        }
    });

    btnDraft.addEventListener('click', function() {
        const formData = {
            farmName: farmName.textContent,
            inspectionDate: document.getElementById('inspectionDate').value,
            inspectorName: document.getElementById('inspectorName').value,
            score: inspectionScore.value,
            status: 'draft'
        };

        const drafts = JSON.parse(localStorage.getItem('inspectionDrafts') || '[]');
        drafts.push(formData);
        localStorage.setItem('inspectionDrafts', JSON.stringify(drafts));

        alert('Inspection saved as draft!');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const checkedItems = form.querySelectorAll('input[name="compliance"]:checked');

        if (checkedItems.length === 0) {
            alert('Please complete at least one compliance checklist item.');
            return;
        }

        if (!document.getElementById('inspectorName').value) {
            alert('Please enter the inspector name.');
            return;
        }

        const formData = {
            inspectionId: inspectionId.textContent,
            farmName: farmName.textContent,
            inspectionDate: document.getElementById('inspectionDate').value,
            inspectorName: document.getElementById('inspectorName').value,
            weather: document.getElementById('weather').value,
            inspectionType: document.getElementById('inspectionType').value,
            score: inspectionScore.value,
            complianceItems: Array.from(checkedItems).map(cb => cb.value),
            observations: document.getElementById('observations').value,
            recommendations: document.getElementById('recommendations').value,
            followUpRequired: followUpRequired.value,
            followUpDate: followUpRequired.value === 'yes' ? document.getElementById('followUpDate').value : null,
            priority: document.getElementById('priority').value,
            submittedAt: new Date().toISOString()
        };

        console.log('Inspection submitted:', formData);

        const inspections = JSON.parse(localStorage.getItem('inspections') || '[]');
        inspections.push(formData);
        localStorage.setItem('inspections', JSON.stringify(inspections));

        document.getElementById('successMessage').textContent =
            `Inspection for ${formData.farmName} submitted with score ${formData.score}%.`;
        successModal.classList.add('active');
    });

    btnViewReport.addEventListener('click', function() {
        successModal.classList.remove('active');
        alert('Report view coming soon!');
    });

    btnBackDashboard.addEventListener('click', function() {
        successModal.classList.remove('active');
        window.location.href = '../supervisor-dashboard/index.html';
    });

    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.classList.remove('active');
            window.location.href = '../supervisor-dashboard/index.html';
        }
    });
});
