import classes from "./CheckoutPage.module.scss";
import { useState } from "react";
import CartProductBox from "../../components/products/cartProductBox/CartProductBox";

const CheckoutPage = () => {
  const [defaultSelect, setDefaultSelect] = useState("");
  return (
    <div className={classes["container"]}>
      <h5 className={classes["your-cart"]}>Vaša korpa</h5>
      <div className={"row"}>
        <div className={classes["left-side"] + " col-xxl-7 col-12"}>
          <div className={classes["user-info"]}>
            <div className={classes["radio-face"]}>
              <input
                type="radio"
                className={"basic-radio"}
                name="face"
                value="physical_face"
                id="physical_face"
              />
              <label htmlFor={"physical_face"}>
                Poručujem kao fizičko lice
              </label>
              <input
                type="radio"
                className={"basic-radio"}
                name="face"
                value="legal_face"
                id="legal_face"
              />
              <label htmlFor={"legal_face"}>Poručujem kao pravno lice</label>
            </div>
            <div className={classes["input-info-container"] + " row"}>
              <div className={classes["input-info-left"] + " col-lg-6 col-12"}>
                <label className={classes["input-label"]} htmlFor="name">
                  Ime: <span className="mandatory">*</span>
                </label>
                <div className={classes["input-info-padding"]}>
                  <input className={classes["input"]} id="name" type="text" />
                </div>
                <label className={classes["input-label"]} htmlFor="surname">
                  Prezime: <span className="mandatory">*</span>
                </label>
                <div className={classes["input-info-padding"]}>
                  <input
                    className={classes["input"]}
                    id="surname"
                    type="text"
                  />
                </div>
                <label className={classes["input-label"]} htmlFor="email">
                  E-mail: <span className="mandatory">*</span>
                </label>
                <div className={classes["input-info-padding"]}>
                  <input className={classes["input"]} id="email" type="text" />
                </div>
              </div>
              <div className={classes["input-info-right"] + " col-lg-6 col-12"}>
                <label className={classes["input-label"]} htmlFor="name">
                  Telefon: <span className="mandatory">*</span>
                </label>
                <div className={classes["input-info-padding"]}>
                  <input className={classes["input"]} id="name" type="text" />
                </div>
                <label className={classes["input-label"]} htmlFor="surname">
                  Adresa dostave: <span className="mandatory">*</span>
                </label>
                <div className={classes["input-info-padding"]}>
                  <input
                    className={classes["input"]}
                    id="surname"
                    type="text"
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <label className={classes["input-label"]} htmlFor="name">
                      Poštanski broj: <span className="mandatory">*</span>
                    </label>
                    <div className={classes["input-info-padding"]}>
                      <input
                        className={classes["input"]}
                        id="name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <label className={classes["input-label"]} htmlFor="name">
                      Grad: <span className="mandatory">*</span>
                    </label>
                    <div className={classes["input-info-padding"]}>
                      <input
                        className={classes["input"]}
                        id="name"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes["additional-user-info"] + " row"}>
              <div className={classes["user-info-adress"] + " col-lg-6 col-12"}>
                <h6>Adresa računa</h6>
                <p className={classes["user-info-adress-p"]}>
                  Zahtevajte drugu adresu za račun u odnosu na adresu dostave
                  robe.
                </p>
                <div className={classes["padding-125"]}>
                  <input
                    className={classes["input"]}
                    id="name"
                    type="text"
                    placeholder="Druga adresa računa"
                  />
                </div>
              </div>
              <div className={classes["user-note"] + " col-lg-6 col-12"}>
                <label className={classes["input-label"]} htmlFor="name">
                  Napomena:
                </label>
                <div className={classes["input-info-padding"]}>
                  <textarea id="name" type="text" rows="4" />
                </div>
              </div>
            </div>
          </div>
          <div className={classes["products-container"]}>
            <CartProductBox />
          </div>
        </div>
        <div className={classes["right-side"] + " col-xxl-5 col-12"}>
          <div className={classes["same-height-1"]}>
            <div className={classes["way-of-delivery"]}>
              <h5>Odaberite način dostave:</h5>
              <div className={classes["padding"]}>
                <div className={classes["radio-face"]}>
                  <input
                    type="radio"
                    className={"basic-radio"}
                    name="delivery_way"
                    value="at_home"
                    id="at_home"
                  />
                  <label htmlFor={"at_home"}>
                    Dostava kurirskom službom na kućnu adresu
                  </label>
                </div>
                <div className={classes["radio-face"]}>
                  <input
                    type="radio"
                    className={"basic-radio"}
                    name="delivery_way"
                    value="at_shop"
                    id="at_shop"
                  />
                  <label htmlFor={"at_shop"}>
                    Preuzimanje robe u Stojić Elektrik prodavnici
                  </label>
                </div>
                <div className={classes["padding-125"]}>
                  <select
                    name="cars"
                    id="cars"
                    className={
                      defaultSelect === ""
                        ? classes["default-select"]
                        : classes["select"]
                    }
                    placeholder="aaaa"
                    onChange={(e) => setDefaultSelect(e.target.value)}
                  >
                    <option value="" selected disabled hidden>
                      -- Izaberite prodavnicu za preuzimanje
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={classes["way-of-payement"]}>
              <h5>Odaberite način plaćanja:</h5>
              <div className={classes["padding"]}>
                <div className={classes["radio-face"]}>
                  <input
                    type="radio"
                    className={"basic-radio"}
                    name="payement_way"
                    value="courier_payement"
                    id="courier_payement"
                  />
                  <label htmlFor={"courier_payement"}>
                    Plaćanje prilikom preuzimanja robe od kurira
                  </label>
                </div>
                <div className={classes["radio-face"]}>
                  <input
                    type="radio"
                    className={"basic-radio"}
                    name="payement_way"
                    value="cart_payement2"
                    id="cart_payement2"
                  />
                  <label htmlFor={"cart_payement2"}>
                    Plaćanje platnom karticom (online)
                  </label>
                </div>
                <div className={classes["radio-face"]}>
                  <input
                    type="radio"
                    className={"basic-radio"}
                    name="payement_way"
                    value="account_payement"
                    id="account_payement"
                  />
                  <label htmlFor={"account_payement"}>
                    Uplata na tekući račun
                  </label>
                </div>
                <div className={classes["radio-face"]}>
                  <input
                    type="radio"
                    className={"basic-radio"}
                    name="payement_way"
                    value="card_payement"
                    id="card_payement"
                  />
                  <label htmlFor={"card_payement"}>
                    Plaćanje platnom karticom (online)
                  </label>
                </div>
                <div className={classes["radio-face"]}>
                  <input
                    type="radio"
                    className={"basic-radio"}
                    name="payement_way"
                    value="ips_payement"
                    id="ips_payement"
                  />
                  <label htmlFor={"ips_payement"}>
                    IPS skeniraj (instant plaćanje)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={classes["same-height-2"]}>
            <div className={classes["coupon-container"]}>
              <h5>Kupon:</h5>
              <div className={classes["input-info-padding"]}>
                <input
                  className={classes["input"]}
                  id="coupon"
                  type="text"
                  placeholder="-- Ovde unesite kupon"
                />
                <span className={classes["coupon-span"]}>
                  * Pogledajte uputstvo za upotrebu kupona
                </span>
              </div>

              <div className={classes["coupon-button-container"]}>
                <button
                  type="button"
                  className={classes["coupon-button"] + " basic-button-sec"}
                >
                  Aktiviraj kupon
                </button>
              </div>
            </div>
            <div className={classes["value-container"]}>
              <h5>Vrednost Vaše korpe:</h5>
              <span className={classes["value-span"]}>
                Ukupna vrednost korpe:
                <span className={classes["value-span-right"]}>
                  194.213,00 RSD
                </span>
              </span>
              <span className={classes["value-span"]}>
                Iznos dodatnog popusta u korpi:
                <span className={classes["value-span-right"]}>
                  -1000,00 RSD
                </span>
              </span>
              <span className={classes["value-span"]}>
                Iznos koštanja transporta:
                <span className={classes["value-span-right"]}>-250,00 RSD</span>
              </span>
              <span className={classes["value-span"]}>
                Ukupna vrednost korpe nakon popusta:
                <span className={classes["value-span-right-sum"]}>
                  192.963,00 RSD
                </span>
              </span>
            </div>
          </div>
          <div className={classes["end-button-container"]}>
            <button
              type="button"
              className={classes["end-button"] + " basic-button-sec"}
            >
              Završi kupovinu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
