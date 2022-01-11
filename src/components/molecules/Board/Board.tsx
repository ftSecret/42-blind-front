import React from 'react';
import LoadData from 'components/molecules/LoadData';
import PostCards from 'components/molecules/PostCards';
import { PostType } from 'types';

type PropTypes = {
  items: PostType[];
  load?: () => void;
  isLoadEnd?: boolean;
};

const Board = ({ items, load, isLoadEnd }: PropTypes) => {
  return (
    <>
      <PostCards items={deleteDuplicatePost(items)} />
      <LoadData load={load} isEnd={isLoadEnd} />
    </>
  );
};

// 중복되는 post_id가 존재하는지 판단하는 로직
// 1. 순회한다.
// 2. 순회하면서 현재 원소의 post_id가 items에 존재하는지 판단한다.
// 3. 있으면 modified_at을 확인해서 처리한다.
const deleteDuplicatePost = (items: PostType[]) =>
  items.reduce((prev: PostType[], current: PostType) => {
    const target_idx = prev.findIndex((elem) => elem.post_id === current.post_id);
    if (target_idx !== -1) {
      const target = prev[target_idx];
      if (target.modified_at && current.modified_at) {
        // 기존에 있던 값이 더 최신일 때
        if (target.modified_at >= current.modified_at) return [...prev];
        // 추가된 값이 더 최신일 때
        else {
          prev.splice(target_idx, 1, current);
          return [...prev];
        }
      } else return [...prev];
    }
    return [...prev, current];
  }, []);

export default Board;
