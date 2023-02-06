import React, { useRef, useState } from "react";
import classes from "./check-out.module.css";

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const CheckOut = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isFiveChars(enteredPostal);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid;

        if (!formIsValid) {

        }
    }

    const inputControlClasses = `${classes.control} 
    ${
        formInputsValidity.name &&
        formInputsValidity.city && 
        formInputsValidity.street && 
        formInputsValidity.postalCode 
            ? '' 
            : classes.invalid
    }`;

    return (
        <form onSubmit={confirmHandler} className={classes.form}>
            <div className={inputControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputsValidity.name && <p className={classes['error-text']}>Please enter a valid name.</p>}
            </div>
            <div className={inputControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputsValidity.street && <p className={classes['error-text']}>Please enter a valid street.</p>}
            </div>
            <div className={inputControlClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalInputRef} />
                {!formInputsValidity.postalCode && <p className={classes['error-text']}>Please enter a postal code(5 character long)</p>}
            </div>
            <div className={inputControlClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputsValidity.city && <p className={classes['error-text']}>Please enter a valid city.</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default CheckOut;
