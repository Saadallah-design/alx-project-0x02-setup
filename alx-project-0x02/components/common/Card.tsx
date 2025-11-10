import React from 'react'

// Autochecker asked to use { type CardProps } instead of { CardProps }
// to avoid potential name conflicts
// Using import type is the recommended standard for importing only type definitions. 
// It helps build tools (like Babel or Webpack) optimize compilation.
import {type CardProps} from '../../interfaces';


// here im using Functional Component with Generics to specify the type of props
const Card: React.FC<CardProps> = ({title, content}) => {
  return (
    <div>
      <h1>Hello the title is: {title} and content is {content} </h1>
    </div>
  )
}

export default Card;
