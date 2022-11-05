import classes from "./MobileAdditionalModal.module.scss";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
const MobileAdditionalModal = ({ openModal, handleClose, logOut }) => {
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <>
      <Modal
        className={classes["modal"]}
        show={openModal}
        fullscreen={true}
        onHide={handleClose}
      >
        <Modal.Header closeButton className={classes["modal-head"]}>
          <img
            src={"/images/logo/logo-s.png"}
            alt="logo"
            className={classes["logo"]}
          />
        </Modal.Header>
        <Modal.Body className={classes["modal-body"]}>
          <ul className={classes["categories-overlay-list"]}>
            <li className={classes["categories-overlay-list-item"]}>
              <Link onClick={handleClose} href="/akcije">
                Akcije
              </Link>
            </li>
            <li className={classes["categories-overlay-list-item"]}>
              <Link onClick={handleClose} href="/novosti">
                Novosti
              </Link>
            </li>
            <li className={classes["categories-overlay-list-item"]}>
              <Link onClick={handleClose} href="/nacini-placanja">
                Načini plaćanja
              </Link>
            </li>
            <li className={classes["categories-overlay-list-item"]}>
              <Link onClick={handleClose} href="/blog">
                Blog
              </Link>
            </li>
            <li className={classes["categories-overlay-list-item"]}>
              <Link onClick={handleClose} href="/b2b">
                B2B
              </Link>
            </li>
            <li className={classes["categories-overlay-list-item"]}>
              <Link onClick={handleClose} href="/kontakt">
                Kontakt
              </Link>
            </li>
            <li className={classes["categories-overlay-list-item"]}>
              <Link onClick={handleClose} href="/prodavnice">
                Prodavnice
              </Link>
            </li>
            <li className={classes["categories-overlay-list-item"]}>
              <Link onClick={handleClose} href="/registracija">
                Registracija / Logovanje
              </Link>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MobileAdditionalModal;
