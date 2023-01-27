import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Смаколики з Японії</h1>
        <HeaderCartButton onClick={props.onShowCard} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Смачні та корисні суші" />
      </div>
    </>
  );
}

export default Header;
