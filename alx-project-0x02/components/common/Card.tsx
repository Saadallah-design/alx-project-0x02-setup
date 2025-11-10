import React from 'react'

import CardProps from '../../interfaces';


// here im using Functional Component with Generics to specify the type of props
const Card: React.FC<CardProps> = ({title, content}) => {
  return (
    <div>
      <h1>Hello the title is: {title} and content is {content} </h1>
    </div>
  )
}

export default Card;
