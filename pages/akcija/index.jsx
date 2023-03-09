import classes from '../../assets/css/ActionPage.module.scss';
import ProductBoxComplexSmall from '../../components/ProductBoxComplexSmall';
import Seo from '../../components/Seo/Seo';
import { ApiHandler } from '../api/api';

function ActionPage({ actionProducts }) {
  return (
    <>
      <Seo title="Akcije" description="Akcije" ogtitle="Akcije" ogdescription="Akcije" ogurl={`${process.env.BASE_URL}akcija`} />
      <div className={classes['actionProducts']}>
        <div className="container">
          <h5>Proizvodi na akciji</h5>
          <div className={`${classes['ruza1']} row`}>
            {actionProducts.map((product) => {
              return (
                <div
                  className={`${classes['ruza2']} col-xxl-3 col-lg-4 col-sm-6`}
                  key={product.id}
                >
                  <ProductBoxComplexSmall product={product} />
                </div>
              );
            })}
            {actionProducts.length === 0 && (
              <p>Trenutno ne postoje proizvodi na akciji!</p>
            )}
          </div>
          {/* *** */}
        </div>
      </div>
    </>
  );
}

export default ActionPage;

export const getServerSideProps = async () => {
  const api = ApiHandler();
  return {
    props: {
      actionProducts: await api
        .list('products/section/list/action')
        .then((response) => response?.payload?.items),
    },
  };
};
