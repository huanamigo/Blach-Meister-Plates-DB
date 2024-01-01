import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './Details.module.scss';
import Post from '../../components/Post/Post';

//temp
import avatar from '../../photos/av1.webp';
import photo from '../../photos/1.webp';
import data from '../../data.json';

const Details = () => {
  const params = useParams();
  const [posts, setPosts] = useState(
    data.filter((post) => post.plate === params.details)
  );
  return (
    <div className={styles.container}>
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
            avatar={`/src/photos/av${post.id}.webp`}
            photo={`/src/photos/${post.id}.webp`}
            isDetailed={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
