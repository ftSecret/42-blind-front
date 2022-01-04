import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from 'components/atoms/icons/ArrowBackIcon';
import styled from 'styled-components';

const DetailHeader = ({ content }: { content: string }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledSection>
      <span onClick={goBack}>
        <StyledArrowBackIcon />
      </span>
      <h1>{content}</h1>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  padding: 0 14px;
  height: 50px;
  line-height: 3.5;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.default};
  & > span {
    position: absolute;
    top: 5px;
    left: 10px;
  }
  h1 {
    font-size: ${({ theme }) => theme.fonts.size.sm};
    font-weight: bold;
  }
`;

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default DetailHeader;
