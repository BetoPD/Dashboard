import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { CircularProgress } from '@mui/material';
import toast from 'react-hot-toast';

ChartJS.register({
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
});

export default function BarChart({ query, labelName, label, title }) {
  const { data, isLoading, error, isError } = query();

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label,
        data: [],
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
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  useEffect(() => {
    setChartData({
      labels: data?.map((item) => item[labelName]),
      datasets: [
        {
          label,
          data: data?.map((item) => item[label]),
          backgroundColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderColor: 'black',
          borderWidth: 2,
        },
      ],
    });
  }, [data, label, labelName]);

  if (isLoading) return <CircularProgress color="inherit" />;

  return <Bar data={chartData} options={options} />;
}
