import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { CircularProgress } from '@mui/material';
import toast from 'react-hot-toast';

ChartJS.register({
  Tooltip,
  Legend,
  ArcElement,
});

ChartJS.responsive = true;

export default function PieChart({ query, labelName, label, title }) {
  const { data, isLoading, isError, error } = query();

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
          label: label,
          data: data?.map((item) => item[label]),
          backgroundColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          hoverOffset: 4,
        },
      ],
    });
  }, [data, label, labelName]);

  if (isLoading) return <CircularProgress color="inherit" />;

  return <Pie data={chartData} options={options} />;
}
