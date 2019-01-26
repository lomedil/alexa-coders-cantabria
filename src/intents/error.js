const ayuda = "Ya sabes que poco puedo hacer. Unicamente saludar y decir adios.";

const mensajes = ["<say-as interpret-as=\"interjection\">comorr</say-as>.",
"No he entendido nada de lo dicho."];

const getMensaje = () => mensajes[Math.random()*mensajes.length];

const ErrorHandler = {
    canHandle() {
      console.log("Inside ErrorHandler");
      return true;
    },
    handle(handlerInput, error) {
      console.log("Inside ErrorHandler - handle");
      console.log(`Error handled: ${JSON.stringify(error)}`);
      console.log(`Handler Input: ${JSON.stringify(handlerInput)}`);
  
      return handlerInput.responseBuilder
        .speak(getMensaje())
        .reprompt(ayuda)
        .getResponse();
    },
  };

  module.exports = ErrorHandler;