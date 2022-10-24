import Link from "next/link";
import classes from "./ProductPage.module.scss";
import ProductDetailsSlider from "../../components/products/productDetailsSlider/ProductDetailsSlider";
import PlusMinusInput from "../../components/UI/plusMinusInput/PlusMinusInput";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductBoxSimpleSmall from "../../components/products/productBoxSimpleSmall/ProductBoxSimpleSmall";

const ProductPage = () => {
  // Holds the selected additional option
  const [additional, setAdditional] = useState("info");
  // State that holds amount of products
  const [productAmount, setProductAmount] = useState(0);
  return (
    <>
      <div>
        <ul className={classes["navigation-list"]}>
          <li className={classes["navigation-links"]}>
            <Link href="/">Početna</Link>
          </li>
          <li className={classes["navigation-links"]}>
            <Link href="test">Računari, Monitori I Oprema</Link>
          </li>
          <li className={classes["navigation-links"]}>
            <Link href="test">Laptop Računari</Link>
          </li>
          <li className={classes["navigation-links"]}>
            <Link href="test">Laptopovi</Link>
          </li>
          <li className={classes["navigation-links"]}>
            <Link href="test">
              Gigabyte u4 ud 14" fhd i7-1195g7 16gb 512gb ssd intel iris xe bl
              win11home backlit sivi
            </Link>
          </li>
        </ul>
        <div className={classes["main-details"] + " col-12 row"}>
          <div className={classes["main-details-images"] + " col-xl-6"}>
            <ProductDetailsSlider>
              <div className={classes["under-details-buttons"]}>
                <div className={classes["under-details-buttons-surrounder"]}>
                  <button className={classes["under-details-buttons-button"]}>
                    <img
                      alt="compare"
                      src={"/images/icons/poredjenje_malo.png"}
                      className={classes["under-details-image"]}
                    />
                    Uporedi
                  </button>
                </div>
                <div className={classes["under-details-buttons-surrounder"]}>
                  <button className={classes["under-details-buttons-button"]}>
                    <img
                      alt="compare"
                      src={"/images/icons/printer.png"}
                      className={classes["under-details-image"]}
                    />
                    Štampaj
                  </button>
                </div>
                <div className={classes["under-details-buttons-surrounder"]}>
                  <button className={classes["under-details-buttons-button"]}>
                    <img
                      alt="compare"
                      src={"/images/icons/heart.png"}
                      className={classes["under-details-image"]}
                    />
                    Sačuvaj
                  </button>
                </div>
              </div>
            </ProductDetailsSlider>
            <div
              className={`${classes["under-details-buttons"]} ${classes["mobile-show"]}`}
            >
              <div className={classes["under-details-buttons-surrounder"]}>
                <button className={classes["under-details-buttons-button"]}>
                  <img
                    alt="compare"
                    src={"/images/icons/poredjenje_malo.png"}
                    className={classes["under-details-image"]}
                  />
                  Uporedi
                </button>
              </div>
              <div className={classes["under-details-buttons-surrounder"]}>
                <button className={classes["under-details-buttons-button"]}>
                  <img
                    alt="compare"
                    src={"/images/icons/printer.png"}
                    className={classes["under-details-image"]}
                  />
                  Štampaj
                </button>
              </div>
              <div className={classes["under-details-buttons-surrounder"]}>
                <button className={classes["under-details-buttons-button"]}>
                  <img
                    alt="compare"
                    src={"/images/icons/heart.png"}
                    className={classes["under-details-image"]}
                  />
                  Sačuvaj
                </button>
              </div>
            </div>
          </div>
          <div
            className={classes["main-details-block"] + " col-xl-5 col-md-11"}
          >
            <h5 className={classes["product-name"]}>
              GIGABYTE U4 UD 14" FHD i7-1195G7 16GB 512GB SSD Intel Iris XE BL
              Win11Home Backlit sivi
            </h5>
            <div className={classes["codes"]}>
              <span className={classes["product-code"]}>
                <span className={classes["code-bold"]}>Šifra artikla:</span>{" "}
                NOT18950
              </span>
              <span className={classes["product-code"]}>
                <span className={classes["code-bold"]}>Barcode:</span> 1173214
              </span>
              <span className={classes["product-code"]}>
                <span className={classes["code-bold"]}>EAN code:</span>{" "}
                1321321312321
              </span>
            </div>

            <div className={classes["availability"]}>
              <span className={classes["availability-label"]}>
                Dostupnost:{" "}
                <span className={classes["availability-check"]}>Na stanju</span>
              </span>
              <span className={classes["availability-label"]}>
                Rok isporuke:{" "}
                <span className={classes["free-shipping"]}>5 dana</span>
              </span>
              <span className={classes["availability-label"]}>
                Dostava:{" "}
                <span className={classes["free-shipping"]}>Besplatna</span>
              </span>
            </div>
            <div className={classes["price"]}>
              <span className={classes["old-price"]}>122.211 RSD</span>
              <span className={classes["new-price"]}>95.990 RSD</span>
              <span className={classes["price-info"]}>Ušteda: 26.221 RSD</span>
              <span className={classes["price-info"]}>
                Akcija traje od 23.5.2022. do 29.5.2022.
              </span>
            </div>
            <div className={classes["amount"]}>
              <span>Količina:</span>
              <div className={classes["amount-input-and-cart"]}>
                <PlusMinusInput
                  className={classes["amount-input"]}
                  amount={productAmount}
                  setCount={setProductAmount}
                />
                <button className={classes["cart-button"] + " basic-button"}>
                  <img
                    alt="cart"
                    className="button-img"
                    src={"/images/icons/cart.png"}
                  />
                  <span className={classes["add-to-cart-span"]}>
                    Dodajte u korpu
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className={classes["additional-services"] + " col-1"}>
            <button className={classes["services-button"] + " basic-button"}>
              <img
                className={classes["services-button-img"]}
                src={"/images/icons/truck.png"}
                alt=""
              />
              <div className={classes["services-show-me"]}>
                <span>Besplatna dostava za iznos preko 5.000 RSD</span>
              </div>
            </button>
            <button className={classes["services-button"] + " basic-button"}>
              <img
                className={classes["services-button-img"]}
                src={"/images/icons/support.png"}
                alt=""
              />

              <div className={classes["services-show-me"]}>
                <span>Pozovite naše prodajne savetnike</span>
              </div>
            </button>
            <button className={classes["services-button"] + " basic-button"}>
              <img
                className={classes["services-button-img"]}
                src={"/images/icons/credit.png"}
                alt=""
              />

              <div className={classes["services-show-me"]}>
                <span>Odloženo plaćanje do 24 rate bez kamate</span>
              </div>
            </button>
          </div>
        </div>
        {/*   <div className={classes["descriptions"]}>
           <DescriptionDropdown title="Specifikacija" active={true}>
            <button
              className={classes["specification-button"] + " basic-button"}
            >
              <img
                src={printerImg}
                className={classes["specification-button-img"]}
                alt="spec"
              />
              <span>ŠTAMPANJE SPECIFIKACIJE</span>
            </button>
            <div className={classes["specification"]}>
              <table className={classes["main-table"]}>
                <tbody>
                  <tr className={classes["specification-row-holder"] + " row"}>
                    <td
                      className={
                        classes["main-spec-title"] +
                        " col-md-3 col-sm-3 col-xs-3"
                      }
                    >
                      Šifra artikla
                    </td>
                    <td
                      className={
                        classes["specification-items-holder"] +
                        " col-md-9 col-sm-9 col-xs-9"
                      }
                    >
                      <table className={classes["sub-table"]}>
                        <tbody>
                          <tr>
                            <td
                              className={
                                classes["specification-item"] + " col-md-6"
                              }
                            >
                              NOT18950
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className={classes["specification-row-holder"] + " row"}>
                    <td
                      className={
                        classes["main-spec-title"] +
                        " col-md-3 col-sm-3 col-xs-3"
                      }
                    >
                      Ekran
                    </td>
                    <td
                      className={
                        classes["specification-items-holder"] +
                        " col-md-9 col-sm-9 col-xs-9"
                      }
                    >
                      <table className={classes["sub-table"]}>
                        <tbody>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Veličina ekrana
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              14"
                            </td>
                          </tr>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Rezolucija ekrana
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              1920x1080
                            </td>
                          </tr>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Format rezolucije
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              Full HD
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className={classes["specification-row-holder"] + " row"}>
                    <td
                      className={
                        classes["main-spec-title"] +
                        " col-md-3 col-sm-3 col-xs-3"
                      }
                    >
                      Procesor / Čipset
                    </td>
                    <td
                      className={
                        classes["specification-items-holder"] +
                        " col-md-9 col-sm-9 col-xs-9"
                      }
                    >
                      <table className={classes["sub-table"]}>
                        <tbody>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Klasa procesora
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              Intel Core i7
                            </td>
                          </tr>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Model procesora
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              i7-1195G7
                            </td>
                          </tr>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Broj jezgara procesora
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              4
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className={classes["specification-row-holder"] + " row"}>
                    <td
                      className={
                        classes["main-spec-title"] +
                        " col-md-3 col-sm-3 col-xs-3"
                      }
                    >
                      Memorija (RAM)
                    </td>
                    <td
                      className={
                        classes["specification-items-holder"] +
                        " col-md-9 col-sm-9 col-xs-9"
                      }
                    >
                      <table className={classes["sub-table"]}>
                        <tbody>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Memorija (RAM)
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              16GB
                            </td>
                          </tr>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Tip memorije
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              DDR4
                            </td>
                          </tr>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Radni takt memorije
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              3200 Mhz
                            </td>
                          </tr>
                          <tr className={classes["specification-items"]}>
                            <td
                              className={
                                classes["specification-item"] +
                                " col-md-3 col-sm-6 col-xs-6"
                              }
                            >
                              Broj slotova
                            </td>
                            <td
                              className={
                                classes["specification-item-value"] +
                                " col-md-9 col-sm-6 col-xs-6"
                              }
                            >
                              1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DescriptionDropdown>
          <DescriptionDropdown title="Deklaracija">
            <button
              className={classes["specification-button"] + " basic-button"}
            >
              <img
                src={printerImg}
                className={classes["specification-button-img"]}
                alt="spec"
              />
              <span>ŠTAMPANJE DEKLARACIJE</span>
            </button>
            <table className={classes["main-table-2"]}>
              <tbody>
                <tr className={classes["specification-row-holder"] + " row"}>
                  <td
                    className={
                      classes["main-spec-title"] + " col-md-3 col-sm-3 col-xs-5"
                    }
                  >
                    Model
                  </td>
                  <td
                    className={
                      classes["specification-items-holder"] +
                      " col-md-9 col-sm-9 col-xs-7"
                    }
                  >
                    <table className={classes["sub-table"]}>
                      <tbody>
                        <tr className={classes["specification-items"]}>
                          <td
                            className={
                              classes["specification-item"] + " col-md-12"
                            }
                          >
                            GIGABYTE U4 UD 14" FHD i7-1195G7 16GB 512GB SSD
                            Intel Iris XE BL Win11Home Backlit sivi
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className={classes["specification-row-holder"] + " row"}>
                  <td
                    className={
                      classes["main-spec-title"] + " col-md-3 col-sm-3 col-xs-5"
                    }
                  >
                    Naziv i vrsta robe
                  </td>
                  <td
                    className={
                      classes["specification-items-holder"] +
                      " col-md-9 col-sm-9 col-xs-7"
                    }
                  >
                    <table className={classes["sub-table"]}>
                      <tbody>
                        <tr className={classes["specification-items"]}>
                          <td
                            className={
                              classes["specification-item"] + " col-md-12"
                            }
                          >
                            Laptopovi
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className={classes["specification-row-holder"] + " row"}>
                  <td
                    className={
                      classes["main-spec-title"] + " col-md-3 col-sm-3 col-xs-5"
                    }
                  >
                    Uvoznik
                  </td>
                  <td
                    className={
                      classes["specification-items-holder"] +
                      " col-md-9 col-sm-9 col-xs-7"
                    }
                  >
                    <table className={classes["sub-table"]}>
                      <tbody>
                        <tr className={classes["specification-items"]}>
                          <td
                            className={
                              classes["specification-item"] + " col-md-12"
                            }
                          >
                            Tačan podatak o uvozniku će biti naveden na
                            deklaraciji koju dobijate uz proizvod.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className={classes["specification-row-holder"] + " row"}>
                  <td
                    className={
                      classes["main-spec-title"] + " col-md-3 col-sm-3 col-xs-5"
                    }
                  >
                    Zemlja uvoza
                  </td>
                  <td
                    className={
                      classes["specification-items-holder"] +
                      " col-md-9 col-sm-9 col-xs-7"
                    }
                  >
                    <table className={classes["sub-table"]}>
                      <tbody>
                        <tr className={classes["specification-items"]}>
                          <td
                            className={
                              classes["specification-item"] + " col-md-12"
                            }
                          >
                            Tačan podatak o zemlji uvoza će biti naveden na
                            deklaraciji koju dobijate uz proizvod.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </DescriptionDropdown>
        </div> */}
        <div className={classes["additional-buttons-container"]}>
          <button
            type="button"
            onClick={() => setAdditional("info")}
            className={
              additional === "info"
                ? `${classes["additional-button"]} ${classes["additional-button-active"]}`
                : classes["additional-button"]
            }
          >
            Dodatne informacije
          </button>
          <button
            type="button"
            onClick={() => setAdditional("recension")}
            className={
              additional === "recension"
                ? `${classes["additional-button"]} ${classes["additional-button-active"]}`
                : classes["additional-button"]
            }
          >
            Recenzije
          </button>
          <button
            type="button"
            onClick={() => setAdditional("qa")}
            className={
              additional === "qa"
                ? `${classes["additional-button"]} ${classes["additional-button-active"]}`
                : classes["additional-button"]
            }
          >
            Pitanja i odgovori
          </button>
        </div>
        <div
          className={
            additional === "info" ? classes["additional-info"] : "display-none"
          }
        >
          <button className={classes["specification-button"] + " basic-button"}>
            <img
              src={"/images/icons/printer.png"}
              className={classes["specification-button-img"]}
              alt="spec"
            />
            <span>ŠTAMPANJE INFORMACIJA</span>
          </button>
          <table className={classes["additional-info-table"]}>
            <tbody>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Standing screen display size
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  15.6 Inches (39.6 cm)
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Brand
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  MATEIN
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Series
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  131000blk
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Item model number
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  131000BLK
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Item Weight
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  3.64 kg
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Product Dimensions
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  16.7 x 6.7 x 12 Inches (42.4 x 17 x 30.5 cm)
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Item Dimensions LxWxH
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  16.7 x 6.7 x 12 Inches (42.4 x 17 x 30.5 cm)
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Color
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Black
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Department
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Womens
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Manufacturer
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  YoTwo
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  ASIN
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  B08NX8DNZH
                </td>
              </tr>
              <tr className={classes["additional-info-table-tr"]}>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Date First Available
                </td>
                <td
                  className={
                    classes["additional-info-table-td"] + " col-sm-6 col-12"
                  }
                >
                  Match 8, 2021
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classes["suggested"]}>
          <h5>Možda će Vas zanimati</h5>
          <h2>Preporučeni proizvodi</h2>
        </div>
        <div className={classes["connected"]}>
          <div className={classes["connected-products"] + " row"}>
            <div className={classes["box-simple-cols"] + " col-md-3 col-6"}>
              <ProductBoxSimpleSmall />
            </div>
            <div className={classes["box-simple-cols"] + " col-md-3 col-6"}>
              <ProductBoxSimpleSmall />
            </div>
            <div className={classes["box-simple-cols"] + " col-md-3 col-6"}>
              <ProductBoxSimpleSmall />
            </div>
            <div className={classes["box-simple-cols"] + " col-md-3 col-6"}>
              <ProductBoxSimpleSmall />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
