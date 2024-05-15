import Sidebar from "../sidebar/Sidebar";
import Header from "../Header/Header";
import Content from "../content/Content";
import { useState } from "react";
import "./appLayout.css";

const AppLayout = () => {
  const [toShow, setToShow] = useState("false");

  const openMenu = () => {
    setToShow(!toShow);
  };

  return (
    <div className="appLayout__header">
      <Header />
      {toShow ? (
        <div className="sidebar__floatingMenu" onClick={openMenu}>
          Menu
        </div>
      ) : (
        <></>
      )}
      <Sidebar toShow={toShow} setToShow={setToShow} />
      <Content />
    </div>
  );
};

export default AppLayout;
