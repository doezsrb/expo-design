import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import BikeIcon from "@/assets/images/bikeicon.svg";
const NavButton = ({
  value,
  selected = false,
}: {
  value: number;
  selected?: boolean;
}) => {
  return (
    <LinearGradient
      colors={value == 4 ? ["#34C8E8", "#4E4AF2"] : ["#353F54", "#222834"]}
      style={{
        width: 40,
        height: 40,
        backgroundColor: "orange",
        borderRadius: 5,
        justifyContent: "center",
        shadowRadius: value * 6,

        alignItems: "center",
        transform: [{ skewY: "10deg" }],
      }}
    >
      <BikeIcon width={30} />
    </LinearGradient>
  );
};
const NavButtons = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        paddingHorizontal: 10,
        transform: [{ skewY: "-10deg" }],
      }}
    >
      {[4, 3, 2, 1, 0].map((v: any, index: number) => {
        return <NavButton value={v} key={index} selected />;
      })}
    </View>
  );
};

export default NavButtons;
