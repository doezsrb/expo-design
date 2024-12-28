import { View } from "react-native";

const Divider = ({ size }: { size: number }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "transparent",
        height: size,
      }}
    />
  );
};

export default Divider;
