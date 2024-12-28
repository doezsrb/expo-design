import { View } from "react-native";
import PressedDetailButton from "./PressedDetailButton";
import NonPressedDetailButton from "./NonPressedDetailButton";
import { useState } from "react";

const BottomModalButtons = () => {
  const [selectedOption, setSelectedOption] = useState("description");
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 10,
      }}
    >
      {selectedOption == "description" ? (
        <PressedDetailButton
          text="Description"
          onPress={() => {
            setSelectedOption("description");
          }}
        />
      ) : (
        <NonPressedDetailButton
          text="Description"
          onPress={() => {
            setSelectedOption("description");
          }}
        />
      )}
      {selectedOption == "specification" ? (
        <PressedDetailButton
          text="Specification"
          onPress={() => {
            setSelectedOption("specification");
          }}
        />
      ) : (
        <NonPressedDetailButton
          text="Specification"
          onPress={() => {
            setSelectedOption("specification");
          }}
        />
      )}
    </View>
  );
};

export default BottomModalButtons;
