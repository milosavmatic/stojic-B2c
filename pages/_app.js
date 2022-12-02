import '../styles/globals.scss'
import NavbarMenu from '../components/NavbarMenu'
import Footer from '../components/Footer'
import '../components/Filters.scss'
import { SSRProvider } from 'react-bootstrap'
import { CartContextProvider } from './api/cartContext'
import Seo from '../components/Seo/Seo'
import 'rsuite/dist/rsuite.min.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Seo title='Web shop' />
      <CartContextProvider>
        <SSRProvider>
          <NavbarMenu />
          <ToastContainer className="toastContainer" />
          <Component {...pageProps} />
          <Footer />
        </SSRProvider>
      </CartContextProvider>
    </div>
  )
}

export default MyApp
