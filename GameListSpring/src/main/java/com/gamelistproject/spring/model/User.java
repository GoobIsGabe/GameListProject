package com.gamelistproject.spring.model;

import javax.persistence.*;


@Entity
@Table(name = "users")
public class User {
	private long id;
	private String username;
	private String nickname;
	private String email;
	private String password;
	private String userType;

	public User() {

	}
	
	public User(long id, String username, String nickname, String email, String password, String userType) {
		this.id = id;
		this.username = username;
		this.nickname = nickname;
		this.email = email;
		this.password = password;
		this.userType = userType;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	@Column(name = "username", nullable = false)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	@Column(name = "nickname", nullable = false)
	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
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

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", nickname=" + nickname + ", email=" + email
				+ ", password=" + password + ", userType=" + userType + "]";
	}

}
