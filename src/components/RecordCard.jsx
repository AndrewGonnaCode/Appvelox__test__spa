import React, { useContext } from 'react'
import Harkov from '../images/Harkov.png'
import Malushko from '../images/Malushko.png'
import './RecordCard.css'
import { RecordContext } from '../context/recordsContext'



const RecordCard = ({ id, dateInfo, hospital, address, doctor, img }) => {
	const { remove } = useContext(RecordContext)
	console.log('remove', remove);
	const src = img === 'Harkov' ? { Harkov } : { Malushko }
	const [value] = Object.values(src)
	return (
		<div className="record">
			<div className="record__info">
				<h5>{dateInfo.day} {dateInfo.date} | {dateInfo.time}</h5>
				<p>{hospital}</p>
				<p>{address}</p>
				<div className="record__doctor">
					<img src={value} alt="doc" />
					<div>
						<h5>{doctor.name}</h5>
						<p>{doctor.speciality}</p>
					</div>
				</div>
			</div>
			<button onClick={()=>remove(id)} className="btn">Отменить</button>
		</div>
	)
}
export default RecordCard
