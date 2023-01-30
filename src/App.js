import React, { useState } from "react";
import Header from "./components/layout/header/header";
import Meals from "./components/meals/meals";
import Cart from "./components/cart/cart";
import CartProvider from "./store/cart-provider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    }
    const hideCartShowHandler = () => {
        setCartIsShown(false);
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartShowHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
