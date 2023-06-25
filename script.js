// Listening function setup
function listen() {
  let inputArea = document.getElementById('input-area')
  let outputArea = document.getElementById('output-area')

  // speech rec config fuck shes playing me
  var speech = new webkitSpeechRecognition();
  speech.lang = "en-US";
  speech.start();

  // config transcript i dont wanna go i thought we were going to the movies
  speech.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    if (transcript.includes("hello")) {
         outputArea.innerHTML = "Hello, Mr. Raman."
    } else if (transcript.includes("weather")) {
        window.open("https://www.google.com/search?q=weather") 
    } else {
        outputArea.innerHTML = "I don't know what you mean."
    }
    inputArea.innerHTML = event.results[0][0].transcript;
  }
}

async function gpt(event) {
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly."
  // \n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: ",
  temperature: 0.9,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: [" Human:", " AI:"],
});
