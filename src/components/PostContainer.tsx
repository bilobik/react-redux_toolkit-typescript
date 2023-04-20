import React, { useState } from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer: React.FC = () => {
  const [limit] = useState(150);
  const {
    data: posts,
    isLoading,
    error,
  } = postApi.useFetchAllPostsQuery(limit);

  const [createPost, { error: createPostError, isLoading: isPostCreating }] =
    postApi.useCreatePostMutation({});
  const [updatePost, { error: updatePostError, isLoading: isPostUpdating }] =
    postApi.useUpdatePostMutation({});
  const [deletePost, { error: deletePostError, isLoading: isPostDeleting }] =
    postApi.useDeletePostMutation({});

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add Post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{JSON.stringify(error)}</h1>}
        {posts?.map((post) => (
          <PostItem post={post} update={handleUpdate} remove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
