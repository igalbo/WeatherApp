import React from "react";

// we need: date, maxTemp, minTemp, text, icon

function DayItem({ day }) {
  return (
    <div>
      <p>{day?.Date}</p>
      <p>{day?.Temperature?.Maximum?.Value}</p>
      <p>{day?.Temperature?.Minimum?.Value}</p>
      <p>{day?.Day?.IconPhrase}</p>
      <p>{day?.Day?.Icon}</p>
    </div>
  );
}

export default DayItem;
