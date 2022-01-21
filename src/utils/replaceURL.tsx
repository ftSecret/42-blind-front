import React from 'react';

const urlPattern =
  // eslint-disable-next-line no-useless-escape
  /http(s)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

const makeATag = (href: string) => (
  <a href={href} target="_blank" rel="noreferrer">
    {href}
  </a>
);

export const replaceURL = (content: string) => {
  const result: JSX.Element[] = [];
  let startIdx = 0;
  let endIdx = 0;
  let res = new RegExp(urlPattern).exec(content);

  while (res !== null) {
    endIdx = content.indexOf(res[0], startIdx);
    if (startIdx < endIdx) result.push(<>{content.substring(startIdx, endIdx)}</>);
    result.push(makeATag(res[0]));
    startIdx = endIdx + res[0].length;
    res = new RegExp(urlPattern).exec(content.substring(startIdx));
  }
  if (startIdx < content.length) result.push(<>{content.substring(startIdx)}</>);
  return result;
};
