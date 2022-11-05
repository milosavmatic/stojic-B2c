import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import classes from "./Checkbox.module.scss";

function Checkbox() {
  return (
    <>
      <div className={classes["checkbox-holder"]}>
        <InputGroup className={classes["input-group-text"]}>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </InputGroup>
      </div>
    </>
  );
}

export default Checkbox;
