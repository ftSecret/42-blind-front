import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from 'utils/formatDate';
import { getDummies } from 'utils/getDummies';
import userImage from 'assets/images/user.png';
import Status from 'components/Status/Status';
import styled from 'styled-components';
import { flexColumn, flexRow } from 'styles/mixin';
import Button from 'components/Button/Button';
import { postDetailButton } from 'components/Comment/Comment';

type PostTypes = {
  id: number | null;
  title: string;
  content: string;
  created_at: Date | null;
  views: number;
  likes: number;
  comments: number;
};

const PostDetail = () => {
  const [detail, setDetail] = useState<PostTypes>({
    id: null,
    title: '',
    content: '',
    created_at: null,
    views: 0,
    likes: 0,
    comments: 0,
  });
  const { postId } = useParams();

  useEffect(() => {
    //id로 데이터 가져오는 로직
    const datas = getDummies();
    const temp = datas.find((data) => {
      if (`${data.id}` === postId) return true;
      return false;
    });
    const { id, title, content, created_at, views, likes, comments } = temp as PostTypes;
    setDetail({ id, title, content, created_at, views, likes, comments });
  }, [postId]);

  return (
    <StyledDetail>
      <StyledProfile>
        <StyledUserImage>
          <img alt="user" width="50" height="50" src={userImage} />
        </StyledUserImage>
        <StyledProfileInfo>
          <h2>익명</h2>
          <h3>{formatDate(detail.created_at!)}</h3>
        </StyledProfileInfo>
      </StyledProfile>
      <h1>{detail.title}</h1>
      <h1>{detail.content}</h1>
      <Status comments={detail.comments} views={detail.views} likes={detail.likes} />
      <StyledGoodWrap>
        <Button label="좋아요" />
      </StyledGoodWrap>
    </StyledDetail>
  );
};

export default PostDetail;

const StyledDetail = styled.div`
  ${flexColumn}
  gap: 0.5em;
  padding: 0.5em 0;
  border-bottom: 1px solid var(--grey-color);
  color: ${({ theme }) => theme.colors.default};
`;

const StyledProfile = styled.div`
  ${flexColumn}
  gap: 1em;
`;

const StyledProfileInfo = styled.div`
  text-align: left;
  & > h2 {
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  & > h3 {
    color: var(--grey-color);
  }
`;

const StyledUserImage = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

const StyledGoodWrap = styled.div`
  ${flexRow}
  justify-content: flex-end;
  width: 100%;

  & > button {
    ${postDetailButton}
  }
`;
