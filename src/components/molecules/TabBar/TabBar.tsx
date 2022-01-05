import React from 'react';
import { useLocation } from 'react-router-dom';
import Anchor, { AnchorItem } from '../Anchor/Anchor';

type PropTypes = {
  items: AnchorItem[];
  className?: string;
};

const TabBar = ({ items, className }: PropTypes) => {
  const location = useLocation();

  return (
    <div className={className}>
      {items.map((item, idx) => (
        <Anchor
          key={idx}
          size="sm"
          lineHeight="large"
          linkItem={item}
          isSelected={item.to === location.pathname}
        />
      ))}
    </div>
  );
};

export default TabBar;
