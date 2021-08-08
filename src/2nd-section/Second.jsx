import React from 'react';
import './secondStyle.css';
const Second = () => {
	return (
		<div className='secondPage_Container'>
			<div className='secondPage_SecitonOne'>
				<div className='text'>
					<h2>
						We will help you to step out with{' '}
						<span id='Yellow-tag'>confidence</span>
					</h2>
				</div>
				<div className='Image'>
					<img src='Images/first.svg' alt='fashion pic' />
				</div>
			</div>
			<div className='secondPage_SecitonTwo'>
				<div className='Image'>
					<img src='Images/Second.svg' alt='fashion pic' />
				</div>
				<div className='text'>
					<h2>
						We are Fashioo your <span id='Yellow-tag'>personal stylist</span>{' '}
						and <span id='Yellow-tag'>fashion expert.</span>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Second;
