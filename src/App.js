import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCardHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCard={showCardHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
