import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Filters from "../../components/filters/Filters";
import classes from "../../components/assets/css/CategoriesPage.module.scss";
import Accordion from "react-bootstrap/Accordion";
import ProductBoxComplexSmall from "../../components/products/productBoxComplexSmall/ProductBoxComplexSmall";

const CategoriesPage = () => {
  return (
    <div className={`${classes.categoriespage}`}>
      <div className="container">
        <Breadcrumbs />
        <div className={`${classes.title}`}>
          <h5>Naziv kategorije</h5>
        </div>
        <div className={`${classes["mobile-display"]}`}>
          <Accordion className={`${classes["filters-mobile-holder"]}`}>
            <Accordion.Item eventKey="0">
              <Accordion.Header
                className={`${classes["mobile-filters-heading"]}`}
              >
                Filteri
              </Accordion.Header>
              <Accordion.Body>
                <Filters />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-3 col-12">
            <div className={`${classes["desktop-display"]}`}>
              <Filters />
            </div>
          </div>
          <div
            className={
              classes["right-side-container"] +
              " col-xl-9 col-lg-9 col-12 col-sm-12 col-xs-12"
            }
          >
            <div className={classes["controls"] + " row"}>
              <div
                className={
                  classes["number-of-products"] +
                  " col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12"
                }
              >
                <span>8 Proizvoda</span>
              </div>
              <div
                className={
                  classes["sort-container"] +
                  " col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"
                }
              >
                <span>Sortiraj:</span>
                <span>
                  <select name="cars" id="cars" className={classes["select"]}>
                    <option
                      value=""
                      selected
                      disabled
                      hidden
                      className={`${classes["sort-title"]}`}
                    >
                      Sortirajte
                    </option>
                    <option value="volvo">Akcija</option>
                    <option value="saab">Cena rastuće</option>
                    <option value="mercedes">Cena opadajuće</option>
                    <option value="audi">Novo</option>
                  </select>
                </span>
              </div>
              <div
                className={
                  classes["products-per-page"] +
                  " col-xl-5 col-lg-5 col-md-3 col-sm-6 col-6"
                }
              >
                <span>Prikaži:</span>
                <span className={classes["select-span"]}>
                  <select name="cars" id="cars" className={classes["select"]}>
                    <option value="volvo">4</option>
                    <option value="saab">8</option>
                    <option value="mercedes">12</option>
                    <option value="audi">24</option>
                    <option value="audi">36</option>
                  </select>
                </span>
                <span>po strani</span>
              </div>
              <div className={classes["product-row"] + " row"}>
                <div
                  className={
                    classes["product-col"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12"
                  }
                >
                  <ProductBoxComplexSmall img="1" />
                </div>
                <div
                  className={
                    classes["product-col"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12"
                  }
                >
                  <ProductBoxComplexSmall img="2" />
                </div>
                <div
                  className={
                    classes["product-col"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12"
                  }
                >
                  <ProductBoxComplexSmall img="3" />
                </div>
                <div
                  className={
                    classes["product-col"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12"
                  }
                >
                  <ProductBoxComplexSmall img="4" />
                </div>
                <div
                  className={
                    classes["product-col"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12"
                  }
                >
                  <ProductBoxComplexSmall img="2" />
                </div>
                <div
                  className={
                    classes["product-col"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12"
                  }
                >
                  <ProductBoxComplexSmall img="3" />
                </div>
                <div
                  className={
                    classes["product-col"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12"
                  }
                >
                  <ProductBoxComplexSmall img="4" />
                </div>
                <div
                  className={
                    classes["product-col"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12"
                  }
                >
                  <ProductBoxComplexSmall img="2" />
                </div>
                <div
                  className={
                    classes["product-col"] +
                    " col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12"
                  }
                >
                  <ProductBoxComplexSmall img="1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
