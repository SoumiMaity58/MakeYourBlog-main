import React, {useState, useEffect}  from "react";
import appwriteService from "../appwrite/config";
import { PostCard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([])
  useEffect(() => {}, [])
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  })
  return (
    <div className="w-full py-8">
        <div className="pl-[25%]">
          {posts.map((post) => (
            <div key={post.$id} className="p-3">
              <PostCard {...post} />
            </div>
          ))}
        </div>
    </div>
  );
}

export default AllPost;
