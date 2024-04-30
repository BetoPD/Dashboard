import React from 'react';
import BarChart from './BarChart';
import {
  useGetSintomasPacienteQuery,
  useGetFallecidosPorMesQuery,
  useGetSintomaFatalidadQuery,
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
          title={'Fatalidades por Sintoma'}
        />
      </div>
      <div className="item"></div>
      <div className="item">3</div>
      <div className="item">
        <PieChart
          query={useGetSintomasPacienteQuery}
          labelName={'nombre'}
          label={'Porcentaje'}
          title={'Sintomas de Pacientes'}
        />
      </div>
      <div className="item">
        <BarChart
          query={useGetFallecidosPorMesQuery}
          labelName={'MES'}
          label={'Fatalidades'}
          title={'Fatalidades por Mes'}
        />
      </div>
      <div className="item">6</div>
    </main>
  );
}
