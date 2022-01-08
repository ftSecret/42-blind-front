import React, { useEffect } from 'react';
import AppRouter from 'components/utils/AppRouter';
import { useComment, usePost } from 'hooks';
import { useAppDispatch } from 'app/hooks';
import { setUser } from 'features/user/userSlice';

function App() {
  const { addPost } = usePost();
  const { addComment, setComment } = useComment();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUser(1));
    addPost('저기 용접하시는 분 뭘까요?', '궁금하네요');
    addPost('투썸 오늘 신기하다;;', 'ㅋㅋㅋ');
    addComment(0, '댓글입니다. 1');
    addComment(0, '답글입니다. 2', 0);
    addComment(0, '답글입니다. 3', 0);
    addComment(0, '댓글입니다. 4');
    addComment(0, '답글입니다. 5', 3);
    setComment({ comment_id: 0, user_id: 2 });
    setComment({ comment_id: 1, user_id: 2 });
    setComment({ comment_id: 4, user_id: 2 });
  }, [addComment, addPost, dispatch, setComment]);
  return <AppRouter />;
}

export default App;
