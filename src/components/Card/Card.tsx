import React, { useCallback, useEffect, useRef, useState } from 'react';
import { formatDate } from 'utils/formatDate';

import Status from 'components/Status/Status';
import styled from 'styled-components';
import { flexColumn, flexRow } from 'assets/styles/mixin';

type PropTypes = {
  title: string;
  content: string;
  created_at: Date;
  views: number;
  likes: number;
  comments: number;
};

const Card = ({ title, content, created_at, views, likes, comments, ...rest }: PropTypes) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting && !isLoaded) {
        observer.unobserve(entry.target);
        observer && observer.disconnect();
        setIsLoaded(true);
      }
    },
    [isLoaded],
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    if (targetRef?.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0,
      });
      observer.observe(targetRef?.current);
    }
    return () => observer && observer.disconnect();
  }, [onIntersect]);

  return (
    <StyledSection ref={targetRef} loaded={isLoaded}>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{content}</StyledContent>

      <StyledInfo>
        <div>{formatDate(created_at)}</div>
        <Status comments={comments} views={views} likes={likes} />
      </StyledInfo>
    </StyledSection>
  );
};

export default Card;

type StyledSectionProps = {
  loaded: boolean;
};

const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  ${flexColumn}
  border-radius: 0.3rem;
  transition: 0.5s;
  padding: 0.5em;
  width: 100%;
  gap: 1em;

  &:hover {
    cursor: pointer;
  }
`;

const StyledInfo = styled.div`
  ${flexRow}
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.font};
`;

const StyledContent = styled.div`
  width: 100%;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.font};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.font};
  font-weight: bold;
  font-size: 1.2em;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
