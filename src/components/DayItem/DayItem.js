import React from "react";
import './DayItem.css'

// we need: date, maxTemp, minTemp, text, icon
// 2022-03-25T07:00:00+01:00  55  48  Rain  18

function DayItem({ day }) {
  const date = new Date(day?.Date).toLocaleString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
  }).toLocaleUpperCase();
  const iconNum = day?.Day?.Icon > 9 ? day?.Day?.Icon : `0${day.Day.Icon}`
  const iconLink = `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`

  return (
    <div className="day-box">
      <p className="day-date">{date}</p>
      <img className="day-icon" alt="weather icon" src={iconLink} />
      <p className="day-max">{day?.Temperature?.Maximum?.Value + "°"}</p>
      <p className="day-min">{"/" + day?.Temperature?.Minimum?.Value + "°"}</p>
      <p className="day-text">{day?.Day?.IconPhrase}</p>
    </div>
  );
}

export default DayItem;
