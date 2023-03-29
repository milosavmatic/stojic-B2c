/* eslint-disable no-return-await */
import dynamic from 'next/dynamic';

import '../styles/globals.scss';
import '../components/Filters.scss';
import '../components/Footer.scss';
import { ToastContainer } from 'react-toastify';
import { CartContextProvider } from '../helpers/cartContext';
import 'rsuite/dist/rsuite.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

const NavbarMenu = dynamic(() => import('../components/NavbarMenu'));
const Footer = dynamic(() => import('../components/Footer'));
const ScrollToTop = dynamic(() => import('../components/ScrollToTop/ScrollToTop'));

const SSRProvider = dynamic(async () => (await import('react-bootstrap')).SSRProvider);

const MyApp = ({ Component, pageProps }) => (
	<div>
		<ToastContainer />
		<CartContextProvider>
			<SSRProvider>
				<NavbarMenu />
				<ScrollToTop />
				<Component {...pageProps} />
				<Footer />
			</SSRProvider>
		</CartContextProvider>
	</div>
);

export default MyApp;
