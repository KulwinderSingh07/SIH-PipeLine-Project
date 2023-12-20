import React, { useEffect, useRef, useState } from 'react';
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
import io from 'socket.io-client';
import Toolbar from '@mui/material/Toolbar';

const socket = io('http://localhost:4000');

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
    const [powerdata, setPowerdata] = useState([])
    const [hostelVal, setHostelVal] = useState("hostel_K")
    const [labelsArr, setLabelsArr] = useState([])
    const [dataArr, setDataArr] = useState([])
    const [powerlabArr, setPowerLabArr] = useState([])
    const [powerdataArr, setPowerDataArr] = useState([])
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
        //   title: {
        //     display: true,
        //     text: 'Chart.js Line Chart',
        //   },
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
        // while(true){
                const outputdata=await axios.get("http://localhost:8000/api/get_data")
                console.log(outputdata.data)
                const newLabVal=new Date()
                const newDataInput=outputdata.data.flow_rate
                setLabelsArr([...labelsArr,newLabVal])
                setDataArr([...dataArr,newDataInput])
                  const valu={
                    labels:labelsArr,
                datasets:[{
                label: hostelVal,
                data:dataArr
                }],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
            setFlowdata(valu)
            // setTimeout(async() => {
            //     await goLive()   
            // }, 3000);
    // }

    }
    const goPower=async()=>{
        // while(true){
                const outputdata=await axios.get("http://localhost:3001/api/getPressure_data")
                console.log(outputdata.data)
                const newLabVal=new Date()
                const newDataInput=outputdata.data.pressure
                setPowerLabArr([...powerlabArr,newLabVal])
                setPowerDataArr([...powerdataArr,newDataInput])
                  const valu={
                    labels:powerlabArr,
                datasets:[{
                label: hostelVal,
                data:powerdataArr
                }],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
            setPowerdata(valu)
    // }

    }

    const buttonRef = useRef(null);

    // Function to handle the click on the button
    const handleClick = () => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    };
  
    // Set interval on component mount
    useEffect(() => {
      const intervalId = setInterval(handleClick, 3000);
  
      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }, []); 

    // useEffect(()=>{
    //     socket.emit("send_message",{msg:"refetch"});
    // },[])

    // useEffect(()=>{
    //     socket.on("send_message",(data)=>{
    //         goLive();
    //         socket.emit("send_message",data);
    //     })
    // },[socket])

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
            <button id="continueClick" ref={buttonRef} onClick={()=>{
                goLive()
                goPower()
            }}>Go Live</button>
            </div>
        </div>
  <h2 className='headerLive'>Flow Real time and Analytics</h2>
  {Object.keys(flowdata).length && <Line options={options} data={flowdata} />}

  {/* <Toolbar/> */}
  <h2 className='headerLive'>Pressure Real time and Analytics</h2>
  {Object.keys(powerdata).length && <Line options={options} data={powerdata} />}
    </div>
  )
}
export default Analysis
