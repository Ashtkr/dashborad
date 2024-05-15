import React from "react";
import "./runningCard.css";

const RunningCard = ({ details = {} }) => {
  return (
    <div className="runningCard__Menu">
      <div className="runningCard__MenuHeader">
        <div>{details.title}</div>
        <div className="text-xs">This Week</div>
      </div>
      <div className="runningCard_MenuDetails">
        {details.renderingArray.map((item, index) => (
          <div key={index}>
            <div className="runningCard__icons">{item.icons}</div>
            <div className="text-[12px] text-[#c2c2c2]">{item.status}</div>
            <div className="font-medium">{item.quantity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningCard;
