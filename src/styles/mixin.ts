import { css } from 'styled-components';
import { size } from './theme';

export const flexColumn = css`
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
`;

export const flexRow = css`
  box-sizing: border-box;
  display: flex;
`;

export const headerStyle = css`
  ${flexRow}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  min-height: 56px;
`;

export const containerStyle = css`
  max-width: ${size.tablet};
  min-width: ${size.mobile};
  margin: auto;
  padding: 0.5em;
`;
