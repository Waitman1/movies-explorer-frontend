import './AboutMe.css'
import photo from '../../images/photo.svg'

function AboutMe() {
	return (
		<section className="section section_about-me">
			<h2 className="section__title">Студент</h2>
			<article className="about-me">
				<img className="about-me__photo" src={photo} alt="Фото"></img>
				<h3 className="about-me__name">Алексей</h3>
				<h4 className="about-me__profession">Фронтенд-разработчик, 22 года</h4>
				<p className="about-me__info">
					Я родился и живу в Московской области. Люблю решать сложные задачи, играть в хоккей и путешствовать.
					В прошлом году решил осуществить свою мечту и начал учебу в Практикуме на курсе веб-разработки.
				</p>
				<a className="about-me__link" href="https://github.com/Waitman1" target="blank">Github</a>
			</article>
		</section>
	)
};

export default AboutMe;