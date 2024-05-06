import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; // Importa el componente Line
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js'; // Importa los elementos necesarios de Chart.js
import { CircularProgress } from '@mui/material';
import toast from 'react-hot-toast';

ChartJS.register({
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
});

export default function LineChart({ query, labelName, label, title }) {
  const { data, isLoading, error, isError } = query();

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label,
        data: [],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
        tension: 0.1, // Tensión de la línea
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        type: 'category',
        id: 'x',
      },
      y: {
        type: 'linear',
      },
    },
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  useEffect(() => {
    if (!data || data.length === 0) {
      return;
    }

    setChartData({
      labels: data?.map((item) => item[labelName]),
      datasets: [
        {
          label,
          data: data?.map((item) => item[label]),
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
          tension: 0.1, // Tensión de la línea
        },
      ],
    });
  }, [data, label, labelName]);

  if (isLoading) return <CircularProgress color="inherit" />;

  return <Line data={chartData} options={options} />;
}
