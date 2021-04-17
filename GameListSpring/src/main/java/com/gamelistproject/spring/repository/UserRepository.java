package com.gamelistproject.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gamelistproject.spring.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
