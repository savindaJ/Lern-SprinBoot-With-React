import EmployeeForm from './EmployeeTable';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { useNavigate } from 'react-router-dom';


function Employee() {

    const navigate = useNavigate();
    

  return (
    <div>
      <h1 className="em-mng">Welcome Employee Management System !</h1>
        <div className='btnadd'>
            <IconButton aria-label="delete" onClick={()=> navigate('/add')} >
                <PersonAddAltOutlinedIcon  fontSize='large' className='btn'/>
            </IconButton>
        </div>
      <EmployeeForm className='table'></EmployeeForm>
    </div>
  );
}

export default Employee;