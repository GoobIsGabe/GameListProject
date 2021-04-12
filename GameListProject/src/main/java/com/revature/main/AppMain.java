package com.revature.main;

import org.hibernate.Session;

import org.hibernate.Transaction;


import com.revature.model.Game;
import com.revature.model.User;
import com.revature.util.HibernateUtil;

public class AppMain {

	public static void main(String[] args) {

		Transaction transaction = null;
		Session session = HibernateUtil.getSessionFactory().openSession();
		transaction = session.beginTransaction();
//		
//		User u = new User();
//		u.setFirst_name("John");
//		u.setLast_name("Doe");
//		session.save(u);
//		transaction.commit();
//		session.close();
		
		
//		//Inserting Games
		Game game = new Game();
		game.setGamename("Monster Hunter World");
		game.setProgress("Done");
		
		session.save(game);
		
		//Inserting Users
		User user = new User();
		
		user.setFirst_name("John");
		user.setLast_name("Doe");
		
		user.setEmail("sample@email.com");
		user.setUsername("user1");
		user.setPword("pass1");
		
		user.getGameList().add(game);
		session.save(user);
		transaction.commit();
	
		
		
		session.close();
		
		
		
		
	}

}
