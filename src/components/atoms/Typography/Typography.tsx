import React from 'react';
import styled from 'styled-components';
import { fonts } from 'styles/theme';

// <Typography size={xl} weight={asd} lineHeight={dsfg}></...>
type PropTypes = {
  children: JSX.Element | string;
  size?: keyof typeof fonts.size;
  weight?: keyof typeof fonts.weight;
  lineHeight?: keyof typeof fonts.lineHeight;
};

const Typography = ({ children, ...rest }: PropTypes) => {
  return <StyledTypography {...rest}>{children}</StyledTypography>;
};

const StyledTypography = styled.p<Omit<PropTypes, 'children'>>`
  box-sizing: border-box;
  font-size: ${({ size }) => fonts.size[size ?? 'base']};
  font-weight: ${({ weight }) => fonts.weight[weight ?? 'normal']};
  line-height: ${({ lineHeight }) => fonts.lineHeight[lineHeight ?? 'base']};
  color: ${({ theme }) => theme.colors.default};
`;

export default Typography;
