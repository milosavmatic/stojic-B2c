import classes from "../../components/assets/css/CheckoutPage.module.scss";
import { useCallback, useEffect, useState } from "react";
import CartProductBox from "../../components/products/cartProductBox/CartProductBox";
import { ApiHandler } from "../api/api";
import { currencyFormat } from "../../components/assets/helpers/functions";
import { useCartContext } from "../api/cartContext";
import Link from "next/link";

const CheckoutPage = ({ paymentoptions, deliveryoptions }) => {
  const [defaultSelect, setDefaultSelect] = useState("");

  const [cart] = useCartContext();
  const [cartData, setCartData] = useState([]);
  const [formData, setFormData] = useState({
    type: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    second_address: "",
    zip_code: "",
    town: "",
    note: "",
    company_name: "",
    pib: "",
    maticni_broj: "",
  });
  const [errors, setError] = useState({});

  const getCart = useCallback(() => {
    const api = ApiHandler();
    api
      .list("cart")
      .then((response) => setCartData(response?.payload))
      .catch((error) => console.warn(error));
  }, []);

  useEffect(() => {
    getCart();
  }, [getCart, cart]);

  const cartItems = cartData.items ?? [];
  const cartCost = cartData.cost;

  const formChangeHandler = ({ target }) => {
    if (target.type === "radio" && target.checked) {
      setFormData({ ...formData, [target.name]: target.value });
    } else {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  const formSubmitHandler = () => {
    const api = ApiHandler();
    console.log(formData);
    const ret = {
      customer_type_billing: "???",
      company_name_billing: "???",
      pib_billing: "???",
      maticni_broj_billing: "???",
      first_name_billing: formData.first_name,
      last_name_billing: formData.last_name,
      phone_billing: formData.phone,
      email_billing: formData.email,
      address_billing: formData.address,
      object_number_billing: "",
      floor_billing: "",
      apartment_number_billing: "",
      id_town_billing: null,
      town_name_billing: formData.town,
      zip_code_billing: formData.zip_code,
      id_municipality_billing: null,
      municipality_name_billing: "",
      id_country_billing: null,
      country_name_billing: "",
      note_billing: formData.note,
      id_company_shipping: null,
      id_company_address_shipping: null,
      company_name_shipping: "???",
      pib_shipping: "???",
      maticni_broj_shipping: "???",
      first_name_shipping: formData.first_name,
      last_name_shipping: formData.last_name,
      phone_shipping: formData.phone,
      email_shipping: formData.email,
      address_shipping: formData.address,
      object_number_shipping: "",
      floor_shipping: "",
      apartment_number_shipping: "",
      id_town_shipping: null,
      town_name_shipping: formData.town,
      zip_code_shipping: formData.zip_code,
      id_municipality_shipping: null,
      municipality_name_shipping: "",
      id_country_shipping: null,
      country_name_shipping: "",
      note_shipping: formData.note,
      delivery_method: formData.delivery,
      payment_method: formData.payment,
      note: formData.note,
    };

    api
      .post("/checkout", ret)
      .then((response) => console.log(response))
      .catch((error) => console.warn(error));

    console.log(ret);
  };

  return (
    <div className={classes["container"]}>
      <h5 className={classes["your-cart"]}>Vaša korpa</h5>

      {cartItems.length > 0 ? (
        <div className={"row"}>
          <div className={classes["left-side"] + " col-xxl-7 col-12"}>
            <div className={classes["user-info"]}>
              <div className={classes["radio-face"]}>
                <input
                  type="radio"
                  className={"basic-radio"}
                  name="type"
                  value="individual"
                  id="individual"
                  onChange={formChangeHandler}
                />
                <label htmlFor={"individual"}>Poručujem kao fizičko lice</label>
                <input
                  type="radio"
                  className={"basic-radio"}
                  name="type"
                  value="legal_entity"
                  id="legal_entity"
                  onChange={formChangeHandler}
                />
                <label htmlFor={"legal_entity"}>
                  Poručujem kao pravno lice
                </label>
              </div>

              {formData.type === "legal_entity" && (
                <>
                  <div className={classes["input-info-container"] + " row"}>
                    <div
                      className={classes["input-info"] + " col-lg-12 col-12"}
                    >
                      <label
                        className={classes["input-label"]}
                        htmlFor="company_name"
                      >
                        Naziv kompanije: <span className="mandatory">*</span>
                      </label>
                      <div className={classes["input-info-padding"]}>
                        <input
                          className={classes["input"]}
                          id="company_name"
                          type="text"
                          name="company_name"
                          value={formData.company_name}
                          onChange={formChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={classes["input-info-container"] + " row"}>
                    <div
                      className={
                        classes["input-info-left"] + " col-lg-6 col-12"
                      }
                    >
                      <label className={classes["input-label"]} htmlFor="pib">
                        PIB: <span className="mandatory">*</span>
                      </label>
                      <div className={classes["input-info-padding"]}>
                        <input
                          className={classes["input"]}
                          id="pib"
                          type="text"
                          name="pib"
                          value={formData.pib}
                          onChange={formChangeHandler}
                        />
                      </div>
                    </div>
                    <div
                      className={
                        classes["input-info-right"] + " col-lg-6 col-12"
                      }
                    >
                      <label
                        className={classes["input-label"]}
                        htmlFor="maticni_broj"
                      >
                        Matični broj: <span className="mandatory">*</span>
                      </label>
                      <div className={classes["input-info-padding"]}>
                        <input
                          className={classes["input"]}
                          id="maticni_broj"
                          type="text"
                          name="maticni_broj"
                          value={formData.maticni_broj}
                          onChange={formChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className={classes["input-info-container"] + " row"}>
                <div
                  className={classes["input-info-left"] + " col-lg-6 col-12"}
                >
                  <label className={classes["input-label"]} htmlFor="name">
                    Ime: <span className="mandatory">*</span>
                  </label>
                  <div className={classes["input-info-padding"]}>
                    <input
                      className={classes["input"]}
                      id="name"
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={formChangeHandler}
                    />
                  </div>
                  <label className={classes["input-label"]} htmlFor="surname">
                    Prezime: <span className="mandatory">*</span>
                  </label>
                  <div className={classes["input-info-padding"]}>
                    <input
                      className={classes["input"]}
                      id="surname"
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={formChangeHandler}
                    />
                  </div>
                  <label className={classes["input-label"]} htmlFor="email">
                    E-mail: <span className="mandatory">*</span>
                  </label>
                  <div className={classes["input-info-padding"]}>
                    <input
                      className={classes["input"]}
                      id="email"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={formChangeHandler}
                    />
                  </div>
                </div>
                <div
                  className={classes["input-info-right"] + " col-lg-6 col-12"}
                >
                  <label className={classes["input-label"]} htmlFor="name">
                    Telefon: <span className="mandatory">*</span>
                  </label>
                  <div className={classes["input-info-padding"]}>
                    <input
                      className={classes["input"]}
                      id="name"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={formChangeHandler}
                    />
                  </div>
                  <label className={classes["input-label"]} htmlFor="surname">
                    Adresa dostave: <span className="mandatory">*</span>
                  </label>
                  <div className={classes["input-info-padding"]}>
                    <input
                      className={classes["input"]}
                      id="surname"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={formChangeHandler}
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
                          name="zip_code"
                          value={formData.zip_code}
                          onChange={formChangeHandler}
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
                          name="town"
                          value={formData.town}
                          onChange={formChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes["additional-user-info"] + " row"}>
                <div
                  className={classes["user-info-adress"] + " col-lg-6 col-12"}
                >
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
                      name="second_address"
                      value={formData.second_address}
                      onChange={formChangeHandler}
                    />
                  </div>
                </div>
                <div className={classes["user-note"] + " col-lg-6 col-12"}>
                  <label className={classes["input-label"]} htmlFor="name">
                    Napomena:
                  </label>
                  <div className={classes["input-info-padding"]}>
                    <textarea
                      id="name"
                      type="text"
                      rows="4"
                      name="note"
                      value={formData.note}
                      onChange={formChangeHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes["products-container"]}>
              <CartProductBox cartItems={cartItems} />
            </div>
          </div>
          <div className={classes["right-side"] + " col-xxl-5 col-12"}>
            <div className={classes["same-height-1"]}>
              <div className={classes["way-of-delivery"]}>
                <h5>Odaberite način dostave:</h5>
                <div className={classes["padding"]}>
                  {(deliveryoptions ?? []).map((item) => (
                    <div key={item.type}>
                      <div className={classes["radio-face"]}>
                        <input
                          type="radio"
                          className={"basic-radio"}
                          name="delivery"
                          value={item.id}
                          id={"delivery" + item.type}
                          onChange={formChangeHandler}
                        />
                        <label htmlFor={"delivery" + item.id}>
                          {item.name}
                        </label>
                      </div>
                      {}
                    </div>
                  ))}
                </div>
              </div>
              <div className={classes["way-of-payement"]}>
                <h5>Odaberite način plaćanja:</h5>
                <div className={classes["padding"]}>
                  {(paymentoptions ?? []).map((item) => (
                    <div className={classes["radio-face"]} key={item.id}>
                      <input
                        type="radio"
                        className={"basic-radio"}
                        name="payment"
                        value={item.id}
                        id={"payment" + item.id}
                        onChange={formChangeHandler}
                      />
                      <label htmlFor={"payment" + item.id}>{item.name}</label>
                    </div>
                  ))}
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
                    {currencyFormat(
                      cartCost?.with_vat ?? 0,
                      cartCost?.currency
                    )}
                  </span>
                </span>
                <span className={classes["value-span"]}>
                  Iznos dodatnog popusta u korpi:
                  <span className={classes["value-span-right"]}>
                    {currencyFormat(
                      -cartCost?.discount ?? 0,
                      cartCost?.currency
                    )}
                  </span>
                </span>
                <span className={classes["value-span"]}>
                  Iznos koštanja transporta:
                  <span className={classes["value-span-right"]}>0,00 RSD</span>
                </span>
                <span className={classes["value-span"]}>
                  Iznos PDV-a:
                  <span className={classes["value-span-right"]}>
                    {currencyFormat(cartCost?.vat ?? 0, cartCost?.currency)}
                  </span>
                </span>
                <span className={classes["value-span"]}>
                  Ukupna vrednost korpe nakon popusta:
                  <span className={classes["value-span-right-sum"]}>
                    {currencyFormat(
                      cartCost?.with_vat ?? 0,
                      cartCost?.currency
                    )}
                  </span>
                </span>
              </div>
            </div>
            <div className={classes["end-button-container"]}>
              <button
                type="button"
                className={classes["end-button"] + " basic-button-sec"}
                onClick={formSubmitHandler}
              >
                Završi kupovinu
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={"row"}>
          <div className={classes["left-side"] + " col-xxl-7 col-12"}>
            <p>Vaša korpa je prazna!</p>
            <Link href="/">Nastavite kupovinu</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

export const getServerSideProps = async () => {
  const api = ApiHandler();
  return {
    props: {
      paymentoptions: await api
        .get("checkout/paymentoptions")
        .then((response) => response?.payload),
      deliveryoptions: await api
        .get("checkout/deliveryoptions")
        .then((response) => response?.payload),
    },
  };
};
