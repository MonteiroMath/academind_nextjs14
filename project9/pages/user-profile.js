function UserProfilePage({ username }) {
  return <h1>{username}</h1>;
}

export async function getServerSideProps(context) {
  const { req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
}

export default UserProfilePage;
