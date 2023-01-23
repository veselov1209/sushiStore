import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Смаколики з Японії</h1>
        <button>Корзина</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Смачні та корисні суші" />
      </div>
    </>
  );
}

export default Header;
