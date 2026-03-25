const paymentHistory = [
    {
        id: 1,
        month: "February 2026",
        date: "28 February 2026",
        amount: "₹1,18,000",
        workers: 24,
        status: "paid"
    },
    {
        id: 2,
        month: "January 2026",
        date: "31 January 2026",
        amount: "₹1,12,500",
        workers: 23,
        status: "paid"
    },
    {
        id: 3,
        month: "December 2025",
        date: "31 December 2025",
        amount: "₹1,25,000",
        workers: 25,
        status: "paid"
    }
];

const earningsData = [
    { label: "Base Salary", value: "₹85,000" },
    { label: "Overtime", value: "₹12,500" },
    { label: "Bonuses", value: "₹8,000" },
    { label: "Deductions", value: "-₹6,000", positive: false },
    { label: "Net Pay", value: "₹99,500", positive: true }
];

function renderPaymentHistory() {
    const list = document.getElementById('historyList');
    list.innerHTML = paymentHistory.map((payment, index) => `
        <div class="history-card ${index === 0 ? 'latest' : ''}">
            <div class="history-info">
                <span class="history-month">${payment.month}</span>
                <span class="history-date">${payment.date} • ${payment.workers} workers</span>
            </div>
            <div style="text-align: right;">
                <div class="history-amount">${payment.amount}</div>
                <span class="history-status ${payment.status}">${payment.status}</span>
            </div>
        </div>
    `).join('');
}

function renderEarnings() {
    const list = document.getElementById('earningsList');
    list.innerHTML = earningsData.map(item => `
        <div class="earning-item">
            <span class="earning-label">${item.label}</span>
            <span class="earning-value ${item.positive ? 'positive' : ''}">${item.value}</span>
        </div>
    `).join('');
}

function openPaymentModal() {
    document.getElementById('paymentModal').classList.add('show');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('show');
    document.getElementById('paymentForm').reset();
}

function showToast() {
    const toast = document.getElementById('successToast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const month = document.getElementById('paymentMonth').value;
    const type = document.getElementById('paymentType').value;
    const amount = document.getElementById('totalAmount').value;
    const method = document.getElementById('paymentMethod').value;
    
    console.log('Processing payment:', { month, type, amount, method });
    
    const monthNames = {
        'march-2026': 'March 2026',
        'february-2026': 'February 2026',
        'january-2026': 'January 2026'
    };
    
    const newPayment = {
        id: paymentHistory.length + 1,
        month: monthNames[month],
        date: new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }),
        amount: "₹" + parseInt(amount).toLocaleString(),
        workers: 24,
        status: "paid"
    };
    
    paymentHistory.unshift(newPayment);
    renderPaymentHistory();
    closePaymentModal();
    showToast();
});

document.getElementById('paymentModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closePaymentModal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    renderPaymentHistory();
    renderEarnings();
});
