import './App.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Welcome Employee Management System !</h1>
      <Button variant="contained" endIcon={<SendIcon/>} onClick={()=> navigate('/employee')}>
        Goto
      </Button>
    </div>
  );
}

export default App;
