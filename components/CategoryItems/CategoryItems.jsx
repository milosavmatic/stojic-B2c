import { useCallback, useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import useSWR from 'swr';
import classes from './CategoryItems.module.scss';
import HomeTabButton from '../UI/HomeTabButton/HomeTabButton';
import ProductBoxComplexSmall from '../ProductBoxComplexSmall';
import { ApiHandler } from '../../helpers/api';

function fetcher(url) {
	return fetch(url).then((res) => res.json());
}

function CategoryItems({ buttonTabs }) {
	const [tabCategory, setTabsCategory] = useState('');

	function fetcher(url) {
		return fetch(url, {
			method: 'LIST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				sort: null,
				limit: 7,
			}),
		}).then((res) => res.json());
	}

	const { data, error, isLoading } = useSWR(`${process.env.API_URL}/products/category/list/${tabCategory}`, fetcher, {
		cacheKey: `data-${tabCategory}`,
		revalidateOnMount: true,
		revalidateOnFocus: true,
	});

	useEffect(() => {
		setTabsCategory(buttonTabs[1]?.id);
	}, [buttonTabs]);

	return (
		<div className={`${classes.categoryItems}`}>
			<div className="container">
				<div className={`${classes.categoryTabs}`}>
					{buttonTabs.slice(0, 6).map((item) => (
						<HomeTabButton
							key={item.id}
							onButtonClick={() => {
								setTabsCategory(item.id);
							}}
							buttonClass={tabCategory === item.id ? 'active' : ''}
							changeStyle="tabCategoryButton"
						>
							{item.basic_data.name}
						</HomeTabButton>
					))}
				</div>

				{!isLoading ? (
					<div className={`${classes.categoryGrid}`}>
						{data?.payload?.items.map((item, index) => (
							<div key={item.id} className={index === 2 ? `${classes.item3}` : ''}>
								<ProductBoxComplexSmall
									className="homeBoxCategory"
									biggerImg={index === 2 ? 'biggerImg' : ''}
									product={item}
								/>
							</div>
						))}
					</div>
				) : (
					<div className="gif">
						<Image src="/images/loading-buffering.gif" alt="Loading" width={200} height={200} />
					</div>
				)}

				{data?.payload?.items <= 0 && !isLoading && (
					<div className={`${classes.noProduct}`}>
						<h3>Trenutno nema podataka za prikaz.</h3>
					</div>
				)}
			</div>
		</div>
	);
}

export default CategoryItems;
