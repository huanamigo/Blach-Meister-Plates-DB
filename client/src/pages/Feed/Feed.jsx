import Post from '../../components/Post/Post';
import styles from './Feed.module.scss';

const Feed = () => {
  return (
    <div className={styles.container}>
      <Post />
    </div>
  );
};

export default Feed;
