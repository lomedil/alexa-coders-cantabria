
const despedidas = ["arrivederci", "au revoir", "hasta luego"];

const getDespedida = () => despedidas[Math.random()*despedidas.length];

const ExitHandler = {
  canHandle(handlerInput) {
    console.log("Inside ExitHandler");
    const request = handlerInput.requestEnvelope.request;
    return request.type === `IntentRequest` && (request.intent.name === 'AMAZON.StopIntent' ||
      request.intent.name === 'AMAZON.PauseIntent' ||
      request.intent.name === 'AMAZON.CancelIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(getDespedida())
      .getResponse();
  },
};

module.exports = ExitHandler;