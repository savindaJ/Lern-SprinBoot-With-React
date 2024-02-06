import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


function EmployeeForm(props) {

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


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      let file = event.target.files[0];
      console.log(file);  
    }
   }

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

            <Button sx={{marginLeft: '40vw'}} className='btnSave' variant='contained'>save</Button>
    </Box>
  );
}

export default EmployeeForm;