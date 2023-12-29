import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { ClipLoader } from "react-spinners";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    appwriteService.getPosts([]).then((posts) => {
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
          <div className="mt-4 w-full">
            <ClipLoader color={"white"} loading={true} size={100} />
          </div>
        </>
      ) : (
        <div className="w-full py-8">
          <Container>
            <div className="flex flex-wrap">
              {posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

export default AllPosts;
