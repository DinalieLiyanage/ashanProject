package com.example.ashanProject.demo.repositories;

import com.example.ashanProject.demo.Models.User;
import com.google.common.base.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

/**
 * Created by viroj on 12/3/2018.
 */
public interface UserRepository extends MongoRepository<User, String> {
  

List<User> findByAddress(String address); 

Optional<User> findOneByUsername(String username);

}
