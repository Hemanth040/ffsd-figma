const workers = [
    {
        id: 1,
        name: "John Smith",
        email: "john.smith@farm.com",
        password: "password123",
        role: "Worker",
        employeeId: "EMP001"
    },
    {
        id: 2,
        name: "Maria Garcia",
        email: "maria.garcia@farm.com",
        password: "password123",
        role: "Supervisor",
        employeeId: "EMP002"
    },
    {
        id: 3,
        name: "David Johnson",
        email: "david.johnson@farm.com",
        password: "password123",
        role: "Worker",
        employeeId: "EMP003"
    }
];

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        `;
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        `;
    }
}

function showToast(type, message) {
    const toastId = type === 'error' ? 'errorToast' : 'successToast';
    const toast = document.getElementById(toastId);
    
    if (type === 'error') {
        document.getElementById('toastMessage').textContent = message;
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function login(email, password) {
    const worker = workers.find(w => w.email.toLowerCase() === email.toLowerCase());
    
    if (!worker) {
        return { success: false, message: 'Worker not found. Please check your email.' };
    }
    
    if (worker.password !== password) {
        return { success: false, message: 'Invalid password. Please try again.' };
    }
    
    sessionStorage.setItem('currentWorker', JSON.stringify(worker));
    return { success: true, worker: worker };
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const submitBtn = document.querySelector('.btn-submit');
    
    if (!email || !password) {
        showToast('error', 'Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        showToast('error', 'Please enter a valid email address');
        return;
    }
    
    submitBtn.classList.add('loading');
    
    setTimeout(() => {
        const result = login(email, password);
        
        submitBtn.classList.remove('loading');
        
        if (result.success) {
            showToast('success', 'Login successful! Redirecting...');
            
            setTimeout(() => {
                if (result.worker.role === 'Supervisor') {
                    window.location.href = '../supervisor-dashboard/index.html';
                } else {
                    window.location.href = '../worker-dashboard/index.html';
                }
            }, 1500);
        } else {
            showToast('error', result.message);
        }
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('rememberMe').checked = true;
    }
});

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('loginForm').dispatchEvent(new Event('submit'));
        }
    });
});
