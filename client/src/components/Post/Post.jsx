import styles from './Post.module.scss';

// temp cuz we dont have backend
import photo from '../../photos/1.webp';
import avatar from '../../photos/avatar.webp';

const Post = () => {
  return (
    <div>
      <div className={styles.post}>
        <div className={styles.header}>
          <img src={avatar} alt="random person form tpdne" />
        </div>
        <div className={styles.photo}>
          <img
            src={photo}
            alt="bardzo przepraszam pana z tego samochodu ale akurat to bylo ostatnie w mojej galerii"
          />
        </div>
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
