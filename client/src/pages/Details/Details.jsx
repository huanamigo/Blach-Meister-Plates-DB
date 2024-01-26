import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './Details.module.scss';
import Post from '../../components/Post/Post';

//temp
import data from '../../data.json';

const Details = () => {
  const params = useParams();
  const [posts, setPosts] = useState(
    data.filter((post) => post.plate === params.details)
  );
  return (
    <div className={styles.container}>
      {posts < 1 ? (
        <div className={styles.wrapper}>
          <h1>There's no post with this plate</h1>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <h1>{posts[0].name}</h1>
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

export default Details;
