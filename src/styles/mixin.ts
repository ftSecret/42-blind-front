import { css } from 'styled-components';
import { size } from './theme';

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexRow = css`
  display: flex;
`;

export const preventDragStyle = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const headerStyle = css`
  ${preventDragStyle}
  ${flexRow}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  min-height: ${size.header};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const containerStyle = css`
  width: 100%;
  max-width: ${size.tablet};
  min-width: ${size.mobile};
  margin: auto;
  padding: 0.5em;
`;

export const wrapperStyle = css`
  ${flexColumn}
  height: 100vh;
`;

export const centerRowStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const centerColumnStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
