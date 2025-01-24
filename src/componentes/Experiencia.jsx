import React, { useEffect, useRef } from "react";
import "../style/Experiencia.css";

const Experiencia = ({ onAccedeAhoraClick }) => {
    const elementsRef = useRef([]);

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
            { threshold: 0.8 } 
        );

        elementsRef.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const comentarios = [
        {
            nombre: "Santiago, 27 años",
            comentario: `"En solo dos semanas, ya gestiono dos propiedades en Alemania sin usar mi propio dinero. Este curso me dio las herramientas y la confianza para empezar. ¡Con ganas y actitud, todo es posible!"`,
            estrellas: 5,
        },
        {
            nombre: "Borja",
            comentario: `"Gracias a la formación, he creado cuatro negocios exitosos: apartamentos turísticos, inmobiliaria, rent-to-rent e inversiones en flipping house. ¡No hay nada mejor que trabajar para ti mismo!"`,
            estrellas: 5,
        },
        {
            nombre: "Beba, 46 años",
            comentario: `"Únete y aprende de expertos con experiencia real y casos de éxito. Descubre cómo resolver trámites legales y dominar lo que necesitas para avanzar con confianza. Con Inversores, el éxito está a tu alcance."`,
            estrellas: 5,
        },
    ];

    return (
        <div className="experiencia-contenedor">
            <div className="experiencia-seccion">
                <h3
                    ref={(el) => elementsRef.current.push(el)}
                    className="experiencia-titulo cascade"
                >
                    15 años de experiencia,<br />
                    12.000 alumnos,<br />
                    21 países confirman nuestra calidad.
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
                    Miles de personas ya han transformado su futuro con esta formación.
                    Con más de 12.000 alumnos en 21 países, nuestros estudiantes han
                    aprendido a generar ingresos estables en el sector inmobiliario, sin
                    riesgos y sin inversión inicial. Sus historias de éxito demuestran que
                    este curso funciona, y tú también puedes lograrlo. ¡Descubre lo que
                    otros han conseguido y únete a nuestra comunidad de éxito!
                </p>
                <button
                    ref={(el) => elementsRef.current.push(el)}
                    className="inicio_boton cascade"
                    onClick={onAccedeAhoraClick}
                >
                    RESERVA TU PLAZA
                </button>
            </div>
            <div
                ref={(el) => elementsRef.current.push(el)}
                className="experiencia-comentarios-container cascade"
            >
                {comentarios.map((comentario, index) => (
                    <div key={index} className="experiencia-card-comentario">
                        <h4 className="experiencia-nombre">{comentario.nombre}</h4>
                        <div className="experiencia-estrellas">
                            {"★".repeat(comentario.estrellas)}
                        </div>
                        <p className="experiencia-comentario">{comentario.comentario}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiencia;
