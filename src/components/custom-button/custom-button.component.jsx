import React from 'react';
import { CustomButtonContiner } from './custom-buttom.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContiner {...props}> {children}</CustomButtonContiner>
)

export default CustomButton;