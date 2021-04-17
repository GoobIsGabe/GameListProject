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

//		User us = new User();
//		us.setFirst_name("John");
//		us.setLast_name("Doe");
//		session.save(us);
//		transaction.commit();
//		session.close();
		
		//Inserting Games
		Game game1 = new Game();
		game1.setGamename("Monster Hunter World");
		game1.setProgress("Done");
		session.save(game1);
		
		Game game2 = new Game();
		game2.setGamename("Minecraft");
		game2.setProgress("Done");
		
		session.save(game2);
		
		//Inserting admins
		//<-------------------------Admin 1------------------------------------------->
		User user1 = new User();
		
		user1.setFirst_name("Gabe");
		user1.setLast_name("Harper");
		
		user1.setEmail("gabriel.harper@revature.net");
		user1.setUsername("user1");
		user1.setPword("pass1");
		
		user1.setNickname("GoobIsGabe");
		//Add your game here
		user1.getGameList().add(game1);
		
		//<-------------------------Admin 2------------------------------------------->
		User user2 = new User();
		
		user2.setFirst_name("David");
		user2.setLast_name("Jensen");
		
		user2.setEmail("david.jensen@revature.net");
		user2.setUsername("user2");
		user2.setPword("pass2");
		
		user2.setNickname("Thunderwizard99");
		
		
		//Add your game here
		user1.getGameList().add(game1);
		
		//<-------------------------Admin 3------------------------------------------->
		
		User user3= new User();
		
		user3.setFirst_name("James");
		user3.setLast_name("Artacho");
		
		user3.setEmail("james.artacho@revature.net");
		user3.setUsername("user3");
		user3.setPword("pass3");
		user2.setNickname("scrumApprentice");
		
		//Add your game here
		user1.getGameList().add(game2);
		
		
		//Saving users to Database
		session.save(user1);
		session.save(user2);
		session.save(user3);
		transaction.commit();	
		session.close();
			
		
	}
	

}
