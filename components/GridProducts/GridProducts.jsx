import ProductBoxComplexSmall from '../ProductBoxComplexSmall';
import classes from './GridProducts.module.scss';
import HomeTabButton from '../UI/HomeTabButton/HomeTabButton';
import { useState } from 'react';
import pic from '../../assets/images/loading-buffering.gif';
import Image from 'next/image';

function GridProducts({
  recommendedProducts = [],
  saleProducts = [],
  positionProducts = [],
}) {
  const [products, setProducts] = useState(recommendedProducts);
  const [tabList, setTabList] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={`${classes['gridProducts']}`}>
      <div className={`${classes['pResetMob']} container`}>
        <div className={`${classes['gridColumn']}`}>
          <div className={`${classes['singleProduct']}`}>
            {saleProducts.slice(1, 2).map((item) => {
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
                  setProducts(positionProducts);
                  setTabList(1);
                }}
                buttonClass={tabList === 1 ? 'active' : ''}
              >
                Rasprodaja
              </HomeTabButton>
              {/* <HomeTabButton
                onButtonClick={() => {
                  setProducts(positionProducts);
                  setTabList(2);
                }}
                buttonClass={tabList === 2 ? 'active' : ''}
              >
                Najbolje ocenjeni proizvodi
              </HomeTabButton> */}
            </div>
            {products <= 0 && (
              <div className={`${classes['noProduct']}`}>
                <h3>Trenutno nema podataka za prikaz.</h3>
              </div>
            )}
            {!isLoading ? (
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
            ) : (
              <div className="gif">
                <Image src={pic} alt="Loading" objectFit={'contain'} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridProducts;

{
  /* <div className="gif">
  <Image src={pic} alt="Loading" objectFit={'contain'} />
</div>; */
}
