import React, { useEffect, useRef } from "react";
import "../style/Formacion.css";
import imagen5 from "../imagenes/imagen5.png";

const Formacion = ({ onAccedeAhoraClick }) => {
    const elementsRef = useRef([]);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); 
                    }
                });
            },
            { threshold: 0.9 }
        );

        const imageObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("slide-in");
                        imageObserver.unobserve(entry.target); 
                    }
                });
            },
            { threshold: 0.5 }
        );

        elementsRef.current.forEach((el) => el && observer.observe(el));
        if (imageRef.current) {
            imageObserver.observe(imageRef.current);
        }

        return () => {
            observer.disconnect();
            imageObserver.disconnect();
        };
    }, []);

    return (
        <div className="formacion-container">
            <div className="formacion-contin">
                <h2
                    ref={(el) => elementsRef.current.push(el)}
                    className="inicio_plazas cascade"
                >
                    PLAZAS ILIMITADAS
                </h2>
                <h3
                    ref={(el) => elementsRef.current.push(el)}
                    className="formacion-titulo cascade"
                >
                    Formación gratuita con <br />
                    profesores de Harvard y el CSIC.<br />
                    ¡Crea tu propio negocio inmobiliario!
                </h3>
                <p
                    ref={(el) => elementsRef.current.push(el)}
                    className="formacion-texto cascade"
                >
                    Nuestro equipo de expertos cuenta con reconocimiento internacional y
                    experiencia práctica en el sector inmobiliario. Aprende de los
                    mejores y lleva tus conocimientos al siguiente nivel.
                </p>
                <ul>
                    <li
                        ref={(el) => elementsRef.current.push(el)}
                        className="formacion-lista cascade"
                    >
                        Dr. Andrés Arenas: Certificado por Harvard, abogado experto en
                        contratos inmobiliarios.
                    </li>
                    <li
                        ref={(el) => elementsRef.current.push(el)}
                        className="formacion-lista cascade"
                    >
                        Dra. Jessica Bayón: Evaluadora para el CSIC, experta en Recursos
                        Humanos.
                    </li>
                    <li
                        ref={(el) => elementsRef.current.push(el)}
                        className="formacion-lista cascade"
                    >
                        Francisco Marroquín: Presidente del Colegio de Agentes
                        Inmobiliarios, tasador profesional.
                    </li>
                </ul>
                <button
                    ref={(el) => elementsRef.current.push(el)}
                    className="inicio_boton cascade"
                    onClick={onAccedeAhoraClick}
                >
                    REGISTRATE GRATIS
                </button>
            </div>
            <div className="formacion-contin2">
                <img
                    ref={imageRef}
                    src={imagen5}
                    alt="imagen5"
                    className="imagen5 slide"
                />
            </div>
        </div>
    );
};

export default Formacion;
