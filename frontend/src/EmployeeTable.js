import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from "@mui/icons-material/Close";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Stack, TextField } from "@mui/material";
// import { useHistory } from 'react-router-dom';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Grid from '@mui/material/Grid';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0)
];

export default function EmployeeTable() {

  const [open,openchange]=React.useState(false);
    const functionopenpopup=()=>{
        openchange(true);
    }
    const closepopup=()=>{
        openchange(false);
    }

    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    });
  
    const [image, setImage] = React.useState(null);

    const [id,setId]=React.useState(0);

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
  
        console.log('filee',event.target.files[0]);
      
        let url = URL.createObjectURL(event.target.files[0]);
        console.log(url);
        setImage(url);
        let file = event.target.files[0];
        console.log(file);  
        console.log(URL.createObjectURL(event.target.files[0]));
      }
     }

  return (

    <div>
    <div className='btn-section'>
            <IconButton aria-label="delete" onClick={functionopenpopup} >
                <PersonAddAltOutlinedIcon  fontSize='large' className='btn'/>
            </IconButton>
    </div>
    <div className='table'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className='head'>
          <TableRow >
          <StyledTableCell>Employee Profile</StyledTableCell>
            <StyledTableCell>Employee ID</StyledTableCell>
            <StyledTableCell align="right">Employee Name</StyledTableCell>
            <StyledTableCell align="right">Employee Address</StyledTableCell>
            <StyledTableCell align="right">Employee Basic</StyledTableCell>
            <StyledTableCell align="right">Option</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left"><img className='employee-profile' alt='' src={`http://localhost:3000/uploads/employee.png`} /></StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">
              <IconButton aria-label="delete" onClick={()=>{
                functionopenpopup();
                setId(row.name);
                setImage(`http://localhost:3000/uploads/employee.png`);
              }}>
                    <EditIcon sx={{color:'blue'}}/>
                </IconButton>

                <IconButton aria-label="delete">
                    <DeleteIcon onClick={functionopenpopup} sx={{color:'red'}} />
                </IconButton>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <Dialog 
            // fullScreen 
            open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>User Registeration  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                    <Stack spacing={2} margin={2}>
                      <TextField variant="outlined" value={id} label="Name" onChange={e => setId(e.target.value)}></TextField>
                      <TextField variant="outlined" label="Address"></TextField>
                      <TextField variant="outlined" label="Email"></TextField>
                      <TextField variant="outlined" label="Phone"></TextField>
                      <FormControlLabel control={<Checkbox defaultChecked color="primary"></Checkbox>} label="Agree terms & conditions"></FormControlLabel>
                      
                      <Grid item xs={12} margin={'auto'}>
                      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                      Add Image
                      <VisuallyHiddenInput type="file" accept="image/*" onChange={onImageChange}/>
                      </Button> 
                      </Grid>

                      <img className='image' alt="" src={image}/>
                      <Button color="primary" variant="contained">Submit</Button>
                    </Stack>
                    
                      </DialogContent>
                      <DialogActions>
                      {/* <Button color="success" variant="contained">Yes</Button>
                          <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
                      </DialogActions>

                
            </Dialog>
    </div>
    </div>
  );
}