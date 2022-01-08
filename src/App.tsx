import React, { useEffect } from 'react';
import AppRouter from 'components/utils/AppRouter';
import { useComment, usePost } from 'hooks';
import { useAppDispatch } from 'app/hooks';
import { setUser } from 'features/user/userSlice';
import dayjs from 'dayjs';

function App() {
  const { addPost } = usePost();
  const { addComment, setComment } = useComment();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUser(2));
    addPost('저기 용접하시는 분 뭘까요?', '궁금하네요');
    addPost('투썸 오늘 신기하다;;', 'ㅋㅋㅋ');

    addComment(0, 'ㅋㅋㅋㅋ투썸인가요?');
    addComment(0, '저도 봤습니다 ㅎ', 0);
    addComment(0, '이제 마스크로 바꾸셨네요ㅋㅋㅋ', 0);
    addComment(0, '비밀 댓글입니다.');
    addComment(0, '비밀 댓글입니다.', 3);
    addComment(1, '여긴 댓글이 없네요');
    setComment({ comment_id: 0, user_id: 1 });
    setComment({ comment_id: 1, user_id: 1 });
    setComment({ comment_id: 4, user_id: 1 });
    setComment({ comment_id: 0, created_at: dayjs().subtract(6, 'minute').toString() });
    setComment({ comment_id: 1, created_at: dayjs().subtract(5, 'minute').toString() });
    setComment({ comment_id: 2, created_at: dayjs().subtract(4, 'minute').toString() });
    setComment({ comment_id: 3, created_at: dayjs().subtract(3, 'minute').toString() });
    setComment({ comment_id: 4, created_at: dayjs().subtract(2, 'minute').toString() });
    setComment({ comment_id: 5, created_at: dayjs().subtract(1, 'minute').toString() });
  }, [addComment, addPost, dispatch, setComment]);
  return <AppRouter />;
}

export default App;
