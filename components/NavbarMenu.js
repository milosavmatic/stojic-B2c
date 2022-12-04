import React, { useState, useCallback, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { menuCategories } from '../helpers/const';
import { NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import CloseButton from 'react-bootstrap/CloseButton';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/logo/logo.png';
import categories from '../assets/images/elements/menu-categories.png';
import search from '../assets/images/elements/search.png';
import wish from '../assets/images/elements/heart.png';
import cartImage from '../assets/images/elements/shopping-bag.png';
import classes from './NavbarMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ApiHandler } from '../pages/api/api';
import { generateMenu } from '../helpers/generateMenu';
import NavSubmenu from './NavSubmenu/NavSubmenu';
import { useCartContext } from '../pages/api/cartContext';
import { BsHandbag, BsSearch, BsEnvelope } from 'react-icons/bs';
import heart from '../assets/images/elements/heart.png';
import { FaRegUser, FaPhoneAlt } from 'react-icons/fa';
import { currencyFormat } from '../helpers/functions';
import { TfiLocationPin } from 'react-icons/tfi';

const NavbarMenu = () => {
  const [isShown, setIsShown] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [headerTotal, setHeaderTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const api = ApiHandler();
  const { push: navigate } = useRouter();
  // Go to homepage onClick
  const onLogoClick = useCallback(
    () => navigate('/', { replace: true }),
    [navigate]
  );
  // Shows mobile hamburger div
  const [showMobileDiv, setShowMobileDiv] = useState(false);
  const onMobileDivShow = () => {
    if (!showMobileDiv) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
    setShowMobileDiv((prev) => !prev);
  };

  const getMenuCategories = useCallback(() => {
    api
      .get('/categories/product/tree')
      .then((response) => setCategoryData(response.payload))
      .catch((error) => console.warn(error));
  }, [api]);

  const [cart] = useCartContext();
  const [, , , wishList] = useCartContext();

  const getCartCount = useCallback(() => {
    api
      .get('/cart/badge-count')
      .then((response) => {
        setCartCount(response?.payload?.summary?.items_count ?? 0);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [api]);

  const getWishCount = useCallback(() => {
    console.log('wishcount render');
    api
      .get('/wishlist/badge-count')
      .then((response) => {
        setWishCount(response?.payload?.summary?.items_count ?? 0);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [api]);

  useEffect(() => {
    getMenuCategories();
  }, [getMenuCategories]);

  useEffect(() => {
    getCartCount();
  }, [getCartCount, cart]);

  useEffect(() => {
    getWishCount();
  }, [getWishCount, wishList]);

  useEffect(() => {
    api
      .list('cart')
      .then((response) => {
        setHeaderTotal(response?.payload.summary.total);
        console.log(response?.payload.summary.totals.total);
      })
      .catch((error) => console.warn(error));
  }, [cart, api]);

  const menu = generateMenu(categoryData, '/kategorije');

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?search=${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <div>
      <div className={`${classes['navbar']}`}>
        <div className={`${classes['top-header']}`}>
          <div className="container">
            <div className={`${classes['header-links-holder']}`}>
              <ul className={`${classes['header-links']}`}>
                <li>
                  <TfiLocationPin />
                  <Link href="/">Prodavnice</Link>
                </li>
                <li>
                  <FaRegUser />
                  <Link href="/">Registruj se ili Uloguj se</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes['header-holder']}>
          <div className="container">
            <Row>
              <Col
                xl={3}
                lg={3}
                className={`${classes['col-holder']} ${classes['logo-holder']}`}
              >
                <Link href="/">
                  <div className={classes['image-holder']}>
                    <Image
                      src={logo}
                      className="d-inline-block align-top w-100"
                      alt="Stojic-elektrik-logo"
                    />
                  </div>
                </Link>
              </Col>
              {/* <Col xl={6} lg={6} className={classes['nav-holder']}>
                <Navbar
                  expand="lg"
                  className={classes['navbar-menu']}
                  style={{ position: 'inherit' }}
                >
                  <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                      id="basic-navbar-nav"
                      className={classes.holder}
                    >
                      <Nav
                        className={classes.nav}
                        style={{ position: 'inherit' }}
                      >
                        <ul className={classes['nav-list']}>
                          <li className={classes['dropdown-hover']}>
                            <Nav.Link
                              onClick={() => setIsShown(true)}
                              className={`${classes['dropdown-holder']} ${classes.Link} ${classes.category}`}
                            >
                              <Image
                                src={burger}
                                className="d-inline-block"
                                alt="React"
                              />
                              <p>Proizvodi</p>
                            </Nav.Link>
                            <Container
                              onClick={() => setIsShown(false)}
                              fluid
                              className={
                                isShown ? classes.animation : classes.word
                              }
                            >
                              <CloseButton
                                className={classes['close-button']}
                                aria-label="Hide"
                              />
                              <h5
                                className={`${classes['all-categories-title']}`}
                              >
                                Sve kategorije
                              </h5>

                              <NavSubmenu menu={menu} />
                            </Container>
                            <div
                              className={isShown ? classes.black : 'd-none'}
                              onClick={() => setIsShown(false)}
                            ></div>
                          </li>
                          <li>
                            <Link href="/" className={classes.Link}>
                              Početna
                            </Link>
                          </li>
                          <li>
                            <Link href="/servis" className={classes.Link}>
                              Servis
                            </Link>
                          </li>
                          <li>
                            <Link href="/rentiranje" className={classes.Link}>
                              Renta opreme
                            </Link>
                          </li>
                          <li>
                            <Link href="/kontakt" className={classes.Link}>
                              Kontakt
                            </Link>
                          </li>
                        </ul>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Col> */}
              <Col
                xl={5}
                lg={5}
                md={5}
                className={`${classes['col-holder']} ${classes['mobile-none']}`}
              >
                <form
                  className={classes['header-search']}
                  onSubmit={handleSearch}
                >
                  <div className={classes['newsletter']}>
                    <input
                      className={`${
                        classes['newsletter-input'] + ' basic-input'
                      }`}
                      type="text"
                      name="search"
                      id="search"
                      value={searchTerm}
                      onChange={({ target }) => setSearchTerm(target.value)}
                      placeholder="Pretraži proizvode.."
                    />
                    <button
                      type="submit"
                      className={`${
                        classes['newsletter-button'] + ' basic-button'
                      }`}
                      onClick={handleSearch}
                    >
                      <BsSearch />
                    </button>
                  </div>
                </form>
              </Col>
              <Col
                xs={4}
                md={4}
                sm={3}
                xl={4}
                lg={4}
                className={classes['col-holder']}
              >
                <div className={classes['icons-holder']}>
                  <div>
                    <ul className={classes['icons-list']}>
                      <li>
                        <button
                          type="button"
                          className={`${classes['button-wishlist']}`}
                          onClick={() => navigate('/lista-zelja')}
                        >
                          <Image src={wish} alt="Lista zelja" />
                          <span className={`${classes['marker']}`}>
                            {wishCount}
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className={`${classes['button-checkout']}`}
                          onClick={() => navigate('/korpa')}
                        >
                          <BsHandbag />
                          <span className={`${classes['marker']}`}>
                            {cartCount}
                          </span>
                        </button>
                      </li>
                      <li>
                        Moja korpa -
                        <span>
                          &nbsp;
                          {currencyFormat(headerTotal ?? 0)}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={`${classes['bottom-header']}`}>
          <div className="container">
            <div
              className={`${classes['bottom-header-content']} d-flex align-items-center`}
            >
              <Col xl={3} lg={3}>
                <ul>
                  <li className={classes['dropdown-hover']}>
                    <Nav.Link
                      onClick={() => setIsShown(true)}
                      className={`${classes['dropdown-holder']} ${classes.Link} ${classes.category}`}
                    >
                      <div className="hamburger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                      <p>Kategorije proizvoda</p>
                    </Nav.Link>
                    <Container
                      onClick={() => setIsShown(false)}
                      fluid
                      className={isShown ? classes.animation : classes.word}
                    >
                      <div className="d-flex">
                        <h5 className={`${classes['all-categories-title']}`}>
                          Sve kategorije
                        </h5>
                        <CloseButton
                          className={classes['close-button']}
                          aria-label="Hide"
                        />
                      </div>

                      <NavSubmenu menu={menu} />
                    </Container>
                    <div
                      className={isShown ? classes.black : 'd-none'}
                      onClick={() => setIsShown(false)}
                    ></div>
                  </li>
                </ul>
              </Col>
              <Col xl={5} lg={6} className={classes['nav-holder']}>
                <Navbar
                  expand="lg"
                  className={classes['navbar-menu']}
                  style={{ position: 'inherit' }}
                >
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={classes.holder}
                  >
                    <Nav
                      className={classes.nav}
                      style={{ position: 'inherit' }}
                    >
                      <ul className={classes['nav-list']}>
                        <li>
                          <Link href="/akcija" className={classes.Link}>
                            Akcije
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={classes.Link}>
                            Način plaćanja
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={classes.Link}>
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={classes.Link}>
                            B2B
                          </Link>
                        </li>
                        <li>
                          <Link href="/kontakt" className={classes.Link}>
                            Kontakt
                          </Link>
                        </li>
                      </ul>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
              <Col md={3} xl={4} lg={3}>
                <ul
                  className={`${classes['envelope-phone']} d-flex justify-content-end`}
                >
                  <li>
                    <Link href="mailto:prodaja@stojic.rs">
                      <span>
                        <BsEnvelope />
                        <span>prodaja@stojic.rs</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:0038132368007">
                      <span>
                        <FaPhoneAlt />
                        <span>+381 32 368 007</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </div>
          </div>
        </div>
      </div>

      <div className={`${classes['mobile-navbar']}`}>
        <div className={classes['header-holder']}>
          <div className="container">
            <Row className={`${classes['top-header-mobile']}`}>
              <Col
                xs={6}
                sm={6}
                md={4}
                className={`${classes['col-holder']} ${classes['logo-holder']}`}
              >
                <Link href="/">
                  <div className={classes['image-holder']}>
                    <Image
                      src={logo}
                      className="d-inline-block align-top w-100"
                      alt="React"
                    />
                  </div>
                </Link>
              </Col>
              <Col md={8} sm={6} xs={6} className={classes['col-holder']}>
                <div className={classes['icons-holder']}>
                  <div>
                    <ul className={classes['icons-list']}>
                      <li>
                        <button
                          type="button"
                          className={`${classes['button-wishlist']}`}
                          onClick={() => navigate('/lista-zelja')}
                        >
                          <Image src={wish} alt="Lista zelja" />
                          <span className={`${classes['marker']}`}>
                            {wishCount}
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className={`${classes['button-checkout']}`}
                          onClick={() => navigate('/korpa')}
                        >
                          <BsHandbag />
                          <span className={`${classes['marker']}`}>
                            {cartCount}
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col
                xs={2}
                md={6}
                sm={4}
                className={classes['mobile-nav-holder']}
              >
                <div className={`${classes['mobile-nav']}`}>
                  <div
                    id="nav-icon"
                    className={
                      showMobileDiv
                        ? ` ${classes['nav-icon']} open ${classes['nav-icon-active']}`
                        : classes['nav-icon']
                    }
                    onClick={onMobileDivShow}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div
                    className={
                      showMobileDiv
                        ? `${classes['mobile-header-div-active']} ${classes['mobile-header-div']}`
                        : `${classes['mobile-header-div-deactive']} ${classes['mobile-header-div']}`
                    }
                  >
                    <ul className={classes['mobile-header-list']}>
                      <li
                        onClick={() => {
                          navigate('/');
                          onMobileDivShow();
                        }}
                        className={classes['mobile-nav-link']}
                      >
                        Početna
                      </li>
                      <li>
                        <div className={`${classes['category-image']}`}>
                          <Image
                            src={categories}
                            className="img-fluid"
                            alt="Mobs"
                          />
                        </div>
                        <NavDropdown
                          title="Kategorije"
                          id="basic-nav-dropdown"
                          className={classes['mobile-nav-link'] + ' gray'}
                        >
                          <NavDropdown.Item
                            href="#action/3.1"
                            className={classes['dropdown-custom']}
                          >
                            <div xs={1} className={classes['nav-submenu-item']}>
                              <div className={classes['submenu-item-holder']}>
                                <NavSubmenu menu={menu} />
                              </div>
                            </div>
                          </NavDropdown.Item>
                        </NavDropdown>
                      </li>

                      <li
                        onClick={() => {
                          navigate('/akcije');
                          onMobileDivShow();
                        }}
                        className={classes['mobile-nav-link']}
                      >
                        Akcije
                      </li>
                      <li
                        onClick={() => {
                          navigate('/');
                          onMobileDivShow();
                        }}
                        className={classes['mobile-nav-link']}
                      >
                        Način plaćanja
                      </li>
                      <li
                        onClick={() => {
                          navigate('/');
                          onMobileDivShow();
                        }}
                        className={classes['mobile-nav-link']}
                      >
                        Blog
                      </li>
                      <li
                        onClick={() => {
                          navigate('/');
                          onMobileDivShow();
                        }}
                        className={classes['mobile-nav-link']}
                      >
                        B2B
                      </li>
                      <li
                        onClick={() => {
                          navigate('/kontakt');
                          onMobileDivShow();
                        }}
                        className={classes['mobile-nav-link']}
                      >
                        Kontakt
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col
                md={6}
                sm={8}
                xs={10}
                className={`${classes['col-holder']}`}
              >
                <form
                  className={classes['header-search']}
                  onSubmit={handleSearch}
                >
                  <div className={classes['newsletter']}>
                    <input
                      className={`${
                        classes['newsletter-input'] + ' basic-input'
                      }`}
                      type="text"
                      name="search"
                      id="search"
                      value={searchTerm}
                      onChange={({ target }) => setSearchTerm(target.value)}
                      placeholder="Pretraži proizvode.."
                    />
                    <button
                      type="submit"
                      className={`${
                        classes['newsletter-button'] + ' basic-button'
                      }`}
                      onClick={handleSearch}
                    >
                      <BsSearch />
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
