import { useContext } from "react";
import { UserContext } from "../context/context";

function AppHeader() {
  const userData = useContext(UserContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userData.username}</h2>
    </div>
  );
}

export default AppHeader;
