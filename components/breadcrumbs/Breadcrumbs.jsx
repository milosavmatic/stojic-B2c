import React from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import classes from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  return (
    <div className={classes["container"]}>
      <div className={`${classes["breadcrumbs-holder"]}`}>
        <ul>
          <li>
            <Link href={"#"} className={`${classes["breadcrumbs-link"]}`}>
              Početna
            </Link>
          </li>
          <li>
            <Link href={"#"} className={`${classes["breadcrumbs-link"]}`}>
              LaserJet
            </Link>
          </li>
          <li>
            <Link href={"#"} className={`${classes["breadcrumbs-link"]}`}>
              Canon LaserJet Pro
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
