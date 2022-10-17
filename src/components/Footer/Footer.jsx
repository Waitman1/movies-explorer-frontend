import './Footer.css'

import { useLocation } from 'react-router-dom';

function Footer() {

	const location = useLocation();

	return (
		<footer className={'footer' + (location.pathname === '/signin' ? ' footer_none' : '') + (location.pathname === '/signup' ? ' footer_none' : '') + (location.pathname === '/profile' ? ' footer_none' : '')}>
			<h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
			<div className="footer__container">
				<p className="footer__copyright">&copy; 2022</p>
				<nav className="footer__links">
					<ul className="footer__link-list">
						<li className="footer__link-item">
							<a className="footer__link" href="https://practicum.yandex.ru/" target="blank" rel="noreferrer">Яндекс.Практикум</a>
						</li>
						<li className="footer__link-item">
							<a className="footer__link" href="https://github.com/Waitman1" target="blank">Github</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;