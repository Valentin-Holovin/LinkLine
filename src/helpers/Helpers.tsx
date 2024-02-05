import { Platform } from "react-native";
import { Colors } from "../theme";

export const isIOS = Platform.OS === 'ios';

export const shadows = Platform.select({
    android: {
      shadowColor: Colors.black,
      elevation: 12,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 1
    },
    ios: {
      shadowColor: Colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
});