import React from 'react'
import './Card.css'

const Card = ({ isOpenCard, openCard, id, icon, main, title, info }) => {
	return (
		<div className={`card ${isOpenCard === id && 'open__card'}`} onClick={() => openCard(id)}>
			<div className={`card__icon ${isOpenCard === id && 'open__icon'}`}>
				<img src={icon} alt="" />
			</div>
			<div className="card__info">
				<h3 className={`${isOpenCard === id && 'open__title'}`}>{title}</h3>
				{main && <ul>
					<li>Ваши личные данные</li>
					<li>Рекомендации врачей</li>
					<li>История болезней</li>
				</ul>}
				{!main && <p>{info}</p>}
			</div>
		</div>
	)
}

export default Card
