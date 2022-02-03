import React from "react";
import "./styles.css";

export default function Day({ day, isSameDay, onClick, isInMonth }) {
  return isSameDay ? (
    <div className="day" onClick={() => onClick()}>
      <div className={`innerDay ${isInMonth ? "" : "notInMonth"} selected`}>
        <div className="numeroDia">{day}</div>
        <div className="numeroDeEventos">+1 más</div>
      </div>
    </div>
  ) : (
    <div className="day" onClick={() => onClick()}>
      <div className={`innerDay ${isInMonth ? "textDark" : "textLight"}`}>
        <div className="numeroDia">{day}</div>
        <div className="numeroDeEventos">+1 más</div>
      </div>
    </div>
  );
}
