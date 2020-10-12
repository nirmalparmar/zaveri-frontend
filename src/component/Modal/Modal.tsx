import React from 'react';
import './modal.css';

const Modal = (props:any) => {
    return(
        <div className={props.show ? "modal-container show" : "modal-container"}>
            <div className="overlay"></div>
            <div className="modal-content">
                <div className="close-btn"><i className="fas fa-times"></i></div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;