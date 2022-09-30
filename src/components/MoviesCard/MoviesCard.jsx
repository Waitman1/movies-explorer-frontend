import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {


	return (
		<li className='moviesCard'>
			<img className='moviesCard__image' src={props.image} alt={props.description} />
			<div className='moviesCards__information'>
				<h2 className='moviesCard__title'>{props.description}</h2>
				<button className={props.className} type='submit'></button>
			</div>
			<p className='moviesCard__description'>{props.duration}</p>
		</li>
	);
}

export default MoviesCard;