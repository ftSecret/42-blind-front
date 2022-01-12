import { lighten } from 'polished';
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
`;

export const containerStyle = css`
  max-width: ${size.tablet};
  min-width: ${size.mobile};
  margin: auto;
  padding: 0.5em;
`;

export const postDetailButton = css`
  all: unset;
  background-color: ${({ theme }) => lighten(0.1, theme.colors.grey)};
  font-size: 0.9rem;
  border-radius: 0.3rem;
  padding: 0.3em;
`;
