import React from 'react';
import './Sixth.css';
import Carousel from 'react-elastic-carousel';
const Sixth = () => {
	return (
		<div className='Sixth_Container'>
			<Carousel>
				<div className='Sixth_Card'>
					<div className='Sixth_CardHeader'>
						<h1>What Customers Say about Us ?</h1>
					</div>
					<div className='Sixth_cardSection'>
						<div className='Sixth_CardImage'>
							<img src='Images/Profile.svg' alt='Profile' />
						</div>
						<div className='Sixth_cardText'>
							<h3>Alan Biju</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
								neque doloribus provident, minus soluta quos Lorem ipsum dolor
								sit amet consectetur adipisicing elit. Non, neque doloribus
								provident, minus soluta quosLorem ipsum dolor sit amet
								consectetur adipisicing elit. Non, neque doloribus provident,
								minus soluta quos
							</p>
						</div>
					</div>
				</div>
				<div className='Sixth_Card'>
					<div className='Sixth_CardHeader'>
						<h1>What Customers Say about Us ?</h1>
					</div>
					<div className='Sixth_cardSection'>
						<div className='Sixth_CardImage'>
							<img src='Images/Profile.svg' alt='Profile' />
						</div>
						<div className='Sixth_cardText'>
							<h3>Alan Biju</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
								neque doloribus provident, minus soluta quos Lorem ipsum dolor
								sit amet consectetur adipisicing elit. Non, neque doloribus
								provident, minus soluta quosLorem ipsum dolor sit amet
								consectetur adipisicing elit. Non, neque doloribus provident,
								minus soluta quos
							</p>
						</div>
					</div>
				</div>
				<div className='Sixth_Card'>
					<div className='Sixth_CardHeader'>
						<h1>What Customers Say about Us ?</h1>
					</div>
					<div className='Sixth_cardSection'>
						<div className='Sixth_CardImage'>
							<img src='Images/Profile.svg' alt='Profile' />
						</div>
						<div className='Sixth_cardText'>
							<h3>Alan Biju</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
								neque doloribus provident, minus soluta quos Lorem ipsum dolor
								sit amet consectetur adipisicing elit. Non, neque doloribus
								provident, minus soluta quosLorem ipsum dolor sit amet
								consectetur adipisicing elit. Non, neque doloribus provident,
								minus soluta quos
							</p>
						</div>
					</div>
				</div>
			</Carousel>
			<footer>
				<div className='Sixth_contact'>
					<h3>Contact</h3>
					<div className='contact_item'>
						<img src='Images/msg.svg' alt='messge' />
						<p>contact@fashioo.in </p>
					</div>
					<div className='contact_item'>
						<img src='Images/phone.svg' alt='phone' />
						<p>Ronit +91766436692 </p>
					</div>
					<div className='contact_item'>
						<img src='Images/gps.svg' alt='gps' />
						<p> Nagpur Maharashtra, India Pin code - 440001 </p>
					</div>
				</div>
				<div className='sub'>
					<p>To Hop With Us </p>
					<button>SUBSCRIBE</button>
				</div>
				<div className='sub'>
					<p>Join Us </p>
					<div className='Icons'>
						<img src='Images/insta.svg' alt='insta' />
						<img src='Images/link.svg' alt='link' />
					</div>
				</div>
				<div className='logo'>
					<img src='Images/logo.svg' alt='logo' />
				</div>
			</footer>
		</div>
	);
};

export default Sixth;
