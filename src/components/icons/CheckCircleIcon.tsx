import React from 'react';
import CustomIcon from 'components/icons/CustomIcon';
import { CustomIconPropTypes } from 'components/icons/CustomIcon';

const CheckCircleIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  return <CustomIcon iconName="check_circle_outline" {...props} />;
};

export default CheckCircleIcon;
