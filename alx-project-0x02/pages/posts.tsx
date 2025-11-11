import Header from '@/components/layout/Header';
import React from 'react'
import PostCards from '@/components/common/PostCard';
// import { type PostsPageProps } from '@/interfaces';
import { GetStaticProps } from 'next';
import { type PostProps } from '@/interfaces';


interface PostsPageProps {
  posts: PostProps[];
}




const Posts: React.FC<PostsPageProps> = ({posts}) => {
  return (
    <div>
        <h1>Blog Posts</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {posts.map((post) => (
          <PostCards key={post.id} title={post.title} content={post.body} userId={post.userId} />
        ))}
        </div>
    </div>
  )
}

export default Posts;

export const getStaticProps: GetStaticProps<PostsPageProps> = async (context) => {
    try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        throw new Error('Failed to fetch posts');
    }
    const postData: PostProps[] = await res.json();
    const posts = postData.slice(0,3);

    return {
        props: {
            posts,
        },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    }
    };
};