import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { SkeletonLoader } from "../components/SkeletonLoader";

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
          <SkeletonLoader />
        </>
      ) : (
        <Container>
          <div className="flex gap-4 justify-center">
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
