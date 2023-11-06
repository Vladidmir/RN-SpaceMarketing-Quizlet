import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles/colors';

export const s = StyleSheet.create({
  defaultButton: {
    padding: 16,
    borderColor: Colors.RED,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.RED,
  },
  transparentButton: {
    padding: 16,
    borderColor: Colors.RED,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  defaultButtonText: {
    color: Colors.WHITE,
    textAlign: 'center',
  },
  transparentButtonText: {
    color: Colors.RED,
    textAlign: 'center',
  },
});
