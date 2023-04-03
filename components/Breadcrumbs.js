import Link from 'next/link';
import React from 'react';
import classes from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ crumbs = [] }) => (
	// <div className='container'>
	<div className={`${classes['breadcrumbs-holder']}`}>
		<ul>
			{crumbs.map((item, index) => (
				<li key={index}>
					<Link href={item?.path ?? ''} legacyBehavior>
						<a className={`${classes['breadcrumbs-link']}`}>{item.label}</a>
					</Link>
				</li>
			))}
		</ul>
	</div>
	// </div>
);

export default Breadcrumbs;
