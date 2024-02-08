package lk.ijse.app.employee.repo;

import lk.ijse.app.employee.modal.Employee;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

/**
 * @author : savindaJ
 * @date : 2/4/2024
 * @since : 0.1.0
 **/
public interface EmployeeRepo extends JpaRepositoryImplementation<Employee,String> {
    @Modifying
    @Query("SELECT e FROM Employee e WHERE e.email = ?1")
    Integer findByEmployeeCode(String email);
}
