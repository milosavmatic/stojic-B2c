import ProductBoxComplexSmall from '../ProductBoxComplexSmall';
import classes from './GridProducts.module.scss';
import HomeTabButton from '../UI/HomeTabButton/HomeTabButton';
import { useState } from 'react';

function GridProducts({
  recommendedProducts = [],
  saleProducts = [],
  positionProducts = [],
}) {
  const [products, setProducts] = useState(recommendedProducts);
  const [tabList, setTabList] = useState(0);

  console.log(recommendedProducts);

  return (
    <div className={`${classes['gridProducts']}`}>
      <div className={`${classes['pResetMob']} container`}>
        <div className={`${classes['gridColumn']}`}>
          <div className={`${classes['singleProduct']}`}>
            {recommendedProducts.slice(1, 2).map((item) => {
              return (
                <ProductBoxComplexSmall
                  isSpecialOffer={true}
                  product={item}
                  key={item.id}
                  className="homeActionItem"
                />
              );
            })}
          </div>
          <div className={`${classes['articles']}`}>
            <div className={`${classes['articlesButtons']}`}>
              <HomeTabButton
                onButtonClick={() => {
                  setProducts(recommendedProducts);
                  setTabList(0);
                }}
                buttonClass={tabList === 0 ? 'active' : ''}
              >
                Izdvojeni artikli
              </HomeTabButton>
              <HomeTabButton
                onButtonClick={() => {
                  setProducts(saleProducts);
                  setTabList(1);
                }}
                buttonClass={tabList === 1 ? 'active' : ''}
              >
                Rasprodaja
              </HomeTabButton>
              <HomeTabButton
                onButtonClick={() => {
                  setProducts(positionProducts);
                  setTabList(2);
                }}
                buttonClass={tabList === 2 ? 'active' : ''}
              >
                Najbolje ocenjeni proizvodi
              </HomeTabButton>
            </div>
            {products <= 0 && (
              <div className={`${classes['noProduct']}`}>
                <h3>Trenutno nema podataka za prikaz.</h3>
              </div>
            )}
            <div className={`${classes['articlesGrid']}`}>
              {products.slice(0, 6).map((item, i) => {
                return (
                  <ProductBoxComplexSmall
                    key={item.id}
                    product={item}
                    noBorder="noBorder"
                    className="homeProductArticle"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridProducts;
