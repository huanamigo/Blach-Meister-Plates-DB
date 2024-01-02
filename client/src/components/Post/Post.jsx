import styles from './Post.module.scss';
import moment from 'moment';
import {
  FaHeart,
  FaRegHeart,
  FaRegCommentAlt,
  FaRegShareSquare,
} from 'react-icons/fa';
import { useState } from 'react';
import PlatesLink from '../../pages/Plates/PlatesLink/PlatesLink';

const Post = ({
  author,
  plate,
  noLikes,
  name,
  createdTime,
  avatar,
  photo,
  isDetailed,
}) => {
  const [liked, setLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(noLikes);

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
                <FaHeart
                  onClick={() => {
                    setLiked(!liked);
                    setLocalLikes(localLikes - 1);
                  }}
                />
              ) : (
                <FaRegHeart
                  onClick={() => {
                    setLiked(!liked);
                    setLocalLikes(localLikes + 1);
                  }}
                />
              )}
              <FaRegCommentAlt />
              <FaRegShareSquare />
            </div>
            <div className={styles.category}>
              {isDetailed ? (
                <></>
              ) : (
                <PlatesLink name={name} urlName={`plates/${plate}`} />
              )}
            </div>
          </div>
          <p className={styles.likedBy}>
            <span>{localLikes} likes</span>
          </p>
          <p className={styles.time}>{moment(createdTime).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
