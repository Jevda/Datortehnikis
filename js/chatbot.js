// Globālie mainīgie čatam
let chatIsOpen = false;
let chatHistory = [];
let isTyping = false;

// Čata pārslēgšanas funkcija
function toggleChat() {
    chatIsOpen = !chatIsOpen;
    const chatContainer = document.getElementById('chatContainer');
    const chatToggle = document.querySelector('.chat-toggle');

    if (chatIsOpen) {
        chatContainer.classList.add('active');
        chatToggle.style.display = 'none';
        document.getElementById('chatInput').focus();

        // Ritināt uz leju
        scrollToBottom();
    } else {
        chatContainer.classList.remove('active');
        chatToggle.style.display = 'block';
    }
}

// Ziņojuma nosūtīšana
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    // Pārbaudes
    if (!message || isTyping) return;

    // Notīrām ievades lauku
    input.value = '';

    // Pievienojam lietotāja ziņojumu
    addMessageToChat(message, 'user');

    // Bloķējam nosūtīšanu
    isTyping = true;
    setInputState(false);

    // Parādām rakstīšanas indikatoru
    showTypingIndicator();

    try {
        // Sūtām pieprasījumu uz serveri
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                history: chatHistory.slice(-10) // Pēdējie 10 ziņojumi kontekstam
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP kļūda! statuss: ${response.status}`);
        }

        const data = await response.json();

        // Noņemam indikatoru un pievienojam atbildi
        hideTypingIndicator();

        if (data.error) {
            addMessageToChat('Atvainojiet, radās kļūda. Lūdzu, mēģiniet vēlreiz.', 'bot');
            console.error('Servera kļūda:', data.error);
        } else {
            addMessageToChat(data.reply, 'bot');
        }

    } catch (error) {
        hideTypingIndicator();
        addMessageToChat('Atvainojiet, nevar savienoties ar serveri. Pārbaudiet, vai serveris darbojas.', 'bot');
        console.error('Kļūda:', error);
    } finally {
        isTyping = false;
        setInputState(true);
        input.focus();
    }
}

// Ziņojuma pievienošana čatam
function addMessageToChat(message, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;

    // Apstrādājam formatējumu kodam
    const formattedMessage = formatMessage(message);
    messageDiv.innerHTML = `<p>${formattedMessage}</p>`;

    messagesContainer.appendChild(messageDiv);

    // Parādīšanās animācija
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(10px)';
    setTimeout(() => {
        messageDiv.style.transition = 'all 0.3s ease';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 10);

    // Saglabājam vēsturē
    chatHistory.push({ role: sender, content: message });

    // Ritināt uz leju
    scrollToBottom();
}

// Ziņojuma formatēšana (koda atbalsts)
function formatMessage(message) {
    // Aizstājam koda blokus
    message = message.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

    // Aizstājam inline kodu
    message = message.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Aizstājam jaunas rindiņas
    message = message.replace(/\n/g, '<br>');

    return message;
}

// Rakstīšanas indikators
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');

    const indicator = document.createElement('div');
    indicator.className = 'chat-message bot-message typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    messagesContainer.appendChild(indicator);
    scrollToBottom();
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Ievades stāvokļa pārvaldība
function setInputState(enabled) {
    const input = document.getElementById('chatInput');
    const button = document.getElementById('sendButton');

    input.disabled = !enabled;
    button.disabled = !enabled;

    if (enabled) {
        button.textContent = '📤';
    } else {
        button.textContent = '⏳';
    }
}

// Čata ritināšana uz leju
function scrollToBottom() {
    const messagesContainer = document.getElementById('chatMessages');
    setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 100);
}

// Enter taustiņa apstrāde ievades laukā
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Inicializācija lapas ielādes laikā
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 Čata bots inicializēts!');

    // Pievienojam apstrādātāju ievades laukam
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', handleKeyPress);
    }

    // Sveiciena ziņojums
    setTimeout(() => {
        if (!chatHistory.length) {
            addMessageToChat('Sveiki! 👋 Es esmu jūsu JavaScript palīgs. Uzdodiet jebkādus jautājumus par programmēšanu vai uzdevumiem šajā vietnē!', 'bot');
        }
    }, 500);
});