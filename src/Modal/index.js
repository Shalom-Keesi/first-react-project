import React from "react";


// const Modal=({setModalIsOpen})=>{

//     const handleLoginClick = () => {
//       setModalIsOpen(true)
//     }
  
//     return (
//       <div>
//         <h1>Login to view your details</h1>
//         <button className="login-button" onClick={handleLoginClick}>Login</button>
//       </div>
  
//     );
    
//   };

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
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
    
    >
       <div
                onClick={handleContentClick}
                style={{
                    background: "white",
                    height: 300,
                    width: 640,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                {children}
            </div>
      

    </div>
  )
}
export default Modal;