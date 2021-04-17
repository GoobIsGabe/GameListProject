package com.revature.model;

<<<<<<< HEAD:src/main/java/com/revature/model/Game.java
=======
import java.util.ArrayList;
import java.util.List;
>>>>>>> 5e9980cd150e76572a3c4c3ff8e9670b226f424a:GameListProject/src/main/java/com/revature/model/Game.java

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD:src/main/java/com/revature/model/Game.java
=======
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
>>>>>>> 5e9980cd150e76572a3c4c3ff8e9670b226f424a:GameListProject/src/main/java/com/revature/model/Game.java
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "game_table")
public class Game {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "game_id")
	private int game_id;

	@Column(name = "gamename")
	private String gamename;

	@Column(name = "progress")
	private String progress;
	
<<<<<<< HEAD:src/main/java/com/revature/model/Game.java
	@ManyToOne
	private User user;
	
	
	//GETTERS & SETTERS
=======

	@ManyToOne
	private User user;

	// GETTERS & SETTERS
>>>>>>> 5e9980cd150e76572a3c4c3ff8e9670b226f424a:GameListProject/src/main/java/com/revature/model/Game.java
	public int getGame_id() {
		return game_id;
	}

	public void setGame_id(int game_id) {
		this.game_id = game_id;
	}

	public String getGamename() {
		return gamename;
	}

	public void setGamename(String gamename) {
		this.gamename = gamename;
	}

	public String getProgress() {
		return progress;
	}

	public void setProgress(String progress) {
		this.progress = progress;
	}
<<<<<<< HEAD:src/main/java/com/revature/model/Game.java
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
=======
>>>>>>> 5e9980cd150e76572a3c4c3ff8e9670b226f424a:GameListProject/src/main/java/com/revature/model/Game.java

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
