import React from 'react'
import { type ButtonProps } from '../../interfaces';


const Button: React.FC<ButtonProps> = ({size, shape}) => {
  return (
    <div style={{ margin: '10px', display: 'inline-block' }}>
      <button className={`${size} ${shape} bg-blue-500 text-white p-2 cursor:pointer`}>
        Click Me
      </button>
    </div>
  )
}

export default Button;
