import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}
const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    event.stopPropagation();
    const postTitle = prompt();
    const o = { ...post, title: postTitle, body: postTitle } as IPost;
    update(o);
  };

  return (
    <div className="post" key={post.id} onClick={handleUpdate}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;
