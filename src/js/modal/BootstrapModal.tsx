import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './BootstrapModal.css';

const BootstrapModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    const save = () => {};

    // By Using a form library like Formik, you can defer all the state management to it. Formik also includes a resetForm function.
    // You can wait until submission is done before closing the component.
    // Component state is being completely driven by this component
    // By implementing onRequestClose, you can close modal with esc or clicking on overlay with no additional implementation

    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={onClick}>
                Launch My Modal
            </button>

            <ReactModal
                className="modal-dialog"
                isOpen={isOpen}
                closeTimeoutMS={150}
                shouldCloseOnOverlayClick
                shouldCloseOnEsc
                onRequestClose={() => setIsOpen(false)}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal title</h4>
                        <button
                            type="button"
                            className="close"
                            onClick={onClick}
                        >
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h4>Really long content...</h4>
                        <p>
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies
                            eget, tempor sit amet, ante. Donec eu libero sit
                            amet quam egestas semper. Aenean ultricies mi vitae
                            est. Mauris placerat eleifend leo. Quisque sit amet
                            est et sapien ullamcorper pharetra. Vestibulum erat
                            wisi, condimentum sed, commodo vitae, ornare sit
                            amet, wisi. Aenean fermentum, elit eget tincidunt
                            condimentum, eros ipsum rutrum orci, sagittis tempus
                            lacus enim ac dui. Donec non enim in turpis pulvinar
                            facilisis. Ut felis. Praesent dapibus, neque id
                            cursus faucibus, tortor neque egestas augue, eu
                            vulputate magna eros eu erat. Aliquam erat volutpat.
                            Nam dui mi, tincidunt quis, accumsan porttitor,
                            facilisis luctus, metus
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClick}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={save}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
};

const processClick = () => {
    setTimeout(() => {
        $('#testModal').modal('hide');
    }, 3000);
};

export default BootstrapModal;
