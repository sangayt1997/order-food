import React, { Fragment, useState } from "react";
import Header from "./components/layout/header/header";
import Meals from "./components/meals/meals";
import Cart from "./components/cart/cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    }
    const hideCartShowHandler = () => {
        setCartIsShown(false);
    }

    return (
        <Fragment>
            {cartIsShown && <Cart onClose={hideCartShowHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
