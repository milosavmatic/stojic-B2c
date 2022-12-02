import { useCallback, useState, useEffect } from 'react';
import { ApiHandler } from '../../pages/api/api';
import classes from './CategoryItems.module.scss';
// import Link from 'next/link';
// import Image from 'next/image';
import HomeTabButton from '../UI/HomeTabButton/HomeTabButton';
import ProductBoxComplexSmall from '../ProductBoxComplexSmall';

function CategoryItems({ buttonTabs }) {
  const [tabCategory, setTabsCategory] = useState('');
  const [sort, setSort] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTabsCategory(buttonTabs[1]?.id);
  }, [buttonTabs]);

  const getProductList = useCallback(
    (sort) => {
      const api = ApiHandler();
      api
        .list(`products/category/list/${tabCategory}`, {
          sort,
        })
        .then((response) => setItems(response?.payload.items))
        .catch((error) => console.warn(error));
    },
    [tabCategory]
  );

  useEffect(() => {
    getProductList(sort);
  }, [getProductList, sort]);

  return (
    <div className={`${classes['categoryItems']}`}>
      <div className="container">
        <div className={`${classes['categoryTabs']}`}>
          {buttonTabs.slice(0, 6).map((item) => {
            return (
              <HomeTabButton
                key={item.id}
                onButtonClick={() => {
                  setTabsCategory(item.id);
                }}
                buttonClass={tabCategory === item.id ? 'active' : ''}
              >
                {item.name}
              </HomeTabButton>
            );
          })}
        </div>
        <div className={`${classes['categoryGrid']}`}>
          {items.slice(0, 7).map((item, index) => {
            return (
              <div
                key={item.id}
                className={index === 2 ? `${classes['item3']}` : ''}
              >
                <ProductBoxComplexSmall className='homeBoxCategory' biggerImg={index === 2 ? 'biggerImg' : ""} product={item}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryItems;
