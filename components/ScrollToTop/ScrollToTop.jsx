import React, { useState, useEffect } from 'react';
// import { AiOutlineArrowUp } from 'react-icons/ai';
import classes from './ScrollToTop.module.scss';

const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={classes.topToBtn}>
			{showTopBtn && (
				<div className={`${classes.wrappArrow} ${classes.svgPosition}`} onClick={goToTop}>
					{/* <AiOutlineArrowUp /> */}
				</div>
			)}
		</div>
	);
};
export default ScrollToTop;
