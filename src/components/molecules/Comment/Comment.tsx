import styled from 'styled-components';
import { flexColumn, flexRow, linkStyle, preventDragStyle } from 'styles/mixin';
import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';
import Button from 'components/atoms/Button';
import RightArrowIcon from 'components/atoms/icons/RightArrowIcon';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { CommentType } from 'types';
import GoodButton from '../GoodButton';
import { useGoodBlindCommentMutation } from 'api/blindComment';
import Typography from 'components/atoms/Typography';
import { APIPostType, APICommentsType } from 'api/type';
import { colors } from 'styles/theme';
import Tag from 'components/atoms/Tag';
import { useAppSelector } from 'app/hooks';
import { selectUserId } from 'features/user/userSlice';
import { replaceURL } from 'utils/replaceURL';

type CommentPropTypes = CommentType & HandleReplyTypes;

type HandleReplyTypes = {
  findNickname: (parentId: number) => string;
  setPostDetail: (post: APIPostType, comments: APICommentsType) => void;
  setSelectedComment: Dispatch<SetStateAction<{ nickname: string; id: number }>>;
};

const Comment = ({
  goods,
  user_id,
  content,
  is_good,
  nickname,
  created_at,
  modified_at,
  parent_id,
  comment_id,
  post_user_id,
  findNickname,
  setPostDetail,
  setSelectedComment,
  ...rest
}: CommentPropTypes) => {
  const [goodBlindComment, { data }] = useGoodBlindCommentMutation();
  const handleReplyClick = () => {
    nickname && setSelectedComment({ nickname, id: comment_id });
  };
  const myUserId = useAppSelector(selectUserId);
  const canGoodRef = useRef<Boolean>(true);
  const goodTimerRef = useRef<NodeJS.Timeout>();

  const toggleGood = async () => {
    if (canGoodRef.current === true) {
      await goodBlindComment({ comment_id, is_good: !is_good });
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

  useEffect(() => {
    if (data !== undefined && data.data !== undefined) {
      const { comments, ...post } = data.data;
      setPostDetail(post, comments);
    }
  }, [data, setPostDetail]);

  return (
    <StyledComment
      tabIndex={0}
      id={`comment_${comment_id}`}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      {parent_id !== -1 && <RightArrowIcon />}
      <StyledCommentWrap>
        <StyledProfile>
          <StyledUserImage>
            <img alt="user" width="25" height="25" src={userImage} />
          </StyledUserImage>
          <h1>{nickname}</h1>
          {post_user_id === user_id && <Tag>작성자</Tag>}
          {myUserId === user_id && <Tag>본인</Tag>}
        </StyledProfile>
        <StyledContent>
          {parent_id !== -1 && <strong>{`@${findNickname(parent_id)}`}</strong>}&nbsp;
          {replaceURL(content)}
        </StyledContent>
        <StyledInfoWrap>
          <StyledInfoDiv>
            <Typography children={formatDate(created_at)} size="xs" color="grey" />
            <ReplyButton onClick={handleReplyClick}>답글 달기</ReplyButton>
            {goods > 0 && (
              <Typography children={`좋아요 ${goods}개`} size="xs" weight="bold" color="grey" />
            )}
          </StyledInfoDiv>
          <GoodButton is_good={is_good} onClick={toggleGood} />
        </StyledInfoWrap>
      </StyledCommentWrap>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  ${flexRow}
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.default};
  padding: ${({ theme }) => theme.paddings.sm};
  gap: 0.5rem;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.red};
  }
  pointer-events: none;

  & button,
  a {
    pointer-events: auto;
  }
`;

const StyledCommentWrap = styled.div`
  ${flexColumn}
  width: 100%;
  gap: 0.5rem;
`;

const StyledUserImage = styled.div`
  width: 25px;
  height: 25px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

const StyledProfile = styled.div`
  ${flexRow}
  align-items: center;
  gap: 0.5em;

  & > h1 {
    font-weight: bold;
  }
`;

const StyledInfoDiv = styled.div`
  ${flexRow}
  gap: 0.3rem;
  align-items: center;
`;

const ReplyButton = styled(Button)`
  all: unset;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.size.xs};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${colors.grey};
  ${preventDragStyle}
`;

const StyledContent = styled.p`
  ${flexRow}
  gap: 0.2rem;
  line-height: 1.2;
  white-space: pre-wrap;
  strong {
    color: ${({ theme }) => theme.colors.blue};
  }

  a {
    ${linkStyle}
  }
`;

const StyledInfoWrap = styled.div`
  ${flexRow}
  justify-content:space-between;
`;

export default Comment;
