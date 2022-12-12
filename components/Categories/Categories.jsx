import Link from 'next/link';
import classes from '../NavbarMenu.module.scss';
// import classes from "../Categories/Categories.module.scss"
import { useState } from 'react';
import Image from 'next/image';
// import categoryImg from '../../assets/images/banners/actionbanner1.png';
import logo from '../../public/static/images/logo.png';
import { IoMdArrowDropdown } from 'react-icons/io';

const Categories = ({
  menu,
  setCategoryItemHandler,
  closeLeftSidebarModal,
  categoryItem,
  selectedCategoryId,
  setSelectedCatIdHandler,
}) => {
  const clearModalData = () => {
    closeLeftSidebarModal();
    setCategoryItemHandler(null);
  };

  console.log(menu)
  return (
    <div className={classes['categoriesTree']}>
      <ul className={classes['nav-submenu']}>
        {menu.map((item) => (
          <>
            <li
              key={item.id}
              className={classes['nav-submenu-item']}
              onClick={() => {
                setCategoryItemHandler(item);
                setSelectedCatIdHandler(item)
              }}
            >
              <div className={classes['submenu-item-holder']}>
                <p
                  className={
                    categoryItem?.id === item.id
                      ? ` ${classes['active']} ${classes['category-name']}`
                      : ''
                  }
                >
                  {item.name}
                </p>
                {/* {item.children && item.children.length > 0 ? ( */}
                  <IoMdArrowDropdown
                    className={
                      selectedCategoryId === item.id ? `${classes['rotate']}` : ''
                    }
                  />
                {/* ) : null} */}
              </div>
            </li>
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

              <div className={classes['overlayImg']}>
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
              </div>
            </a>
          </Link>
          <div className={classes['subCategoryChildren']}>
            {categoryItem.children && categoryItem.children.length > 0
              ? categoryItem.children.map((subCategory) => {
                  return (
                    <ul key={subCategory.id}>
                      <Link href={subCategory.path}>
                        <a>
                          <p onClick={clearModalData}>{subCategory.name}</p>
                        </a>
                      </Link>
                      {subCategory?.children && subCategory?.children.length > 0
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
    </div>
  );
};

export default Categories;
