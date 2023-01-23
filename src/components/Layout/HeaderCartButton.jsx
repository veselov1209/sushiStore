import React from "react";
import CartIcon from "../Cart/cartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Кошик</span>
      <span className={styles.badge}>2</span>
    </button>
  );
}

export default HeaderCartButton;
