import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-[600px] bg-slate-300 rounded-lg p-1.5">
        <div className="w-full justify-center mb-2">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-lg "
          />
        </div>
        <div className="flex items-center justify-center">
        <h2 className="text-xl">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
