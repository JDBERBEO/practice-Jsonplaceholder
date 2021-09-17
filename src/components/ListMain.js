import React from 'react';
import axios from 'axios';

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
        setPosts('data: ', data)
      } catch (error) {
          console.log('error', error)
      }
    }
  }, []);

  return (
    <div>
      
      
    </div>
  )
}
