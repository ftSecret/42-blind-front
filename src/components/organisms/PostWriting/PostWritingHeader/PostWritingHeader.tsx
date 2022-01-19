import React, { useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import Button from 'components/atoms/Button';
import Header from 'components/molecules/Header';
import Typography from 'components/atoms/Typography';
import CloseIcon from 'components/atoms/icons/CloseIcon';

import { useAddBlindPostMutation, useEditBlindPostMutation } from 'api/blindPost';
import { CODE_2000 } from 'constants/api';
import { PATH_POST } from 'components/utils/AppRouter';
import { isEmpty } from 'utils/isEmpty';
import { POST_WRITING, POST_EDITING, MAX_CONTENT_COUNT, MAX_TITLE_COUNT } from 'constants/post';

type StatusType = typeof POST_EDITING | typeof POST_WRITING;

type PropTypes = {
  postId?: number;
  content: string;
  title: string;
  writingStatus: StatusType;
};
const PostWritingHeader = ({ postId = -1, content, title, writingStatus }: PropTypes) => {
  const navigate = useNavigate();
  const [addBlindPost, { data: writingData }] = useAddBlindPostMutation();
  const [editBlindPost] = useEditBlindPostMutation();
  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSubmit = useCallback(async () => {
    if (isEmpty(title) || isEmpty(content)) {
      window.alert('제목과 내용은 필수 입력 사항입니다.');
      return;
    }
    if (content.length > MAX_CONTENT_COUNT) {
      window.alert(`본문 내용은 ${MAX_CONTENT_COUNT}자 이하여야합니다.`);
      return;
    }
    if (title.length > MAX_CONTENT_COUNT) {
      window.alert(`본문 제목은 ${MAX_TITLE_COUNT}자 이하여야합니다.`);
      return;
    }
    if (writingStatus === POST_WRITING) {
      await addBlindPost({ title, content });
    } else if (postId !== -1 && writingStatus === POST_EDITING) {
      await editBlindPost({ content, post_id: postId, title });
      navigate(-1);
    }
  }, [addBlindPost, content, editBlindPost, navigate, postId, title, writingStatus]);

  useEffect(() => {
    if (writingData?.code === CODE_2000) {
      navigate(`${PATH_POST}/${writingData.data.post_id}`, { replace: true });
    }
  }, [navigate, writingData]);

  const left = useMemo(() => <StyledCloseIcon onClick={handleClose} />, [handleClose]);
  const right = useMemo(
    () => <StyledSubmitButton children="완료" onClick={handleSubmit} />,
    [handleSubmit],
  );
  const middle = useMemo(
    () => <Typography size="base" weight="bold" children={writingStatus} />,
    [writingStatus],
  );

  return <Header left={left} right={right} middle={middle} />;
};

export default PostWritingHeader;

const StyledSubmitButton = styled(Button)`
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.red};
  border-color: ${({ theme }) => theme.colors.white};
  border-style: none;
  color: ${({ theme }) => theme.colors.white};
  width: 4rem;
  height: 2.3rem;
  border-radius: 50px;
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
