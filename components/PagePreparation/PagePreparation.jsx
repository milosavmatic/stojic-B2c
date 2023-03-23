import Link from 'next/link';
import React from 'react';
import style from './PagePreparation.module.scss';

const PagePreparation = () => (
	<div className={style.pagePreparation}>
		Stranica je još uvek u pripremi, očekujemo uskoro njeno objavljivanje!
		<Link href="/">
			<a className={style.link}>Vratite se na početnu stranicu</a>
		</Link>
	</div>
);

export default PagePreparation;
