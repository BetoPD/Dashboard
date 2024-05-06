import React, { useState, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  Title,
} from 'chart.js';
import { CircularProgress } from '@mui/material';
import toast from 'react-hot-toast';

ChartJS.register({
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  Title,
});

ChartJS.responsive = true;

const ScatterChart = ({ query, labelName, label, title }) => {
  const { data, isLoading, isError, error } = query();

  const [chartData, setChartData] = useState({
    datasets: [
      {
        label,
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
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
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
  };

  useEffect(() => {
    if (isError) {
      toast.error(`Error: ${error?.data?.message || 'Unknown error'}`);
    }
  }, [isError, error]);

  useEffect(() => {
    if (data) {
      const chartData = data.map((item) => ({
        x: item.id,
        y: item.Diferencia,
      }));
      setChartData({
        datasets: [
          {
            label,
            data: chartData,
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: 'rgba(0,0,255,1)',
            pointRadius: 3,
          },
        ],
      });
    }
  }, [data, label]);

  if (isLoading) return <CircularProgress color="inherit" />;

  return <Scatter data={chartData} options={options} />;
};

export default ScatterChart;
