import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Data for Each Selected Area',
    },
  },
};



const LineChartComponent = ({graphDataToDisplay}) => {
  const [dataDisplay, setDataDisplay] = useState({
    datasets:[{
      label: "Junction",
      data:[{x:"January",y:23},
      {x:"Febuary",y:49},
      {x:"December",y:104}
    ],
      borderColor: 'rgb(23, 152, 225)',
      backgroundColor: 'rgba(13, 142, 225, 0.5)',
    }]
  })

  useEffect(()=>{
    console.log(graphDataToDisplay)
        setDataDisplay(graphDataToDisplay)
  },[graphDataToDisplay])
  return ( 
      <div className='lineChartWrapper'>
      {dataDisplay && <Line  options={options} data={dataDisplay} className='linechart' />}
      </div>
   );
}

export default LineChartComponent;


