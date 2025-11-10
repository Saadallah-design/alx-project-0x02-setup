import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <h1>Header Section</h1>
      <ul>
        <li>
        <Link href="/home">Home</Link>
        </li>
        <li>
        <Link href="/about">About</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Header
