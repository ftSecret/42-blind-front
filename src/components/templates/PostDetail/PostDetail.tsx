import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';
import Status from 'components/molecules/Status/Status';
import styled from 'styled-components';
import { flexColumn, flexRow, postDetailButton } from 'styles/mixin';
import Button from 'components/atoms/Button/Button';
import { useEffect } from 'react';
import { PostCardType } from 'utils/getDummies';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from 'components/atoms/Typography';
import { useAppSelector } from 'app/hooks';
import { selectUserId } from 'features/user/userSlice';
import { usePost } from 'hooks';
import { PATH_POST_EDIT } from 'components/utils/AppRouter';
import { useGoodBlindPostMutation } from 'api/blindPost';
import { APIPostType } from 'api/type';

type PropTypes = { post: APIPostType };

const PostDetail = ({ post }: PropTypes) => {
  const navigate = useNavigate();
  const [goodBlindPost] = useGoodBlindPostMutation();

  const { deletePost } = usePost();
  const postId = parseInt(useParams()?.postId ?? '');
  const userState = useAppSelector(selectUserId) as PostCardType['post_id'];

  const handleDelete = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      deletePost(post.post_id);
      navigate('/');
    }
  };

  const good = async () => {
    await goodBlindPost({ post_id: post.post_id });
  };

  const handleEdit = () => {
    navigate(`${PATH_POST_EDIT}/${postId}`);
  };

  if (post.post_id === -1) return null;
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
      {/* <Status count={count:} /> */}
      <StyledGoodWrap>
        <Button children="좋아요" onClick={good} />
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
