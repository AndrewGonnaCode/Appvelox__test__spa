import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import Datepicker from '../components/Datepicker/Datepicker'
import RecordCard from '../components/RecordCard'
import { RecordContext } from '../context/recordsContext'
import ArrowBack from '../icons/ArrowBack.svg'
import './Records.css'

const Record = () => {
	const history = useHistory()
	const { records } = useContext(RecordContext)
	const [isShown, setIsShown] = useState(false)
	const renderRecords = isShown ? records : records.slice(0, 2)
	return (
		<div className="records__page">
			<div className="records__items">
			  <div>
			<div className="records__back">
				<img onClick={() => history.push('/')} src={ArrowBack} alt="" />
				<p>Мои записи</p>
			</div>
				<div className={`records__doctors ${isShown && 'shown'}`}>
					<NavLink onClick={() => setIsShown(!isShown)} to="#">{isShown ? 'Скрыть записи' : 'Показать все записи'}</NavLink>
					{renderRecords.map(({ id, dateInfo, hospital, address, doctor, img }) => {
						return (
							<RecordCard key={id} id={id} dateInfo={dateInfo} hospital={hospital} address={address}
								doctor={doctor} img={img} />
						)
					})}
				</div>
			</div>
				<div className="records__dates">
					<Datepicker locale="pt-BR" />
				</div>
			</div>
		</div>
	)
}

export default Record
