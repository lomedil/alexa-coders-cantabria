const welcomeMessage ="Hola, soy la skill de Alexa para Coders Cantabria.";
const helpMessage = "Poco puedo hacer. Tan sólo saludar y decir adios.";

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    console.log("Inside LaunchRequest");
    return handlerInput.requestEnvelope.request.type === `LaunchRequest`;
  },
  handle(handlerInput) {
    console.log("Inside LaunchRequest - handle");
    return handlerInput.responseBuilder
      .speak(welcomeMessage)
      .reprompt(helpMessage)
      .getResponse();
  },
};


module.exports = LaunchRequestHandler;