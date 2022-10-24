import classes from "./MobileSearchModal.module.scss";
import { Modal } from "react-bootstrap";

const MobileSearchModal = ({
  openModal,
  handleClose,
  onSearchSubmit,
  onSearchChange,
}) => {
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
          <form onSubmit={(e) => onSearchSubmit(e)}>
            <input
              type="text"
              className={classes["search-input"]}
              placeholder="Pronađite proizvod..."
              onChange={(e) => onSearchChange(e)}
            ></input>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MobileSearchModal;
