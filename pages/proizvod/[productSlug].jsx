import Breadcrumbs from '../../components/Breadcrumbs'
import ProductDetails from '../../components/ProductDetails'
import { ApiHandler } from '../api/api'
import { generateBreadcrumbs } from '../../helpers/generateBreadCrumbs'
import { useRouter } from 'next/router'

const ProductPage = ({
  basic_data,
  breadcrumbs,
  gallery,
  specifications,
  recommendedProducts,
}) => {
  const { asPath } = useRouter()
  return (
    <div className='container'>
      <Breadcrumbs
        crumbs={generateBreadcrumbs(
          { label: 'Početna', path: '/' },
          '/kategorije',
          breadcrumbs.steps,
          { label: breadcrumbs.end.name, path: asPath }
        )}
      />
      <ProductDetails
        productData={basic_data.data.item}
        gallery={gallery}
        specifications={specifications}
        recommendedProducts={recommendedProducts}
      />
    </div>
  )
}

export default ProductPage

export const getServerSideProps = async (context) => {
  const api = ApiHandler()
  const { productSlug } = context.query
  return {
    props: {
      basic_data: await api
        .get(`/product-details/basic-data/${productSlug}`)
        .then((response) => response?.payload),
      breadcrumbs: await api
        .get(`/product-details/breadcrumbs/${productSlug}`)
        .then((response) => response?.payload),
      gallery: await api
        .get(`/product-details/gallery/${productSlug}`)
        .then((response) => response?.payload),
      specifications: await api
        .get(`/product-details/specification/${productSlug}`)
        .then((response) => response?.payload),
      recommendedProducts: await api
        .list(`/product-details/recommended/${productSlug}`)
        .then((response) => response?.payload?.items),
    },
  }
}
