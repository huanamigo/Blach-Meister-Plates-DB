import Post from '../../components/Post/Post';
import styles from './Feed.module.scss';

const Feed = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.welcome}>most recent posts</h1>
      <div className={styles.wrapper}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
