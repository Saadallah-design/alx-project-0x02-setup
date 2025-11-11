import React from 'react'
import { type PostProps } from '../../interfaces';

// the component should be used only to display individual post details
// first I tried to fetch post data here but then I realized it's better to pass post data as props from parent component


const PostCard : React.FC<PostProps> = ({title, content, userId}) => {
  return (
    <div>
      <h1>Post Card Component</h1>
      <h2>Title: {title}</h2>
      <p>Content: {content}</p>
      <p>User ID: {userId}</p>
    </div>
  )
}

export default PostCard
