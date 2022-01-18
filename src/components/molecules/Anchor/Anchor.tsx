import classNames from 'classnames';
import Typography from 'components/atoms/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontLineHeight, FontSize, FontWeight } from 'styles/theme';
import { AnchorItem } from '.';

type PropTypes = {
  size?: FontSize;
  lineHeight?: FontLineHeight;
  weight?: FontWeight;
  linkItem: AnchorItem;
  isSelected?: boolean;
};

const Anchor = ({ size, lineHeight, weight, linkItem, isSelected }: PropTypes) => {
  return (
    <Typography size={size} lineHeight={lineHeight} weight={weight}>
      <Link
        to={linkItem.to}
        key={linkItem.to}
        className={classNames({
          selected: isSelected,
        })}
      >
        {linkItem.content}
      </Link>
    </Typography>
  );
};

export default React.memo(Anchor);
