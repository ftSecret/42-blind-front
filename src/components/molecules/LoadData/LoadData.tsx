import LoadingSpinner from 'components/atoms/LoadingSpinner/LoadingSpinner';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { flexColumn } from 'styles/mixin';

type PropTypes = {
  load: () => void;
};

const LoadData = ({ load }: PropTypes) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        console.log('감지됨.');
        setIsLoading(true);
        observer.unobserve(entry.target);
        await load();
        setIsLoading(false);
        observer.observe(entry.target);
      }
    },
    [load],
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    if (targetRef?.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.1,
      });
      observer.observe(targetRef?.current);
    }
    return () => observer && observer.disconnect();
  }, [onIntersect]);

  // TODO: div를 감싸야하는 이유가 뭘까...?
  return (
    <LoadingDiv>
      {isLoading && <LoadingSpinner />}
      {<div ref={targetRef} style={{ display: isLoading === true ? 'none' : 'inherit' }} />}
    </LoadingDiv>
  );
};

const LoadingDiv = styled.div`
  ${flexColumn}
  align-items: center;
  padding: 1rem;
`;

export default LoadData;
