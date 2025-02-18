const chatBox = document.getElementById('chat-box');
const userMessageInput = document.getElementById('user-message');

// Simple AI responses
const responses = {
  "hello": "Hi there! How can I assist you today?",
  "how are you?": "I'm doing great! How about you?",
  "what is your name?": "I'm your friendly Satyam  assistant.",
  "bye": "Goodbye! Have a great day!",
  "Satyam" : "He is ...",
  "default": "I didn't quite get that. Can you try again?"
};

// Function to get current time for message timestamp
function getTimeStamp() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

// Display the typing indicator
function showTypingIndicator() {
  const typingIndicator = document.createElement('div');
  typingIndicator.classList.add('typing-indicator');
  typingIndicator.innerHTML = '<span></span><span></span><span></span>';
  chatBox.appendChild(typingIndicator);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
  return typingIndicator;
}

// Remove the typing indicator after a short delay
function removeTypingIndicator(typingIndicator) {
  setTimeout(() => {
    typingIndicator.remove();
  }, 1500);
}

// Function to send user message
function sendMessage() {
  const userMessage = userMessageInput.value.trim();

  if (userMessage) {
    displayMessage(userMessage, "user-message");

    // Show typing indicator for the bot response
    const typingIndicator = showTypingIndicator();

    // Simulate bot "thinking" for 1.5 seconds before responding
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      displayMessage(botResponse, "bot-message");
      removeTypingIndicator(typingIndicator);
    }, 1500);
  }

  userMessageInput.value = "";
}

// Function to display message in chat box
function displayMessage(message, className) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(className);
  messageElement.innerHTML = `<span>${message}</span><span class="timestamp">${getTimeStamp()}</span>`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Function to get bot response based on user input
function getBotResponse(userMessage) {
  userMessage = userMessage.toLowerCase();
  return responses[userMessage] || responses["default"];
}

// Welcome message on chatbot load
window.onload = () => {
  displayMessage("Hello! I'm your AI assistant. How can I help you today?", "bot-message");
};
