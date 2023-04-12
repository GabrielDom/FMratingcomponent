import React from "react";
import thank from "../src/assets/illustration-thank-you.svg";
import "./Sucess.css";

export const Sucess = ({ seleccionado }) => {
  console.log(seleccionado);
  return (
    <div className="success">
      <img className="thanks" src={thank} alt="thanks" />
      <p className="badge">You selected {seleccionado} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
