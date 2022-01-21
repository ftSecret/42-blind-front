import React, { useEffect, useRef } from 'react';

import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';
import styled from 'styled-components';
import { flexColumn, flexRow, linkStyle, preventDragStyle } from 'styles/mixin';
import Button from 'components/atoms/Button/Button';
import { PostType } from 'types';
import { useNavigate } from 'react-router-dom';
import Typography from 'components/atoms/Typography';
import { useAppSelector } from 'app/hooks';
import { selectUserId } from 'features/user/userSlice';
import { PATH_MAIN, PATH_POST_EDIT } from 'components/utils/AppRouter';
import { useDeleteBlindPostMutation, useGoodBlindPostMutation } from 'api/blindPost';
import { APICommentsType, APIPostType } from 'api/type';
import Status from 'components/molecules/Status';
import GoodButton from 'components/molecules/GoodButton';
import { colors } from 'styles/theme';
import { replaceURL } from 'utils/replaceURL';

type PropTypes = {
  post: APIPostType;
  comment_number: number;
  setPostDetail: (post: APIPostType, comments: APICommentsType) => void;
};

const PostDetail = ({ post, comment_number, setPostDetail }: PropTypes) => {
  const navigate = useNavigate();
  const [deleteBlindPost] = useDeleteBlindPostMutation();
  const [goodBlindPost, { data }] = useGoodBlindPostMutation();
  const canGoodRef = useRef<Boolean>(true);
  const goodTimerRef = useRef<NodeJS.Timeout>();

  const userState = useAppSelector(selectUserId) as PostType['post_id'];

  const toggleGood = async () => {
    if (canGoodRef.current === true) {
      await goodBlindPost({ post_id: post.post_id, is_good: !post.is_good });
      canGoodRef.current = false;
      if (goodTimerRef.current !== undefined) clearTimeout(goodTimerRef.current);
      goodTimerRef.current = setTimeout(() => {
        canGoodRef.current = true;
      }, 500);
    }
  };

  useEffect(() => {
    return () => {
      if (goodTimerRef.current !== undefined) {
        clearTimeout(goodTimerRef.current);
        goodTimerRef.current = undefined;
      }
    };
  }, []);

  const handleDelete = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      await deleteBlindPost({ post_id: post.post_id });
      navigate(PATH_MAIN);
    }
  };

  const handleEdit = () => {
    navigate(`${PATH_POST_EDIT}`, {
      state: { title: post.title, content: post.content, postId: post.post_id },
    });
  };

  useEffect(() => {
    if (data !== undefined && data.data !== undefined) {
      const { comments, ...post } = data.data;
      setPostDetail(post, comments);
    }
  }, [data, setPostDetail]);

  const count = { goods: post.goods, views: post.views, comments: comment_number };

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
      <PostTitle children={post.title} size="sm" weight="bold" forwardedAs="h1" />
      <PostContent size="sm">{replaceURL(post.content)}</PostContent>
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
  border-bottom: 1px solid ${colors.grey};
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
  color: ${colors.grey};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  cursor: pointer;
  ${preventDragStyle}
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

const PostContent = styled(Typography)`
  line-height: 1.3;
  white-space: pre-wrap;

  & a {
    ${linkStyle}
  }
`;

const StyledStatusWrap = styled.div`
  ${flexRow}
  padding-top: 0.5rem;
  width: 100%;
  justify-content: space-between;
`;
