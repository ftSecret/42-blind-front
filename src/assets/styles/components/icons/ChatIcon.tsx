import React from 'react';
import CustomIcon from 'components/icons/CustomIcon';
import { CustomIconPropTypes } from 'components/icons/CustomIcon';

const ChatIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  return <CustomIcon iconName="chat" {...props} />;
};

export default ChatIcon;
