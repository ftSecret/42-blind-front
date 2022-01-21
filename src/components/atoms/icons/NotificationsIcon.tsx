import React from 'react';
import CustomIcon from 'components/atoms/icons/CustomIcon';
import { CustomIconPropTypes } from 'components/atoms/icons/CustomIcon';

const NotificationsIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  return <CustomIcon iconName="notifications_none" {...props} />;
};

export default NotificationsIcon;
