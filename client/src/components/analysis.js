import React, { useEffect, useState } from 'react';
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
import { Line } from 'react-chartjs-2';
import axios from "axios"
import "../CSS/graph.css"
import BasicSelect from './selectionCompoentforHostelGraph';
// import io from 'socket.io-client';

// const socket = io('http://localhost:4000');

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [233,45,1223,34,22,12,67],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};


const Analysis=()=> {

    const [flowdata, setFlowdata] = useState([])
    const [hostelVal, setHostelVal] = useState("hostel_K")
     const options = {
        responsive: true,
        y:{
             beginAtZero:true
          },
        x:{
        beginAtZero:true
        },
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };


      
    const getFlowData=async(junctionName)=>{
        const FlowData=await axios.post("http://localhost:4000/pipeflow/getPipeFlow",{
            junctionName:junctionName
        })
        
        
        console.log(FlowData.data)
        setFlowdata(FlowData.data)

    }
    const goLive=async()=>{
                const outputdata=await axios.get("http://localhost:8000/api/get_data")
                console.log(outputdata.data)
                
    }

    // for using getflowdata

    // useEffect(()=>{
    //     getFlowData(hostelVal)
    // },[hostelVal])


    // useEffect(() => {
    //     // Listen for real-time data updates from the server
    //     socket.on('dataFromServer', (data) => {
    //         console.log(data)
    //     //   setRealtimeData(data);
    //     });
    
    //     return () => {
    //       // Clean up socket connections on component unmount
    //       socket.disconnect();
    //     };
    //   }, []);
    
  return (
    <div className='GraphWrapper'>
        <div className='GraphHeader'>
            <BasicSelect setHostelVal={setHostelVal}/>
            <div className='buttonHeaderForAnalysis'>
            {/* <button onClick={()=>{
                fetchDataByWeeks()
            }}>Weeks</button> */}
            <button onClick={()=>{
                goLive()
            }}>Go Live</button>
            </div>
        </div>
  {Object.keys(flowdata).length && <Line options={options} data={flowdata} />}
    </div>
  )
}
export default Analysis
