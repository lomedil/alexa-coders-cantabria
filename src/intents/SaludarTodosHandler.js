const saludo = `
<p>
     <prosody volume="x-loud">¡Hola a todos!</prosody> Bienvenidos a las charlas de este mes!
     <say-as interpret-as="interjection">¿qué tal?</say-as>
</p>
Esta vez hablaremos de mí, Alexa, y de cómo podemos crear aplicaciones con interfaces de voz.`;

const SaludarTodosHandler = {
  canHandle(handlerInput) {
    console.log("Inside SaludarTodosHandler");
    const request = handlerInput.requestEnvelope.request;
    return request.type === `IntentRequest` && request.intent.name === 'SaludarTodosIntent';
  },
  handle(handlerInput) {
    console.log("Inside SaludarTodosHandler - handler");
    return handlerInput.responseBuilder
      .speak(saludo)
      .getResponse();
  },
};

module.exports = SaludarTodosHandler;