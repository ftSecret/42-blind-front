import React, { useCallback, useEffect, useRef, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import ChatIcon from "../icons/ChatIcon";
import CheckCircleIcon from "../icons/CheckCircleIcon";
import ThumbUpIcon from "../icons/ThumbUpIcon";
import classes from "./Card.module.css";

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
        threshold: 0.4,
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
        <ul className={classes.status}>
          <li>
            <ChatIcon className={classes.icon} />
            <div>{comments}</div>
          </li>
          <li>
            <CheckCircleIcon className={classes.icon} />
            <div>{views}</div>
          </li>
          <li>
            <ThumbUpIcon className={classes.icon} />
            <div>{likes}</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Card;
