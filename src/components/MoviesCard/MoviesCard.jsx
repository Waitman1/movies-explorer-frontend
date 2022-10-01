import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {


	return (
		<li className='moviesCard'>
			<div className='moviesCards__information'>
				<h2 className='moviesCard__title'>{props.description}</h2>
				<p className='moviesCard__description'>{props.duration}</p>
			</div>

			<button className={props.className} type='submit'></button>
			<img className='moviesCard__image' src={props.image} alt={props.description} />
		</li>
	);
}

export default MoviesCard;