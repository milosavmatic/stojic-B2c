/* eslint-disable camelcase */
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ApiHandler } from '../../helpers/api';
import { generateBreadcrumbs } from '../../helpers/generateBreadCrumbs';
import Seo from '../../components/Seo/Seo';

const Breadcrumbs = dynamic(() => import('../../components/Breadcrumbs'));
const ProductDetails = dynamic(() => import('../../components/ProductDetails'));

const ProductPage = ({ basic_data, breadcrumbs, gallery, specifications, recommendedProducts }) => {
	const { asPath } = useRouter();
	const router = useRouter();

	return (
		<>
			{router.isFallback && <div>Loading...</div>}
			{!router.isFallback && (
				<>
					<Seo
						title={`${basic_data.data.item.basic_data.name}`}
						description={`${basic_data.data.item.basic_data.short_description}`}
						ogtitle={`${basic_data.data.item.basic_data.name}`}
						ogdescription={`${basic_data.data.item.basic_data.short_description}`}
						ogimage={`${gallery?.gallery[0]?.image}`}
						ogurl={`${process.env.BASE_URL}proizvod/${basic_data.data.item.id}`}
					/>
					<div className="container">
						<Breadcrumbs
							crumbs={generateBreadcrumbs(
								{ label: 'Početna', path: '/' },
								'/kategorije',
								breadcrumbs.steps,
								{
									label: breadcrumbs.end.name,
									path: asPath,
								}
							)}
						/>
						<ProductDetails
							productData={basic_data.data.item}
							gallery={gallery}
							specifications={specifications}
							recommendedProducts={recommendedProducts}
						/>
					</div>
				</>
			)}
		</>
	);
};

export default ProductPage;

export const getStaticPaths = async () => {
	const api = ApiHandler();
	const data = await api.post('/export/vercel/products?token=uJbl9PN8Dy835HgKIIMTg9Y8');

	const paths = data.payload.slice(0, 100).map((item) => ({
		params: { productSlug: item.slug },
	}));

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async (context) => {
	const api = ApiHandler();
	const { productSlug } = context.params;
	return {
		props: {
			basic_data: await api
				.get(`/product-details/basic-data/${productSlug}`)
				.then((response) => response?.payload),
			breadcrumbs: await api

				.get(`/product-details/breadcrumbs/${productSlug}`)
				.then((response) => response?.payload),
			gallery: await api.get(`/product-details/gallery/${productSlug}`).then((response) => response?.payload),
			specifications: await api
				.get(`/product-details/specification/${productSlug}`)
				.then((response) => response?.payload),
			recommendedProducts: await api
				.list(`/product-details/recommended/${productSlug}`)
				.then((response) => response?.payload?.items),
		},
		revalidate: 60,
	};
};

// export const getServerSideProps = async (context) => {
// 	context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
// 	const api = ApiHandler();
// 	const { productSlug } = context.query;
// 	return {
// 		props: {
// 			basic_data: await api
// 				.get(`/product-details/basic-data/${productSlug}`)
// 				.then((response) => response?.payload),
// 			breadcrumbs: await api
// 				.get(`/product-details/breadcrumbs/${productSlug}`)
// 				.then((response) => response?.payload),
// 			gallery: await api.get(`/product-details/gallery/${productSlug}`).then((response) => response?.payload),
// 			specifications: await api
// 				.get(`/product-details/specification/${productSlug}`)
// 				.then((response) => response?.payload),
// 			recommendedProducts: await api
// 				.list(`/product-details/recommended/${productSlug}`)
// 				.then((response) => response?.payload?.items),
// 		},
// 	};
// };
