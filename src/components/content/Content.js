import React from "react";
import "./content.css";
import { MdComputer } from "react-icons/md";
import { ImHourGlass } from "react-icons/im";
import { HiOutlineThumbUp } from "react-icons/hi";
import { FaTriangleExclamation } from "react-icons/fa6";
import RunningCard from "./RunningCard";
import ActiveJobs from "./ActiveJobs";
import ChartDisplay from "./ChartDisplay";
import Balance from "./Balance";
import StorageCard from "./StorageCard";

const Content = () => {
  const runningJobsDetails = {
    title: "Running Jobs",
    renderingArray: [
      {
        icons: <MdComputer />,
        status: "RENDERING JOBS",
        quantity: "20",
      },
      {
        icons: <ImHourGlass />,
        status: "WAITING JOBS",
        quantity: "20",
      },
      {
        icons: <HiOutlineThumbUp />,
        status: "COMPLETED JOBS",
        quantity: "20",
      },
      {
        icons: <FaTriangleExclamation />,
        status: "FAILED JOBS",
        quantity: "20",
      },
    ],
  };

  const runningFramesDetails = {
    title: "Running Frames",
    renderingArray: [
      {
        icons: <MdComputer />,
        status: "RENDERING JOBS",
        quantity: "20",
      },
      {
        icons: <ImHourGlass />,
        status: "WAITING JOBS",
        quantity: "20",
      },
      {
        icons: <HiOutlineThumbUp />,
        status: "COMPLETED JOBS",
        quantity: "20",
      },
      {
        icons: <FaTriangleExclamation />,
        status: "FAILED JOBS",
        quantity: "20",
      },
    ],
  };

  return (
    <div className="content__menu">
      <div>
        <RunningCard details={runningJobsDetails} />
        <RunningCard details={runningFramesDetails} />
        <ActiveJobs />
      </div>
      <div>
        <ChartDisplay />
        <div className="content__card">
          <Balance />
          <StorageCard />
        </div>
      </div>
    </div>
  );
};

export default Content;
