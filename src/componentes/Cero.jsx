import React, { useEffect, useRef } from "react";
import "../style/Cero.css";
import imagen2 from "../imagenes/imagen2.png";
import imagen3 from "../imagenes/imagen3.png";

const Cero = ({ onAccedeAhoraClick }) => {
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
                    De cero experiencia a ingresos inmobiliarios estables.
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
                    Aprende con una formación práctica y gratuita que te permitirá
                    generar ingresos en el sector inmobiliario, sin necesidad de comprar
                    propiedades ni tener experiencia previa.
                </p>
                <p
                    ref={(el) => elementsRef.current.push(el)}
                    className="cero-texto cascade"
                >
                    Además, nuestra formación está certificada por AEEN y EUPHE,
                    garantizando calidad y reconocimiento internacional.
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
                className="cero-imagenes cascade"
            >
                <img src={imagen2} alt="imagen2" className="cero-imagen2" />
            </div>
            <div
                ref={(el) => elementsRef.current.push(el)}
                className="cero-imagenes scale-effect"
            >
                <img src={imagen3} alt="imagen3" className="cero-imagen3" />
            </div>
        </div>
    );
};

export default Cero;
