import React from "react";
import "./activeJobs.css";
import { FaEye } from "react-icons/fa";

const ActiveJobs = () => {
  const tableData = () => {
    const tableList = [];
    for (let i = 0; i <= 5; i++) {
      tableList.push(
        <tr key={i}>
          <td>123456</td>
          <td>Pro_256</td>
          <td>Rendering</td>
          <td>KDI_001_123_DPI_light</td>
          <td>
            <FaEye color="#007BFF" />
          </td>
        </tr>
      );
    }

    return tableList;
  };

  return (
    <div className="activeJob__header">
      <div className="font-medium mb-2">ActiveJobs</div>
      <table className="activeJob__table">
        <thead>
          <tr className="text-[14px] text-[#c2c2c2]">
            <th>Job ID</th>
            <th>Project ID</th>
            <th>Stage</th>
            <th>Scene/ShotName</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody className="text-[12px] font-medium">{tableData()}</tbody>
      </table>
    </div>
  );
};

export default ActiveJobs;
