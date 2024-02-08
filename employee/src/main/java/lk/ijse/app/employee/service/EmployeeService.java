package lk.ijse.app.employee.service;

import lk.ijse.app.employee.modal.Employee;
import lk.ijse.app.employee.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * @author : savindaJ
 * @date : 2/4/2024
 * @since : 0.1.0
 **/
@Service
@Transactional
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
//        employee.setEmployeeCode(UUID.randomUUID().toString());
        employeeRepo.save(employee);
        return employee;
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public void deleteEmployee(String id){
        employeeRepo.deleteById(id);
    }

    public void uploadFile(MultipartFile file) throws IOException {
        file.transferTo(new File("G:\\WorkZone\\SpringBootApp\\Crud\\frontend\\public\\uploads\\"+file.getOriginalFilename()));
    }

    public void deleteFile(String fileName){
        File file = new File("G:\\WorkZone\\SpringBootApp\\Crud\\frontend\\public\\uploads\\"+fileName);
        file.delete();
    }

    public Employee getEmployeeByCode(String code){
        Optional<Employee> byId = employeeRepo.findById(code);
        return byId.orElse(null);
    }
}
