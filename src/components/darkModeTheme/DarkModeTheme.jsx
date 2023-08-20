"use client"

import React, { useContext } from "react";
import styles from "./darkModeTheme.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeTheme = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeTheme;