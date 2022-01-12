import React, { useCallback, useState } from 'react';
import MyPostCards from 'components/organisms/MyPage/MyPostCards';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

const MyPostBoard = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pages, setPages] = useState([0]);

  const addPage = useCallback(() => {
    return;
    // setPages((pages) => [...pages, pages.length]);
  }, []);

  return (
    <StyledContainer>
      {pages.map((page) => (
        <MyPostCards addPage={addPage} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`;

export default MyPostBoard;
