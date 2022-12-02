import Link from 'next/link';
import AELogo from '../assets/images/bank/AmericanExpress_logo.png';
import BILogo from '../assets/images/bank/BancaIntesa_logo.png';
import DCLogo from '../assets/images/bank/DinaCard_logo.png';
import MaestroLogo from '../assets/images/bank/Maestro_logo.png';
import MCLogo from '../assets/images/bank/Mastercard-logo.png';
import SCLogo from '../assets/images/bank/SecureCode_logo.png';
import VisaLogo from '../assets/images/bank/Visa_logo.png';
import VisaSLogo from '../assets/images/bank/VisaSecure_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from 'react-bootstrap/Accordion';
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.scss';
import Image from 'next/image';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer>
      <div className={`${classes['footer-holder']}`}>
        <div className="container">
          <div className={`${classes['footer-middle']} row`}>
            <div className={`${classes['display-desktop']}`}>
              <div className="row">
                <div className={`${classes['footer-middle-col']} col-3`}>
                  <h5 className={`${classes['footer-middle-headings']}`}>
                    Podrška
                  </h5>
                  <ul className={`${classes['footer-list']}`}>
                    <li>
                      <Link href="/">
                        <a className={`${classes['basic-link-white']}`}>
                          Način plaćanja i isporuka
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className={`${classes['basic-link-white']}`}>
                          Kako naručiti
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className={`${classes['basic-link-white']}`}>
                          Najčešća pitanja
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className={`${classes['basic-link-white']}`}>
                          Korisnička podrška
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className={`${classes['basic-link-white']}`}>
                          Zamena artikala
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <div className="row">
                    <div className={`${classes['footer-middle-col']} col-12`}>
                      <h5 className={`${classes['footer-middle-headings']}`}>
                        Uslovi korišćenja
                      </h5>
                      <ul className={`${classes['footer-list']}`}>
                        <li>
                          <Link href="/">
                            <a className={`${classes['basic-link-white']}`}>
                              Uslovi korišćenja
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a className={`${classes['basic-link-white']}`}>
                              Politika privatnosti
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a className={`${classes['basic-link-white']}`}>
                              Prava potrošača
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className={`${classes['footer-middle-col']}  ${classes['marginTop']} col-12 `}>
                      <h5 className={`${classes['footer-middle-headings']}`}>
                        Kontakt centar
                      </h5>
                      <ul className={`${classes['footer-list']}`}>
                        <li>
                          <Link href="tel:0038132368007">
                            <a className={`${classes['basic-link-white']}`}>
                              +381 32 368 007
                            </a>
                          </Link>
                        </li>
                        <li>Ponedeljak - petak : 8 - 20h</li>
                        <li>Subota i nedelja : 8 - 17h</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`${classes['footer-middle-col']} col-3`}>
                  <h5 className={`${classes['footer-middle-headings']}`}>
                    Stojić Elektrik
                  </h5>
                  <ul className={`${classes['footer-list']}`}>
                    <li>
                      <Link href="/o-nama">
                        <a className={`${classes['basic-link-white']}`}>
                          O nama
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className={`${classes['basic-link-white']}`}>
                          Postani partner
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className={`${classes['basic-link-white']}`}>
                          Kontakt
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className={`${classes['basic-link-white']}`}>Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={`${classes['newsletter-col'] + ' col-3'}`}>
                  <Newsletter />
                </div>
              </div>
            </div>
            <div className={`${classes['display-mobile']}`}>
              <div className="col-12">
                <Accordion className={`${classes['acc-holder']}`}>
                  <Accordion.Item
                    eventKey="0"
                    className={`${classes['acc-item-holder']}`}
                  >
                    <Accordion.Header className={`${classes['acc-headings']}`}>
                      <div className={`${classes['acc-headings-holder']}`}>
                        <div className={`${classes['red-line']}`}></div>
                        <p>Kupovina</p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className={`${classes['footer-list']}`}>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Uslovi korišćenja
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Politika privatnosti
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Reklamacije
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Pravo na odsutanje
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Zamena artikala
                          </Link>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className={`${classes['acc-headings']}`}>
                      <div className={`${classes['acc-headings-holder']}`}>
                        <div className={`${classes['red-line']}`}></div>
                        <p>Informacije</p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className={`${classes['footer-list']}`}>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Kako kupiti
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Aktuelnost
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Karijera
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Odaberite veličinu
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Autorska prava
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Poklon Vaučeri
                          </Link>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className={`${classes['acc-headings']}`}>
                      <div className={`${classes['acc-headings-holder']}`}>
                        <div className={`${classes['red-line']}`}></div>
                        <p>Kompanija</p>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className={`${classes['footer-list']}`}>
                        <li>
                          <Link
                            href="/o-nama"
                            className={`${classes['acc-items']}`}
                          >
                            O nama
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Kontakt
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${classes['acc-items']}`}>
                            Prodajna mesta
                          </Link>
                        </li>
                        <li className={`${classes['acc-items']}`}>
                          Mobs Technology d.o.o
                        </li>
                        <li className={`${classes['acc-items']}`}>
                          Braće Jerković 223
                        </li>
                        <li className={`${classes['acc-items']}`}>
                          Beograd 11000, Srbija.
                        </li>
                        <li className={`${classes['acc-items']}`}>
                          MB: 17531875
                        </li>
                        <li className={`${classes['acc-items']}`}>
                          PIB: 103173767
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className={`${classes['nl-holder']}`}>
                <div className={`${classes['newsletter-container']}`}>
                  <h5 className={`${classes['newsletter-heading']}`}>
                    NEWSLETTER
                  </h5>
                  <div className={`${classes['basic-checkbox-container']}`}>
                    <input
                      id="acceptance"
                      type="checkbox"
                      className={`${
                        classes['form-custom-btn'] + ' form-check-button'
                      }`}
                    />
                    <label
                      className={`${classes['newsletter-label']}`}
                      htmlFor="acceptance"
                    >
                      Saglasan sam sa svim uslovima
                    </label>
                  </div>
                  <input
                    className={`${
                      classes['newsletter-input'] + ' basic-input'
                    }`}
                    type="text"
                    placeholder="e-mail"
                  />
                  <div className={`${classes['newsletter-button-container']}`}>
                    <button
                      type="button"
                      className={`${
                        classes['newsletter-button'] + ' basic-button'
                      }`}
                    >
                      Prijavi se
                    </button>
                  </div>
                </div>
                <div className={`${classes['newsletter-follow']}`}>
                  <h5 className={`${classes['follow-us']}`}>PRATITE NAS</h5>
                  <div className={`${'flex-row ' + classes['flex-row']}`}>
                    <a
                      className={`${`${classes['newsletter-social-link']}`}`}
                      href="https://facebook.com"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className={classes['newsletter-social-link-icon']}
                      />
                    </a>
                    <a
                      className={`${classes['newsletter-social-link']}`}
                      href="https://instagram.com"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={classes['newsletter-social-link-icon']}
                      />
                    </a>
                    <a
                      className={`${classes['newsletter-social-link']}`}
                      href="https://linkedin.com"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className={classes['newsletter-social-link-icon']}
                      />
                    </a>
                    <a
                      className={`${classes['newsletter-social-link']}`}
                      href="https://twitter.com"
                    >
                      {
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className={classes['newsletter-social-link-icon']}
                        />
                      }
                    </a>
                    <a
                      className={`${classes['newsletter-social-link']}`}
                      href="https://twitter.com"
                    >
                      {
                        <FontAwesomeIcon
                          icon={faYoutube}
                          className={classes['newsletter-social-link-icon']}
                        />
                      }
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes['footer-copyright']} `}>
        <div className="container d-flex justify-content-between">
          <p>
            Stojić Elektrik | Sva prava zadržana. Powered by{' '}
            <a
              className={classes['croonus-link']}
              rel="noreferrer"
              href="https://www.croonus.com/"
              target="_blank"
            >
              Croonus Technologies
            </a>
            .
          </p>
          <ul className="d-flex">
            <li>
              <Link href="/" className={`${classes['acc-items']}`}>
                Opšti uslovi prodaje
              </Link>
            </li>
            <li>
              <Link href="/" className={`${classes['acc-items']}`}>
                Politika privatnosti.
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
