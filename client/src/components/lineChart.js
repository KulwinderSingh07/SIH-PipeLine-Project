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
          data:[
                           {x:'January',y:304},
                           {x:'February',y:400},
                           {x:'March',y:35},
                        ],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }])
        const labels = ['',]
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