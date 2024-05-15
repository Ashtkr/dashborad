import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { FaRegFile } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import { FaGgCircle } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { BiTransferAlt } from "react-icons/bi";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import { IoCloseCircleSharp } from "react-icons/io5";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <RxDashboard />,
    to: "/",
    section: "",
  },
  {
    display: "Assets",
    icon: <FaRegFile />,
    to: "/assets",
    section: "assets",
  },
  {
    display: "Analysis",
    icon: <FaNetworkWired />,
    to: "/analysis",
    section: "analysis",
  },
  {
    display: "Jobs",
    icon: <FaGgCircle />,
    to: "/jobs",
    section: "jobs",
  },
  {
    display: "Reports",
    icon: <HiDocumentReport />,
    to: "/reports",
    section: "reports",
  },
  {
    display: "Transfers",
    icon: <BiTransferAlt />,
    to: "/transfers",
    section: "transfers",
  },
];

const lowerSidebarNavItems = [
  {
    display: "Projects",
    icon: <HiSquare3Stack3D />,
    to: "/projects",
    section: "projects",
  },
  {
    display: "Settings",
    icon: <IoMdSettings />,
    to: "/settings",
    section: "settings",
  },
  {
    display: "Support",
    icon: <MdSupportAgent />,
    to: "/support",
    section: "support",
  },
  {
    display: "Feedback",
    icon: <MdOutlineFeedback />,
    to: "/feedback",
    section: "feedback",
  },
  {
    display: "Raise Tickets",
    icon: <HiOutlineTicket />,
    to: "/raiseTicket",
    section: "raiseTicket",
  },
];

const Sidebar = ({ toShow, setToShow }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLowerIndex, setActiveLowerIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      if (sidebarItem) {
        const height = sidebarItem.clientHeight;
        setStepHeight(height);
        indicatorRef.current.style.height = `${height}px`;
      }
    }, 50);
  }, []);

  useEffect(() => {
    const curPath = location.pathname.split("/")[1];

    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);

    const activeLowerItem = lowerSidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveLowerIndex(curPath.length === 0 ? 0 : activeLowerItem + 7.5);
  }, [location]);

  const closeIt = () => {
    setToShow(!toShow);
  };

  const sideBarDisplayFunction = () => {
    return (
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              (activeIndex >= 0 ? activeIndex : activeLowerIndex) * stepHeight
            }px)`,
          }}
        ></div>
        <div className="Space__Sidebar"></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index} style={{ textDecoration: "none" }}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
        <div>
          <div className="horizontal__Line"></div>
        </div>

        <div className="lowerMenu">
          {lowerSidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index} style={{ textDecoration: "none" }}>
              <div
                className={`sidebar__menu__item ${
                  activeLowerIndex === index ? "active" : ""
                }`}
              >
                <div className="sidebar__menu__item__icon">{item.icon}</div>
                <div className="sidebar__menu__item__text">{item.display}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className={!toShow ? "sidebar toShowSidebar" : "sidebar"}>
      {!toShow ? (
        <>
          <div className="p-2" onClick={closeIt}>
            <IoCloseCircleSharp color="white" size={25} />
          </div>
          {sideBarDisplayFunction()}
        </>
      ) : (
        sideBarDisplayFunction()
      )}
    </div>
  );
};

export default Sidebar;
