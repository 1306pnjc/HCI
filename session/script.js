// Wait for the DOM content to load before running scripts
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check local storage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Store preference in local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Function to simulate sending a message
    const sendMessage = () => {
        const chatInputField = document.getElementById('chatInputField');
        const chatBoxContainer = document.getElementById('chatBoxContainer');

        const message = chatInputField.value.trim();

        if (message) {
            // Display user message
            const userMessageDiv = document.createElement('div');
            userMessageDiv.classList.add('chat-message', 'user-message');
            userMessageDiv.textContent = message;
            chatBoxContainer.appendChild(userMessageDiv);

            // Scroll to the latest message
            chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;

            // Clear input field
            chatInputField.value = '';

            // Simulate bot reply after 1 second
            setTimeout(() => {
                const botMessageDiv = document.createElement('div');
                botMessageDiv.classList.add('chat-message', 'bot-message');
                botMessageDiv.textContent = `Bot says: "${generateBotReply(message)}"`;
                chatBoxContainer.appendChild(botMessageDiv);

                // Scroll to the latest message
                chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
            }, 1000);
        }
    }

    // Event listener for send button
    document.getElementById("send-Btn").addEventListener("click", sendMessage);

    // Event listener for Enter key to send message
    document.getElementById('chatInputField').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Generate a random bot reply based on the user's message
    const generateBotReply = (userMessage) => {
        const replies = [
            "I’m not sure I understand. Could you clarify?",
            "That's interesting! Tell me more.",
            "Could you rephrase that for me?",
            "I can help with that. Let me think...",
            "Nice question! Let me check...",
            "Let me look into that for you.",
            "Thanks for your input! Anything else?"
        ];

        // Basic reply based on the user's message
        return replies[Math.floor(Math.random() * replies.length)];
    }
});
