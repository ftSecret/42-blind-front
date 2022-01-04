import { css } from 'styled-components';

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
  padding: 0.5rem;
`;
