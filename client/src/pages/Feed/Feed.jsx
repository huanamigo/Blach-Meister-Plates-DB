import Post from '../../components/Post/Post';
import styles from './Feed.module.scss';

const Feed = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.welcome}>For you (and everyone else)</h2>
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
