import styles from './Post.module.scss';
import moment from 'moment';
import {
  FaHeart,
  FaRegHeart,
  FaRegCommentAlt,
  FaRegShareSquare,
} from 'react-icons/fa';
import { useState } from 'react';
import NavigationLink from '../Navigation/NavigationLink/NavigationLink';

const Post = ({ author, plate, noLikes, name, createdTime, avatar, photo }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <div className={styles.post}>
        <div className={styles.header}>
          <img src={avatar} alt="random person form tpdne" />
          <p>{author}</p>
        </div>
        <div className={styles.photo}>
          <img
            src={photo}
            alt="bardzo przepraszam pana z tego samochodu ale akurat to bylo ostatnie w mojej galerii"
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.wrapper}>
            <div className={styles.share}>
              {liked ? (
                <FaHeart onClick={() => setLiked(!liked)} />
              ) : (
                <FaRegHeart onClick={() => setLiked(!liked)} />
              )}
              <FaRegCommentAlt />
              <FaRegShareSquare />
            </div>
            <div className={styles.category}>
              <NavigationLink name={name} urlName={`plates/${plate}`} />
            </div>
          </div>
          <p className={styles.likedBy}>
            <span>{noLikes} likes</span>
          </p>
          <p className={styles.time}>{moment(createdTime).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
