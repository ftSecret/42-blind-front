import React from 'react';
import CustomIcon from 'components/icons/CustomIcon';
import { CustomIconPropTypes } from 'components/icons/CustomIcon';

const ArrowBackIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  return <CustomIcon iconName="arrow_back_ios_new" {...props} />;
};

export default ArrowBackIcon;
