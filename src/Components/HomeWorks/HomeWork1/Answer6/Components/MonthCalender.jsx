import React, { useState } from "react";
import moment from "moment-jalaali";
import DayPrayerTime from "./DayPrayerTime";

const MonthCalendar = ({ date }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  moment().format("jYYYY/jM/jD");
  moment.loadPersian({ dialect: "persian-modern" });
  const weekdays = moment.weekdays(true);
  const monthDays = [];

  const firstMonthDay = moment(date).startOf("jMonth");
  const lastMonthDay = moment(date).endOf("jMonth");

  for (let day = firstMonthDay; day <= lastMonthDay; day.add(1, "day")) {
    monthDays.push(day.clone());
  }

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {weekdays.map((weekday, index) => (
              <th key={index}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthDays.map((day, index) => (
            <tr key={index}>
              {Array.from({ length: day.weekday() }).map((_, index) => (
                <td key={`${index}-empty`} />
              ))}
              <td
                key={`${index}-day`}
                onClick={() => handleSelectDate(day.format("jYYYY-jMM-jD"))}
              >
                {day.format("jD")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDate && (
        <DayPrayerTime
          date={selectedDate}
          onClose={() => setSelectedDate(null)}
          prayerTimes={date}
        />
      )}
    </div>
  );
};

export default MonthCalendar;
