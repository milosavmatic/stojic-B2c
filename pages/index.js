import dynamic from 'next/dynamic';
import Seo from '../components/Seo/Seo';
import { ApiHandler } from '../helpers/api';

const MainSlider = dynamic(() => import('../components/MainSlider'));
const ActionBanners = dynamic(() => import('../components/ActionBanners/ActionBanners.jsx'));

const CardsSupport = dynamic(() => import('../components/CardsSupport/CardsSupport'));
const CategoryItems = dynamic(() => import('../components/CategoryItems/CategoryItems'));
const GridProducts = dynamic(() => import('../components/GridProducts/GridProducts'));

const Home = ({
	banners,
	mobileBanners,
	recommendedProducts,
	buttonTabs,
	saleProducts,
	positionProducts,
	actionBanners,
}) => (
	<>
		<Seo title="Web shop" />
		<div>
			<MainSlider banners={banners} mobileBanners={mobileBanners} />
			<CardsSupport />
			<GridProducts
				recommendedProducts={recommendedProducts}
				saleProducts={saleProducts}
				positionProducts={positionProducts}
			/>
			<ActionBanners actionBanners={actionBanners} />
			<CategoryItems buttonTabs={buttonTabs} />
		</div>
	</>
);

export default Home;

export const getStaticProps = async () => {
	const api = ApiHandler();
	return {
		props: {
			banners: await api.get('banners/index_slider').then((response) => response?.payload),
			mobileBanners: await api.get('banners/index_slider_mobile').then((response) => response?.payload),
			actionBanners: await api.get('banners/action_banners').then((response) => response?.payload),
			buttonTabs: await api.list('categories/section/recommended').then((response) => response?.payload),
			recommendedProducts: await api
				.list('products/section/list/action')
				.then((response) => response?.payload?.items),
			saleProducts: await api
				.list('products/section/list/best_sell', { limit: 1 })
				.then((response) => response?.payload?.items),
			positionProducts: await api
				.list('products/section/list/sale', { limit: 6 })
				.then((response) => response?.payload?.items),
		},
		revalidate: 10,
	};
};
