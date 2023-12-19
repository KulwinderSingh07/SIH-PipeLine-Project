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

  
  
  const LineChartComponent = ({graphDataToDisplay}) => {
    const [dataDisplay, setDataDisplay] = useState({
      labels:['',],
      datasets:[{
        label: "Dummy",
        data:[],
        borderColor: 'rgb(23, 152, 225)',
        backgroundColor: 'rgba(13, 142, 225, 0.5)',
      }]
    })
      const [graphData, setGraphData] = useState([{
        label: "Dummy",
        data:[],
        borderColor: 'rgb(23, 152, 225)',
        backgroundColor: 'rgba(13, 142, 225, 0.5)',
      }])
    useEffect(()=>{
      console.log(graphDataToDisplay)
        if(graphDataToDisplay.length!==0){
          if(graphData.length==1){
            graphData.pop()
          }
          let newDatadis=dataDisplay
          if(newDatadis.datasets.length==1){
            newDatadis.datasets.pop()  
          }
          newDatadis.datasets.push(graphDataToDisplay[0])

          setDataDisplay(newDatadis)
            console.log(graphDataToDisplay)
            // console.log(graphData)
        }
    },[graphDataToDisplay])
    return ( 
        <div className='lineChartWrapper'>
        {dataDisplay && <Line  options={options} data={dataDisplay} className='linechart' />}
        </div>
     );
}
 
export default LineChartComponent;