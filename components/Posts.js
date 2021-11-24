import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'letsssgoooo',
    userImage: ' https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'creating the instaaaaaaaa',
  },
  {
    id: '123',
    username: 'letsssgoooo',
    userImage: ' https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'creating the instaaaaaaaa',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
