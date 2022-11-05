import { useState } from "react";
import Link from "next/link";
import classes from "../../components/assets/css/ContactPage.module.scss";
import cacakMap from "../../components/assets/images/banners/cacak_map_gray.png";
import dlIcon from "../../components/assets/images/elements/download-sticker.png";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
const ContactPage = () => {
  const [selectContact, setSelectContact] = useState("");
  const onSubmitHandler = (e) => {
    return e.preventDefault();
  };
  const onCaptchaChange = () => {
    console.log("not a robot");
  };
  return (
    <>
      <div className={classes["map-container-container"]}>
        <div className={classes["map-container"]}>
          <Image src={cacakMap} alt="" />
        </div>
      </div>
      <div className={classes["content-container"]}>
        <div className={classes["contact"] + " row"}>
          <div className={classes["contact-info"] + " col-md-4"}>
            <h4 className={classes["contact-info-heading"]}>Kontakt</h4>
            <div className={classes["call-center"]}>
              <h5 className={classes["call-center-heading"]}>Call centar</h5>
              <span className={classes["bolded-faces"]}>Fizička lica</span>
              <span className={classes["phone-numbers"]}>011 44 14 000</span>
              <span className={classes["bolded-faces"]}>Pravna lica</span>
              <span className={classes["phone-numbers"]}>011 44 14 000</span>
              <span className={classes["bolded-faces"]}>
                Pozivi sa mobilne mreže
              </span>
              <span className={classes["phone-numbers"]}>066 6 67 67 67</span>
              <span className={classes["bolded-faces"]}>ili e-mailom na:</span>
              <span className={classes["phone-numbers"]}>
                prodaja@mobsshop.com
              </span>
              <span className={classes["phone-numbers"]}>
                pravnalica@mobsshop.com
              </span>
            </div>
            <div className={classes["working-hours"]}>
              <h5 className={classes["working-hours-heading"]}>
                Radno vreme Call Centra
              </h5>
              <Link
                href="/prodavnice"
                className={classes["working-hours-shops"]}
              >
                Mobs prodavnice - gradovi, adrese, brojevi telefona
              </Link>
              <span className={classes["working-hours-day"]}>
                Ponedeljak - Petak:{" "}
                <span className={classes["working-hours-hour"]}>
                  od 08h do 20h
                </span>
              </span>
              <span className={classes["working-hours-day"]}>
                Subota:{" "}
                <span className={classes["working-hours-hour"]}>
                  od 09h do 16:30h
                </span>
              </span>
              <span className={classes["working-hours-day"]}>
                Nedelja:{" "}
                <span className={classes["working-hours-hour"]}>
                  neradni dan
                </span>
              </span>
            </div>
            <div className={classes["contact-downloads"]}>
              <Image
                src={dlIcon}
                className={classes["downloads-icon"]}
                alt=""
              />
              <h5 className={classes["downloads-heading"]}>
                MOBS D.O.O EXPORT - IMPORT <span>PIB: 102778428</span>
              </h5>
              <h6 className={classes["downloads-subheading"]}>
                Preuzmite obrasce:
              </h6>
              <span className={classes["download-link"]}>PEPDV obrazac</span>
              <span className={classes["download-link"]}>PIB</span>
              <span className={classes["download-link"]}>
                Obrazac za identifikaciju
              </span>
              <span className={classes["download-link"]}>
                Obrazac za odustanak od ugovora
              </span>
            </div>
          </div>
          <form
            className={classes["contact-form"] + " col-md-8"}
            onSubmit={(e) => onSubmitHandler(e)}
          >
            <input
              type="text"
              placeholder="Ime *"
              className={classes["contact-form-input"]}
            />
            <input
              type="text"
              placeholder="Email *"
              className={classes["contact-form-input"]}
            />
            <input
              type="text"
              placeholder="Telefon *"
              className={classes["contact-form-input"]}
            />
            <select
              className={classes["contact-select"]}
              onChange={(e) => setSelectContact(e.target.value)}
            >
              <option value="" selected disabled hidden>
                --Izaberite kontakt opciju--
              </option>
              <option value="sales">Prodaja</option>
              <option value="social-and-marketing">
                Društvene mreže i marketing
              </option>
              <option value="dispatch">Isporuka robe</option>
              <option value="tech-support">Tehnička podrška i servis</option>
              <option value="reclamation">Reklamacije</option>
              <option value="suggest">Vaše primedbe i sugestije</option>
              <option value="webmaster-msg">Poruka za webmastera</option>
              <option value="job-application">Mobs zaposlenje</option>
              <option value="report-error">
                Prijava oštećenja u roku od 24h
              </option>
            </select>
            <div
              className={
                selectContact === "report-error"
                  ? classes["malfunction-options"]
                  : "display-none"
              }
            ></div>

            <textarea
              placeholder="Poruka *"
              className={classes["contact-form-textarea"]}
              rows="7"
            />
            <button type="button" className={classes["contact-button"]}>
              Dodajte fajlove
            </button>
            <span className={classes["contact-form-text"]}>
              *Maksimalna veličina dokumenta je 10MB.
            </span>
            <span className={classes["contact-form-text"]}>
              *Dokument može biti .jpg i .pdf.
            </span>
            <ReCAPTCHA
              className={classes["captcha"]}
              sitekey="6Ld9cj4gAAAAANDQjVmIJUDcOU79VnU9u_Qr1jDL"
              onChange={onCaptchaChange}
            />
            <div
              className={
                classes["checkbox-container"] + " basic-checkbox-container"
              }
            >
              <input
                id="acceptance"
                type="checkbox"
                className={classes["checkbox"] + " form-check-input"}
              />
              <label className={classes["checkbox-label"]} htmlFor="acceptance">
                Upoznat sam i slažem se sa sadržajem disklejmera.
                <br />
                Sadržaj disklejmera možete pogledati na{" "}
                <Link href="/uslovi">Pročitaj uslove</Link>
              </label>
            </div>

            <button type="submit" className={classes["contact-submit"]}>
              Pošalji
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
