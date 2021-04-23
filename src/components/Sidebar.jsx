import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import heart from '../icons/heart.svg'
import Vector from '../icons/Vector.svg'
import messages from '../icons/Messages.svg'
import test from '../icons/Test.svg'
import book from '../icons/book.svg'
import help from '../icons/help.svg'
import logo from '../icons/logo.svg'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="logo">
					<p>Логотип</p>
				</div>
				<ul>
					<NavLink to="/" exact>
						<li>
							<img src={heart} alt="" />
							<span>Профиль</span>
						</li>
					</NavLink>
						<NavLink to="/doctors">
					<li>
							<img src={Vector} alt="" />
							<span>Врачи и клиники</span>
					</li>
						</NavLink>
						<NavLink to="/messages">
					<li>
							<img src={messages} alt="" /><span>Сообщения</span>
					</li>
						</NavLink>
						<NavLink to="/tests">
					<li>
							<img src={test} alt="" />
							<span>Тестирование</span>
					</li>
						</NavLink>
						<NavLink to="/info">
					<li>
							<img src={book} alt="" />
							<span>Полезно знать</span>
					</li>
						</NavLink>
				</ul>
				<button className="btn">
					Подать заявку
				</button>
			</div>
			<div className="sidebar__bottom">
				<div className="help">
					<img src={help} alt="" />
					<span>Помощь</span>
				</div>
				<div className="logo__bottom">
					<img src={logo} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Sidebar
