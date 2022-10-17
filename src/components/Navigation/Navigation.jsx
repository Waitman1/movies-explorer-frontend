import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation({ isOpen, onClose }) {
	return (
		<section className={'navigation' + (isOpen ? ' navigation_visible' : '')}>
			<div className="navigation__container">
				<nav className="navigation__links">
					<Link to='/' className='navigation__link'>Главная</Link>
					<Link to='/movies' className='navigation__link'>Фильмы</Link>
					<Link to='saved_movies' className='navigation__link'>Сохраненные фильмы</Link>
				</nav>

				<Link className='navigation__button' to='/profile'>

					<p className='navigation__button-text'>Аккаунт</p>
				</Link>
				<button className='navigation__closeButton' onClick={onClose} type='button' />
			</div>
		</section>
	)
}

export default Navigation;