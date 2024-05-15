import * as React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

const chart__header = {
  padding: "20px",
  margin: "10px",
  border: "1px solid #d2d2d2",
  borderRadius: "5px",
  background: "#fff",
};

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function ChartDisplay() {
  return (
    <div style={chart__header}>
      <div className="font-medium">Network</div>
      <LineChart
        width={500}
        height={300}
        series={[
          {
            color: "#bac1d9",
            data: uData,
            label: "uv",
            area: true,
            showMark: false,
          },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            display: "none",
          },
        }}
      />
    </div>
  );
}
