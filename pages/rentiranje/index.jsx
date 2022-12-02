import Breadcrumbs from '../../components/Breadcrumbs'
import RentalNav from '../../components/RentalNav'
import ActionProducts from '../../components/ActionProducts'
import classes from '../../assets/css/RentalPage.module.scss'
import { ApiHandler } from '../api/api'

const RentalPage = ({ rentalProducts, recommendedProducts }) => {
  return (
    <div className={`${classes['rental-page-content']}`}>
      <div className='container'>
        <Breadcrumbs />
        <div className={`${classes['title-holder']}`}>
          <h5>Renta opreme</h5>
        </div>
        <div className={`${classes['head-holder']}`}>
          <RentalNav rentalProducts={rentalProducts} />
        </div>
        <ActionProducts recommendedProducts={recommendedProducts} />
      </div>
    </div>
  )
}

export default RentalPage

export const getServerSideProps = async () => {
  const api = ApiHandler()
  return {
    props: {
      rentalProducts: await api
        .list(`/products/category/list/${121}`)
        .then((response) => response?.payload?.items),
      recommendedProducts: await api
        .list('products/section/list/action')
        .then((response) => response?.payload?.items),
    },
  }
}
