import { Platform } from "react-native";

export const isIOS = Platform.OS === 'ios';

export const shadows = Platform.select({
    android: {
      borderColor: 'transparent',
      shadowColor: '#000000',
      elevation: 13,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 1
    },
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
});