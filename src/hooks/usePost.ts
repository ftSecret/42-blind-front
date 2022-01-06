import { useAppDispatch, useAppSelector } from 'app/hooks';
import { store } from 'app/store';
import { addPost, deletePost, getPost, modifyPost } from 'features/dummy/dummySlice';
import { useCallback } from 'react';
import { PostCardType } from 'utils/getDummies';

const create = (title: string, content: string): PostCardType => {
  const post = store.getState().dummy.post;
  return {
    title,
    content,
    count: {
      comments: 0,
      likes: 0,
      views: 0,
    },
    created_at: new Date().toString(),
    post_id: post.length === 0 ? 0 : post[post.length - 1].post_id + 1,
    user_id: store.getState().user.id,
  };
};

const modify = (post_id: number, title: string, content: string): PostCardType => {
  const prevPost = store.getState().dummy.post.find((elem) => elem.post_id === post_id);
  if (prevPost) {
    const modifiedPost = { ...prevPost };
    modifiedPost.title = title;
    modifiedPost.content = content;
    modifiedPost.modified_at = new Date().toString();
    return modifiedPost;
  }
  return create(title, content);
};

export const usePost = () => {
  const post = useAppSelector(getPost);
  const dispatch = useAppDispatch();

  return {
    getPost: useCallback(
      (post_id: number) => post.find((elem) => elem.post_id === post_id),
      [post],
    ),
    getPosts: useCallback(
      (page: number, size: number) => post.slice(page * size, (page + 1) * size),
      [post],
    ),
    addPost: useCallback((title, content) => dispatch(addPost(create(title, content))), [dispatch]),
    modifyPost: useCallback(
      (post_id: number, title: string, content: string) =>
        dispatch(modifyPost(modify(post_id, title, content))),
      [dispatch],
    ),
    deletePost: useCallback((post_id: number) => dispatch(deletePost(post_id)), [dispatch]),
  };
};
