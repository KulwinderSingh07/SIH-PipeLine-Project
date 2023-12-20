import React from 'react'
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
import ProgressBar from "@ramonak/react-progress-bar";

function getCurrentDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}



function createData(name, trackingId,issueType, date, status,stageOne,stageTwo,stageThree,stageFour,stageFive,percent) {
  return { name, trackingId,issueType, date, status,stageOne,stageTwo,stageThree,stageFour,stageFive,percent};
}

const rows = [
  createData("Vijay", 18908424,"Clogging", "2 March 2022, 5:30 PM", "Completed"),
  createData("Talwinder", 18908424,"PipeBreak", "2 March 2022, 5:45 PM", "Pending"),
  createData("Yashraj", 18908424,"PipeBreak", "2 March 2022, 6:00 PM", "Completed"),
  createData("Maulik", 18908421,"Water Qiality", "2 March 2022, 6:30 PM", "Pending"),
];
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

const paginationComponet = () => {
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
              {rows1.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                      <div style={{padding:'10px'}} className='allocateIssueDiv'><img src={Tick} style={{height:'25px'}}/><p style={{marginTop:'-26.5px',marginLeft:'35px'}}>Allocate Issue</p></div>
                    </TableCell>
                  <TableCell align='center' component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.trackingId}</TableCell>
                  <TableCell align="center">{row.issueType}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">
                  <span className="status" style={makeStyle1(row.status)}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
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
              {rows1.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.trackingId}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.stageOne == true ? <img style={{height:'20px'}} src={Tick3d}/>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{row.stageTwo == true ? <img style={{height:'20px'}} src={Tick3d}/>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{row.stageThree == true ? <img style={{height:'20px'}} src={Tick3d}/>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{row.stageFour == true ? <img style={{height:'20px'}} src={Tick3d}/>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{row.stageFive == true ? <img style={{height:'20px'}} src={Tick3d}/>:<img style={{height:'20px'}} src={Cross3d}/>}</TableCell>
                  <TableCell align="center">{<progress value={row.percent} max={100} />}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
          </Box>
   </Box>

  )
}

export default paginationComponet

