const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyA5LY8Al7wI_rcVtt7MYBsdGeeiFF46ed8");
const readline = require('redline')
async function chatWithGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response.text();
  console.log("Gemini:", response);
}

// Example usage
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  rl.question("You: ", async (userInput) => {
    if (userInput.toLowerCase() === "exit") {
      rl.close();
      return;
    }
    await chatWithGemini(userInput);
    askQuestion();
  });
}

askQuestion();
