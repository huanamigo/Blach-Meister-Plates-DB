import styles from './Post.module.scss';
const Post = () => {
  return (
    <div>
      <div className={styles.post}>
        <div className={styles.header}>name and title</div>
        <div className={styles.photo}>photo</div>
        <div className={styles.bottom}>
          <i>like</i>
          <i>comment</i>
          <i>share</i>
        </div>
      </div>
    </div>
  );
};

export default Post;
