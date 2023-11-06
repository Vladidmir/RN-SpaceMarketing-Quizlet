import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {CustomTabBarProps, CustomTabBarButtonProps} from './CustomTabBar.props';

import {s} from './customTabBar.styles';
const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={s.tabBarButton}>
    {children}
  </TouchableOpacity>
);

export const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => (
  <View style={s.tabBar}>
    {state.routes.map((route: any, index: number) => {
      const {options} = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <CustomTabBarButton key={route.key} onPress={onPress}>
          <Text
            style={{
              color: isFocused ? '#007AFF' : '#222',
              fontSize: 16,
              fontWeight: '500',
            }}>
            {label}
          </Text>
        </CustomTabBarButton>
      );
    })}
  </View>
);
