import React from 'react';
import styled from 'styled-components';

export type CustomIconPropTypes = {
  iconName: string;
  className?: string;
  color?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

// const CustomIcon = ({ iconName, className, color, ...rest }: CustomIconPropTypes) => {
//   return (
//     <span
//       className={classNames({
//         'material-icons': true,
//         [className ?? '']: className,
//       })}
//       {...rest}
//     >
//       {iconName}
//     </span>
//   );
// };
const CustomIcon = ({ iconName, className, color, ...rest }: CustomIconPropTypes) => {
  return <Icon iconName={iconName} className={className} color={color} />;
};

const MaterialIcon = (props: CustomIconPropTypes) => (
  <span className={`material-icons ${props.className}`}>{props.iconName}</span>
);

const Icon = styled(MaterialIcon)`
  color: ${(props: CustomIconPropTypes) => props.color};
`;

export default CustomIcon;
