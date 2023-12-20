import styles from './Post.module.scss';
import moment from 'moment';
import {
  FaHeart,
  FaRegHeart,
  FaRegCommentAlt,
  FaRegShareSquare,
} from 'react-icons/fa';
import { useState } from 'react';

// temp cuz we dont have backend
import photo from '../../photos/1.webp';
import avatar from '../../photos/avatar.webp';
import avatar2 from '../../photos/avatar2.webp';

const Post = () => {
  let createdAt = '2023-12-20T20:21:36.387Z';

  const [liked, setLiked] = useState(false);

  return (
    <div>
      <div className={styles.post}>
        <div className={styles.header}>
          <img src={avatar} alt="random person form tpdne" />
          <p>majki</p>
        </div>
        <div className={styles.photo}>
          <img
            src={photo}
            alt="bardzo przepraszam pana z tego samochodu ale akurat to bylo ostatnie w mojej galerii"
          />
        </div>
        <div className={styles.bottom}>
          {liked ? (
            <FaHeart onClick={() => setLiked(!liked)} />
          ) : (
            <FaRegHeart onClick={() => setLiked(!liked)} />
          )}
          <FaRegCommentAlt />
          <FaRegShareSquare />
          <p className={styles.likedBy}>
            <img src={avatar2} alt="second avatar" />
            <p>
              Liked by <b>Twoja Stara</b> and 2115 others
            </p>
          </p>
          <p className={styles.time}>{moment(createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
