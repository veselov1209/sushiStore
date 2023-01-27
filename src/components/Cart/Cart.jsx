import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[].map((el) => (
        <li>{el.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Разом</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Закрити
        </button>
        <button className={styles.button}>Замовити</button>
      </div>
    </Modal>
  );
}

export default Cart;
