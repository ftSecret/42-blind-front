import { formatDate } from 'utils/formatDate';
import userImage from 'assets/images/user.png';
import styled from 'styled-components';
import { flexColumn, flexRow, postDetailButton } from 'styles/mixin';
import Button from 'components/atoms/Button';
import RightArrowIcon from 'components/atoms/icons/RightArrowIcon';
import { lighten } from 'polished';
import { CommentPropTypes } from '../Comments/Comments';
import { useNavigate } from 'react-router-dom';
import {
  CommentQueryTypes,
  STATE_DEFAULT,
  STATE_REPLY,
} from 'components/organisms/PostDetail/CommentInput/CommentInput';
import { useQueryString } from 'hooks/useQueryString';
import { messages } from 'constants/message';

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
  ...rest
}: CommentPropTypes) => {
  const navigate = useNavigate();
  const queryString = useQueryString<CommentQueryTypes>();
  const state = queryString.state ?? STATE_DEFAULT;
  const parentId = Number.parseInt(queryString.parentId);

  const handleReplyClick = () => {
    // 특정 상황에서 답글을 눌러도 아무일도 일어나지 않게 함.
    if (
      (parent_id === -1 && parentId === comment_id) || // 같은 답글 그룹에서 댓글(부모)의 답글 버튼을 누른 경우,
      parentId === parent_id // 같은 답글 그룹의 답글 버튼을 누른 경우,
    )
      return;

    // 답글, 수정 상태가 아닌 기본 상태일때는 경고를 띄우지 않고 답글 상태로 이동시킴.
    // 아닐 경우에는 경고창을 띄움.
    // TODO: 다른 답글로 이동할 경우 바로 링크가 이동되기 때문에 다른 답글을 다 작성하고 나면 이전 답글 상태로 돌아오는 버그가 있음.
    // 이를 해결하기 위해 현재는 답글 작성중에는 다른 답글을 작성 못하도록 버튼을 비활성화함.
    if (state === STATE_DEFAULT || window.confirm(messages.alertChangeReplyComment)) {
      navigate(`?state=${STATE_REPLY}&parentId=${parent_id === -1 ? comment_id : parent_id}`);
    }
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
          {modified_at !== undefined && <StyledOption>편집됨</StyledOption>}
        </StyledProfile>
        <p>{content}</p>
        <StyledButtonWrap>
          <div>
            <StyledDate>{formatDate(created_at)}</StyledDate>
          </div>
          <div>
            <Button onClick={handleReplyClick} disabled={state !== STATE_DEFAULT}>
              답글
            </Button>
            <Button>좋아요</Button>
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
  & > div > button:disabled {
    ${postDetailButton}
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Comment;
