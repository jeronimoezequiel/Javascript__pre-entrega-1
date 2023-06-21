const responseObj = {
    Hola:
    "Hola! Mi nombre es Aura, esta es una versión de prueba. 😄 Cómo te gustaria que te llame?",
    Jeronimo: "Muy bien Jeronimo! En qué puedo ayudarte?",
    Dia: new Date().toDateString(),
    Hora: new Date().toLocaleTimeString(),
};

const fetchResponse = (userInput) =>{
    return new Promise((res, reject) => {
        try{
            setTimeout(() => {
                res(responseObj[userInput]);
            }, 1200);
        }
        catch(error){
            reject(error);
        }
    });
};
const chatBotService =  {
    getBotResponse(userInput){
        return fetchResponse(userInput);
    },
};
export default chatBotService;