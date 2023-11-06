import {StyleSheet} from 'react-native';

import {Colors} from '../../styles/colors';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  questionInfo: {
    fontSize: 20,
    marginBottom: 10,
    color: Colors.BLACK,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginBottom: 20,
  },
});
