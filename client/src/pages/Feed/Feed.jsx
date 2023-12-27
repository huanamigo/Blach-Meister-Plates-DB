import Post from '../../components/Post/Post';
import styles from './Feed.module.scss';

// temp cuz we dont have backend
import avatar from '../../photos/avatar.webp';
import photo from '../../photos/1.webp';

const Feed = () => {
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.welcome}>For you (and everyone else)</h2> */}
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

        {/* {posts.map((post) => (
          <Post
            author={post.author}
            plate={post.plate}
            noLikes={post.message}
            createdTime={post.createdTime}
            name={post.name}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Feed;
