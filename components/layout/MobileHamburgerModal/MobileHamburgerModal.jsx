import classes from "./MobileHamburgerModal.module.scss";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
const MobileHamburgerModal = ({ openModal, handleClose, logOut }) => {
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
              <Link href="/blog">Blog</Link>
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Laptop računari
            </li>
            <li
              onClick={() => setActiveCategory("racunari")}
              className={classes["categories-overlay-list-item"]}
            >
              Računari i komponente
            </li>
            <ul
              className={
                activeCategory === "racunari"
                  ? classes["subcategories-overlay-list"]
                  : "display-none"
              }
            >
              <li className={classes["subcategories-overlay-list-item"]}>
                Hello
              </li>
              <li className={classes["subcategories-overlay-list-item"]}>
                World
              </li>
            </ul>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Oprema za računare
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Gaming
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              TV, audio, video
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Mobilni telefoni i tableti
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Bela tehnika
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Laptop računari
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Računari i komponente
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Oprema za računare
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Gaming
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              TV, audio, video
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Mobilni telefoni i tableti
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Bela tehnika
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Laptop računari
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Računari i komponente
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Oprema za računare
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Gaming
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              TV, audio, video
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Mobilni telefoni i tableti
            </li>
            <li
              onClick={() => setActiveCategory("")}
              className={classes["categories-overlay-list-item"]}
            >
              Bela tehnika
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MobileHamburgerModal;
