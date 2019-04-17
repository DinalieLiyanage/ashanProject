package com.example.ashanProject.demo.Controllers;

import com.example.ashanProject.demo.Models.User;
import com.example.ashanProject.demo.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("api")

public class CreatorController{

    @Autowired
    UserRepository userRepository;

    @Autowired
    MongoTemplate mongoTemplate;
    
    @ResponseBody
    @RequestMapping(value="/user", method=RequestMethod.POST)
    public ResponseEntity<User> addNewCreator(@RequestBody User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    @GetMapping(value="/user/{username}")
    public ResponseEntity<User> getCreatorDetails(@PathVariable String username) {
        if(userRepository.findOneByUsername(username).isPresent()){
          // User user = (User) userRepository.findOneByUsername(username).get();
            return ResponseEntity.ok(userRepository.findOneByUsername(username).get());
        }else{
            return ResponseEntity.notFound().build();
        }

           
        }
       
    }
    


    

