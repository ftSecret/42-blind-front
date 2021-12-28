import React from 'react';
import CustomIcon from 'components/icons/CustomIcon';
import { CustomIconPropTypes } from 'components/icons/CustomIcon';

const CreateIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  return <CustomIcon iconName="create" {...props} />;
};

export default CreateIcon;
