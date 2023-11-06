import {ViewStyle, TextStyle} from 'react-native';

export interface ButtonProps {
  onPress: () => void;
  title: string;
  mode: 'transparent' | 'default';
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}
