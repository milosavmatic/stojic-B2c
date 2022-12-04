import MainSlider from '../components/MainSlider';
import ActionBanners from '../components/ActionBanners/ActionBanners.jsx';
import { ApiHandler } from './api/api';
import CardsSupport from '../components/CardsSupport/CardsSupport';
import CategoryItems from '../components/CategoryItems/CategoryItems';
import GridProducts from '../components/GridProducts/GridProducts';

const Home = ({
  banners,
  mobileBanners,
  recommendedProducts,
  buttonTabs,
  saleProducts,
  positionProducts,
  actionBanners
}) => {
  return (
    <div>
      <MainSlider banners={banners} mobileBanners={mobileBanners} />
      <CardsSupport
        recommendedProducts={recommendedProducts}
        saleProducts={saleProducts}
        positionProducts={positionProducts}
      />
      <GridProducts recommendedProducts={recommendedProducts} />
      <ActionBanners actionBanners={actionBanners} />
      <CategoryItems buttonTabs={buttonTabs} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const api = ApiHandler();
  return {
    props: {
      banners: await api
        .get('banners/index_slider')
        .then((response) => response?.payload),
      mobileBanners: await api
        .get('banners/index_slider_mobile')
        .then((response) => response?.payload),
      recommendedCategories:
        (await api
          .list('categories/section/recomended', { limit: 6 })
          .then((response) => response?.payload)) ?? null,
      actionBanners: await api
        .get('banners/action_banners')
        .then((response) => response?.payload),
      buttonTabs: await api
        .get('categories/product/tree')
        .then((response) => response?.payload),
      recommendedProducts: await api
        .list('products/section/list/action')
        .then((response) => response?.payload?.items),
      saleProducts: await api
        .list('products/section/list/sale')
        .then((response) => response?.payload?.items),
      positionProducts: await api
        .list('products/section/list/position')
        .then((response) => response?.payload?.items),
    },
  };
};
