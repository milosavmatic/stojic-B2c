import classes from '../../assets/css/CheckoutPage.module.scss'
import { ApiHandler } from '../api/api'
import { currencyFormat } from '../../helpers/functions'

const OrderSuccess = ({ checkoutData }) => {
  checkoutData = checkoutData.order
  return (
    <div className={`${classes['orderDataContainer']} container`}>
      <h4 className={classes.orderDataTitle}>Pregled porudžbine</h4>
      <p className={classes.orderDataField}>
        <b>Datum i vreme kreiranja porudžbine:</b> {checkoutData.created_at}
      </p>
      <p className={classes.orderDataField}>
        <b>Naplatiti na ime:</b> {checkoutData.bill_to_name}
      </p>
      <p className={classes.orderDataField}>
        <b>Tip plaćanja:</b> {checkoutData.payment_method}
      </p>
      <p className={classes.orderDataField}>
        <b>Dostaviti na ime:</b> {checkoutData.ship_to_name}
      </p>
      <p className={classes.orderDataField}>
        <b>Tip dostave:</b> {checkoutData.delivery_method}
      </p>
      <p className={classes.orderDataField}>
        <b>Ukupno za uplatu:</b>
        {` ${currencyFormat(checkoutData.total, checkoutData.currency)}`}
      </p>
    </div>
  )
}

export default OrderSuccess

export const getServerSideProps = async (context) => {
  const api = ApiHandler()
  const { orderToken } = context.query

  return {
    props: {
      checkoutData: await api
        .get(`/checkout/info/${orderToken}`)
        .then((response) => response?.payload),
    },
  }
}
