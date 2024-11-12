import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header 
      className="text-center py-4" 
      style={{ 
        position: 'relative', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', 

        color: '#fff', 
        zIndex: 0 
      }}
    >
      <img
        className="mb-0" 
       src='https://heartitout.in/home-new/assets/images/Hio-header-images/heart-it-out-logo.svg'


        style={{ 
        
          position: 'absolute', 
          top: '50%',
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          zIndex: 1, 
         
        }}
     />
      
    </header>
  );
};

export default Header;
