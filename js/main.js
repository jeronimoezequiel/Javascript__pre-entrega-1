import chatBotService from "./chatbotservices.js";
const chatBody = document.querySelector(".chat__body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loadingEle = document.querySelector(".loading");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
    if(event.keyCode === 13) {
        renderUserMessage();
    }
});

const renderUserMessage = () => {
    const userInput = txtInput.value;
    renderMessageEle(userInput, "user");
    txtInput.value = "";
    toggleLoading(false);
    renderChatbotResponse(userInput);
};

const renderChatbotResponse = (userInput) =>{
    const res = getChatbotResponse(userInput);
};

const renderMessageEle = (txt, type) => {
    let className="user-message";
    
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    
    messageEle.append(txtNode);

    if(type!=='user'){
        className="chatbot-message";
        messageEle.classList.add(className);
        const botResponseContainer = document.createElement("div");
        botResponseContainer.classList.add("bot-response-container");
        botResponseContainer.append(messageEle);
        chatBody.append(botResponseContainer);
    }
    else{
        messageEle.classList.add(className);
        chatBody.append(messageEle);
    }

    
};

const getChatbotResponse = (userInput) =>{
    chatBotService
        .getBotResponse(userInput)
        .then((response) => {
            renderMessageEle(response);
            setScrollPosition(); 
            toggleLoading(true);
    })
    .catch(error=>{
        toggleLoading(true);
    })
};

const setScrollPosition = () => {
    if(chatBody.scrollHeight > 0) {
        chatBody.scrollTop=chatBody.scrollHeight;
    }
};

const toggleLoading = (show) =>loadingEle.classList.toggle("hide", show)