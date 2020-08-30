import React from 'react';

const IconButton = ({ iconClass, iconUrl, onClick }) => {
    return (
      <div className={iconClass}>

        <img 
          src={iconUrl} 
          alt={iconClass} 
          onClick={onClick}/>
          
      </div>
    );
  }

export default IconButton