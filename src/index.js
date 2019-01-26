const Alexa = require("ask-sdk-core");

const {
    HelpHandler,
    ExitHandler, 
    LaunchRequestHandler, 
    SessionEndedRequestHandler} = require("./intents/defaults");
const errorHandler = require("./intents/error");

const SaludarTodosHandler = require("./intents/SaludarTodosHandler");
const SaludarAlguienHandler = require("./intents/SaludarAlguienHandler");
const DespedirHandler = require("./intents/DespedirHandler");

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = async (event, context) => {
    
    const skill = skillBuilder
        .addRequestHandlers(
            ExitHandler,
            HelpHandler,
            LaunchRequestHandler,
            SessionEndedRequestHandler
        )
        .addRequestHandlers(
            SaludarTodosHandler,
            SaludarAlguienHandler,
            DespedirHandler
        )
        .addErrorHandlers(errorHandler)
        .create();

    return await skill.invoke(event, context);
}