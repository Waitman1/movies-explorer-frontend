import React from 'react';
import { useHistory } from 'react-router-dom';
import './PageError.css'

function PageError() {
	const history = useHistory();
	function goToPrevPage() {
		history.goBack()
	}

	return (
		<div className='error-page'>
			<h1 className='error-page__title'>404</h1>
			<h2 className='error-page__subtitle'>Страница не найдена</h2>
			<button onClick={() => goToPrevPage()} className='error-page__button'>Назад</button>
		</div>
	)
};

export default PageError;