import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';
import styled from 'styled-components';
import { flexColumn, flexRow } from 'styles/mixin';
import Button from 'components/atoms/Button/Button';
import { PostType } from 'types';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from 'components/atoms/Typography';
import { useAppSelector } from 'app/hooks';
import { selectUserId } from 'features/user/userSlice';
import { usePost } from 'hooks';
import { PATH_MAIN, PATH_POST_EDIT } from 'components/utils/AppRouter';
import { useGoodBlindPostMutation } from 'api/blindPost';
import { APIPostType } from 'api/type';
import Status from 'components/molecules/Status';
import GoodButton from 'components/molecules/GoodButton';

type PropTypes = { post: APIPostType; refetch: () => void; comment_number: number };

const PostDetail = ({ post, refetch, comment_number }: PropTypes) => {
  const navigate = useNavigate();
  const [goodBlindPost] = useGoodBlindPostMutation();

  const { deletePost } = usePost();
  const postId = parseInt(useParams()?.postId ?? '');
  const userState = useAppSelector(selectUserId) as PostType['post_id'];

  const handleDelete = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      deletePost(post.post_id);
      navigate(PATH_MAIN);
    }
  };

  const toggleGood = async () => {
    await goodBlindPost({ post_id: post.post_id, is_good: !post.is_good });
    refetch();
  };

  const handleEdit = () => {
    navigate(`${PATH_POST_EDIT}/${postId}`);
  };

  const count = { goods: post.goods, views: post.views, comments: comment_number };

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
      <StyledStatusWrap>
        <Status count={count} />
        <GoodButton onClick={toggleGood} is_good={post.is_good} />
      </StyledStatusWrap>
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
`;

const StyledButton = styled(Button)`
  all: unset;
  height: max-content;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  cursor: pointer;
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

const StyledStatusWrap = styled.div`
  ${flexRow}
  padding-top: 0.5rem;
  width: 100%;
  justify-content: space-between;
`;
