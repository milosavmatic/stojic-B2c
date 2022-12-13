import Link from 'next/link';
import classes from '../NavbarMenu.module.scss';
// import classes from "../Categories/Categories.module.scss"
import { useState } from 'react';
import Image from 'next/image';
import categoryImg from '../../assets/images/banners/logo_stojic.png';
import logo from '../../public/static/images/logo.png';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';
import banner from '../../assets/images/banners/promo.png';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Categories = ({
  menu,
  setCategoryItemHandler,
  closeLeftSidebarModal,
  categoryItem,
  selectedCategoryId,
  setSelectedCatIdHandler,
  setSearchCategoryhandler,
  searchCategory,
  isMobile = false,
}) => {
  console.log(menu);
  const clearModalData = () => {
    closeLeftSidebarModal();
    setCategoryItemHandler(null);
  };

  const convertChirilicLetter = (word) => {
    if (word.includes('č')) {
      return word.replace('č', 'c');
    }
    if (word.includes('ć')) {
      return word.replace('ć', 'c');
    }
    if (word.includes('ž')) {
      return word.replace('ž', 'z');
    }
    if (word.includes('đ')) {
      return word.replace('đ', 'dj');
    }
    if (word.includes('š')) {
      return word.replace('š', 's');
    }
    return word;
  };

  const filterByLabel = (array, searchTerm) => {
    if (array && array.length > 0 && !isMobile) {
      return array.reduce((prev, curr) => {
        console.log(convertChirilicLetter(curr?.name.toLowerCase()));
        const children = curr.children
          ? filterByLabel(curr.children, searchTerm)
          : undefined;

        return convertChirilicLetter(curr.name.toLowerCase()).includes(
          convertChirilicLetter(searchTerm)
        ) || children?.length > 0
          ? [...prev, { ...curr, children }]
          : prev;
      }, []);
    } else {
      return [];
    }
  };

  const categoryData = filterByLabel(categoryItem?.children, searchCategory);

  console.log(menu);

  return (
    <div className={classes['categoriesTree']}>
      <ul className={classes['nav-submenu']}>
        <h5 className={`${classes['all-categories-title']}`}>Sve kategorije</h5>
        {menu.map((item) => (
          <>
            {item.children && item.children.length > 0 ? (
              <li
                key={item.id}
                className={classes['nav-submenu-item']}
                onClick={() => {
                  setCategoryItemHandler(item);
                  setSelectedCatIdHandler(item);
                  setSearchCategoryhandler('');
                }}
              >
                <div className={classes['submenu-item-holder']}>
                  <div className={classes['iconNameCat']}>
                    {item.icon ? (
                      <img src={item.icon} alt="Stojic Elektrik doo" />
                    ) : null}

                    <p
                      className={
                        categoryItem?.id === item.id
                          ? ` ${classes['active']} ${classes['category-name']}`
                          : ''
                      }
                    >
                      {item.name}
                    </p>
                  </div>

                  {item.children && item.children.length > 0 ? (
                    <RiArrowRightSLine
                      className={
                        selectedCategoryId === item.id
                          ? `${classes['rotate']}`
                          : '' || categoryItem?.id === item.id
                          ? ` ${classes['active']}`
                          : ''
                      }
                    />
                  ) : null}
                </div>
              </li>
            ) : (
              <Link href={item.path}>
                <a className={classes['submenu-item-holder']}>
                  <li onClick={clearModalData}>
                    {item.icon ? (
                      <img src={item.icon} alt="Stojic Elektrik doo" />
                    ) : null}
                    <p>{item.name}</p>
                  </li>
                </a>
              </Link>
            )}
            {/* ***** */}

            {selectedCategoryId === item.id && item ? (
              <div className={classes['subCategoryTreeMobile']}>
                <div className={classes['subCategoryChildrenMobile']}>
                  <Link href={item.path}>
                    <a className={classes['categoryNameMobile']}>
                      <p onClick={clearModalData}>{item.name}</p>
                    </a>
                  </Link>
                  {categoryItem?.children && categoryItem.children.length > 0
                    ? categoryItem.children.map((subCategory) => {
                        return (
                          <ul key={subCategory.id}>
                            <Link href={subCategory.path}>
                              <a>
                                <p onClick={clearModalData}>
                                  {subCategory.name}
                                </p>
                              </a>
                            </Link>
                            {subCategory.children &&
                            subCategory.children.length > 0
                              ? subCategory.children.map((subSubCategory) => (
                                  <Link
                                    key={subSubCategory.id}
                                    href={subSubCategory.path}
                                  >
                                    <a>
                                      <li onClick={clearModalData}>
                                        {subSubCategory.name}
                                      </li>
                                    </a>
                                  </Link>
                                ))
                              : null}
                          </ul>
                        );
                      })
                    : null}
                </div>
              </div>
            ) : null}
            {/* ****** */}
          </>
        ))}
      </ul>

      {categoryItem ? (
        <div className={classes['subCategoryTree']}>
          <Link href={categoryItem.path}>
            <a className={classes['categoryName']}>
              <h5 onClick={clearModalData}>{categoryItem.name}</h5>

              {/* <div className={classes['overlayImg']}>
                {categoryItem.image ? (
                  <Image
                    src={categoryItem.image}
                    alt="Stojic Elektrik doo"
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    src={logo}
                    alt="Stojic Elektrik doo"
                    objectFit="cover"
                  />
                )}
                <div className="overlay"></div>
              </div> */}
            </a>
          </Link>
          <div className={classes['gridRightSideSubCat']}>
            {categoryData && categoryData.length > 0 ? (
              <>
                {/* <form
                  className={`${classes['header-search']} ${classes['headerSearchCat']}`}
                  // onSubmit={handleSearch}
                >
                  <div className={classes['newsletter']}>
                    <input
                      className={`${
                        classes['newsletter-input'] + ' basic-input'
                      }`}
                      type="text"
                      name="search"
                      id="search"
                      value={searchCategory}
                      onChange={({ target }) =>
                        setSearchCategoryhandler(target.value)
                      }
                      placeholder="Pretraga.."
                    />
                  </div>
                </form> */}

                <div className={classes['subCategoryChildren']}>
                  {categoryData.map((subCategory) => {
                    return (
                      <ul key={subCategory.id}>
                        <Link href={subCategory.path}>
                          <a>
                            <p onClick={clearModalData}>{subCategory.name}</p>
                          </a>
                        </Link>
                        {subCategory?.children &&
                        subCategory?.children.length > 0
                          ? subCategory.children.map((subSubCategory) => (
                              <Link
                                key={subSubCategory.id}
                                href={subSubCategory.path}
                              >
                                <a>
                                  <li onClick={clearModalData}>
                                    {subSubCategory.name}
                                  </li>
                                </a>
                              </Link>
                            ))
                          : null}
                      </ul>
                    );
                  })}
                </div>
              </>
            ) : null}
            {categoryItem.image ? (
              <div className={classes['banner']}>
                <Image
                  src={categoryItem.image}
                  alt="Stojic Elektrik doo"
                  width={300}
                  height={500}
                />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Categories;
