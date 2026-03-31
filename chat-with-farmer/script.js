function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value.trim();
    
    if (messageText) {
        const messagesContainer = document.querySelector('.chat-messages');
        
        const newMessage = document.createElement('div');
        newMessage.className = 'message you-message';
        newMessage.innerHTML = `
            <div class="message-content">
                <p class="message-text">${messageText}</p>
                <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
        `;
        
        messagesContainer.appendChild(newMessage);
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
