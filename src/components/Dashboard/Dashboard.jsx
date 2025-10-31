import React from "react";
import "./Dashboard.css";
import search_icon from "../../assets/search-icon.png";
import add_icon from "../../assets/add-icon.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <h1>My Notes</h1>
        <img src={search_icon} alt="" />
      </div>
      <div className="dashboard-bottom">
        <img src={add_icon} alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
