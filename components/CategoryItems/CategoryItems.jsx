import { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ApiHandler } from '../../helpers/api';
import classes from './CategoryItems.module.scss';

const HomeTabButton = dynamic(() => import('../UI/HomeTabButton/HomeTabButton'));
const ProductBoxComplexSmall = dynamic(() => import('../ProductBoxComplexSmall'));

function CategoryItems({ buttonTabs }) {
	const [tabCategory, setTabsCategory] = useState('');
	const [sort, setSort] = useState(null);
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [limit, setLimit] = useState(7);

	useEffect(() => {
		setTabsCategory(buttonTabs[1]?.id);
	}, [buttonTabs]);

	const getProductList = useCallback(
		(sort, limit) => {
			setIsLoading(true);
			const api = ApiHandler();
			api.list(`products/category/list/${tabCategory}`, {
				sort,
				limit,
			})
				.then((response) => {
					setItems(response?.payload.items);
					setIsLoading(false);
				})
				.catch((error) => console.warn(error));
		},
		[tabCategory]
	);

	useEffect(() => {
		getProductList(sort, limit);
	}, [getProductList, sort, limit]);
	console.log(isLoading);

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
						{items.map((item, index) => (
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
						{/* <Image src="/images/loading-buffering.gif" alt="Loading" objectFit="contain" /> */}
					</div>
				)}

				{items <= 0 && !isLoading && (
					<div className={`${classes.noProduct}`}>
						<h3>Trenutno nema podataka za prikaz.</h3>
					</div>
				)}
			</div>
		</div>
	);
}

export default CategoryItems;
