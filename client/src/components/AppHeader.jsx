import React, { useContext } from "react";
import User from "./UserContext";

function AppHeader() {
  const userData = useContext(User);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userData.username}</h2>
    </div>
  );
}

export default AppHeader;
