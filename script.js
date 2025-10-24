async function sendMessage() {
  const input = document.getElementById("userInput").value;
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB6wnMACXRYvkg76SZTxyPD3EvvxRjDEGw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: input }] }]
    })
  });
  const data = await response.json();
  const reply = data.candidates[0].content.parts[0].text;
  document.getElementById("chatLog").value += `You: ${input}\nBot: ${reply}\n`;
  document.getElementById("userInput").value = "";
}