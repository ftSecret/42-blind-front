import { useAppDispatch, useAppSelector } from 'app/hooks';
import { store } from 'app/store';
import { addPost, deletePost, getPost, modifyPost, setPost } from 'features/dummy/dummySlice';
import { useCallback } from 'react';
import { PostCardType } from 'utils/getDummies';

const create = (title: string, content: string): PostCardType => {
  const post = store.getState().dummy.post;
  return {
    title,
    content,
    count: {
      comments: 0,
      goods: 0,
      views: 0,
    },
    created_at: new Date().toString(),
    post_id: post.length === 0 ? 0 : post[post.length - 1].post_id + 1,
    user_id: store.getState().user.id,
  };
};

const modify = (id: number, title: string, content: string): PostCardType => {
  const prevPost = store.getState().dummy.post.find((elem) => elem.post_id === id);
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
    getPost: useCallback((id: number) => post.find((elem) => elem.post_id === id), [post]),
    getPosts: useCallback(
      (page: number, size: number) => post.slice(page * size, (page + 1) * size),
      [post],
    ),
    addPost: useCallback((title, content) => dispatch(addPost(create(title, content))), [dispatch]),
    modifyPost: useCallback(
      (id: number, title: string, content: string) =>
        dispatch(modifyPost(modify(id, title, content))),
      [dispatch],
    ),
    deletePost: useCallback((id: number) => dispatch(deletePost(id)), [dispatch]),
    setPost: useCallback((data: PostCardType[]) => dispatch(setPost(data)), [dispatch]),
  };
};
