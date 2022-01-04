import React from 'react';
import Button from 'components/atoms/Button/Button';
import CloseIcon from 'components/icons/CloseIcon';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { flexRow } from 'styles/mixin';

const PostWritingHeader = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    window.alert('작성되었습니다.');
    navigate(-1);
  };

  return (
    <StyledHeader>
      <CloseIcon onClick={handleClose} />
      <StyledTitle>글 작성</StyledTitle>
      <StyledSubmitButton label="완료" onClick={handleSubmit} />
    </StyledHeader>
  );
};

export default PostWritingHeader;

const StyledHeader = styled.div`
  ${flexRow}
  width: 100%;
  justify-content: space-between;
  height: 50px;
  text-align: center;
  align-items: center;
  padding: 0 14px;
`;

const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.sm};

  font-weight: bold;
  color: ${({ theme }) => theme.colors.default};
`;

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
