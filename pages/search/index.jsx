import classes from '../../assets/css/CategoriesPage.module.scss'
import ProductBoxComplexSmall from '../../components/ProductBoxComplexSmall'
import { ApiHandler } from '../api/api'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

const SearchPage = () => {
  const router = useRouter()
  const { search } = router.query
  const { asPath } = router

  const [productsData, setProductsData] = useState({
    items: [],
    pagination: {},
  })

  const [limit, setLimit] = useState(24)
  const [sort, setSort] = useState(null)
  const [page, setPage] = useState(1)

  const getProductList = useCallback(
    (limit, sort, page) => {
      const api = ApiHandler()
      api
        .list(`/products/search/list?search=${search}`, {
          limit,
          page,
          sort,
        })
        .then((response) => setProductsData(response?.payload))
        .catch((error) => console.warn(error))
    },
    [search]
  )

  useEffect(() => {
    getProductList(limit, sort, page)
  }, [getProductList, limit, sort, page])

  useEffect(() => {
    setPage(1)
  }, [asPath])

  const onSortChange = ({ target }) => {
    if (target.value != 'none') {
      const [field, direction] = target.value.split('_')
      setSort({ field, direction })
    } else {
      setSort(null)
    }
    setPage(1)
  }

  const onLimitChange = ({ target }) => {
    setLimit(target.value)
    setPage(1)
  }

  const products = productsData.items ?? []
  const pagination = productsData.pagination

  return (
    <div className={`${classes.searchPage}`}>
      <div className='container'>
        <h4 className={classes.title}>Pretraga: &quot;{search}&quot;</h4>
      </div>
      <div className='container'>
        <div className='row'>
          <div className={classes['right-side-container'] + ' col-12 '}>
            <div className={classes['controls'] + ' row'}>
              <div
                className={
                  classes['number-of-products'] +
                  ' col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12'
                }
              >
                <span>
                  {pagination.total_items}{' '}
                  {pagination.total_items !== 1 ? 'proizvoda' : 'proizvod'}
                </span>
              </div>
              <div
                className={
                  classes['sort-container'] +
                  ' col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6'
                }
              >
                <span>Sortiraj:</span>
                <span>
                  <select
                    name='sort'
                    id='sort'
                    className={classes['select']}
                    onChange={onSortChange}
                    defaultValue='none'
                  >
                    <option value='none' className={`${classes['sort-title']}`}>
                      Sortirajte
                    </option>
                    <option value='price_asc'>Cena rastuće</option>
                    <option value='price_desc'>Cena opadajuće</option>
                    <option value='new_asc'>Novo</option>
                    <option value='new_desc'>Staro</option>
                    <option value='name_asc'>Naziv rastuće</option>
                    <option value='name_desc'>Naziv opadajuće</option>
                    <option value='inventory_asc'>Na stanju rastuće</option>
                    <option value='inventory_desc'>Na stanju opadajuće</option>
                  </select>
                </span>
              </div>
              <div
                className={
                  classes['products-per-page'] +
                  ' col-xl-5 col-lg-4 col-md-3 col-sm-6 col-6'
                }
              >
                <span>Prikaži:</span>
                <span className={classes['select-span']}>
                  <select
                    name='limit'
                    id='limit'
                    className={classes['select']}
                    onChange={onLimitChange}
                    value={limit}
                  >
                    <option value={4} key='4'>
                      4
                    </option>
                    <option value={8} key='8'>
                      8
                    </option>
                    <option value={12} key='12'>
                      12
                    </option>
                    <option value={24} key='24'>
                      24
                    </option>
                    <option value={36} key='36'>
                      36
                    </option>
                  </select>
                </span>
                <span>po strani</span>
              </div>

              <div className={classes['product-row'] + ' row'}>
                {products.map((product) => (
                  <div
                    className={
                      classes['product-col'] +
                      ' col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12'
                    }
                    key={product.id}
                  >
                    <ProductBoxComplexSmall product={product} />
                  </div>
                ))}
                {products.length === 0 && (
                  <p>Nema podataka za unesenu pretragu!</p>
                )}
              </div>
              <div className={classes.paginationHolder}>
                <div>
                  Strana {pagination?.selected_page} od{' '}
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
                        className={`${classes.paginationItem} ${
                          num === pagination?.selected_page &&
                          classes.paginationItemSelected
                        }`}
                        onClick={() => setPage(num)}
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
  )
}

export default SearchPage
