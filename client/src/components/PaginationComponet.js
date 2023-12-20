import React, { useEffect, useState } from 'react'
import{Box,Typography, Divider, Checkbox, LinearProgress} from '@mui/material'
import Header from './header'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import '../CSS/table.css'
import Toolbar from '@mui/material/Toolbar';
import Tick from '../assets/tick.png';
import Tick3d from '../assets/tick_3d.png';
import Cross3d from '../assets/cross_3d.png';
import Prompt from '../assets/prompt.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const pythonSensorVerify = async()=>{
   

    return;
}

function createData(name, trackingId,issueType, date, status,stageOne,stageTwo,stageThree,stageFour,stageFive,percent) {
  return { name, trackingId,issueType, date, status,stageOne,stageTwo,stageThree,stageFour,stageFive,percent};
}
const rows1 = [
  createData("Vijay", 18908424,"Clogging","2 March 2022, 5:30 PM", "Available",true,false,false,false,false,20),
  // createData("Talwinder", 18908424, getCurrentDate(), "Occupied"),
  createData("Yashraj", 18908424,"PipeBreak","2 March 2022, 5:45 PM", "Available",true,true,true,false,false,60),
  createData("Alok", 18908421,"Water Quality","2 March 2022, 6:00 PM", "Available",true,true,true,true,false,80),
];


const makeStyle1 = (status) => {
  if (status === 'Occupied') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  }
};

const PaginationComponet = () => {
  const [availableIssues,setAvailableIssues] = useState();
  const [allottedIssues,setAllottedIssues] = useState();

  const fetchAvailableIssues = async()=>{
      var headers = new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Accept','application/json');

      const data = await fetch('http://localhost:4000/superVisor/fetchAvailableSuperVisorIssues',{
        method:'GET',
        redirect:'follow',
        credentials:'include',
        headers:headers
      })

      const res = await data.json();

      console.log('Available issues is :\n',res.backendData);
      setAvailableIssues(res.backendData);
  }

  const fetchAllottedSuperVisorIssues = async()=>{
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');

    const data = await fetch('http://localhost:4000/superVisor/fetchAllotedSuperVisorIssues',{
      method:'GET',
      redirect:'follow',
      credentials:'include',
      headers:headers
    })

    const res = await data.json();

    console.log('Allotted issues is :\n',res.backendData);
    setAllottedIssues(res.backendData);
}


  useEffect(()=>{
    fetchAvailableIssues();
    fetchAllottedSuperVisorIssues();
  },[])

  return (
    <Box>
     <Header title={"Manage Area Section"} subtitle={"A comprehensive waty to visualise solution"}/>
     <Box>
          <div className="Table">
          <h3 style={{marginBottom:'-17px'}}>Supervisor Allotment</h3>
          <Divider sx={{  my: 1.5,
          typography: "overline",
          color: "text.disabled",
          height:"10px",
          "&::before,::after": { borderTopStyle: "dashed" },}}/>
        <TableContainer
          component={Paper }
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650  }} aria-label="simple table">
            <TableHead>
              <TableRow>
               
                <TableCell sx={{width:'200px'}} align="center">Select Supervisor</TableCell>
                <TableCell align="center">Supervisor Name</TableCell>
                <TableCell align="center">Issue ID</TableCell>
                <TableCell align="center">Issue Type</TableCell>
                <TableCell align="center">Issue Occurence</TableCell>
                <TableCell align="center">Availabilty-Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {availableIssues? availableIssues.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                      <div style={{padding:'10px'}} className='allocateIssueDiv'><img src={Tick} style={{height:'25px'}}/><p style={{marginTop:'-26.5px',marginLeft:'35px'}}>Allocate Issue</p></div>
                    </TableCell>
                  <TableCell align='center' component="th" scope="row">
                    {row.superVisorName}
                  </TableCell>
                  <TableCell align="center">{row.pipeLocationID}</TableCell>
                  <TableCell align="center">{row.issueType}</TableCell>
                <TableCell align="center">{row.issueDateTime}</TableCell>
                  <TableCell align="center">
                  <span className="status" style={makeStyle1('Available')}>Available</span>
                  </TableCell>
                </TableRow>
              )):<></>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
          </Box>
{/* Allotment section */}
   
{/* Observation section */}

          <Toolbar/> {/*Dummy toolbar for representing the gap between top to bottom */}

          <Box>
          <div className="Table">
          <h3 style={{marginBottom:'-8px'}}>Progress Tracking</h3>
          <Divider sx={{  my: 1.5,
          typography: "overline",
          color: "text.disabled",
          "&::before,::after": { borderTopStyle: "dashed" },}}/>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Supervisor Name</TableCell>
                <TableCell align="center">Assigned Issue ID</TableCell>
                <TableCell align="center">Assignment Date And Time</TableCell>
                <TableCell align="center">Stage-1 (Pipeline Anomaly Verified)</TableCell>
                <TableCell align="center">Stage-2 (Workers Assigned)</TableCell>
                <TableCell align="center">Stage-3 (Work In Progress)</TableCell>
                <TableCell align="center">Stage-4 (Report Work Completion)</TableCell>
                <TableCell align="center">Stage-5 (CrossCheck Pipeline Health)</TableCell>
                <TableCell align="center">Progress Bar</TableCell>

              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {allottedIssues?allottedIssues.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.superVisorName}
                  </TableCell>
                  <TableCell align="center">{row.pipeLocationID}</TableCell>
                  <TableCell align="center">{row.issueDateTime}</TableCell>
                  <TableCell align="center">{row.stageOne == true ? <img style={{height:'20px'}} src={Tick3d}/>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{row.stageTwo == true ? <img style={{height:'20px'}} src={Tick3d}/>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{row.stageThree == true ? <img style={{height:'20px'}} src={Tick3d}/>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{row.stageFour == true ? <img style={{height:'20px'}} src={Tick3d}/>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{row.stageOne==true && row.stageTwo==true && row.stageThree==true && row.stageFour==true && row.stageFive == true ? <img style={{height:'20px'}} src={Tick3d}/>:(row.stageOne==true && row.stageTwo==true && row.stageThree==true && row.stageFour==true)?<Popup position="top center" trigger={<div className='verifySensorsDiv' style={{border:'solid',borderWidth:'1px',borderRadius:'30px',padding:'5px',display:'flex',justifyContent:'center'}}><img style={{height:'20px',marginRight:'10px'}} src={Prompt}/><p>Verify via Sensors</p></div>}>
                    <div>
    <button style={{padding:'10px',borderRadius:'10px',borderWidth:'1px'}} onClick={()=>{pythonSensorVerify()}}>Send Verification Request</button>
  </div>
  </Popup>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{<progress value={row.progressBar} max={100} />}</TableCell>
                </TableRow>
              )):<></>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
          </Box>
   </Box>

  )
}

export default PaginationComponet

