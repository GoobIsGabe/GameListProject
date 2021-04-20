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
import com.gamelistproject.spring.model.Game;
import com.gamelistproject.spring.repository.GameRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class GameController {
	@Autowired
	private GameRepository gameRepository;

	// http://localhost:9095/api/v2/employees
	@GetMapping("/games")
	public List<Game> getAllGames() {
		return (List<Game>) gameRepository.findAll();
	}

	@PostMapping("/games")
	public Game createGame(@Valid @RequestBody Game game) {

		return gameRepository.save(game);
	}

	@GetMapping("/games/{id}")
	public ResponseEntity<Game> getGameById(@PathVariable(value = "id") Long gameId)
			throws ResourceNotFoundException {
		Game game = gameRepository.findById(gameId)
				.orElseThrow(() -> new ResourceNotFoundException("Game not found for this id :: " + gameId));
		return ResponseEntity.ok().body(game);
	}

	@PutMapping("/games/{id}")
	public ResponseEntity<Game> updateGame(@PathVariable(value = "id") Long gameId,
			@Valid @RequestBody Game gameDetails) throws ResourceNotFoundException {
		Game game = gameRepository.findById(gameId)
				.orElseThrow(() -> new ResourceNotFoundException("Game not found for this id :: " + gameId));

		game.setGamename(gameDetails.getGamename());
		game.setGameplatform(gameDetails.getGameplatform());
		game.setProgress(gameDetails.getProgress());
		game.setStarted(gameDetails.getStarted());
		game.setThoughts(gameDetails.getThoughts());
		final Game updatedGame = gameRepository.save(game);
		return ResponseEntity.ok(updatedGame);
	}
	 @DeleteMapping("/games/{id}")
	 //import java.util.map
	    public Map<String, Boolean> deleteGame(@PathVariable(value = "id") Long gameId)
	         throws ResourceNotFoundException {
	        Game game = gameRepository.findById(gameId)
	       .orElseThrow(() -> new ResourceNotFoundException("Game not found for this id :: " + gameId));

	        gameRepository.delete(game);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}
