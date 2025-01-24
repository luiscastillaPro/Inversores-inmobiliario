import React from "react";
import "../style/Inicio.css";
import logo from "../imagenes/logo.png";
import imagen1 from "../imagenes/imagen1.png";

const Inicio = ({ onAccedeAhoraClick  }) => {
    return (
        <div className="inicio_container">
            <div className="inicio_logo">
                <img src={logo} alt="Logo" className="logo_img" />
            </div>
            <div className="inicio_fondo">
                <div className="inicio_contin">
                    <div className="inicio_cuadrante">
                        <h2 className="inicio_plazas">PLAZAS ILIMITADAS</h2>
                        <h1 className="inicio_subtitulo">FORMACION <br/> GRATIS</h1>
                        <p className="inicio_parrafo">
                            Con expertos certificados por <span className="amarillito">Harvard y el CSIC</span>.
                        </p>
                        <button className="inicio_boton" onClick={onAccedeAhoraClick}>ACCEDE AHORA</button>
                    </div>
                    <div className="inicio_contenedor_imagen">
                        <img src={imagen1} alt="imagen1" className="imagen1" />
                    </div>
                </div>
                <div className="inicio_fondo_curva"></div>
            </div>
        </div>
    );
};

export default Inicio;