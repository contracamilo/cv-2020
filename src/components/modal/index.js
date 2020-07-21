import { createPortal } from 'react-dom';



const Modal = ({ component }) => {
    const modalRoot = document.getElementById('modal');
    return createPortal(component,  modalRoot)
}

export default Modal;