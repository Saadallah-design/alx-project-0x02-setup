import Card from '@/components/common/Card';
import React from 'react'

const home = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <div>
        {/* using the CardProps */}
        <Card title="Alx Project 0x02." content="This project is about using react reusable components and props." />
        <h2></h2>
      </div>

    </main>

  )
}

export default home;
