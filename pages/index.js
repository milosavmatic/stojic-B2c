import dynamic from 'next/dynamic';
import Seo from '../components/Seo/Seo';
const MainSlider = dynamic(() => import('../components/MainSlider'), {
  ssr: false,
  loading: () => null,
});
const ActionBanners = dynamic(
  () => import('../components/ActionBanners/ActionBanners.jsx'),
  { ssr: false, loading: () => null }
);
import { ApiHandler } from './api/api';
const CardsSupport = dynamic(
  () => import('../components/CardsSupport/CardsSupport'),
  { ssr: false, loading: () => null }
);
const CategoryItems = dynamic(
  () => import('../components/CategoryItems/CategoryItems'),
  { ssr: false, loading: () => null }
);
const GridProducts = dynamic(
  () => import('../components/GridProducts/GridProducts'),
  { ssr: false, loading: () => null }
);

const Home = ({
  banners,
  mobileBanners,
  recommendedProducts,
  buttonTabs,
  saleProducts,
  positionProducts,
  actionBanners,
}) => {
  return (
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
      // recommendedCategories:
      //   (await api
      //     .list('categories/section/recomended', { limit: 6 })
      //     .then((response) => response?.payload)) ?? null,
      actionBanners: await api
        .get('banners/action_banners')
        .then((response) => response?.payload),
      buttonTabs: await api
        .list('categories/section/recommended')
        .then((response) => response?.payload),
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
  };
};
