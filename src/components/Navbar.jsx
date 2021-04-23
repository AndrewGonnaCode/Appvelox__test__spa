import React from 'react'
import './Navbar.css'
import search from '../icons/search.svg'
import Notification from '../icons/Notification.svg'
import eye from '../icons/eye.svg'
import ArrowDown from '../icons/ArrowDown.svg'
import Profile from '../icons/Profile.svg'


const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__content">
				<div className="navbar__logo">
					<h6>Мой профиль</h6>
				</div>
				<div className="navbar__right">
					<ul>
						<li>
							<img src={search} alt="" />
						</li>
						<li>
							<img src={Notification} alt="" />
						</li>
						<li>
							<img src={eye} alt="" />
						</li>
						<li>
							<img src={Profile} alt="" />
						</li>
						<li>
							<img src={ArrowDown} alt="" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
