import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
const nameValidation = function (value) {
  return value.trim() !== "";
};
const postalValidation = function (value) {
  return value.length === 6;
};
const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredStreet, enteredPostal, enteredCity);
    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  };

  const {
    valueHasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    enteredValue: enteredName,
    reset: resetName,
  } = useInput(nameValidation);
  const {
    valueHasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    valueBlurHandler: streetBlurHandler,
    enteredValue: enteredStreet,
    reset: resetStreet,
  } = useInput(nameValidation);
  const {
    valueHasError: postalHasError,
    valueChangeHandler: postalChangeHandler,
    valueBlurHandler: postalBlurHandler,
    enteredValue: enteredPostal,
    reset: resetPostal,
  } = useInput(postalValidation);
  const {
    valueHasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    enteredValue: enteredCity,
    reset: resetCity,
  } = useInput(nameValidation);
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={!nameHasError ? classes.control : classes.invalid}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      <div className={!streetHasError ? classes.control : classes.invalid}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
      </div>
      <div className={!postalHasError ? classes.control : classes.invalid}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
          value={enteredPostal}
        />
      </div>
      <div className={!cityHasError ? classes.control : classes.invalid}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
