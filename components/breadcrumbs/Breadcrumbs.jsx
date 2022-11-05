import Link from "next/link";
import React from "react";
import classes from "./Breadcrumbs.module.scss";

const Breadcrumbs = ({ crumbs = [] }) => {
  return (
    <div className="container">
      <div className={`${classes["breadcrumbs-holder"]}`}>
        <ul>
          {crumbs.map((item, index) => (
            <li key={index}>
              <Link href={item?.path ?? ""}>
                <a className={`${classes["breadcrumbs-link"]}`}>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
