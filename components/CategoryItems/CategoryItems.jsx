import { useCallback, useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import dynamic from 'next/dynamic';
import { ApiHandler } from '../../helpers/api';
import classes from './CategoryItems.module.scss';

const HomeTabButton = dynamic(() => import('../UI/HomeTabButton/HomeTabButton'));
const ProductBoxComplexSmall = dynamic(() => import('../ProductBoxComplexSmall'));

function CategoryItems({ buttonTabs, itemsTab, tabs }) {
	const [tabCategory, setTabsCategory] = useState('');

	const [items, setItems] = useState([]);

	const categoryProducts = (id) => {
		setTabsCategory(id);

		console.log(itemsTab.map((item) => item.categories[0]?.id));

		console.log(buttonTabs.filter((item) => item.id));

		console.log(
			'tabs',
			tabs.filter((item) => item.id)
		);

		setItems(itemsTab.filter((item) => item.categories[0]?.id === id));
	};

	useEffect(() => {
		setTabsCategory(buttonTabs[0]?.id);

		setItems(itemsTab.filter((item) => item.categories[0]?.id === buttonTabs[0]?.id));
	}, []);

	return (
		<div className={`${classes.categoryItems}`}>
			<div className="container">
				<div className={`${classes.categoryTabs}`}>
					{buttonTabs.slice(0, 6).map((item) => (
						<HomeTabButton
							key={item.id}
							onButtonClick={() => {
								categoryProducts(item.id);
							}}
							buttonClass={tabCategory === item.id ? 'active' : ''}
							changeStyle="tabCategoryButton"
						>
							{item.basic_data.name}
						</HomeTabButton>
					))}
				</div>

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

				{items <= 0 && (
					<div className={`${classes.noProduct}`}>
						<h3>Trenutno nema podataka za prikaz.</h3>
					</div>
				)}
			</div>
		</div>
	);
}

export default CategoryItems;
