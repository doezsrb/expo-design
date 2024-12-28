import {
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

interface MenuDrawerProps {
  animStyle: any;
  close: Function;
}
const MenuDrawer = ({ animStyle, close }: MenuDrawerProps) => {
  const drawerMarginRight = useSharedValue(-Dimensions.get("window").width);

  return (
    <Animated.View
      style={[
        {
          zIndex: 999,
          width: "100%",
          height: "100%",
          right: 0,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "transparent",
          position: "absolute",
        },
        animStyle,
      ]}
    >
      <TouchableOpacity
        style={{
          height: "100%",
          flex: 1,
        }}
        onPress={() => {
          close();
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
          }}
        />
      </TouchableOpacity>

      <View
        style={[
          {
            height: "100%",
            position: "absolute",
            right: 0,
            width: 250,

            backgroundColor: "white",
          },
        ]}
      ></View>
    </Animated.View>
  );
};

export default MenuDrawer;
