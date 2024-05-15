import React from "react";

const cardStyle = {
  padding: "20px",
  margin: "10px",
  border: "1px solid #d2d2d2",
  borderRadius: "5px",
  width: "50%",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
  height: "100%",
  background: "#fff",
};

const headerStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const balanceStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const subTextStyle = {
  fontSize: "14px",
  color: "#666",
  marginBottom: "10px",
};

const valueStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const rechargeButtonStyle = {
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

const Balance = () => {
  return (
    <div style={cardStyle}>
      <div style={headerStyle}>Balance</div>
      <div style={balanceStyle}>$458</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div>
          <div style={subTextStyle}>Coupon</div>
          <div style={valueStyle}>$25</div>
        </div>
        <div>
          <div style={subTextStyle}>Credits</div>
          <div style={valueStyle}>$0</div>
        </div>
      </div>
      <div style={subTextStyle}>Hours Remaining</div>
      <div style={valueStyle}>20:59:09</div>
      <button style={rechargeButtonStyle}>Recharge Now</button>
    </div>
  );
};

export default Balance;
