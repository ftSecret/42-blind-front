import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./LoadData.module.css";

type PropTypes = {
  load: () => void;
};

const LoadData = ({ load }: PropTypes) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        setIsLoading(true);
        observer.unobserve(entry.target);
        await load();
        setIsLoading(false);
        observer.observe(entry.target);
      }
    },
    [load]
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

  return isLoading ? (
    <div className={classes.loading}>로딩 중...</div>
  ) : (
    <div ref={targetRef} className={classes.container} />
  );
};

export default LoadData;
