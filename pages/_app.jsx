import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import BlogFooter from "../components/blog/blogFooter/BlogFooter";
import BlogHeader from "../components/blog/blogHeader/BlogHeader";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import "../styles/custom.scss";
import { CartContextProvider } from "./api/cartContext";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  return (
    <div className="App">
      <CartContextProvider>
        <SSRProvider>
          {router.pathname === "/blog" ? <BlogHeader /> : <Header />}
          {/* {!isLoggedIn && (
        <>
          <Link href="/login">
            <a>Login Page</a>
          </Link>
        </>
      )} */}
          <Component {...pageProps} />
          {router.pathname === "/blog" ? <BlogFooter /> : <Footer />}
          <ToastContainer theme="colored" position="top-right" />
        </SSRProvider>
      </CartContextProvider>
    </div>
  );
}

export default MyApp;
