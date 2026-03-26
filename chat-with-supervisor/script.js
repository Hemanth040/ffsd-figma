document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const messagesContainer = document.getElementById('messagesContainer');
    const backBtn = document.querySelector('.back-btn');

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.history.back();
        });
    }

    function sendMessage() {
        const messageText = messageInput.value.trim();
        
        if (!messageText) return;

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        const timeString = `${displayHours}:${minutes} ${ampm}`;

        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-bubble">
                <p class="sender-name">You</p>
                <p class="message-text">${escapeHtml(messageText)}</p>
                <p class="message-time">${timeString}</p>
            </div>
        `;

        messagesContainer.appendChild(messageDiv);
        
        messageInput.value = '';

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    sendBtn.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    messageInput.focus();
});