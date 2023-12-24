import Post from '../../components/Post/Post';
import styles from './Feed.module.scss';

// temp cuz we dont have backend
import avatar from '../../photos/avatar.webp';
import photo from '../../photos/1.webp';

const Feed = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.welcome}>For you (and everyone else)</h2>
      <div className={styles.wrapper}>
        <Post
          author="Majki"
          plate="RLA"
          noLikes={2115}
          name="Powiat Łańcucki"
          createdTime="2023-12-20T20:21:36.387Z"
          avatar={avatar}
          photo={photo}
        />
        <Post
          author="Mój stary"
          plate="SZY"
          noLikes={2137}
          name="Powiat Żywiecki"
          createdTime="2023-12-24T10:10:36.387Z"
          avatar={avatar}
          photo={photo}
        />
        <Post
          author="Twój stary"
          plate="SBI"
          noLikes={420}
          name="Powiat Bielsko"
          createdTime="2023-12-20T22:21:36.387Z"
          avatar={avatar}
          photo={photo}
        />
      </div>
    </div>
  );
};

export default Feed;
