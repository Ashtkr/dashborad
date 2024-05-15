import React from "react";
import "./header.css";
import { FaGift } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Header = () => {
  const imageStyle = {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
  };

  return (
    <div className="header__menu">
      <div>
        <DropdownButton
          id="dropdown-basic-button"
          title="Default Project"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="header__leftMenu">
        <div>
          <FaGift />
        </div>
        <div>
          <IoNotifications />
        </div>
        <div className="flex">
          <div>
            <img
              src="https://img.freepik.com/free-vector/handsome-boy-with-brown-eyes-black-hair_1308-160536.jpg?w=1380&t=st=1715773482~exp=1715774082~hmac=3d1639523350bedd9f432dc760363ec4376d5bf585b2de7ad8249825e06d2f43"
              alt="profile-pic"
              style={imageStyle}
            />
          </div>
          <DropdownButton
            id="dropdown-basic-button"
            title="Deren Joe"
            data-bs-theme="light"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
