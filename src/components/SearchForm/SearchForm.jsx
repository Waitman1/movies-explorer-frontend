import React from 'react';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import logo from '../../images/search.svg';


function SearchForm() {
	return (
		<section className='searchForm'>
			<form className='searchForm__Form'>
				<img className="searchForm__logo" src={logo} alt="Поиск" />
				<input className='searchForm__input' type='text' name='search' placeholder='Фильм' required></input>

				<button className='searchForm__button' type='submit'></button>
			</form>

			<FilterCheckBox />
		</section>
	)
}

export default SearchForm;