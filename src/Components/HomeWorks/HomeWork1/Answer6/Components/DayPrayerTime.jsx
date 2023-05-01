import React from "react";
import moment from "moment-jalaali";

const DayPrayerTime = ({ date, onClose, prayerTimes }) => {
  const prayerTime = prayerTimes[date];

  const dateFormat = "jYYYY-jMM-jD";

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>{moment(date, dateFormat).format("dddd jD jMMMM jYYYY")}</h2>
      <ul>
        {Object.entries(prayerTime).map(([name, value]) => (
          <li key={name}>
            <strong>{name}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayPrayerTime;
