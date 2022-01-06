import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';
import Status from 'components/molecules/Status/Status';
import styled from 'styled-components';
import { flexColumn, flexRow, postDetailButton } from 'styles/mixin';
import Button from 'components/atoms/Button/Button';
import { useEffect, useState } from 'react';
import { getDummies, PostCardType } from 'utils/getDummies';
import { useParams } from 'react-router-dom';
import Typography from 'components/atoms/Typography';
import { useAppSelector } from 'app/hooks';
import { selectUserId } from 'features/user/userSlice';

const PostDetail = () => {
  const [post, setPost] = useState<PostCardType>({
    post_id: -1,
    user_id: -1,
    title: '',
    content: '',
    created_at: new Date().toString(),
    count: {
      views: 0,
      likes: 0,
      comments: 0,
    },
  });
  const postId = parseInt(useParams()?.postId ?? '');
  const userState = useAppSelector(selectUserId) as PostCardType['user_id'];

  const handleDelete = () => {
    console.log('삭제');
  };

  const handleEdit = () => {
    console.log('수정');
  };
  useEffect(() => {
    //id로 데이터 가져오는 로직
    //postId가 있는지 없는지 확인하는 로직이 필요함
    console.log(postId, userState);
    const datas = getDummies();

    const temp = datas.find((data: PostCardType) => {
      if (data.post_id === postId) return true;
      return false;
    });
    console.log(temp);
    const { post_id, user_id, title, content, created_at, count } = temp as PostCardType;
    setPost({ post_id, user_id, title, content, created_at, count });
  }, [postId]);

  return (
    <StyledDetail>
      <StyledPostTopWrap>
        <StyledUserImage>
          <img alt="user" width="50" height="50" src={userImage} />
        </StyledUserImage>
        {post.user_id === userState && (
          <StyledButtonGroup>
            <StyledButton onClick={handleEdit} children="수정" />
            <StyledButton onClick={handleDelete} children="삭제" />
          </StyledButtonGroup>
        )}
      </StyledPostTopWrap>

      <StyledProfileWrap>
        <PostUserName children="익명" size="sm" weight="bold" />
        <PostDate children={formatDate(post.created_at)} size="sm" />
      </StyledProfileWrap>
      <PostTitle children={post.title} size="sm" weight="bold" />
      <PostContent children={post.content} size="sm" />
      <Status count={post.count} />
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
  text-align: left;
  padding: 0.5em;
  border-bottom: 1px solid var(--grey-color);
  color: ${({ theme }) => theme.colors.default};
`;

const StyledPostTopWrap = styled.div`
  ${flexRow}
  justify-content: space-between;
`;

const StyledButtonGroup = styled.span`
  ${flexRow}
  gap:0.5em;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  all: unset;
  height: max-content;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fonts.size.sm};
`;

const StyledProfileWrap = styled.div`
  ${flexRow}
  gap:0.5em;
`;

const StyledUserImage = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

const PostUserName = styled(Typography)``;

const PostDate = styled(Typography)``;

const PostTitle = styled(Typography)``;

const PostContent = styled(Typography)``;

const StyledGoodWrap = styled.div`
  ${flexRow}
  justify-content: flex-end;
  width: 100%;

  & > button {
    ${postDetailButton}
  }
`;
