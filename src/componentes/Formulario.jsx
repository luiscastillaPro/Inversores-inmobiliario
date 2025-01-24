import React, { useState, useEffect, useRef } from "react";
import "../style/Formulario.css";

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        whatsapp: "",
        compromiso: "",
        privacidad: false,
    });

    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    const titleRef = useRef(null);
    const buttonRef = useRef(null);
    const checkboxRef = useRef(null);
    const inputRefs = useRef([]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email || !formData.whatsapp || !formData.compromiso) {
            setError("Por favor, completa todos los campos obligatorios.");
            return;
        }

        if (!formData.privacidad) {
            setError("Debes aceptar la política de privacidad.");
            return;
        }

        setError(""); 
        setMensaje("Formulario Enviado Con Éxito");

        setTimeout(() => {
            setMensaje("");
            setFormData({
                nombre: "",
                email: "",
                whatsapp: "",
                compromiso: "",
                privacidad: false,
            });
        }, 4000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.5 });

        if (titleRef.current) observer.observe(titleRef.current);
        if (buttonRef.current) observer.observe(buttonRef.current);
        if (checkboxRef.current) observer.observe(checkboxRef.current);
        inputRefs.current.forEach((input) => {
            if (input) observer.observe(input);
        });

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (buttonRef.current) observer.unobserve(buttonRef.current);
            if (checkboxRef.current) observer.unobserve(checkboxRef.current);
            inputRefs.current.forEach((input) => {
                if (input) observer.unobserve(input);
            });
        };
    }, []);

    return (
        <div className="formulario-container-mayor">
            <div className="formulario-container">
                <h3 ref={titleRef} className="formulario-titulo">TRAS RELLENAR EL FORMULARIO DE AQUÍ ABAJO TENDRÁS ACCESO A LA FORMACIÓN GRATUITA</h3>
                <form onSubmit={handleSubmit} className="formulario">
                    <input
                        ref={(el) => (inputRefs.current[0] = el)}
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="formulario-nombre"
                    />
                    <input
                        ref={(el) => (inputRefs.current[1] = el)}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="formulario-nombre"
                    />
                    <input
                        ref={(el) => (inputRefs.current[2] = el)}
                        type="text"
                        name="whatsapp"
                        placeholder="WhatsApp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="formulario-nombre"
                    />
                    <input
                        ref={(el) => (inputRefs.current[3] = el)}
                        type="text"
                        name="compromiso"
                        placeholder="¿Te comprometes a iniciar la formación gratuita en los próximos 7 días? Si/No"
                        value={formData.compromiso}
                        onChange={handleChange}
                        className="formulario-nombre"
                    />
                    <div className="formulario-checkbox-container" ref={checkboxRef}>
                        <input
                            type="checkbox"
                            name="privacidad"
                            checked={formData.privacidad}
                            onChange={handleChange}
                            className="formulario-check"
                        />
                        <label>
                            He leído y acepto la <a href="#">política de privacidad</a>
                        </label>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button ref={buttonRef} type="submit" className="formulario-boton">Enviar</button>
                </form>
                {mensaje && <p className="mensaje">{mensaje}</p>}
            </div>
        </div>
    );
};

export default Formulario;
