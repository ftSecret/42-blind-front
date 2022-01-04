import React from 'react';
import Button from 'components/atoms/Button/Button';
import CloseIcon from 'components/atoms/icons/CloseIcon';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { headerStyle } from 'styles/mixin';
import Typography from 'components/atoms/Typography/Typography';

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
      <Typography size="base" weight="bold">
        글 작성
      </Typography>
      <StyledSubmitButton label="완료" onClick={handleSubmit} />
    </StyledHeader>
  );
};

export default PostWritingHeader;

const StyledHeader = styled.div`
  ${headerStyle}
  justify-content: space-between;
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
