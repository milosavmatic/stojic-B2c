import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Checkbox from "../Checkbox";
import classes from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={`${classes["filters-holder"]}`}>
      <div className={`${classes["reset-filters"]}`}>
        <p>
          Resetuj filtere <span>X</span>
        </p>
      </div>
      <div className={`${classes["filters"]}`}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item
            eventKey="0"
            className={`${classes["custom-accordion"]}`}
          >
            <Accordion.Header className={`${classes["custom-header"]}`}>
              <p>Brand</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Canon</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>HP</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Lg</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Samsung</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Philips</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className={`${classes["custom-accordion"]}`}
          >
            <Accordion.Header>
              <p>Tip</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Laserski štampač</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>InkJet štampač</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Mono laserski štampač</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Matrični štampač</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Štampač</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Štampač fotografija</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Elekrofotografski štampač</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Elekrofotografski laserski štampač</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Termalni štampač</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            className={`${classes["custom-accordion"]}`}
          >
            <Accordion.Header>
              <p>Rezolucija boja</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>4800 x 1200 dpi</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>5760 x 1440 dpi</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>600 x 600 dpi</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="4"
            className={`${classes["custom-accordion"]}`}
          >
            <Accordion.Header>
              <p>Boja</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Crna</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Roze</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Crvena</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Bela</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Amsterdam</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Lavanda</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Ciklama</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Bez</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Amsterdam</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Lavanda</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>Ciklama</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="5"
            className={`${classes["custom-accordion"]}`}
          >
            <Accordion.Header>
              <p>Memorija</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>256mb</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>128mb</p>
              </div>
              <div className={`${classes["checkbox-holder"]}`}>
                <Checkbox></Checkbox>
                <p>32mb</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Filters;
