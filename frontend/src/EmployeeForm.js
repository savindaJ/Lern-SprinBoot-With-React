import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export function setValues(){
  console.log('name');
  console.log('addres');
}


function EmployeeForm() {

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

  const [image, setImage] = useState(null);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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

   const navigate = useNavigate();

  return (

    <Box className="EmployeeForm">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <TextField sx={{width:'100%'}} id="outlined-basic" label="Employee ID" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
            <TextField sx={{width:'100%'}} id="outlined-basic" label="Employee Name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
            <TextField sx={{width:'100%'}} id="outlined-basic" label="Employee Address" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
            <TextField sx={{width:'100%'}} id="outlined-basic" label="Employee Basic" variant="outlined" />
            </Grid>

            <Grid item xs={12} margin={'auto'}>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Add Image
            <VisuallyHiddenInput type="file" accept="image/*" onChange={onImageChange}/>
            </Button> 
            </Grid>

            <img className='image' alt="" src={image}/>

            </Grid>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
            This is a success Alert inside a Snackbar!
          </Alert>
      </Snackbar>

            <div className='button-secion'>
            <Button sx={{marginLeft: '40vw'}} className='btnSave' variant='contained' onClick={handleClick}>save</Button>
            <Button sx={{marginLeft: '1vw'}} className='' variant='contained' onClick={()=> navigate('/employee')}>Back</Button>
            </div>
    </Box>
  );
}

export default EmployeeForm;