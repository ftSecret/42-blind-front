import ErrorOutlineIcon from 'components/atoms/icons/ErrorOutlineIcon';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button';
import { flexColumn } from 'styles/mixin';
import styled from 'styled-components';
import React from 'react';

type PropTypes = {
  message: string;
  isError: boolean;
};

const ErrorMessage = ({ message = '에러가 발생했습니다.', isError = true }: PropTypes) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (isError === false) return null;
  return (
    <StyledDeletedPostSection>
      <ErrorOutlineIcon size={40} />
      <p>{message}</p>
      <BackButton onClick={goBack} children={'이전페이지'} />
    </StyledDeletedPostSection>
  );
};

export default ErrorMessage;

const StyledDeletedPostSection = styled.section`
  ${flexColumn}
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.05rem;
  height: 90vh;
  color: ${({ theme }) => theme.colors.grey};
`;

const BackButton = styled(Button)`
  all: unset;
  background-color: ${({ theme }) => theme.colors.red};
  width: 150px;
  height: 50px;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.white};
`;
