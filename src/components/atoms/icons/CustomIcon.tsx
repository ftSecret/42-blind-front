import React from 'react';
import styled from 'styled-components';

export type CustomIconPropTypes = {
  iconName: string;
  className?: string;
  color?: string;
  size?: number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

// TODO: ref가 포함되었을 때 왜 에러가 나는지 확인하기.
const CustomIcon = ({ iconName, color, ...rest }: Omit<CustomIconPropTypes, 'ref'>) => {
  return <Icon iconName={iconName} color={color} {...rest} />;
};

const MaterialIcon = ({ className, iconName, ...rest }: CustomIconPropTypes) => (
  <span className={`material-icons ${className}`} {...rest}>
    {iconName}
  </span>
);

const Icon = styled(MaterialIcon)`
  color: ${(props: CustomIconPropTypes) => props.color};
  font-size: ${(props: CustomIconPropTypes) => `${props.size}px`};
`;

export default CustomIcon;
