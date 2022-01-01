import React from "react";
import PropTypes from "prop-types";

import TextPreview from "./TextPreview";

const ModalDeleteConfirmation = (props) => {
  const { id, handleDelete, message, previewText } = props;

  const modal_id = "deleteModal-" + id;
  const modal_label_id = "deleteModalLabel-" + id;

  return (
    <div
      className="modal fade"
      id={modal_id}
      tabIndex="-1"
      aria-labelledby={modal_label_id}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id={modal_label_id}>
              Confirmation
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {message}
            {previewText && <TextPreview rawText={previewText} />}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalDeleteConfirmation.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    message: PropTypes.string,
    previewText: PropTypes.string,
  }),
};

export default ModalDeleteConfirmation;
