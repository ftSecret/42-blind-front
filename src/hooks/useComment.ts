import { useAppDispatch, useAppSelector } from 'app/hooks';
import { store } from 'app/store';
import {
  addComment,
  CommentType,
  deleteComment,
  getComment,
  modifyComment,
} from 'features/dummy/dummySlice';
import { useCallback } from 'react';

const create = (post_id: number, content: string, parent_id?: number): CommentType => {
  const comment = store.getState().dummy.comment;
  return {
    comment_id: comment.length === 0 ? 0 : comment[comment.length - 1].comment_id + 1,
    created_at: new Date().toString(),
    user_id: store.getState().user.id,
    content: content,
    parent_id: parent_id ?? -1,
    post_id,
  };
};

const modify = (comment_id: number, content: string): CommentType => {
  const prevComment = store.getState().dummy.comment.find((elem) => elem.comment_id === comment_id);
  if (prevComment) {
    const modifiedComment = { ...prevComment };
    modifiedComment.content = content;
    modifiedComment.modified_at = new Date().toString();
    return modifiedComment;
  }
  return create(-1, content);
};

export const useComment = () => {
  const comment = useAppSelector(getComment);
  const dispatch = useAppDispatch();

  return {
    getComment: useCallback(
      (comment_id: number) => comment.find((elem) => elem.comment_id === comment_id),
      [comment],
    ),
    getComments: useCallback(
      (page: number, size: number) => comment.slice(page * size, (page + 1) * size),
      [comment],
    ),
    addComment: useCallback(
      (post_id: number, content: string, parent_id?: number) =>
        dispatch(addComment(create(post_id, content, parent_id))),
      [dispatch],
    ),
    modifyComment: useCallback(
      (comment_id: number, content: string) => dispatch(modifyComment(modify(comment_id, content))),
      [dispatch],
    ),
    deleteComment: useCallback(
      (comment_id: number) => dispatch(deleteComment(comment_id)),
      [dispatch],
    ),
  };
};
