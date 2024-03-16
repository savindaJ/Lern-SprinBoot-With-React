package lk.ijse.app.employee.controller;

import lk.ijse.app.employee.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * @author : savindaJ
 * @date : 3/16/2024
 * @since : 0.1.0
 **/
@RestController
public class EmailController {
    @Autowired
    private EmailService emailService;

    @GetMapping("/sendEmail")
    public String sendEmail() {
        emailService.sendSimpleMessage("jayasekarasavinda44@gmail.com", "Test Subject", "This is a test email.");
        return "Email sent successfully!";
    }
}
