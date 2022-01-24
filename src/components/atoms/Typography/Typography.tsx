import React from 'react';
import styled from 'styled-components';
import theme, { fonts } from 'styles/theme';

type PropTypes = {
  children: JSX.Element[] | JSX.Element | string;
  className?: string;
  as?: any;
  size?: keyof typeof fonts.size;
  weight?: keyof typeof fonts.weight;
  color?: keyof typeof theme.dark.colors;
  lineHeight?: keyof typeof fonts.lineHeight;
};

const Typography = ({ children, as = 'p', ...rest }: PropTypes) => {
  return (
    <StyledTypography as={as} {...rest}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.p<Exclude<PropTypes, 'children' | 'as'>>`
  box-sizing: border-box;
  font-size: ${({ size }) => fonts.size[size ?? 'base']};
  font-weight: ${({ weight }) => fonts.weight[weight ?? 'normal']};
  line-height: ${({ lineHeight }) => fonts.lineHeight[lineHeight ?? 'base']};
  color: ${({ theme, color }) => theme.colors[color ?? 'default']};
`;

export default React.memo(Typography);
