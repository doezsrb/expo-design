import { Text, TouchableHighlight, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";
const PressedDetailButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress: Function;
}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        onPress();
      }}
    >
      <View>
        <InsetShadow
          containerStyle={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "transparent",
          }}
          bottom={false}
          right={false}
          shadowRadius={8}
        ></InsetShadow>
        <InsetShadow
          containerStyle={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "transparent",
          }}
          top={false}
          left={false}
          shadowColor={"gray"}
          shadowRadius={8}
        ></InsetShadow>
        <Text
          style={{
            fontSize: 17,
            color: "gray",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          Specification
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default PressedDetailButton;
