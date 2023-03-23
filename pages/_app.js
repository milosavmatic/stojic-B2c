/* eslint-disable no-return-await */
import dynamic from 'next/dynamic';

import { useEffect } from 'react';
import '../styles/globals.scss';
import '../components/Filters.scss';
import { CartContextProvider } from '../helpers/cartContext';
import 'rsuite/dist/rsuite.min.css';
import 'react-toastify/dist/ReactToastify.css';

const NavbarMenu = dynamic(() => import('../components/NavbarMenu'));
const Footer = dynamic(() => import('../components/Footer'));
const ScrollToTop = dynamic(() => import('../components/ScrollToTop/ScrollToTop'));
const ToastContainer = dynamic(async () => await import('react-toastify').ToastContainer);

const SSRProvider = dynamic(async () => (await import('react-bootstrap')).SSRProvider);

const MyApp = ({ Component, pageProps }) => (
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

export default MyApp;
