import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./Card.module.css";

type PropTypes = {
  title: string;
  detail: string;
};

const Card = ({ title, detail, ...rest }: PropTypes) => {
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
      <h1>{title}</h1>
      <pre className={classes.detail}>{detail}</pre>
    </section>
  );
};

export default Card;
