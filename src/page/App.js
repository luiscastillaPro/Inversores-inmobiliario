import React, { useEffect, useRef } from 'react';
import '../style/App.css';
import Inicio from "../componentes/inicio.jsx";
import Alumnos from '../componentes/Alumnos.jsx';
import Cero from "../componentes/Cero.jsx";
import Bonus from '../componentes/Bonus.jsx';
import Experiencia from '../componentes/Experiencia.jsx';
import Formacion from '../componentes/Formacion.jsx';
import Dudas from '../componentes/Dudas.jsx';
import Formulario from '../componentes/Formulario.jsx';
import logo from "../imagenes/logo.png";

const App = () => {
  const logoRef = useRef(null);
  const formularioRef = useRef(null); // Referencia al formulario

  const scrollToFormulario = () => {
    if (formularioRef.current) {
      formularioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      { threshold: 0.5 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <Inicio onAccedeAhoraClick={scrollToFormulario} />
      <Alumnos />
      <Cero onAccedeAhoraClick={scrollToFormulario} />
      <Bonus onAccedeAhoraClick={scrollToFormulario} />
      <Experiencia onAccedeAhoraClick={scrollToFormulario} />
      <Formacion onAccedeAhoraClick={scrollToFormulario} />
      <Dudas />
      <div ref={formularioRef}>
        <Formulario />
      </div>
      <div className='app-logo'>
        <img ref={logoRef} src={logo} alt='logo3' className='logitoqui' />
      </div>
    </div>
  );
}

export default App;
