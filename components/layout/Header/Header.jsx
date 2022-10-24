import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useCallback, useState } from "react";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.scss";
import { faX } from "@fortawesome/free-solid-svg-icons";
import MobileSearchModal from "../MobileSearchModal/MobileSearchModal";
// import { useWindowDimensions } from "../../../helpers/functions";
import MobileHamburgerModal from "../MobileHamburgerModal/MobileHamburgerModal";
import MobileAdditionalModal from "../MobileAdditionalModal/MobileAdditionalModal";
import { Router } from "next/router";

const Header = () => {
  // Constant for using useNavigate hook ( onClick navigation )
  // const navigate = useNavigate();
  // Go to homepage onClick
  // const onLogoClick = useCallback(
  //   () => navigate("/", { replace: true }),
  //   [navigate]
  // );
  // State for showing categories
  const router = useRouter();
  const [showCategories, setShowCategories] = useState(false);
  const categoriesShowHandler = () => {
    setShowCategories(true);
    document.body.style.overflow = "hidden";
  };
  const categoriesHideHandler = () => {
    setShowCategories(false);
    document.body.style.overflow = "auto";
  };

  // States for showing mobile modals
  const [phoneSearchShow, setPhoneSearchShow] = useState(false);
  const [phoneHamburgerShow, setPhoneHamburgerShow] = useState(false);
  const [phoneAdditionalShow, setPhoneAdditionalShow] = useState(false);
  // Handling modal open events
  const phoneSearchClickHandler = () => {
    setPhoneSearchShow(true);
  };
  const phoneHamburgerClickHandler = () => {
    setPhoneHamburgerShow(true);
  };
  const phoneAdditionalClickHandler = () => {
    setPhoneAdditionalShow(true);
  };

  // const { width, height } = useWindowDimensions();
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <header className={classes["header-container"]}>
      <MobileSearchModal
        openModal={phoneSearchShow}
        handleClose={() => {
          setPhoneSearchShow(false);
        }}
      />

      <MobileHamburgerModal
        openModal={phoneHamburgerShow}
        handleClose={() => {
          setPhoneHamburgerShow(false);
        }}
      />
      <MobileAdditionalModal
        openModal={phoneAdditionalShow}
        handleClose={() => {
          setPhoneAdditionalShow(false);
        }}
      />
      {showCategories && (
        <>
          <div className={classes["categories-overlay"]}>
            <div className={classes["flex-row"]}>
              <h6 className={classes["categories-overlay-heading"]}>
                Sve kategorije
              </h6>
              <FontAwesomeIcon
                icon={faX}
                className={classes["categories-overlay-x"]}
                onClick={categoriesHideHandler}
              />
            </div>
            <ul className={classes["categories-overlay-list"]}>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Laptop računari
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Računari i komponente
              </li>
              <li
                onClick={() => setActiveCategory("oprema")}
                className={
                  activeCategory === "oprema"
                    ? classes["categories-overlay-list-item-active"]
                    : classes["categories-overlay-list-item"]
                }
              >
                Oprema za računare
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Gaming
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                TV, audio, video
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Mobilni telefoni i tableti
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Bela tehnika
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Laptop računari
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Računari i komponente
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Oprema za računare
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Gaming
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                TV, audio, video
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Mobilni telefoni i tableti
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Bela tehnika
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Laptop računari
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Računari i komponente
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Oprema za računare
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Gaming
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                TV, audio, video
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Mobilni telefoni i tableti
              </li>
              <li
                onClick={() => setActiveCategory("")}
                className={classes["categories-overlay-list-item"]}
              >
                Bela tehnika
              </li>
            </ul>
          </div>
          <div
            className={classes["gray-overlay"]}
            onClick={categoriesHideHandler}
          ></div>
          {activeCategory !== "" && (
            <div className={classes["category-container"]}>
              <h4 className={classes["category-container-heading"]}>
                Oprema za računare
              </h4>
              <div className={classes["category-container-row"] + " row"}>
                <div className={classes["category-container-col"] + " col-4"}>
                  <h5 className={classes["sub-category-heading"]}>
                    Subkategorija
                  </h5>
                  <ul className={classes["category-container-list"]}>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                  </ul>
                </div>
                <div className={classes["category-container-col"] + " col-4"}>
                  <h5 className={classes["sub-category-heading"]}>
                    Subkategorija
                  </h5>
                  <ul className={classes["category-container-list"]}>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                  </ul>
                </div>
                <div className={classes["category-container-col"] + " col-4"}>
                  <h5 className={classes["sub-category-heading"]}>
                    Subkategorija
                  </h5>
                  <ul className={classes["category-container-list"]}>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                  </ul>
                </div>
                <div className={classes["category-container-col"] + " col-4"}>
                  <h5 className={classes["sub-category-heading"]}>
                    Subkategorija
                  </h5>
                  <ul className={classes["category-container-list"]}>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                  </ul>
                </div>
                <div className={classes["category-container-col"] + " col-4"}>
                  <h5 className={classes["sub-category-heading"]}>
                    Subkategorija
                  </h5>
                  <ul className={classes["category-container-list"]}>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                  </ul>
                </div>
                <div className={classes["category-container-col"] + " col-4"}>
                  <h5 className={classes["sub-category-heading"]}>
                    Subkategorija
                  </h5>
                  <ul className={classes["category-container-list"]}>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                  </ul>
                </div>
                <div className={classes["category-container-col"] + " col-4"}>
                  <h5 className={classes["sub-category-heading"]}>
                    Subkategorija
                  </h5>
                  <ul className={classes["category-container-list"]}>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                  </ul>
                </div>
                <div className={classes["category-container-col"] + " col-4"}>
                  <h5 className={classes["sub-category-heading"]}>
                    Subkategorija
                  </h5>
                  <ul className={classes["category-container-list"]}>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                    <li className={classes["category-container-list-item"]}>
                      Test
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <div className={classes["header-top"]}>
        <Link href="/prodavnice">
          <a className={classes["header-top-link"]}>
            {" "}
            <FontAwesomeIcon
              className={classes["link-icon"]}
              icon={faLocationDot}
            />{" "}
            Prodavnice
          </a>
        </Link>
        <Link href="/login">
          <a className={classes["header-top-link"]}>
            <FontAwesomeIcon className={classes["link-icon"]} icon={faUser} />
            <span className={classes["header-top-link-no-mobile"]}>
              Registruj se ili uloguj se
            </span>
            <span className={classes["header-top-link-mobile"]}>Profil</span>
          </a>
        </Link>
      </div>
      <div className={classes["header-middle"]}>
        <Link href="/homePage">
          <a>
            <div className={classes["header-logo"]}>
              <img
                alt="header-logo"
                className={classes["header-logo-img"]}
                src={"/images/logo/logo-s.png"}
                // onClick={() => router.replace("")}
              />
            </div>
          </a>
        </Link>

        <div className={classes["search-bar"] + " col-xxl-6 col-xl-4"}>
          <input
            className={`${classes["search-bar-input"]} basic-input`}
            type="text"
            placeholder="Traži..."
          />
          <button
            type="button"
            className={`${classes["search-button"]} basic-search-button`}
          >
            <img
              src={"/images/icons/search_icon.png"}
              alt="search"
              className={`${classes["search-button-img"]} basic-search-button-image`}
            />
          </button>
        </div>
        <div className={classes["header-middle-buttons-container"]}>
          <button
            type="button"
            className={`${classes["header-middle-buttons"]} ${classes["header-middle-buttons-search"]}`}
            onClick={phoneSearchClickHandler}
          >
            <img
              className={"button-img"}
              src={"/images/icons/search_icon.png"}
              alt="search-img"
            />
          </button>
          <button
            type="button"
            className={classes["header-middle-buttons"]}
            onClick={() => router.replace("/wishlist")}
          >
            <img
              className={"button-img"}
              src={"/images/icons/heart.png"}
              alt="heart-img"
            />

            <span className={classes["header-middle-buttons-circle"]}>0</span>
          </button>
          <button
            type="button"
            className={classes["header-middle-buttons"]}
            onClick={() => router.replace("/korpa")}
          >
            {" "}
            <img
              className={"button-img"}
              src={"/images/icons/cart.png"}
              alt="bag-img"
            />
            <span className={classes["header-middle-buttons-circle"]}>0</span>
          </button>
          <span className={classes["my-basket"] + " color-white"}>
            <span>Moja korpa</span>
            <span className={classes["my-basket-dash"]}>&nbsp;-&nbsp;</span>
            <span className={"color-primary"}>0,00 RSD</span>
          </span>
          <Link href="/contact">
            <a className={classes["header-bottom-contact-link-mobile"]}>
              <FontAwesomeIcon
                icon={faPhone}
                className={classes["contact-icon-mobile"]}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={classes["header-bottom"]}>
        <button type="button" className={classes["header-bottom-button"]}>
          <div className={classes["list-hamburger"]}>
            <div className={classes["hamburger-line"]}></div>
            <div className={classes["hamburger-line"]}></div>
            <div className={classes["hamburger-line"]}></div>
          </div>
          <div
            className={classes["mobile-hamburger"]}
            onClick={phoneHamburgerClickHandler}
          >
            <div className={classes["hamburger-line"]}></div>
            <div className={classes["hamburger-line"]}></div>
            <div className={classes["hamburger-line"]}></div>
          </div>
          <span
            className={classes["product-category"]}
            onClick={categoriesShowHandler}
          >
            Kategorije proizvoda
          </span>
        </button>
        <span
          className={classes["mobile-additional-pages"]}
          onClick={() => setPhoneAdditionalShow(true)}
        >
          Dodatne stranice
        </span>
        <ul className={classes["nav-list"]}>
          <Link href="/actions">
            <a className={classes["nav-link-item"]}>
              <li>
                Akcije<span className={classes["chevron-bottom"]}></span>
              </li>
            </a>
          </Link>
          <Link href="/news">
            <a className={classes["nav-link-item"]}>
              <li>
                Novosti<span className={classes["chevron-bottom"]}></span>
              </li>
            </a>
          </Link>
          <Link href={"/payment"}>
            <a className={classes["nav-link-item"]}>
              <li>
                Načini plaćanja
                <span className={classes["chevron-bottom"]}></span>
              </li>
            </a>
          </Link>

          <li>
            <Link href="/blog">
              <a className={classes["nav-link-item"]}>
                Blog<span className={classes["chevron-bottom"]}></span>
              </a>
            </Link>
          </li>
          <li className={classes["nav-link-item"]}>
            <span className="color-primary weight-500">B2B</span>
            <span className={classes["chevron-bottom"]}></span>
          </li>
          <li>
            <Link href="/contact">
              <a className={classes["nav-link-item"]}>
                {" "}
                Kontakt<span className={classes["chevron-bottom"]}></span>
              </a>
            </Link>
          </li>
        </ul>
        <div className={classes["header-bottom-contact"]}>
          <Link href="/contact">
            <a className={classes["header-bottom-contact-link"]}>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                className={classes["contact-icons"]}
              />
              <span className={classes["contact-span"]}>prodaja@stojic.rs</span>
            </a>
          </Link>
          <Link href="/contact">
            <a className={classes["header-bottom-contact-link"]}>
              <FontAwesomeIcon
                icon={faPhone}
                className={classes["contact-icons"]}
              />
              <span className={classes["contact-span"]}>+381 32 368 007</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
