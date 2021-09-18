import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { data } from 'browserslist';
import { post } from 'request';


export const ListMain = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await axios ({
          method: 'GET',
          baseURL: process.env.REACT_APP_BASE_URL,
          url: '/posts',
        })
        console.log('data', data)
        setPosts(data)
      } catch (error) {
          console.log('error', error)
      }
    }
  getPost()
  }, []);

  return (
    <div>
      {!!posts && posts.length > 0 && posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      )) 
      }
    </div>
  )
}
