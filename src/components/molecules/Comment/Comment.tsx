import { lighten } from 'polished';
import styled from 'styled-components';
import { flexColumn, flexRow, postDetailButton } from 'styles/mixin';

import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';

import Button from 'components/atoms/Button';
import RightArrowIcon from 'components/atoms/icons/RightArrowIcon';
import { Dispatch, SetStateAction } from 'react';
import { CommentType } from 'types';
import GoodButton from '../GoodButton';
import { useGoodBlindCommentMutation } from 'api/blindComment';

type CommentPropTypes = CommentType & HandleReplyTypes;

type HandleReplyTypes = {
  setSelectedComment: Dispatch<SetStateAction<{ nickname: string; id: number }>>;
  findNickname: (parentId: number) => string;
  refetch: () => void;
};

const Comment = ({
  post_user_id,
  user_id,
  content,
  created_at,
  modified_at,
  goods,
  parent_id,
  nickname,
  comment_id,
  setSelectedComment,
  findNickname,
  refetch,
  is_good,
  ...rest
}: CommentPropTypes) => {
  const [goodBlindComment] = useGoodBlindCommentMutation();
  const handleReplyClick = () => {
    nickname && setSelectedComment({ nickname, id: comment_id });
  };

  const toggleGood = async () => {
    await goodBlindComment({ comment_id, is_good });
    refetch();
  };

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
        <StyledButtonWrap>
          <div>
            <StyledDate>{formatDate(created_at)}</StyledDate>
          </div>
          <div>
            <Button onClick={handleReplyClick}>답글</Button>
            <StyledGoodWrap>
              <GoodButton is_good={is_good} onClick={toggleGood} />
              <div>{goods}</div>
            </StyledGoodWrap>
          </div>
        </StyledButtonWrap>
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

const StyledGoodWrap = styled.div`
  ${flexRow}
`;

const StyledContentDiv = styled.div`
  ${flexRow}
  gap: 0.2rem;
  line-height: 1.2;
  h2 {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledDate = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
`;

const StyledButtonWrap = styled.div`
  ${flexRow}
  justify-content:space-between;
  gap: 0.5rem;
  & > div {
    ${flexRow}
    gap: 0.3rem
  }
  & > div > button {
    ${postDetailButton}
    cursor: pointer;
  }
`;

export default Comment;
