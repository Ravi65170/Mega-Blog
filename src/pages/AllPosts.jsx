import { useState, useEffect } from "react";
import { PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { SkeletonLoader } from "../components/SkeletonLoader";

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
          <SkeletonLoader />
        </>
      ) : (
        <div className="flex gap-4 justify-center">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllPosts;
