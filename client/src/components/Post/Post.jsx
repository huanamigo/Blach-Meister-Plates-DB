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
import photos from '../Photos/Photos';
import { useInView } from 'react-intersection-observer';

const Post = ({
  author,
  plate,
  noLikes,
  name,
  createdTime,
  photoId,
  isDetailed,
}) => {
  const [liked, setLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(noLikes);
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${styles.post} ${inView ? `${styles.animation1}` : null}`}
    >
      <div className={styles.header}>
        <img src={photos.avatars[photoId - 1]} alt="random person form tpdne" />
        <p>
          {isDetailed ? (
            <span className={styles.username}>{author}</span>
          ) : (
            <PlatesLink
              name={author}
              urlName={`user/${author}`}
              isUser={true}
            />
          )}
        </p>
      </div>
      <div className={styles.photo}>
        <img
          src={photos.photos[photoId - 1]}
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
              <PlatesLink
                name={name}
                urlName={`plates/${plate}`}
                isUser={true}
              />
            )}
          </div>
        </div>
        <p className={styles.likedBy}>
          <span>{localLikes} likes</span>
        </p>
        <p className={styles.time}>{moment(createdTime).fromNow()}</p>
      </div>
    </div>
  );
};

export default Post;
