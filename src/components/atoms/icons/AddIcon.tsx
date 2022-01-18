import React from 'react';
import CustomIcon from 'components/atoms/icons/CustomIcon';
import { CustomIconPropTypes } from 'components/atoms/icons/CustomIcon';

const AddIcon = (props: Omit<CustomIconPropTypes, 'iconName'>) => {
  console.log('icon');
  return <CustomIcon iconName="add" {...props} />;
};

export default AddIcon;
