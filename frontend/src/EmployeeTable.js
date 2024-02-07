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
import axios from 'axios';

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



export default function EmployeeTable() {

  const [open,openchange]=React.useState(false);
    const functionopenpopup=()=>{
        openchange(true);
    }
    const closepopup=()=>{
        openchange(false);
    }

    const [save,saveChange]=React.useState(false);
    const savePopUp=()=>{
        saveChange(true);
    }
    const close=()=>{
        saveChange(false);
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

    const [file, setFile] = React.useState(null);

    const [rows, setRows] = React.useState([]);

    const [id,setId]=React.useState('');
    const [name,setName]=React.useState('');
    const [address,setAddress]=React.useState('');
    const [email,setEmail]=React.useState('');

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
  
        console.log('filee',event.target.files[0]);

        setFile(event.target.files[0]);
      
        let url = URL.createObjectURL(event.target.files[0]);
        console.log(url);
        setImage(url);
        let file = event.target.files[0];
        console.log(file);  
        console.log(URL.createObjectURL(event.target.files[0]));
      }
     }

     function saveEmployee(){
      console.log('file----',file, id, name, address, email);

      const json = {
        email: email,
        name: id,
        address: address,
        phone: name,
        imageUrl: file.name
      }

      const employee = JSON.stringify(json);

       axios.post('http://localhost:8080/spring/employee/add', employee,{
        headers: {
          'Content-Type': 'application/json',
        },
       })
        .then(response => {
          console.log(response);
          alert('Employee added successfully');
        })
        .catch(error => {
          console.error('Error uploading file', error);
        });

      const formData = new FormData();
      formData.append('file', file);
  
      axios.post('http://localhost:8080/spring/employee/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          console.log('File uploaded successfully');
          getAllEmployees();
        })
        .catch(error => {
          console.error('Error uploading file', error);
        });
      }

      function getAllEmployees(){
        axios.get('http://localhost:8080/spring/employee')
        .then(response => {
          console.log(response);
          setRows(response.data);
        })
        .catch(error => {
          console.error('Error getting all employees', error);
        });
      }

      React.useEffect(() => {
        getAllEmployees();
    }, []);

      // getAllEmployees();

  return (
    
    <div>
    <div className='btn-section'>
            <IconButton aria-label="delete" onClick={()=>{
                savePopUp();
                setImage(null);
            }} >
                <PersonAddAltOutlinedIcon  fontSize='large' className='btn'/>
            </IconButton>
    </div>
    <div className='table'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className='head'>
          <TableRow >
          <StyledTableCell>Employee Profile</StyledTableCell>
            <StyledTableCell>Employee Name</StyledTableCell>
            <StyledTableCell align="right">Employee Address</StyledTableCell>
            <StyledTableCell align="right">Employee Email</StyledTableCell>
            <StyledTableCell align="right">Employee Phone</StyledTableCell>
            <StyledTableCell align="right">Option</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left"><img className='employee-profile' alt='' src={`http://localhost:3000/uploads/`+`${row.imageUrl}`} /></StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">
              <IconButton aria-label="delete" onClick={()=>{
                functionopenpopup();
                setId(row.name);
                setAddress(row.address);
                setEmail(row.email);
                setName(row.phone);
                setImage(`http://localhost:3000/uploads/`+`${row.imageUrl}`);
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
                <DialogTitle>Employee Update  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                    <Stack spacing={2} margin={2}>
                      <TextField variant="outlined" value={id} label="Name" onChange={e => setId(e.target.value)}></TextField>
                      <TextField variant="outlined" value={address} label="Address" onChange={e => setId(e.target.value)}></TextField>
                      <TextField variant="outlined" label="Email" value={email}></TextField>
                      <TextField variant="outlined" label="Phone" value={name}></TextField>
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


            <Dialog 
            // fullScreen 
            open={save} onClose={close} fullWidth maxWidth="sm">
                <DialogTitle>Employee Registeration  <IconButton onClick={close} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                    <Stack spacing={2} margin={2}>
                      <TextField variant="outlined" label="Name" onChange={e => setId(e.target.value)}></TextField>
                      <TextField variant="outlined" label="Address" onChange={e => setAddress(e.target.value)}></TextField>
                      <TextField variant="outlined" label="Email" onChange={e => setEmail(e.target.value)}></TextField>
                      <TextField variant="outlined" label="Phone" onChange={e => setName(e.target.value)}></TextField>
                      <FormControlLabel control={<Checkbox defaultChecked color="primary"></Checkbox>} label="Agree terms & conditions"></FormControlLabel>
                      
                      <Grid item xs={12} margin={'auto'}>
                      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                      Add Image
                      <VisuallyHiddenInput type="file" accept="image/*" onChange={onImageChange}/>
                      </Button> 
                      </Grid>

                      <img className='image' alt="" src={image}/>
                      <Button color="primary" variant="contained" onClick={()=>{
                        saveEmployee();
                        close();
                        setId('');
                        setAddress('');
                        setEmail('');
                        setName('');
                        setImage(null);
                      }}>Submit</Button>
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