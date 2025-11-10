import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import React from 'react'
import Posts from './posts';

const home = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <div>
        {/* using the CardProps */}
        <Card title="Alx Project 0x02." content="This project is about using react reusable components and props." />
        <PostModal />
        <Posts />

      </div>

    </main>

  )
}

export default home;
