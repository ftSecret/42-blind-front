import React from 'react';
import CustomIcon from 'components/atoms/icons/CustomIcon';
import { CustomIconPropTypes } from 'components/atoms/icons/CustomIcon';

const CloseIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  return <CustomIcon iconName="close" {...props} />;
};

export default React.memo(CloseIcon);
