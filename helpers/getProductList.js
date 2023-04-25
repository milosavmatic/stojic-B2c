import { ApiHandler } from './api';

export const getProductList = (limit, sort, page, selectedFilters, setIsLoading, categoryData, setProductsData) => {
	console.log('getProductList', selectedFilters);
	setIsLoading(true);
	const api = ApiHandler();
	api.list(`products/category/list/${categoryData?.id}`, {
		limit,
		page,
		sort,
		filters: selectedFilters,
	})
		.then((response) => {
			setProductsData(response?.payload);
			setIsLoading(false);
		})
		.catch((error) => {
			console.warn(error);
			setIsLoading(false);
		});
};
