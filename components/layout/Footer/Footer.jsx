import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import classes from "./Footer.module.scss";
import DescriptionDropdown from "../../UI/descriptionDropdown/DescriptionDropdown";
/**
 * Footer layout component of B2C.
 *
 * @author Aleksandar Ječmenić <jecmenic.aleksandar@croonus.com>
 */

const Footer = () => {
  return (
    <footer className={`${classes["footer-container"]}`}>
      <div className={`${classes["footer-middle"]} row`}>
        <div className="col-xxl-8 col-12 row">
          <DescriptionDropdown
            title="KUPOVINA"
            className={classes["description-dropdown"]}
          >
            <ul className={classes["footer-list"]}>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Uslovi korišćenja</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Politika privatnosti</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Reklamacije</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Pravo na odsutajanje</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Zamena artikala</a>
                </Link>
              </li>
            </ul>
          </DescriptionDropdown>
          <DescriptionDropdown
            title="INFORMACIJE"
            className={classes["description-dropdown"]}
          >
            <ul className={classes["footer-list"]}>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Kako kupiti</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Aktuelnost</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Karijera</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Odaberite veličinu</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Autorska prava</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Poklon Vaučeri</a>
                </Link>
              </li>
            </ul>
          </DescriptionDropdown>
          <DescriptionDropdown
            title="KOMPANIJA"
            className={classes["description-dropdown"]}
          >
            <ul className={classes["footer-list"]}>
              <li>
                <Link href="/aboutUs">
                  <a className="basic-link-white">O nama</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="basic-link-white">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Prodajna mesta</a>
                </Link>
              </li>
              <li>Mobs Technology d.o.o</li>
              <li>Braće Jerković 223</li>
              <li>Beograd 11000, Srbija.</li>
              <li>MB: 17531875</li>
              <li>PIB: 103173767</li>
            </ul>
          </DescriptionDropdown>
          <div className={`${classes["footer-middle-col"]} col-12 col-md-4`}>
            <h5 className={classes["footer-middle-headings"]}>KUPOVINA</h5>
            <ul className={classes["footer-list"]}>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Uslovi korišćenja</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Politika privatnosti</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Reklamacije</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Pravo na odsutanje</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Zamena artikala</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${classes["footer-middle-col"]} col-12 col-md-4`}>
            <h5 className={classes["footer-middle-headings"]}>INFORMACIJE</h5>
            <ul className={classes["footer-list"]}>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Kako kupiti</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Aktuelnost</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Karijera</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Odaberite veličinu</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Autorska prava</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Poklon Vaučeri</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${classes["footer-middle-col"]} col-12 col-md-4`}>
            <h5 className={classes["footer-middle-headings"]}>KOMPANIJA</h5>
            <ul className={classes["footer-list"]}>
              <li>
                <Link href="/aboutUs">
                  <a className="basic-link-white">O nama</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="basic-link-white">Kontakt</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="basic-link-white">Prodajna mesta</a>
                </Link>
              </li>
              <li>Mobs Technology d.o.o</li>
              <li>Braće Jerković 223</li>
              <li>Beograd 11000, Srbija.</li>
              <li>MB: 17531875</li>
              <li>PIB: 103173767</li>
            </ul>
          </div>
        </div>
        <div
          className={classes["newsletter-col"] + " col-xxl-4 col-md-12 col-12"}
        >
          <div className={classes["newsletter-container"]}>
            <h5 className={classes["newsletter-heading"]}>NEWSLETTER</h5>
            <div className={"basic-checkbox-container"}>
              <input
                id="acceptance"
                type="checkbox"
                className="form-check-input"
              />
              <label
                className={classes["newsletter-label"]}
                htmlFor="acceptance"
              >
                Saglasan sam sa svim uslovima
              </label>
            </div>
            <input
              className={classes["newsletter-input"] + " basic-input"}
              type="text"
              placeholder="e-mail"
            />
            <div className={classes["newsletter-button-container"]}>
              <button
                type="button"
                className={classes["newsletter-button"] + " basic-button"}
              >
                Prijavi se
              </button>
            </div>

            <div className={`${classes["newsletter-follow"]}`}>
              <h5 className={`${classes["follow-us"]}`}>PRATITE NAS</h5>
              <div className={"flex-row " + classes["flex-row"]}>
                <a
                  className={classes["newsletter-social-link"]}
                  href="https://facebook.com"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className={classes["newsletter-social-link-icon"]}
                  />
                </a>
                <a
                  className={classes["newsletter-social-link"]}
                  href="https://instagram.com"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={classes["newsletter-social-link-icon"]}
                  />
                </a>
                <a
                  className={classes["newsletter-social-link"]}
                  href="https://linkedin.com"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className={classes["newsletter-social-link-icon"]}
                  />
                </a>
                <a
                  className={classes["newsletter-social-link"]}
                  href="https://twitter.com"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={classes["newsletter-social-link-icon"]}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["footer-banks"]}>
        <div className={classes["footer-banks-1"]}>
          <img
            className={classes["footer-banks-img"]}
            alt="bank"
            src={"/images/other-logos/Mastercard-logo.png"}
          />
          <img
            className={classes["footer-banks-img"]}
            alt="bank"
            src={"/images/other-logos/Maestro_logo.png"}
          />
          <img
            className={classes["footer-banks-img"]}
            alt="bank"
            src={"/images/other-logos/AmericanExpress_logo.png"}
          />
          <img
            className={classes["footer-banks-img"]}
            alt="bank"
            src={"/images/other-logos/Visa_logo.png"}
          />
        </div>
        <div className={classes["footer-banks-1"]}>
          <div className={classes["footer-banks-2"]}>
            <img
              className={classes["footer-banks-img"]}
              alt="bank"
              src={"/images/other-logos/BancaIntesa_logo.png"}
            />
            <img
              className={classes["footer-banks-img"]}
              alt="bank"
              src={"/images/other-logos/SecureCode_logo.jpg"}
            />
          </div>
          <div className={classes["footer-banks-2"]}>
            <img
              className={classes["footer-banks-img"]}
              alt="bank"
              src={"/images/other-logos/DinaCard_logo.png"}
            />
            <img
              className={classes["footer-banks-img"]}
              alt="bank"
              src={"/images/other-logos/VisaSecure_logo.png"}
            />
          </div>
        </div>
      </div>
      {/* <p className={classes["test-p"]}>
        <a
          target="_blank"
          href="https://rs.visa.com/run-your-business/small-business-tools/payment-technology/visa-secure.html"
        >
          {" "}
          <img
            className="test-img-link"
            data-src="https://static.tehnomanija.rs/images/ccimg/visa-secure_blu_2021.png"
            src="https://static.tehnomanija.rs/images/ccimg/visa-secure_blu_2021.png"
          />
        </a>
        <a
          target="_blank"
          href="https://www.mastercard.rs/sr-rs/korisnici/podrska/sigurnost-i-zastita/identity-check.html"
        >
          {" "}
          <img
            className="test-img-link"
            data-src="https://static.tehnomanija.rs/images/ccimg/MasterIDCheck.png"
            src="https://static.tehnomanija.rs/images/ccimg/MasterIDCheck.png"
          />
        </a>
        <a target="_blank" href="https://www.wspay.rs/">
          <img
            className="test-img-link"
            data-src="https://www.tehnomanija.rs/images/ccimg/wspay-logo.png"
            src="https://www.tehnomanija.rs/images/ccimg/wspay-logo.png"
          />
        </a>
        <a
          target="_blank"
          href="https://ips.nbs.rs/ips-mesta-i-nacini-placanja/ips-na-internet-prodajnim-mestima"
        >
          <img
            className="test-img-link"
            data-src="https://static.tehnomanija.rs/images/ccimg/ips.png"
            src="https://static.tehnomanija.rs/images/ccimg/ips.png"
          />
        </a>
        <a href="www.nlbkb.rs/">
          <img
            className="test-img-link"
            data-src="https://static.tehnomanija.rs/images/ccimg/Logo NLB Komercijalna banka 30.4.2022.JPG"
            src="https://static.tehnomanija.rs/images/ccimg/Logo NLB Komercijalna banka 30.4.2022.JPG"
          />
        </a>
        <a target="_blank" href="https://www.mastercard.rs/sr-rs.html">
          <img
            className="test-img-link"
            data-src="https://static.tehnomanija.rs/images/ccimg/mc_vrt_opt_pos_73_3x.png"
            src="https://static.tehnomanija.rs/images/ccimg/mc_vrt_opt_pos_73_3x.png"
          />
        </a>
        <img
          className="test-img-link"
          data-src="https://static.tehnomanija.rs/images/ccimg/new_maestro.png"
          src="https://static.tehnomanija.rs/images/ccimg/new_maestro.png"
        />
        <a target="_blank" href="https://rs.visa.com/">
          <img
            className="test-img-link"
            data-src="https://static.tehnomanija.rs/images/ccimg/vbm_blu_2021.png"
            src="https://static.tehnomanija.rs/images/ccimg/vbm_blu_2021.png"
          />
        </a>

        <a target="_blank" href="https://www.bancaintesa.rs/">
          <img
            className="test-img-link"
            data-src="https://online.bancaintesa.rs/digitalonboard/assets/img/logo.svg"
            src="https://online.bancaintesa.rs/digitalonboard/assets/img/logo.svg"
          />
        </a>
        <a target="_blank" href="https://www.americanexpress.com/">
          <img
            className="test-img-link"
            data-src="https://static.tehnomanija.rs/images/ccimg/new_amex.png"
            src="https://static.tehnomanija.rs/images/ccimg/new_amex.png"
          />
        </a>
        <a target="_blank" href="https://dinacard.nbs.rs/latinica/index.html">
          <img
            className="test-img-link"
            data-src="https://static.tehnomanija.rs/images/ccimg/DinaCard.jpg"
            src="https://static.tehnomanija.rs/images/ccimg/DinaCard.jpg"
          />
        </a>
      </p> */}
      <p className={classes["footer-copyright"]}>
        &copy; 2022 Company Name | Sva prava zadržana. Powered by{" "}
        <a
          className={classes["croonus-link"]}
          rel="noreferrer"
          href="https://www.croonus.com/"
          target="_blank"
        >
          Croonus Technologies
        </a>
        .
      </p>
      <p className={classes["footer-post-script"]}>
        Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a plaćanje
        se vrši isključivo u dinarima. Isporuka se vrši SAMO na teritoriji
        Republike Srbije.
      </p>
      <p className={classes["footer-post-script"]}>
        Nastojimo da budemo što precizniji u opisu proizvoda, prikazu slika i
        samih cena, ali ne možemo garantovati da su sve informacije kompletne i
        bez grešaka. Svi artikli prikazani na sajtu su deo naše ponude i ne
        podrazumeva da su dostupni u svakom trenutku. Raspoloživost robe možete
        proveriti pozivanjem Call Centra na +381 (0) 32 325 030 ili online
        prodaja +381 (0) 62 489 294 (po ceni lokalnog poziva)
      </p>
    </footer>
  );
};

export default Footer;
