import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("../../components/Breadcrumbs"), {
  ssr: false,
  loading: () => null,
});
const Filters = dynamic(() => import("../../components/Filters"), {
  ssr: false,
  loading: () => null,
});
import classes from "../../assets/css/CategoriesPage.module.scss";
import Accordion from "react-bootstrap/Accordion";
const ProductBoxComplexSmall = dynamic(
  () => import("../../components/ProductBoxComplexSmall"),
  { ssr: false, loading: () => null }
);
import { ApiHandler } from "../api/api";
import { generateBreadcrumbs } from "../../helpers/generateBreadCrumbs";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { queryKeys, sortKeys } from "../../helpers/const";
import Image from "next/image";
import catBanner from "../../assets/images/banners/catBanner.jpg";
import pic from '../../assets/images/loading-buffering.gif';
import Seo from "../../components/Seo/Seo";

const CategoriesPage = ({ categoryData, filters }) => {
  const router = useRouter();
  const { asPath } = router;
  const { query } = router;

  console.log("category",categoryData)

  const [isLoading, setIsLoading] = useState(false);

  const replaceQuery = useCallback(
    (newQuery) => {
      delete newQuery.path;
      router.replace({
        pathname: router.asPath.split("?")[0],
        query: newQuery,
      });
    },
    [router]
  );

  const [productsData, setProductsData] = useState({
    items: [],
    pagination: {},
  });

  const [limit, setLimit] = useState(
    query[queryKeys.limit] != null ? Number(query[queryKeys.limit]) : 24
  );

  const newSort = Object.keys(sortKeys).find(
    (key) => sortKeys[key].query === query[queryKeys.sort]
  );

  const [sort, setSort] = useState(
    newSort
      ? { field: newSort.split("_")[0], direction: newSort.split("_")[1] }
      : null
  );

  const [page, setPage] = useState(
    query[queryKeys.page] != null ? Number(query[queryKeys.page]) : 1
  );

  const newSelected = [];
  for (const item in query) {
    if (item !== "path" && !Object.values(queryKeys).includes(item))
      newSelected.push({
        column: item,
        value: { selected: query[item].split(",") },
      });
  }
  const [selectedFilters, setSelectedFilters] = useState(newSelected);
  const [availableFilters, setAvailableFilters] = useState(filters);
  // ***
  const [changeFilters, setChangeFilters] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    const api = ApiHandler();
    console.log(categoryData.id);
    api
      .post(`/products/category/filters/${categoryData.id}`)
      .then((response) => {
        replaceQuery({});
        setSelectedFilters([]);
        setPage(1);
        setAvailableFilters(response.payload);
        // setIsLoading(false);
      });
  }, [categoryData.id]);

  useEffect(() => {
    if (changeFilters) {
      // setIsLoading(true);
      const api = ApiHandler();
      api
        .post(`/products/category/filters/${categoryData.id}`, {
          filters: selectedFilters,
        })
        .then((response) => {
          const newFilters = response.payload;
          let ret = availableFilters;
          for (const filter of newFilters) {
            if (
              selectedFilters.filter((item) => item.column === filter.key)
                .length === 0
            ) {
              ret = ret.map((item) => {
                if (item.key === filter.key) {
                  return filter;
                }
                return item;
              });
            }
          }
          setAvailableFilters(ret);
          // setIsLoading(false);
        });
    }

    const arr = selectedFilters.reduce((obj, item) => {
      return {
        ...obj,
        [item.column]: String([item.value.selected]),
      };
    }, {});
    setPage(1);

    const newQuery = {};
    if (queryKeys.page in query) {
      newQuery[queryKeys.page] = 1;
    }

    if (queryKeys.limit in query) {
      newQuery[queryKeys.limit] = query[queryKeys.limit];
    }

    if (queryKeys.sort in query) {
      newQuery[queryKeys.sort] = query[queryKeys.sort];
    }

    newQuery = { ...newQuery, ...arr };

    replaceQuery(newQuery);
  }, [selectedFilters, categoryData.id]);

  const getProductList = useCallback(
    (limit, sort, page, selectedFilters) => {
      setIsLoading(true);
      const api = ApiHandler();
      api
        .list(`products/category/list/${categoryData.id}`, {
          limit,
          page,
          sort,
          filters: selectedFilters,
        })
        .then((response) => {
          setProductsData(response?.payload)
          setIsLoading(false);
        })
        .catch((error) => {
          console.warn(error);
          setIsLoading(false);
        });
    },
    [categoryData.id]
  );

  useEffect(() => {
    if (!showSearch) {
      getProductList(limit, sort, page, selectedFilters);
    }
  }, [getProductList, limit, sort, page, selectedFilters, showSearch]);

  const searchProducts = () => {
    getProductList(limit, sort, page, selectedFilters);
  };

  useEffect(() => {
    setPage(query[queryKeys.page] != null ? Number(query[queryKeys.page]) : 1);
  }, [asPath, query]);

  const onSortChange = ({ target }) => {
    if (target.value != "none") {
      const newQuery = query;
      newQuery[queryKeys.sort] = sortKeys[target.value].query;
      newQuery[queryKeys.page] = 1;
      replaceQuery(newQuery);
      const [field, direction] = target.value.split("_");
      setSort({ field, direction });
    } else {
      const newQuery = query;
      delete newQuery[queryKeys.sort];
      newQuery[queryKeys.page] = 1;
      replaceQuery(newQuery);
      setSort(null);
    }
    setPage(1);
  };

  const onLimitChange = ({ target }) => {
    const newQuery = query;
    newQuery[queryKeys.limit] = target.value;
    newQuery[queryKeys.page] = 1;
    replaceQuery(newQuery);

    setLimit(target.value);
    setPage(1);
  };

  const onPageChange = (num) => {
    const newQuery = query;
    newQuery[queryKeys.page] = num;
    replaceQuery(newQuery);

    setPage(num);
  };

  const products = productsData.items;
  const pagination = productsData.pagination;

  console.log(categoryData);

  return (
    <>
      <Seo title={`${categoryData.basic_data.name}`} />
      <div className={`${classes.categoriespage}`}>
        <div className={`${classes.catBanner}`}>
          <div className="container-fluid">
            {categoryData.images.image ? (
              <Image
                src={categoryData.images.image}
                alt={categoryData.name}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <Image
                src={catBanner}
                alt="Stojic Elektrik doo"
                layout="fill"
                objectFit="cover"
              />
            )}
            <div className={`${classes.title}`}>
              <h5>{categoryData?.basic_data?.name}</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <Breadcrumbs
            crumbs={generateBreadcrumbs(
              { label: "Početna", path: "/" },
              "/kategorije",
              categoryData.parents,
              { label: categoryData?.basic_data?.name, path: asPath }
            )}
          />

          <div className={`${classes["mobile-display"]}`}>
            <Accordion className={`${classes["filters-mobile-holder"]}`}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  className={`${classes["mobile-filters-heading"]}`}
                >
                  Filteri
                </Accordion.Header>
                <Accordion.Body>
                  <Filters
                    filters={availableFilters}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    changeFilters={changeFilters}
                    setChangeFilters={setChangeFilters}
                    showSearch={showSearch}
                    setShowSearch={setShowSearch}
                    searchProducts={searchProducts}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="row">
            <div className="col-xl-3 col-md-3 col-12">
              <div className={`${classes["desktop-display"]}`}>
                <Filters
                  filters={availableFilters}
                  selectedFilters={selectedFilters}
                  setSelectedFilters={setSelectedFilters}
                  changeFilters={changeFilters}
                  setChangeFilters={setChangeFilters}
                  showSearch={showSearch}
                  setShowSearch={setShowSearch}
                  searchProducts={searchProducts}
                />
              </div>
            </div>
            <div
              className={
                classes["right-side-container"] +
                " col-xl-9 col-lg-9 col-12 col-sm-12 col-xs-12"
              }
            >
              <div className={classes["controls"] + " row"}>
                <div
                  className={
                    classes["number-of-products"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12"
                  }
                >
                  <span>
                    {pagination.total_items}{" "}
                    {pagination.total_items !== 1 ? "proizvoda" : "proizvod"}
                  </span>
                </div>
                <div
                  className={
                    classes["sort-container"] +
                    " col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"
                  }
                >
                  <span>Sortiraj:</span>
                  <span>
                    <select
                      name="sort"
                      id="sort"
                      className={classes["select"]}
                      onChange={onSortChange}
                      value={sort ? sort.field + "_" + sort.direction : "none"}
                    >
                      <option value="none" className={`${classes["sort-title"]}`}>
                        Sortirajte
                      </option>
                      {Object.entries(sortKeys).map((item) => (
                        <option value={item[0]} key={item[0]}>
                          {item[1].label}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>
                <div
                  className={
                    classes["products-per-page"] +
                    " col-xl-5 col-lg-4 col-md-3 col-sm-6 col-6"
                  }
                >
                  <span>Prikaži:</span>
                  <span className={classes["select-span"]}>
                    <select
                      name="limit"
                      id="limit"
                      className={classes["select"]}
                      onChange={onLimitChange}
                      value={limit}
                    >
                      <option value={4} key="4">
                        4
                      </option>
                      <option value={8} key="8">
                        8
                      </option>
                      <option value={12} key="12">
                        12
                      </option>
                      <option value={24} key="24">
                        24
                      </option>
                      <option value={36} key="36">
                        36
                      </option>
                    </select>
                  </span>
                  <span>po strani</span>
                </div>
                {isLoading ? (
                  <div className="gif">
                    <Image src={pic} alt="Loading" objectFit={'contain'} />
                  </div>
                ) : (
                  <div className={classes["product-row"] + " row"}>
                    {(products ?? []).map((product) => (
                      <div
                        className={
                          classes["product-col"] +
                          " col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12"
                        }
                        key={product.id}
                      >
                        <ProductBoxComplexSmall product={product} />
                      </div>
                    ))}
                    {products.length === 0 && (
                      <p>Trenutno nema podataka za prikaz!</p>
                    )}
                  </div>
                )}

                <div className={classes.paginationHolder}>
                  <div>
                    Strana {pagination?.selected_page} od{" "}
                    {pagination?.total_pages}
                  </div>
                  {pagination?.selected_page && (
                    <div className={classes.pagination}>
                      {Array.from(
                        {
                          length: Math.min(
                            5,
                            pagination?.total_pages -
                            pagination?.selected_page +
                            3,
                            pagination?.total_pages
                          ),
                        },
                        (x, i) => i + Math.max(pagination?.selected_page - 2, 1)
                      ).map((num) => (
                        <span
                          key={num}
                          className={`${classes.paginationItem} ${num === pagination?.selected_page &&
                            classes.paginationItemSelected
                            }`}
                          onClick={() => onPageChange(num)}
                        >
                          {num}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;

export const getServerSideProps = async (context) => {
  const { path } = context.query;
  const id = path[path.length - 1];
  const api = ApiHandler();
  return {
    props: {
      categoryData: await api
        .get(`/categories/product/single/${id}`)
        .then((response) => response.payload),
      filters: await api
        .post(`/products/category/filters/${id}`)
        .then((response) => response.payload),
    },
  };
};
