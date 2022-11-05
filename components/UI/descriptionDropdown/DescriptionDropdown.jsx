import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap";
import { Card } from "react-bootstrap";
import classes from "./DescriptionDropdown.module.scss";

/**
 * Description dropdown accordion used in single product page of B2C
 *
 * @author Aleksandar Ječmenić <aleksandar.jecmenic@croonus.com>
 */
const CustomToggle = ({ children, eventKey }) => {
  // Decorate accordion
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      className={classes["btn-accordion"]}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

const DescriptionDropdown = ({ children, active, title, className }) => {
  return (
    <div className={`${classes["container"]} ${className}`}>
      <Accordion defaultActiveKey={active ? "0" : ""}>
        <Card className={classes["card"]}>
          <Card.Header className={classes["card-header"]}>
            <CustomToggle eventKey="0">
              {title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 -2 15 15"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={classes["card-body"]}>{children}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default DescriptionDropdown;
