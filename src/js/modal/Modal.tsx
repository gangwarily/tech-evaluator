import React from 'react';

const Modal = () => (
    <div>
        <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#testModal"
        >
            Launch demo modal
        </button>

        <div
            className="modal fade"
            id="testModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={processClick}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const processClick = () => {
    setTimeout(() => {
        $('#testModal').modal('hide');
    }, 3000);
};

export default Modal;
