import React from "react";
import './index.css'


const Modal = ({isOpen, onClose, children}) =>{
  if (!isOpen) return null;

  const handleOverlayClick =(event)=>{
    event.stopPropagation();
    onClose();

  };

  const handleContentClick = (event)=>{
    event.stopPropagation();
  }
  
  return (
    <div 
    onClick={handleOverlayClick}
    className="modal">
       <div
                onClick={handleContentClick}
                className="login-popUp"

            >
                {children}
            </div>
      

    </div>
  )
}
export default Modal;