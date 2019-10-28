// src/components/DisplayEmployee.js
import React from 'react';

function DisplayEmployee({ employee }) {
  return (
    <div className="DisplayEmployee">
      <img src={employee.image}/>
        <p>{employee.quote}</p>
        <p>{employee.character}</p>
      
     
    </div>
  );
};

export default DisplayEmployee;