import React from 'react';
import BarChart from './BarChart';
import {
  useGetSintomasPacienteQuery,
  useGetFallecidosPorMesQuery,
  useGetSintomaFatalidadQuery,
  useGetProfesionesMasAfectadasQuery,
  useGetPersonasAtendidasQuery,
  useGetTasaMortalidadQuery,
  useGetRetrasoRegistroQuery,
  useGetAntecedentesMuertesQuery,
  useGetEvolucionQuery,
} from '../redux/api/patientsApi';
import PieChart from './PieChart';
import { Helmet } from 'react-helmet';
import LineChart from './LineChart';
import ScatterChart from './ScatterChart';

export default function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="titulo">
        <h1>Análisis</h1>
      </div>
      <main className="container">
        <div className="item">
          <BarChart
            query={useGetSintomaFatalidadQuery}
            labelName={'nombre'}
            label={'Fatalidades'}
            title={'Fatalidades por Síntoma'}
          />
        </div>
        <div className="item">
          <LineChart
            query={useGetFallecidosPorMesQuery}
            labelName={'Mes'}
            label={'Fatalidades'}
            title={'Fatalidades por Mes (2021)'}
          />
        </div>
        <div className="item">
          <PieChart
            query={useGetProfesionesMasAfectadasQuery}
            labelName={'Ocupacion'}
            label={'Porcentaje'}
            title={'Profesiones Más Afectadas'}
          />
        </div>
        <div className="item">
          <PieChart
            query={useGetSintomasPacienteQuery}
            labelName={'nombre'}
            label={'Porcentaje'}
            title={'Sintomas de Pacientes'}
          />
        </div>
        <div className="item">
          <LineChart
            query={useGetPersonasAtendidasQuery}
            labelName={'Mes'}
            label={'Atendidos'}
            title={'Personas Atendidad 2021-2022'}
          />
        </div>
        <div className="item">
          <BarChart
            query={useGetTasaMortalidadQuery}
            labelName={'Hospital'}
            label={'Tasa'}
            title={'Tasa de Mortalidad Por Hospital'}
          />
        </div>
        <div className="item">
          <ScatterChart
            query={useGetRetrasoRegistroQuery}
            labelName={'id'}
            label={'Diferencia'}
            title={'Retraso en los Registros '}
          />
          <p>id</p>
        </div>
        <div className="item">
          <BarChart
            query={useGetAntecedentesMuertesQuery}
            labelName={'Antecedentes'}
            label={'Num'}
            title={'Antecedentes de Pacientes que Murieron'}
          />
          <p>IRAG = INFECCION RESPIRATORIA AGUDA GRAVE</p>
          <br></br>
          <p>ETI = ENFERMEDAD TIPO INFLUENZA</p>
        </div>
        <div className="item">
          <BarChart
            query={useGetEvolucionQuery}
            labelName={'evolucion_paciente'}
            label={'pacientes'}
            title={'Distribución de los Pacientes con Base a su Evolución '}
          />
        </div>
      </main>
    </>
  );
}
