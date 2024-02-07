import EmployeeForm from './EmployeeTable';

function Employee() {
  return (
    <div>
      <h1 className="em-mng">Manage Your Employee...</h1>
      <EmployeeForm className='table'></EmployeeForm>
    </div>
  );
}

export default Employee;