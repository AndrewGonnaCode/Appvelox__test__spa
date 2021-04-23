import React, { useContext, useState } from 'react'
import Card from '../components/Card'
import Info from '../icons/Info.svg'
import Add from '../icons/Add.svg'
import results from '../icons/Results.svg'
import history from '../icons/history.svg'
import { RecordContext } from '../context/recordsContext'
import RecordCard from '../components/RecordCard'
import { NavLink } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
	const { state } = useContext(RecordContext)
	const [isOpenCard, setIsOpenCard] = useState(1)
	const openCard = (id) => {
		setIsOpenCard(id)
	}
	console.log('RECORDS', state);
	return (
		<div className="profile">
			<div className="profile__content">
				<h5 className="profile__title">{state.records.length >=1 ? 'Записи на прием':'Записей нет'}</h5>
				<div className="profile__doctors">
					{state.records.slice(0, 2).map(({ id, dateInfo, hospital, address, doctor, img }) => {
						return (
							<RecordCard id={id} key={id} dateInfo={dateInfo} hospital={hospital} address={address}
								doctor={doctor} img={img} />
						)
					})}
					{state.records.length > 2 && (
						<div>
							<p>Еще {state.records.length - 2} записи</p>
							<NavLink to="/records">
								<p>Подробнее</p>
							</NavLink>
						</div>
					)}
				</div>
				<div className="profile__info">
					<h5 className="profile__title">Электронная карта</h5>
					<div className="profile__cards">
						<Card isOpenCard={isOpenCard} openCard={openCard} main={true} id={1} title="Информация о пациенте" icon={Info} />
						<Card isOpenCard={isOpenCard} openCard={openCard} main={false} id={2} title="Результат анализов" icon={results} info="Вы можете узнать здесь результаты своих анализов" />
						<Card isOpenCard={isOpenCard} openCard={openCard} main={false} id={3} title="Добавить информацию" icon={Add} info="Добавляйте в свою электронную медицинскую карту новые задания" />
						<Card isOpenCard={isOpenCard} openCard={openCard} main={false} id={4} title="История приемов" icon={history} info="Вся информация о полученных услугах за все время хранится здесь" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
