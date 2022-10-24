import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import BlogFooter from "../components/blog/blogFooter/BlogFooter";
import BlogHeader from "../components/blog/blogHeader/BlogHeader";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  return (
    <div className="App">
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
    </div>
  );
}

export default MyApp;
