package com.gamelistproject.spring.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "user_table")
public class User implements Serializable{
	private static final long serialVersionUID = 1L;
	private long id;
	private String username;
	private String nickname;
	private String about;
	private String email;
	private String password;
	private String userType;
	
	private Set<Game> games;
	//private Set<String> screenshots;


	/*public Set<String> getScreenshots() {
		return screenshots;
	}

	public void setScreenshots(Set<String> screenshots) {
		this.screenshots = screenshots;
	}*/

	public User() {

	}
	
	public User(long id, String username, String nickname, String about,  String email, String password, String userType) {
		this.id = id;
		this.username = username;
		this.nickname = nickname;
		this.about = about;
		this.email = email;
		this.password = password;
		this.userType = userType;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	@Column(name = "username", nullable = false, unique = true)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	@Column(name = "nickname")
	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	
	@Column(name = "about")
	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}
	
	@Column(name = "email", nullable = false)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	@Column(name = "pword", nullable = false)
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name = "type", nullable = false)
	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
	@JsonManagedReference
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	public Set<Game> getGames() {
		return games;
	}

	public void setGames(Set<Game> games) {
		this.games = games;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", nickname=" + nickname + ", about=" + about +", email=" + email
				+ ", password=" + password + ", userType=" + userType + "]";
	}

}
