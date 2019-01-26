const despedida = `
Ha sido un placer estar con todos vosotros. 
Espero que podamos charlar más a menudo, o vernos por la consola de Alexa.
Nos vemos.`;

const DespedirHandler = {
  canHandle(handlerInput) {
    console.log("Inside DespedidaHandler");
    const request = handlerInput.requestEnvelope.request;
    return request.type === `IntentRequest` && request.intent.name === 'DespedirIntent';
  },
  handle(handlerInput) {
    console.log("Inside DespedidaHandler - handler");
    return handlerInput.responseBuilder
      .speak(despedida)
      .getResponse();
  },
};

module.exports = DespedirHandler;