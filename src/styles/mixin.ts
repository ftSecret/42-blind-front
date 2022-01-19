import { css } from 'styled-components';
import { size } from './theme';

export const flexColumn = css`
  flex-direction: column;
  display: flex;
`;

export const flexRow = css`
  display: flex;
`;

export const headerStyle = css`
  ${flexRow}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  min-height: 56px;
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
