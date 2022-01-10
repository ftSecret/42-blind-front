import { useAppDispatch, useAppSelector } from 'app/hooks';
import { store } from 'app/store';
import {
  addComment,
  CommentType,
  deleteComment,
  getComment,
  modifyComment,
  setComment,
} from 'features/dummy/dummySlice';
import { useCallback } from 'react';

const create = (post_id: number, content: string, parent_id?: number): CommentType => {
  const comments = store.getState().dummy.comment;
  const post_user_id = store.getState().dummy.post.find((elem) => elem.id === post_id)?.user_id;

  if (post_user_id === undefined) throw new Error('post_user_id는 undefined일 수 없습니다.');

  return {
    comment_id: comments.length === 0 ? 0 : comments[comments.length - 1].comment_id + 1,
    created_at: new Date().toString(),
    user_id: store.getState().user.id,
    post_user_id: post_user_id,
    parent_id: parent_id ?? -1,
    content: content,
    likes: 0,
    post_id,
  };
};

const modify = (comment_id: number, content: string): CommentType => {
  const prevComment = store
    .getState()
    .dummy.comment.find((comment) => comment.comment_id === comment_id);
  if (prevComment) {
    const modifiedComment = { ...prevComment };
    modifiedComment.content = content;
    modifiedComment.modified_at = new Date().toString();
    return modifiedComment;
  }
  return create(-1, content);
};

export const useComment = () => {
  const comments = useAppSelector(getComment);
  const dispatch = useAppDispatch();

  return {
    getComment: useCallback(
      (comment_id: number) => comments.find((comment) => comment.comment_id === comment_id),
      [comments],
    ),
    getComments: useCallback(
      (page: number, size: number) => comments.slice(page * size, (page + 1) * size),
      [comments],
    ),
    getCommentsByPostId: useCallback(
      (post_id: number) => {
        return comments.filter((comment) => comment.post_id === post_id);
      },
      [comments],
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
    setComment: useCallback(
      ({
        post_user_id,
        modified_at,
        created_at,
        comment_id,
        parent_id,
        post_id,
        user_id,
        content,
        likes,
      }: Partial<CommentType>) => {
        if (comment_id === undefined) return;
        const prevComments = [...store.getState().dummy.comment];
        const prevCommentIdx = prevComments.findIndex((elem) => elem.comment_id === comment_id);
        const prevComment = { ...prevComments[prevCommentIdx] };
        if (prevComment === undefined) return;
        if (post_user_id) prevComment.post_user_id = post_user_id;
        if (modified_at) prevComment.modified_at = modified_at;
        if (created_at) prevComment.created_at = created_at;
        if (parent_id) prevComment.parent_id = parent_id;
        if (post_id) prevComment.post_id = post_id;
        if (user_id) prevComment.user_id = user_id;
        if (content) prevComment.content = content;
        if (likes) prevComment.likes = likes;
        prevComments.splice(prevCommentIdx, 1, prevComment);
        dispatch(setComment(prevComments));
      },
      [dispatch],
    ),
  };
};
