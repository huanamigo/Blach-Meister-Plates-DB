import Post from '../../components/Post/Post';
import styles from './Feed.module.scss';
import { useState } from 'react';

// temp cuz we dont have backend
import data from '../../data.json';
import AddButton from '../../components/AddButton/AddButton';

const Feed = () => {
  const [posts, setPosts] = useState(data);
  return (
    <div className={styles.container}>
      <AddButton />
      <div className={styles.wrapper}>
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
            isDetailed={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
