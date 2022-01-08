import React from 'react';
import CustomIcon from 'components/atoms/icons/CustomIcon';
import { CustomIconPropTypes } from 'components/atoms/icons/CustomIcon';

const RightArrowIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  return <CustomIcon iconName="subdirectory_arrow_right" {...props} />;
};

export default RightArrowIcon;
