import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BlurView } from "expo-blur";

interface ItemCardProps {
  selected: boolean;
  onSelected: Function;
}
const ItemCard = ({ selected, onSelected }: ItemCardProps) => {
  return (
    <View>
      <BlurView
        intensity={60}
        style={{
          transform: [{ skewY: "-10deg" }],
          borderRadius: 20,
          position: "absolute",
          top: 10,
          left: 0,
          bottom: 0,
          right: 0,
          shadowRadius: selected ? 10 : 0,
          zIndex: 1,
        }}
      ></BlurView>
      <LinearGradient
        colors={["rgba(53, 63, 84, 0.5)", "#222834"]}
        style={{
          cursor: "pointer",
          borderWidth: 2,
          borderTopColor: "rgba(255, 255, 255, 0.6)",
          borderLeftColor: "rgba(255, 255, 255, 0.4)",
          borderRightColor: "rgba(53, 63, 84, 1)",
          borderBottomColor: "rgba(53, 63, 84, 1)",
          marginTop: 10,
          height: 200,
          width: "100%",
          zIndex: 2,
          transform: [{ skewY: "-10deg" }],
          borderRadius: 20,

          backgroundColor: "transparent",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            onSelected();
          }}
        >
          <View
            style={{
              width: "100%",

              transform: [{ skewY: "10deg" }],
              zIndex: 2,
              paddingTop: 10,
              paddingHorizontal: 5,
              flex: 1,
              flexDirection: "column",
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                flex: 1,
              }}
            >
              <AntDesign name="hearto" size={20} color={"#34CAE8"} />
            </TouchableOpacity>
            <View
              style={{
                width: "100%",
                height: 90,
              }}
            >
              <Image
                style={{
                  height: 90,
                }}
                source={require("@/assets/images/bike.png")}
              />
            </View>

            <View
              style={{
                flex: 3,
                alignItems: "flex-start",
                zIndex: 3,
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 14,
                }}
              >
                Road Bike
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: "bold",
                  overflow: "hidden",
                }}
              >
                PEUGEOT - LR01
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 14,
                }}
              >
                $ 1,999.99
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ItemCard;
