import "./navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Settings from "../../img/settings.svg";
function Navbar() {
	return (
		<>
			<div className="navbar">
				<span>Ari's chat</span>
				<div className="icons">
					<div className="icon">
						<img src={Notification} className="iconImg" />
						<div className="counter">3</div>
					</div>
					<div className="icon">
						<img src={Message} className="iconImg" />
						<div className="counter">3</div>
					</div>
					<div className="icon">
						<img src={Settings} className="iconImg" />
						<div className="counter">3</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
