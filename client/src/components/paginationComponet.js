import React from 'react'
import{Box,Typography, Divider, Checkbox} from '@mui/material'
import Header from './header'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import '../CSS/table.css'



function getCurrentDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}



function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Vijay", 18908424, "2 March 2022", "Completed"),
  createData("Talwinder", 18908424, "2 March 2022", "Pending"),
  createData("Yashraj", 18908424, "2 March 2022", "Completed"),
  createData("Alok", 18908421, "2 March 2022", "Pending"),
];
const rows1 = [
  createData("Vijay", 18908424, getCurrentDate(), "Available"),
  createData("Talwinder", 18908424, getCurrentDate(), "Occupied"),
  createData("Yashraj", 18908424, getCurrentDate(), "Available"),
  createData("Alok", 18908421, getCurrentDate(), "Available"),
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
          <h3>Allotment of Disruptions</h3>
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
               
                <TableCell align="left">Select</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="left">Contractor ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Availabilty-Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows1.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
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

          <Box>
          <div className="Table">
          <h3>Recent Disruptions</h3>
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
                <TableCell>Name</TableCell>
                <TableCell align="left">Contractor ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
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

