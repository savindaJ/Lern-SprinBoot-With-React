package lk.ijse.app.employee.service;

import lk.ijse.app.employee.modal.Employee;
import lk.ijse.app.employee.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * @author : savindaJ
 * @date : 2/4/2024
 * @since : 0.1.0
 **/
@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public List<Employee> getAll() {
        return employeeRepo.findAll();
    }

    public Employee saveEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        employeeRepo.save(employee);
        return employee;
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public void deleteEmployee(Long id){
        employeeRepo.deleteById(id);
    }

    public Employee getEmployeeById(Long id){
        return employeeRepo.findById(id).orElseThrow(()->
                new RuntimeException("Employee not found for id: "+id));
    }
}
