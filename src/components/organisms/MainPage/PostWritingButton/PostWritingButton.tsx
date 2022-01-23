import Button from 'components/atoms/Button';
import AddIcon from 'components/atoms/icons/AddIcon';
import { PATH_POST_WRITING } from 'components/utils/AppRouter';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { centerRowStyle } from 'styles/mixin';
import { size } from 'styles/theme';

const PostWritingButton = () => {
  return (
    <Link to={PATH_POST_WRITING}>
      <StyledWriteButton>
        <StyledAddIcon size={20} />
      </StyledWriteButton>
    </Link>
  );
};

const StyledAddIcon = styled(AddIcon)`
  ${centerRowStyle}
  border: 2px solid ${({ theme }) => theme.colors.default};
  border-radius: 5px;
  height: ${size.icon};
  width: ${size.icon};
`;

const StyledWriteButton = styled(Button)`
  all: unset;
  ${centerRowStyle}
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
`;

export default React.memo(PostWritingButton);
