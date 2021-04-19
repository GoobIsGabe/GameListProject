package com.gamelistproject.spring.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gamelistproject.spring.model.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
}
