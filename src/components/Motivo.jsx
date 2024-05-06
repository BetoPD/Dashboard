import React from 'react';
import { Helmet } from 'react-helmet';
import './img/estiloMotivo.css';

export default function Motivo() {
  return (
    <>
      <Helmet title="Motivo" />
      <main>
        <h1 id="Titilo">Motivo</h1>
        <div class="motivo">
          <p>
            El propósito de esta investigación es analizar las características
            demográficas, su evolución y tratamiento de los pacientes de
            COVID-19 que ingresaron a los hospitales públicos en México. Con el
            objetivo de encontrar áreas de oportunidad, este dashboard muestra
            información para encontrar indicadores de riesgo. Entre estas
            indicadores de riesgo se encuentra: el uso de antibioticos prevío al
            ingreso de los pacientes al hospital con prueba de covid positiva,
            ocupaciones con mayor tasa de contagio, sintomas presentes en
            pacientes que fallecieron, entre otros.<br></br>
            <br></br>
            La importancia de este dashboard radica en el enfoque y atención a
            problemas reconocidos públicamente por organizaciones importantes en
            el area de salud. Tal es el caso de la OMS (ORganización Mundial de
            la Salud) que publicó que los antibioticos no son un tratamiento
            recomendable, incluso, se sospecha que es contraproducente en el
            tratamiento de los pacientes COVID-19. Además, de acuerdo con el
            doctor Jaime Sepulveda, presidente de la Comisión Independiente de
            Investigación sobre la Pandemia de COVID-19 en México, México es de
            los países en America con el mayor número de muertes en exceso.{' '}
            <br></br>
            <br></br>
            <h2>Referencias</h2>
            World Health Organization: WHO. (2024, 26 abril). La OMS informa del
            uso excesivo y generalizado de antibióticos en los pacientes
            hospitalizados por COVID-19. https://www.who.int. Recuperado 1 de
            mayo de 2024, de
            https://www.who.int/es/news/item/26-04-2024-who-reports-widespread-overuse-of-antibiotics-in-patients--hospitalized-with-covid-19
            <br></br>
            <br></br>
            https:Comisión Independiente de Investigación sobre la Pandemia de
            COVID-19 en México. (2024). Informe de la Comisión Independiente de
            Investigación sobre la Pandemia de COVID-19 en México.
            www.comecso.com/wp-content/uploads/2024/05/Informe-Comision-Independiente.pdf
          </p>
        </div>
      </main>
    </>
  );
}
