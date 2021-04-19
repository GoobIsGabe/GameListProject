package com.gamelistproject.spring.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamelistproject.spring.exception.ResourceNotFoundException;
import com.gamelistproject.spring.model.User;
import com.gamelistproject.spring.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class UserController {
	@Autowired
	private UserRepository userRepository;

	// http://localhost:9095/api/v2/employees
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return (List<User>) userRepository.findAll();
	}

	@PostMapping("/users")
	public User createUser(@Valid @RequestBody User user) {

		return userRepository.save(user);
	}

	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
		return ResponseEntity.ok().body(user);
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
			@Valid @RequestBody User userDetails) throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

		user.setEmail(userDetails.getEmail());
		user.setUsername(userDetails.getUsername());
		user.setNickname(userDetails.getNickname());
		user.setAbout(userDetails.getAbout());
		final User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
	 @DeleteMapping("/users/{id}")
	 //import java.util.map
	    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId)
	         throws ResourceNotFoundException {
	        User user = userRepository.findById(userId)
	       .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

	        userRepository.delete(user);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}
