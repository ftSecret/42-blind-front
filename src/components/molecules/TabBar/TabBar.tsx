import React from 'react';
import { useLocation } from 'react-router-dom';
import Anchor, { AnchorItem } from 'components/molecules/Anchor';

export type PropTypes = {
  items: AnchorItem[];
  className?: string;
};

const TabBar = ({ items, className }: PropTypes) => {
  const location = useLocation();

  return (
    <ul className={className}>
      {items.map((item, idx) => (
        <Anchor
          as="li"
          key={idx}
          size="sm"
          lineHeight="large"
          linkItem={item}
          isSelected={item.to === location.pathname}
          replace={true}
        />
      ))}
    </ul>
  );
};

export default TabBar;
