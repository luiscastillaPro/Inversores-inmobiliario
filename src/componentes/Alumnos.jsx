import React, { useEffect, useRef } from "react";
import "../style/Alumnos.css";

const Alumnos = () => {
    const countersRef = useRef([]);
    const titleRef = useRef(null);

    useEffect(() => {
        const animateCounter = (target, finalValue) => {
            const duration = 1000;
            const increment = finalValue / (duration / 16);
            let currentValue = 0;

            const updateCounter = () => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    target.textContent = finalValue + (target.dataset.suffix || "");
                    return;
                }
                target.textContent = Math.ceil(currentValue) + (target.dataset.suffix || "");
                requestAnimationFrame(updateCounter);
            };

            updateCounter();
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalValue = parseInt(target.getAttribute("data-value"), 10);
                        animateCounter(target, finalValue);
                    }
                });
            },
            { threshold: 0.8 }
        );

        countersRef.current.forEach((counter) => {
            observer.observe(counter);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.5 } 
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <div className="alumnos_container">
            <div className="alumnos-contenedor-titulo">
                <h3 ref={titleRef} className="alumnos-titulo">
                    Aprende a ganar dinero en el sector inmobiliario sin inversión inicial
                </h3>
            </div>
            <div className="alumnos-seccion">
                <div className="alumnos-años">
                    <p
                        ref={(el) => (countersRef.current[0] = el)}
                        className="alumnos-numero"
                        data-value="15"
                    >
                        0
                    </p>
                    <p className="alumno-texto">años de experiencia</p>
                </div>
                <div className="alumnos-años">
                    <p
                        ref={(el) => (countersRef.current[1] = el)}
                        className="alumnos-numero"
                        data-value="12"
                        data-suffix="K"
                    >
                        0
                    </p>
                    <p className="alumno-texto">alumnos</p>
                </div>
                <div className="alumnos-años">
                    <p
                        ref={(el) => (countersRef.current[2] = el)}
                        className="alumnos-numero"
                        data-value="21"
                    >
                        0
                    </p>
                    <p className="alumno-texto">países</p>
                </div>
            </div>
        </div>
    );
};

export default Alumnos;
