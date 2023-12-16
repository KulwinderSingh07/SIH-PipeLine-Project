import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { managerAreaArr } from '../data/dummyPaginationArray';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'location', label: 'Location', minWidth: 100 },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'time',
    label: 'Time',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  }
];



const AreaListPaginationComponent=()=> {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <div className='areaListWrapper'>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                  <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  >
                  {column.label}
                </TableCell>
              ))}
               <TableCell
                  key={'action'}
                  align={'right'}
                  style={{ minWidth: 170 }}
                  >
                  Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {managerAreaArr
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                  return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell key='action' align={'right'}>
                    <IconButton className='areaListButton'><DoneIcon fontSize="medium"/></IconButton>
                    <IconButton className='areaListButton'><RemoveRedEyeIcon fontSize="medium"/></IconButton>
                    <IconButton className='areaListButton'><DeleteOutlineIcon fontSize="medium"/></IconButton>
                    </TableCell>
                  </TableRow>
                );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='paginationTab'>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={managerAreaArr.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </div>
  </div>
        // </Paper>
  );
}
export default AreaListPaginationComponent