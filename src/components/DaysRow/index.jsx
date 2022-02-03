import React from "react";
import './styles.css';

export default function DaysRow() {
  return (
    <div className="days-row">
      {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((d, i) => (
        <div key={i} className="day-name">
          {d}
        </div>
      ))}
    </div>
  );
}
