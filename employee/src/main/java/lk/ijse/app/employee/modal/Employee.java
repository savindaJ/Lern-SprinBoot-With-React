package lk.ijse.app.employee.modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

/**
 * @author : savindaJ
 * @date : 2/4/2024
 * @since : 0.1.0
 **/
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Employee implements Serializable {
    @Id
    @Column(nullable = false,updatable = false)
    private String email;
    private String name;
    private String address;
    private String phone;
    private String imageUrl;
}
