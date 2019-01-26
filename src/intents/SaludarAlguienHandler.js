const SaludarAlguienHandler = {
    canHandle(handlerInput) {
      console.log("Inside SaludarAlguienHandler");
      const request = handlerInput.requestEnvelope.request;
      return request.type === `IntentRequest` && request.intent.name === 'SaludarAlguienIntent';
    },
    handle(handlerInput) {
      console.log("Inside SaludarAlguienHandler - handler");
      const {alguien} = handlerInput.requestEnvelope.request.intent.slots;
      return handlerInput.responseBuilder
        .speak(`Hola ${alguien.value}. <say-as interpret-as=\"interjection\">¡qué tal!</say-as>`)
        .getResponse();
    },
  };
  
  module.exports = SaludarAlguienHandler;