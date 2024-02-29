import React from "react";
import styles from "./App.module.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Clearance from "./components/Clearance/Clearance";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <Clearance />
    </div>
  );
}

export default App;
