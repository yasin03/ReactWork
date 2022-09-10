import React from "react";
import "./clock1.scss";
import moment from "moment";

const Clock1 = () => {
  const dateTime = moment();
  const dateStr = dateTime.format("LL");
  const dateTm = dateTime.format("H:mm");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  let message = "";

  if (hour >= 6 && hour < 11) {
    message = "Morning";
  } else if (hour >= 11 && hour < 17) {
    message = "Afternoon";
  } else if (hour >= 17 && hour < 22) {
    message = "Evening";
  } else {
    message = "Night";
  }

  return (
    <div className="clock-container">
      <div className="time">{dateTm}</div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};

export default Clock1;
