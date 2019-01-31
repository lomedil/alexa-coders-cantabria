const months = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre"
};

const calculateNextEvent = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  let year = today.getFullYear();
  const possibleDay = calculateFirstFriday(year, currentMonth);
  if (today <= possibleDay) {
    return possibleDay;
  } else {
    let nextMonth = currentMonth + 1;
    if (nextMonth > 12) {
      nextMonth = 1;
      year += 1;
    }
    return calculateFirstFriday(year, nextMonth);
  }
};

const calculateFirstFriday = (year, month) => {
  for (let i = 1; i < 8; i++) {
    const possibleDay = new Date(year, month, i);
    if (possibleDay.getDay() === 5) return possibleDay;
  }
};

const ProximoEventoHandler = {
  canHandle(handlerInput) {
    console.log("Inside ProximoEventoHandler");
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === `IntentRequest` &&
      request.intent.name === "ProximoEventoIntent"
    );
  },
  handle(handlerInput) {
    console.log("Inside ProximoEventoHandler - handler");
    const nextEvent = calculateNextEvent();
    return handlerInput.responseBuilder
      .speak(
        `La próxima charla será el ${nextEvent.getDate()} de ${
          months[nextEvent.getMonth()]
        } de ${
          nextEvent.getFullYear
        } de 6 y media a 8 y media. <say-as interpret-as=\"interjection\">¡ven y participa!</say-as>`
      )
      .getResponse();
  }
};

module.exports = ProximoEventoHandler;
