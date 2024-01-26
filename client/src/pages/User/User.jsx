import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './User.module.scss';
import Post from '../../components/Post/Post';

//temp
import data from '../../data.json';

const User = () => {
  const params = useParams();
  const [posts, setPosts] = useState(
    data.filter((post) => post.author === params.username)
  );
  return (
    <div className={styles.container}>
      {posts < 1 ? (
        <div className={styles.wrapper}>
          <h1>This user has no posts!</h1>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <h1>{posts[0].author}'s posts</h1>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              plate={post.plate}
              noLikes={post.noLikes}
              createdTime={post.createdTime}
              name={post.name}
              photoId={post.id}
              isDetailed={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
