import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { ClipLoader } from "react-spinners";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    appwriteService.getPosts().then((posts) => {
      if (posts.total) {
        setPosts(posts.documents);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      {loading ? (
        <>
          {" "}
          <div className="mt-4 w-full">
            <ClipLoader color={"white"} loading={true} size={100} />
          </div>
        </>
      ) : (
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}

export default Home;
