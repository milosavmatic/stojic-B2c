import '../styles/globals.scss';
import NavbarMenu from '../components/NavbarMenu';
import Footer from '../components/Footer';
import '../components/Filters.scss';
import { SSRProvider } from 'react-bootstrap';
import { CartContextProvider } from './api/cartContext';
import 'rsuite/dist/rsuite.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <CartContextProvider>
        <SSRProvider>
          <NavbarMenu />
          <ToastContainer className="toastContainer" />
          <ScrollToTop />
          <Component {...pageProps} />
          <Footer />
        </SSRProvider>
      </CartContextProvider>
    </div>
  );
}

export default MyApp;
