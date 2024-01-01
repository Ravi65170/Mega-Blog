/* eslint-disable react/prop-types */
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className="rounded-xl"
        style={{ width: "300px", height: "420px", backgroundColor: "white" }}
      >
        <div style={{ width: "100%", height: "90%", overflow: "hidden" }}>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              padding: "16px",
              borderRadius: "30px",
            }}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
