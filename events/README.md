# Eventos de lambdas para probar intents

Ejecuta los eventos con `serverless` en local usando el siguiente comando

    sls invoke -f hello --path events/archivo_evento.json

Puedes invocar la lambda en local si añades `local` y no esperar que desplegar la lambda

    sls invoke local -f hello --path events/archivo_eventos.json