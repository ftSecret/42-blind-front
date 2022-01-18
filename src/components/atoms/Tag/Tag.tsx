import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { flexRow } from 'styles/mixin';

type PropTypes = { children: string | JSX.Element };

const Tag = ({ children }: PropTypes) => {
  return <StyledTag>{children}</StyledTag>;
};

const StyledTag = styled.div`
  ${flexRow}
  background-color: ${({ theme }) => darken(0.1, theme.colors.grey)};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  padding: 0.3rem;
  justify-content: center;
  align-items: center;
`;

export default Tag;
