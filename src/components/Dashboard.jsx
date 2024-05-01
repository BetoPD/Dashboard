import React from 'react';
import BarChart from './Barchart';
import {
  useGetSintomasPacienteQuery,
  useGetFallecidosPorMesQuery,
  useGetSintomaFatalidadQuery,
  useGetProfesionesMasAfectadasQuery,
} from '../redux/api/patientsApi';
import PieChart from './PieChart';

export default function Dashboard() {
  return (
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
        <BarChart
          query={useGetFallecidosPorMesQuery}
          labelName={'MES'}
          label={'Fatalidades'}
          title={'Fatalidades por Mes (2021)'}
        />
      </div>
      <div className="item">
        <PieChart
          query={useGetProfesionesMasAfectadasQuery}
          labelName={'ocupacion'}
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
      <div className="item">5</div>
      <div className="item">6</div>
    </main>
  );
}
