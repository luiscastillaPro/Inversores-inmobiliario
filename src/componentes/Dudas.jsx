import React, { useEffect, useRef } from "react";
import "../style/Dudas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Dudas = () => {
    const preguntas = [
        {
            titulo: "¿Es realmente gratis?",
            texto: "Sí, esta formación es completamente gratuita. No hay costes ocultos ni compromisos posteriores. Queremos que tengas acceso al mejor conocimiento sin preocuparte por la inversión inicial."
        },
        {
            titulo: "¿Por qué deberías confiar en un curso gratuito?",
            texto: "Entendemos que lo gratuito puede generar desconfianza, pero esta formación está certificada por AEEN y EUPHE, instituciones reconocidas internacionalmente. Además, contamos con profesores de alto nivel, como expertos certificados por Harvard y el CSIC."
        },
        {
            titulo: "¿Qué sucede si no tengo experiencia previa en el sector inmobiliario?",
            texto: "No necesitas experiencia previa. Nuestra formación está diseñada tanto para principiantes como para personas con conocimientos avanzados, ofreciendo un enfoque práctico y fácil de entender."
        },
        {
            titulo: "¿Cómo sé que esta formación es de calidad?",
            texto: "Nuestra calidad está avalada por más de 15 años de experiencia, 12,000 alumnos en 21 países y reconocimientos de instituciones prestigiosas. Además, el contenido es práctico, actualizado y diseñado por profesionales del sector inmobiliario."
        },
        {
            titulo: "¿Qué pasa después de registrarme?",
            texto: "Una vez que completes el formulario, recibirás acceso inmediato al campus virtual donde podrás empezar la formación. Además, tendrás la oportunidad de agendar una asesoría personalizada con uno de nuestros expertos."
        },
        {
            titulo: "No tengo tiempo para formarme. ¿Cómo puedo hacerlo?",
            texto: "Nuestra formación es 100% online y flexible. Podrás acceder al contenido desde cualquier dispositivo, las 24 horas del día, adaptándolo a tu ritmo y horario."
        },
        {
            titulo: "¿Cuánto tiempo tengo para completar el curso?",
            texto: "El acceso al campus virtual está disponible 24/7, y podrás completar la formación a tu ritmo. No hay plazos estrictos ni fechas límite."
        },
        {
            titulo: "¿Qué tipo de resultados puedo esperar después del curso?",
            texto: "Este curso te enseñará a generar ingresos en el sector inmobiliario sin necesidad de comprar propiedades ni invertir tu propio dinero. Muchos de nuestros alumnos han logrado cerrar sus primeros negocios inmobiliarios en menos de un mes."
        },
        {
            titulo: "¿Qué pasa si tengo dudas durante el curso?",
            texto: "Tendrás acceso a materiales descargables, y podrás agendar una asesoría gratuita con nuestros expertos para resolver cualquier duda o problema que enfrentes."
        },
        {
            titulo: "¿Qué distingue a esta formación de otros cursos online?",
            texto: "Nuestra formación es gratuita, práctica y está respaldada por certificaciones internacionales (AEEN y EUPHE), profesores de primer nivel y una comunidad global de más de 12,000 alumnos. Esto no es solo un curso; es una oportunidad para iniciar o escalar tu carrera en el sector inmobiliario."
        },
        {
            titulo: "¿Qué sucede después de la formación?",
            texto: "Después de completar el curso, tendrás la posibilidad de aplicar lo aprendido para generar ingresos en el sector inmobiliario. Además, podrás contar con el apoyo de nuestra asesoría personalizada para guiarte en tus primeros pasos."
        }
    ];

    const titleRef = useRef(null);
    const questionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.5 });

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        questionsRef.current.forEach((question) => {
            if (question) {
                observer.observe(question);
            }
        });

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }

            questionsRef.current.forEach((question) => {
                if (question) {
                    observer.unobserve(question);
                }
            });
        };
    }, []);

    return (
        <div className="dudas-container">
            <h2 ref={titleRef} className="dudas-titulo">
                RESUELVE TUS DUDAS
            </h2>
            <div className="dudas-contin">
                {preguntas.map((pregunta, index) => (
                    <div
                        key={index}
                        ref={(el) => (questionsRef.current[index] = el)}
                        className={`dudas-separador ${index % 2 === 0 ? "left" : "right"}`}
                    >
                        <div className="dudas-icono">
                            <FontAwesomeIcon icon={faQuestionCircle} />
                        </div>
                        <h3 className="dudas-preguntas">{pregunta.titulo}</h3>
                        <p className="dudas-textico">{pregunta.texto}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dudas;
