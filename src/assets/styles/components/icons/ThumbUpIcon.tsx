import React from 'react';
import CustomIcon from 'components/icons/CustomIcon';
import { CustomIconPropTypes } from 'components/icons/CustomIcon';

const ThumbUpIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  return <CustomIcon iconName="thumb_up" {...props} />;
};

export default ThumbUpIcon;
