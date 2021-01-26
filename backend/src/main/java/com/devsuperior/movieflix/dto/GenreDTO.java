package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;

public class GenreDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	
	private List<MovieDTO> movies = new ArrayList<>();
	
	public GenreDTO() {
	}

	public GenreDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public GenreDTO(Genre entity) {
		id = entity.getId();
		name = entity.getName();
	}
	
	public GenreDTO(Genre entity, List<Movie> movies) {
		this(entity);
		this.movies = movies.stream().map(movie -> new MovieDTO(movie)).collect(Collectors.toList());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<MovieDTO> getMovies() {
		return movies;
	}
	
}
