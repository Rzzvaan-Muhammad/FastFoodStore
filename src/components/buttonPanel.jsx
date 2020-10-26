/* eslint-disable no-return-assign */
import React, { useState } from "react";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ButtonGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faFileDownload,
  faEye,
  faFileExport
} from "@fortawesome/free-solid-svg-icons";
import TranslateText from "../common/translateText";

const ButtonPanel = ({
  id,
  onAdd,
  onView,
  onEdit,
  onDelete,
  onExport,
  onDownload,
  onTrackChanges,
  show,
  Download
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonGroup className="float-right">
        {show === "false" && (
          <Button outline onClick={() => onAdd()} hidden={id > 0}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        )}
        <ButtonDropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
          <DropdownToggle disabled={id < 0} outline caret>
            <TranslateText defaultText="More" resourceId="lbl_More" />
          </DropdownToggle>
          <DropdownMenu>
            {show === "false" && (
              <DropdownItem onClick={() => onEdit(id)} disabled={id < 0}>
                <FontAwesomeIcon icon={faEdit} className="mr-3" />
                <TranslateText defaultText="Edit" resourceId="lbl_Edit" />
              </DropdownItem>
            )}

            {show === "false" && (
              <DropdownItem onClick={() => onView(id)} disabled={id < 0}>
                <FontAwesomeIcon icon={faEye} className="mr-3" />
                <TranslateText defaultText="View" resourceId="lbl_View" />
              </DropdownItem>
            )}

            {Download && (
              <DropdownItem onClick={() => onDownload(id)} disabled={id < 0}>
                <FontAwesomeIcon icon={faFileDownload} className="mr-3" />
                <TranslateText
                  defaultText="Download"
                  resourceId="lbl_Download"
                />
              </DropdownItem>
            )}
            {
              (show = "false" && (
                <DropdownItem onClick={() => onDelete(id)} disabled={id < 0}>
                  <FontAwesomeIcon icon={faTrash} className="mr-3" />
                  <TranslateText defaultText="Delete" resourceId="lbl_Delete" />
                </DropdownItem>
              ))
            }

            <DropdownItem divider />
            {show === "false" && (
              <DropdownItem onClick={() => onExport(id)} disabled={id < 0}>
                <FontAwesomeIcon icon={faFileExport} className="mr-3" />
                <TranslateText defaultText="Export" resourceId="lbl_Export" />
              </DropdownItem>
            )}

            {show === "false" && (
              <DropdownItem
                onClick={() => onTrackChanges(id)}
                disabled={id < 0}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-3" />
                <TranslateText
                  defaultText="Track Changes"
                  resourceId="lbl_Track_Changes"
                />
              </DropdownItem>
            )}
          </DropdownMenu>
        </ButtonDropdown>
      </ButtonGroup>
    </>
  );
};

export default ButtonPanel;
