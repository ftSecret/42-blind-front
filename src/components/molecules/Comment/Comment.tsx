import { lighten } from 'polished';
import styled from 'styled-components';
import { flexColumn, flexRow } from 'styles/mixin';

import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';

import Button from 'components/atoms/Button';
import RightArrowIcon from 'components/atoms/icons/RightArrowIcon';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { CommentType } from 'types';
import GoodButton from '../GoodButton';
import { useGoodBlindCommentMutation } from 'api/blindComment';
import Typography from 'components/atoms/Typography';
import { APIPostType, APICommentsType } from 'api/type';
import { colors } from 'styles/theme';

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

  const toggleGood = async () => {
    await goodBlindComment({ comment_id, is_good: !is_good });
  };

  useEffect(() => {
    if (data !== undefined && data.data !== undefined) {
      const { comments, ...post } = data.data;
      setPostDetail(post, comments);
    }
  }, [data, setPostDetail]);

  return (
    <StyledComment>
      {parent_id !== -1 && <RightArrowIcon />}
      <StyledCommentWrap>
        <StyledProfile>
          <StyledUserImage>
            <img alt="user" width="25" height="25" src={userImage} />
          </StyledUserImage>
          <h1>{nickname}</h1>
          {post_user_id === user_id && <StyledOption>작성자</StyledOption>}
        </StyledProfile>
        <StyledContentDiv>
          {parent_id !== -1 && <h2>{`@${findNickname(parent_id)}`}</h2>}
          <p>{content}</p>
        </StyledContentDiv>
        <StyledInfoWrap>
          <StyledInfoDiv>
            <Typography children={formatDate(created_at)} size="ssm" color="grey" />
            <ReplyButton onClick={handleReplyClick}>답글 달기</ReplyButton>
            <Typography children={`좋아요 ${goods}개`} size="ssm" weight="bold" color="grey" />
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
`;

const StyledCommentWrap = styled.div`
  ${flexColumn}
  width: 100%;
  gap: 0.5rem;
`;

const StyledOption = styled.div`
  ${flexRow}
  background-color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.default};
  border-radius: 0.5rem;
  padding: 0.3rem;
  justify-content: center;
  align-items: center;
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
  font-size: ${({ theme }) => theme.fonts.size.ssm};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${colors.grey};
`;

const StyledContentDiv = styled.div`
  ${flexRow}
  gap: 0.2rem;
  line-height: 1.2;
  h2 {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledInfoWrap = styled.div`
  ${flexRow}
  justify-content:space-between;
`;

export default Comment;
