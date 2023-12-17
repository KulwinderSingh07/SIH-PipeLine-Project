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
    // responsive:true,
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

  
  
  const LineChartComponent = ({dataSetEntry}) => {
      const [graphData, setGraphData] = useState([{
          label: 'Dataset 1',
          data: [2,4,5,2,3,2,9,10],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }])
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'];
    const data = {
        labels,
        datasets:graphData
      };
    useEffect(()=>{
        if(dataSetEntry!=undefined){
            setGraphData([...graphData,dataSetEntry])
            console.log(dataSetEntry)
            console.log(graphData)
        }
    },[dataSetEntry])
    return ( 
        <div className='lineChartWrapper'>
        {graphData && <Line  options={options} data={data} className='linechart' />}
        </div>
     );
}
 
export default LineChartComponent;