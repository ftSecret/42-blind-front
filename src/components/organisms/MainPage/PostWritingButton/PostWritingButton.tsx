import Button from 'components/atoms/Button';
import AddIcon from 'components/atoms/icons/AddIcon';
import { PATH_POST_WRITING } from 'components/utils/AppRouter';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostWritingButton = () => {
  return (
    <Link to={PATH_POST_WRITING}>
      <StyledWriteButton>
        <AddIcon />
      </StyledWriteButton>
    </Link>
  );
};

const StyledWriteButton = styled(Button)`
  all: unset;
  display: flex;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 2.2rem;
  width: 1.8em;
  height: 1.8em;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 2.3rem;
  right: 2rem;
`;

export default React.memo(PostWritingButton);
