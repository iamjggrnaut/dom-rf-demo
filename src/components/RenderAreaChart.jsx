import React, { useContext } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { AppContext } from '../context';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  
  const RenderAreaChart = () => {

    const {subData, selectedRegion} = useContext(AppContext)

    const labels = subData?.map(el => new Date(el.date).toLocaleDateString('ru'))

    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: selectedRegion,
            data: subData?.map(el => el.value),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };    

    return (
        <Line options={options}  height={550} data={data} />
    )
}

export default RenderAreaChart