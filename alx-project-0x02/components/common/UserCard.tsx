import React from 'react'
import { type UserProps } from '@/interfaces';
import { type addressProps } from '@/interfaces';

const UserCard : React.FC<UserProps> = ({name, email, address}) => {
  return (
    <div>
      <h1>User Card Component</h1>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Address: {address.street}, {address.city}</p>
    </div>
  )
}

export default UserCard
