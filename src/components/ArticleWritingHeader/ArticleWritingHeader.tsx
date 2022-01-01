import React from 'react';
import Button from 'components/Button/Button';
import CloseIcon from 'components/icons/CloseIcon';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { flexRow } from 'assets/styles/mixin';

const ArticleWritingHeader = () => {
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

export default ArticleWritingHeader;

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
  font-size: 1.3rem;
`;

const StyledSubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
  border-color: ${({ theme }) => theme.colors.white};
  border-style: solid;
  border-width: 1px;
  color: ${({ theme }) => theme.colors.white};
  width: 4rem;
  height: 2.3rem;
  border-radius: 0.5rem;
`;
