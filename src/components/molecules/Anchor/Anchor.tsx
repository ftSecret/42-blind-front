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
  className?: string;
  replace?: boolean;
  as?: string;
};

const Anchor = ({
  size,
  lineHeight,
  weight,
  linkItem,
  isSelected,
  className,
  replace = false,
  as,
}: PropTypes) => {
  return (
    <Typography size={size} lineHeight={lineHeight} weight={weight} className={className} as={as}>
      <Link
        to={linkItem.to}
        key={linkItem.to}
        className={classNames({
          selected: isSelected,
        })}
        replace={replace}
      >
        {linkItem.content}
      </Link>
    </Typography>
  );
};

export default React.memo(Anchor);
