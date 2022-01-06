import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';
import styled from 'styled-components';
import { flexColumn, flexRow, postDetailButton } from 'styles/mixin';
import Button from 'components/atoms/Button';

type PropType = {
  id: number | null;
  user_id: string;
  content: string;
  created_at: string;
  likes: number | null;
};

// TODO: "!" 이게 뭐하는 연산자일까...?
const Comment = ({ id, user_id, content, created_at, likes, ...rest }: PropType) => {
  return (
    <StyledComment>
      <StyledProfile>
        <StyledUserImage>
          <img alt="user" width="25" height="25" src={userImage} />
        </StyledUserImage>
        <h1>익명1</h1>
      </StyledProfile>
      <p>{content}</p>
      <StyledWrap>
        <div>
          <StyledDate>{formatDate(created_at)}</StyledDate>
        </div>
        <div>
          <Button children={'답글'} />
          <Button children={'좋아요'} />
        </div>
      </StyledWrap>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  ${flexColumn}
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.default};
  padding: ${({ theme }) => theme.paddings.sm};
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
  gap: 1em;

  & > h1 {
    font-weight: bold;
  }
`;

const StyledDate = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
`;

const StyledWrap = styled.div`
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
