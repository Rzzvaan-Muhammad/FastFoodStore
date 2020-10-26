import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SensitivieContent from "./mealItemSensitivityNewList";

const CustomeModal = props => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>ALLERGEN INFORMATION</ModalHeader>
        <ModalBody>
          {/* <b>
            <Row>
              {Allergens.map(item => (
                <Col key={item.Id}>{item.SensitiveItem}</Col>
              ))}
            </Row>
          </b> */}
          <SensitivieContent
            MealBoxItems={props.MealBoxItems}
            ItemId={props.Id}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomeModal;
