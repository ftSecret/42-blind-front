import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';
import styled from 'styled-components';
import { flexColumn, flexRow, postDetailButton } from 'styles/mixin';
import Button from 'components/atoms/Button';
import { CommentType } from 'features/dummy/dummySlice';
import RightArrowIcon from 'components/atoms/icons/RightArrowIcon';
import { colors } from 'styles/theme';
import { darken } from 'polished';

const Comment = ({
  post_user_id,
  user_id,
  content,
  created_at,
  likes,
  parent_id,
  ...rest
}: CommentType) => {
  return (
    <StyledComment>
      {parent_id !== -1 && <RightArrowIcon />}
      <StyledCommentWrap>
        <StyledProfile>
          <StyledUserImage>
            <img alt="user" width="25" height="25" src={userImage} />
          </StyledUserImage>
          <h1>익명1</h1>
          {post_user_id === user_id && <StyledWriter>작성자</StyledWriter>}
        </StyledProfile>
        <p>{content}</p>
        <StyledButtonWrap>
          <div>
            <StyledDate>{formatDate(created_at)}</StyledDate>
          </div>
          <div>
            <Button children={'답글'} />
            <Button children={'좋아요'} />
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

const StyledWriter = styled.div`
  ${flexRow}
  background-color: ${darken(0.3, colors.grey)};
  font-size: 0.8rem;
  color: ${colors.grey};
  border-radius: 0.5rem;
  padding: 0.3rem;
  justify-content: center;
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
  }
`;

export default Comment;
