import React from 'react';
import { urlPattern } from './urlPattern';

const makeATag = (href: string) => <a href={href}>{href}</a>;

export const replaceURL = (content: string) => {
  let startIdx = 0;
  let endIdx = 0;
  const result: JSX.Element[] = [];
  let res = new RegExp(urlPattern).exec(content);
  while (res !== null) {
    endIdx = content.search(res[0]);
    result.push(<>{content.substring(startIdx, endIdx)}</>);
    result.push(makeATag(res[0]));
    startIdx = endIdx + res[0].length;
    res = new RegExp(urlPattern).exec(content.substring(startIdx));
  }
  if (startIdx < content.length) result.push(<>{content.substring(startIdx)}</>);
  return result;
};
