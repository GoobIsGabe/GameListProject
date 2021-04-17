package com.gamelistproject.spring.client;

import org.springframework.web.client.RestTemplate;

import com.gamelistproject.spring.model.User;


public class RestClient {
    public static void main(String[] args) {
        RestTemplate restTemplate = new RestTemplate();
        //spring.datasource.url=jdbc:postgresql://gamelistproject.cymte9nsk1mu.us-east-2.rds.amazonaws.com:5432/projectTwo
        
        User user=restTemplate.getForObject("http://localhost:9095/api/v2/users/7",User.class);
        //not sure if we should try a different get method
        System.out.println(user.getUsername());

//        Employee e1=new Employee("jas10Mar","jas10Mar","jas25Feb@jas25Feb.com");
//       Employee addedEmp= restTemplate.postForObject("http://localhost:9095/api/v2/employees",e1,Employee.class);

    }
}
