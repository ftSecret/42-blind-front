import React from 'react';
import CustomIcon from './CustomIcon';

const ChatIcon = ({ className }: { className?: string }) => {
  return <CustomIcon iconName="chat" className={className} />;
};

export default ChatIcon;
