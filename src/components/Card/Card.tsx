import React, { useCallback, useEffect, useRef, useState } from 'react';
import { formatDate } from '../../utils/formatDate';

import Status from '../Status/Status';
import classes from './Card.module.css';

type PropTypes = {
  title: string;
  content: string;
  created_at: Date;
  views: number;
  likes: number;
  comments: number;
};

const Card = ({
  title,
  content,
  created_at,
  views,
  likes,
  comments,
  ...rest
}: PropTypes) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting && !isLoaded) {
        observer.unobserve(entry.target);
        observer && observer.disconnect();
        setIsLoaded(true);
        targetRef?.current?.classList.remove(classes.hidden);
        targetRef?.current?.classList.add(classes.container);
      }
    },
    [isLoaded]
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
    <section className={classes.hidden} ref={targetRef}>
      <div className={classes.Title}>{title}</div>
      <div className={classes.Content}>{content}</div>

      <div className={classes.info}>
        <div>{formatDate(created_at)}</div>
        <Status comments={comments} views={views} likes={likes} />
      </div>
    </section>
  );
};

export default Card;
