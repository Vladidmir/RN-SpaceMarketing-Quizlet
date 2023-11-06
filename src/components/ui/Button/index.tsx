import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {s} from './button.styles';

import {ButtonProps} from './Button.props';

export const Button: FC<ButtonProps> = ({
  onPress,
  title,
  mode,
  buttonStyle,
  textStyle,
}) => {
  const buttonStyles =
    mode === 'transparent' ? s.transparentButton : s.defaultButton;
  const textStyles =
    mode === 'transparent' ? s.transparentButtonText : s.defaultButtonText;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyles, buttonStyle]}>
      <Text style={[textStyles, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
