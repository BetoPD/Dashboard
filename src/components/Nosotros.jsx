import React from 'react';
import { Helmet } from 'react-helmet';
import './img/estiloNosotros.css';
import FotoOscar from './img/Yo.jpeg';
import Bebo from './img/Bebo.jpeg';
import Hum from './img/Hum.jpeg';

export default function Nosotros() {
  return (
    <>
      <Helmet title="Nosotros" />
      <main>
        <section id="inicio" className="inicio">
          <div className="contenido-banner">
            <div className="contenedor-img">
              <img src={FotoOscar} alt="Oscar" />
            </div>
            <h1>Oscar Cueto Farley Rivas</h1>
            <h2>
              Estudiante de: Ingeniería en Inteligencia de Datos y
              Ciberseguridad
            </h2>
          </div>
          <div className="contenido-banner">
            <div className="contenedor-img">
              <img src={Bebo} alt="Bebo" />
            </div>
            <h1>Alan Crespo Murillo</h1>
            <h2>
              Estudiante de: Ingeniería en Inteligencia de Datos y
              Ciberseguridad
            </h2>
          </div>
          <div className="contenido-banner">
            <div className="contenedor-img">
              <img src={Hum} alt="Hum" />
            </div>
            <h1>Humberto Ángel Plata </h1>
            <h2>
              Estudiante de: Ingeniería en Inteligencia de Datos y
              Ciberseguridad
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
