import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import React, { useState } from 'react';


function EmployeeForm(props) {

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
            <TextField id="outlined-basic" label="Employee ID" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Employee Name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Employee Address" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Employee Basic" variant="outlined" />
            </Grid>
            <Grid item xs={6} margin={'auto'}>
            <Button variant='contained'> 
            <input type="file" accept="image/*" onChange={onImageChange} className="filetype" />
            </Button>
            </Grid>

            <img className='image' alt="" src={image}/>
        </Grid>
    </Box>
  );
}

export default EmployeeForm;