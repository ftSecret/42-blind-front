import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';
import Status from 'components/molecules/Status/Status';
import styled from 'styled-components';
import { flexColumn, flexRow } from 'styles/mixin';
import Button from 'components/atoms/Button/Button';
import { postDetailButton } from 'components/molecules/Comment/Comment';
import { useState } from 'react';
import { PostCardType } from 'utils/getDummies';

const PostDetail = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState<PostCardType>({
    post_id: -1,
    user_id: -1,
    title: '',
    content: '',
    created_at: new Date(),
    count: {
      views: 0,
      likes: 0,
      comments: 0,
    },
  });
  // const { postId } = useParams();

  // useEffect(() => {
  //   //id로 데이터 가져오는 로직
  //   const datas = getDummies();
  //   const temp = datas.find((data) => {
  //     if (`${data.post_id}` === postId) return true;
  //     return false;
  //   });
  //   const { post_id, title, content, created_at, count } = temp as PostCardType;
  //   setDetail({ post_id, title, content, created_at, count });
  // }, [postId]);

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
      <Status count={detail.count} />
      <StyledGoodWrap>
        <Button children="좋아요" />
      </StyledGoodWrap>
    </StyledDetail>
  );
};

export default PostDetail;

const StyledDetail = styled.div`
  ${flexColumn}
  gap: 0.5em;
  padding: 0.5em;
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
