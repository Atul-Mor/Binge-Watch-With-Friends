document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('partyVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const exitPartyBtn = document.getElementById('exitPartyBtn');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const chatMessages = document.getElementById('chatMessages');
    const emojiList = document.querySelector('.emoji-list');

    // Video Controls
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    stopBtn.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    volumeSlider.addEventListener('input', () => {
        video.volume = volumeSlider.value / 100;
    });

    fullscreenBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    });

    exitPartyBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to exit the party?')) {
            window.location.href = 'index.html';
        }
    });

    // Chat Functionality
    function addMessage(sender, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.innerHTML = `
            <div class="sender">${sender}</div>
            <div class="content">${content}</div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendMessageBtn.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            addMessage('You', message);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessageBtn.click();
        }
    });

    // Emoji Picker
    emojiList.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            messageInput.value += e.target.textContent;
        }
    });

    // Simulate receiving messages (for demo purposes)
    setInterval(() => {
        const demoMessages = [
            { sender: 'Alex', content: 'This scene is amazing! 😮' },
            { sender: 'Sarah', content: 'I love this movie! ❤️' },
            { sender: 'Alex', content: 'The special effects are incredible! 🔥' }
        ];
        const randomMessage = demoMessages[Math.floor(Math.random() * demoMessages.length)];
        addMessage(randomMessage.sender, randomMessage.content);
    }, 10000); // Add a message every 10 seconds

    // Video event listeners
    video.addEventListener('play', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });

    video.addEventListener('pause', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // Handle fullscreen changes
    document.addEventListener('fullscreenchange', () => {
        fullscreenBtn.innerHTML = document.fullscreenElement ? 
            '<i class="fas fa-compress"></i>' : 
            '<i class="fas fa-expand"></i>';
    });
});