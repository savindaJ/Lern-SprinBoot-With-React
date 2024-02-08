package lk.ijse.app.employee.controller;

import lk.ijse.app.employee.modal.Employee;
import lk.ijse.app.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @author : savindaJ
 * @date : 2/4/2024
 * @since : 0.1.0
 **/
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        System.out.println("EmployeeController.EmployeeController");
        this.employeeService = employeeService;
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAll() {
        return new ResponseEntity<>(employeeService.getAll(), HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee) {
        Employee employee1 = employeeService.saveEmployee(employee);
        System.out.println(employee);
        return new ResponseEntity<>(employee1, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
        Employee employee1 = employeeService.updateEmployee(employee);
        return new ResponseEntity<>(employee1,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable String id){
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/upload")
    public ResponseEntity upload(@RequestParam MultipartFile file) {
        try {
            employeeService.uploadFile(file);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/delete/*", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok()
                .allow(HttpMethod.DELETE)
                .allow(HttpMethod.PUT)
                .allow(HttpMethod.OPTIONS)
                .build();
    }
}
