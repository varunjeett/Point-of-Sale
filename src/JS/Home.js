import React from "react";
import "../CSS/Home.css";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ user }] = useStateValue();

  return (
    <div className="home">
      <h1>{user?.displayName}</h1>

      <h1>This is the Home Page</h1>

      <h1>Today sales</h1>

      <h1>Profit/Loss</h1>

      <h1>Khatabook today</h1>
    </div>
  );
}

export default Home;
