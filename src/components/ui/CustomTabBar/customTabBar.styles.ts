import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 25,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
  },
});
