import React from "react";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import "react-circular-progressbar/dist/styles.css";

const cardStyle = {
  padding: "20px",
  margin: "10px",
  border: "1px solid #d2d2d2",
  borderRadius: "5px",
  width: "50%",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "white",
};

const headerStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const subTextStyle = {
  fontSize: "14px",
  color: "#666",
  marginBottom: "10px",
};

const viewDetailsButtonStyle = {
  padding: "10px 50px",
  fontSize: "16px",
  color: "#007bff",
  border: "1px solid #007bff",
  borderRadius: "23px",
  cursor: "pointer",
  backgroundColor: "white",
  textDecoration: "none",
  display: "inline-block",
};

const StorageCard = () => {
  const usedStorage = 68;
  const totalStorage = 100;
  const percentage = (usedStorage / totalStorage) * 100;

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>Storage</div>
      <SemiCircleProgress
        percentage={percentage}
        size={{
          width: 200,
          height: 160,
        }}
        strokeWidth={5}
        strokeColor="#2a4d85"
      />
      <div style={subTextStyle}>
        out of {totalStorage} GB ({percentage.toFixed(0)}%)
      </div>
      <button style={viewDetailsButtonStyle}>View Details</button>
    </div>
  );
};

export default StorageCard;
