import React from 'react';
import CustomIcon, { CustomIconPropTypes } from './CustomIcon';

const ViewIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  return <CustomIcon iconName="visibility" {...props} />;
};

export default ViewIcon;
