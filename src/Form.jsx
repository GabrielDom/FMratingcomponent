import React, { useState, useEffect } from "react";
import { Sucess } from "./Sucess";
import "./Form.css";
import star from "../src/assets/icon-star.svg";

export const Form = () => {
  const [boton1, setBoton1] = useState(false);
  const [boton2, setBoton2] = useState(false);
  const [boton3, setBoton3] = useState(false);
  const [boton4, setBoton4] = useState(false);
  const [boton5, setBoton5] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);

  const handleBoton1 = () => {
    setBoton1(true);
    setBoton2(false);
    setBoton3(false);
    setBoton4(false);
    setBoton5(false);
  };

  const handleBoton2 = () => {
    setBoton1(false);
    setBoton2(true);
    setBoton3(false);
    setBoton4(false);
    setBoton5(false);
  };

  const handleBoton3 = () => {
    setBoton1(false);
    setBoton2(false);
    setBoton3(true);
    setBoton4(false);
    setBoton5(false);
  };

  const handleBoton4 = () => {
    setBoton1(false);
    setBoton2(false);
    setBoton3(false);
    setBoton4(true);
    setBoton5(false);
  };

  const handleBoton5 = () => {
    setBoton1(false);
    setBoton2(false);
    setBoton3(false);
    setBoton4(false);
    setBoton5(true);
  };

  const handleClick = (valor) => {
    setSeleccionado(valor);
    console.log(valor);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (seleccionado !== null) {
      setEnviado(true);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (enviado) {
      setSeleccionado(seleccionado);
    }
  }, [enviado]);

  return (
    <>
      {enviado ? (
        <Sucess seleccionado={seleccionado} />
      ) : (
        <div className="card">
          <img className="star" src={star} alt="star" />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <button
                className={seleccionado === 1 ? "seleccionado" : ""}
                type="button"
                onClick={() => handleClick(1)}
              >
                1
              </button>
              <button
                className={seleccionado === 2 ? "seleccionado" : ""}
                type="button"
                onClick={() => handleClick(2)}
              >
                2
              </button>
              <button
                className={seleccionado === 3 ? "seleccionado" : ""}
                type="button"
                onClick={() => handleClick(3)}
              >
                3
              </button>
              <button
                className={seleccionado === 4 ? "seleccionado" : ""}
                type="button"
                onClick={() => handleClick(4)}
              >
                4
              </button>
              <button
                className={seleccionado === 5 ? "seleccionado" : ""}
                type="button"
                onClick={() => handleClick(5)}
              >
                5
              </button>
            </div>

            <button className="submit" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      )}
    </>
  );
};
