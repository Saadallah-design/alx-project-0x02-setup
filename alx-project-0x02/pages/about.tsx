import React from 'react'
import Button from '@/components/common/Button';
import { type ButtonProps } from '../interfaces';

const about = () => {
  return (
    <main>
      <h1>About Page</h1>
      <div>
        <Button size='small' shape='rounded-sm' />
        <Button size='medium' shape='rounded-md' />
        <Button size='large' shape='rounded-full' />
      </div>
    </main>
  )
}

export default about;
