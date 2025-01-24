import React, { useEffect, useRef } from "react";
import "../style/Bonus.css";
import imagen4 from "../imagenes/imagen4.png";
import logo from "../imagenes/logo.png";

const Bonus = ({ onAccedeAhoraClick }) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.9 } 
        );

        elementsRef.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="cero-contenedor">
            <div className="cero-contin">
                <h3
                    ref={(el) => elementsRef.current.push(el)}
                    className="cero-subtitulo cascade"
                >
                    Bonus Extra: <br />
                    Recursos Legales Exclusivos para <br />
                    Garantizar tu Éxito
                </h3>
                <h2
                    ref={(el) => elementsRef.current.push(el)}
                    className="inicio_plazas cascade"
                >
                    PLAZAS ILIMITADAS
                </h2>
                <p
                    ref={(el) => elementsRef.current.push(el)}
                    className="cero-texto cascade"
                >
                    Al finalizar el curso, recibirás un bonus exclusivo: contratos
                    profesionales diseñados por abogados especializados, listos para usar y
                    actualizados. Un recurso práctico para asegurar la legalidad y
                    eficiencia de tus operaciones inmobiliarias.
                </p>
                <button
                    ref={(el) => elementsRef.current.push(el)}
                    className="inicio_boton cascade"
                    onClick={onAccedeAhoraClick}
                >
                    REGISTRATE GRATIS
                </button>
            </div>
            <div
                ref={(el) => elementsRef.current.push(el)}
                className="cero-imagenes scale-effect"
            >
                <img src={imagen4} alt="imagen4" className="imagen4" />
            </div>
            <div className="cero-logito">
                <img src={logo} alt="logo1" className="logitopi" ref={(el) => elementsRef.current.push(el)} />
            </div>
        </div>
    );
};

export default Bonus;
