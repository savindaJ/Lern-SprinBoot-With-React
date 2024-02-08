package lk.ijse.app.employee.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author : savindaJ
 * @date : 2/8/2024
 * @since : 0.1.0
 **/
@Configuration
@EnableWebMvc
public class CrossConfiguration implements WebMvcConfigurer {

    public CrossConfiguration() {
        System.out.println("CrossConfiguration.CrossConfiguration");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET","POST","PUT","DELETE");
    }

}
