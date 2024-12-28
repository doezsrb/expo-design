import { Text, TouchableHighlight } from "react-native";

const NonPressedDetailButton = ({
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
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "transparent",
        shadowColor: "grey",
        shadowRadius: 10,
      }}
    >
      <Text
        style={{
          fontSize: 17,
          color: "#3CA4EB",
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableHighlight>
  );
};

export default NonPressedDetailButton;
