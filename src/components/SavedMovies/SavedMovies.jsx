import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

function SavedMovies() {
	return (
		<section>

			<SearchForm />

			<MoviesCardList className='moviesCard__deleteButton' />

		</section>
	);
}

export default SavedMovies;