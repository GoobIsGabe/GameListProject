package com.gamelistproject.spring.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name = "game_table")
public class Game implements Serializable{

	private static final long serialVersionUID = 1L;
	private long id;
	private long user_id;
	private String gamename;
	private String gameplatform;
	private String progress; //various phrases to determine progress bar length i.e. "just started", "done"
	private String thoughts;
	private Date started; //started playing

    private User user;
	
	public Game() {

	}
	

	public Game(long id, long user_id, String gamename, String gameplatform, String progress, String thoughts,
			Date started, User user) {
		this.id = id;
		this.user_id = user_id;
		this.gamename = gamename;
		this.gameplatform = gameplatform;
		this.progress = progress;
		this.thoughts = thoughts;
		this.started = started;
		this.user = user;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	@Column(name = "user_id", nullable = false, insertable=false, updatable=false)	//fix this if an error? Fetching id from user
	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	@Column(name = "gamename", nullable = false)
	public String getGamename() {
		return gamename;
	}

	public void setGamename(String gamename) {
		this.gamename = gamename;
	}
	@Column(name = "gameplatform", nullable = false)
	public String getGameplatform() {
		return gameplatform;
	}

	public void setGameplatform(String gameplatform) {
		this.gameplatform = gameplatform;
	}
	@Column(name = "progress", nullable = false)
	public String getProgress() {
		return progress;
	}

	public void setProgress(String progress) {
		this.progress = progress;
	}
	@Column(name = "thoughts", nullable = false)
	public String getThoughts() {
		return thoughts;
	}

	public void setThoughts(String thoughts) {
		this.thoughts = thoughts;
	}

	@Column(name = "started", nullable = false)
	public Date getStarted() {
		return started;
	}

	public void setStarted(Date started) {
		this.started = started;
	}
	
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}
	
	@Override
	public String toString() {
		return "Game [id=" + id + ", user_id=" + user_id + ", gamename=" + gamename + ", gameplatform=" + gameplatform
				+ ", progress=" + progress + ", thoughts=" + thoughts + ", started=" + started + "]";
	}
	
	}